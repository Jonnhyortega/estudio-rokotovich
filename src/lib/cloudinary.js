// Loader de next/image para Cloudinary: pide a Cloudinary el ancho justo y el formato
// más liviano que soporte el navegador (AVIF/WebP), sin pasar por el optimizador de Next.
export default function cloudinaryLoader({ src, width, quality }) {
  const params = ["f_auto", `q_${quality || "auto"}`, `w_${width}`, "c_limit"].join(",");
  return src.replace("/image/upload/", `/image/upload/${params}/`);
}
