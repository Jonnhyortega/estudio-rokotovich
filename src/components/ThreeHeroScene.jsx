"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function ThreeHeroScene() {
  const mountRef = useRef(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    // 1. Escena, Cámara y Renderer
    const width = container.clientWidth || window.innerWidth;
    const height = container.clientHeight || 600;

    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(55, width / height, 0.1, 1000);
    camera.position.set(0, 2, 12);
    camera.lookAt(0, -1, 0);

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: "high-performance",
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    container.appendChild(renderer.domElement);

    // 2. Creación de la Malla de Ondas 3D de Puntos Dorados (Golden Fluid Mesh)
    const rows = 65;
    const cols = 90;
    const numParticles = rows * cols;

    const positions = new Float32Array(numParticles * 3);
    const scales = new Float32Array(numParticles);
    const originalY = new Float32Array(numParticles);

    let index = 0;
    const sep = 0.28; // separación entre puntos

    for (let ix = 0; ix < cols; ix++) {
      for (let iy = 0; iy < rows; iy++) {
        const x = (ix - cols / 2) * sep;
        const z = (iy - rows / 2) * sep;
        const y = 0;

        positions[index * 3] = x;
        positions[index * 3 + 1] = y;
        positions[index * 3 + 2] = z;

        originalY[index] = y;
        scales[index] = 1;
        index++;
      }
    }

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute("scale", new THREE.BufferAttribute(scales, 1));

    // Material de Puntos con efecto Glow Dorado Suave
    const material = new THREE.PointsMaterial({
      color: 0xe6c35c, // Dorado de lujo
      size: 0.095,
      transparent: true,
      opacity: 0.45,
      blending: THREE.AdditiveBlending,
    });

    const particlesMesh = new THREE.Points(geometry, material);
    particlesMesh.rotation.x = 0.4; // Inclinación suave
    particlesMesh.position.y = -2.4;
    scene.add(particlesMesh);

    // 3. Red de Líneas Conectoras Estilo Constelación (Lines Mesh)
    const lineGeo = new THREE.PlaneGeometry(cols * sep, rows * sep, 35, 25);
    lineGeo.rotateX(-Math.PI / 2.3);
    lineGeo.translate(0, -1.8, 0);

    const lineMat = new THREE.MeshBasicMaterial({
      color: 0xd4af37,
      wireframe: true,
      transparent: true,
      opacity: 0.08,
    });

    const lineMesh = new THREE.Mesh(lineGeo, lineMat);
    scene.add(lineMesh);

    // 4. Luces Ambientales Doradas
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    const pointLight = new THREE.PointLight(0xf5d061, 3, 20);
    pointLight.position.set(0, 3, 5);
    scene.add(pointLight);

    // 5. Interacción con Mouse (Ondas dinámicas al mover el puntero)
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const handleMouseMove = (e) => {
      const rect = container.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      mouseX = (x / rect.width - 0.5) * 2;
      mouseY = (y / rect.height - 0.5) * 2;
    };

    window.addEventListener("mousemove", handleMouseMove);

    // 6. Bucle de Animación 60 FPS
    let count = 0;
    let animationFrameId;

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      count += 0.03;

      // Suavizado de mouse (lerp)
      targetX += (mouseX - targetX) * 0.05;
      targetY += (mouseY - targetY) * 0.05;

      // Actualizar ondas de las partículas
      const positionAttr = geometry.attributes.position;
      const posArray = positionAttr.array;

      let i = 0;
      for (let ix = 0; ix < cols; ix++) {
        for (let iy = 0; iy < rows; iy++) {
          // Fórmula matemática de ondas senoidales cruzadas + distorsión interactiva por mouse
          const wave1 = Math.sin((ix + count) * 0.3) * 0.4;
          const wave2 = Math.cos((iy + count) * 0.5) * 0.3;
          const distToMouse = Math.sqrt(
            Math.pow(ix - cols / 2 - targetX * 25, 2) +
            Math.pow(iy - rows / 2 + targetY * 20, 2)
          );
          const mouseEffect = Math.max(0, 1 - distToMouse / 15) * 0.8;

          posArray[i * 3 + 1] = wave1 + wave2 + Math.sin(distToMouse * 0.3 - count * 2) * mouseEffect;
          i++;
        }
      }

      positionAttr.needsUpdate = true;

      // Mover suavemente la malla completa según mouse
      particlesMesh.rotation.y = count * 0.05 + targetX * 0.15;
      particlesMesh.rotation.z = targetY * 0.1;

      lineMesh.rotation.y = count * 0.03 + targetX * 0.1;

      pointLight.position.x = targetX * 8;
      pointLight.position.y = -targetY * 5 + 3;

      renderer.render(scene, camera);
    };

    animate();

    // 7. Resize Responsivo
    const handleResize = () => {
      if (!container) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
      geometry.dispose();
      lineGeo.dispose();
      material.dispose();
      lineMat.dispose();
    };
  }, []);

  return (
    <div
      ref={mountRef}
      className="absolute inset-0 w-full h-full pointer-events-auto z-0"
    />
  );
}
