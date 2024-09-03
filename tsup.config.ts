import { defineConfig } from "tsup";

export default defineConfig({
  clean: true, // Limpia el directorio de salida antes de compilar
  dts: true, // Genera archivos .d.ts
  entry: ["src/index.ts"], // Archivo de entrada principal
  format: ["esm", "cjs"], // Genera archivos .mjs y .cjs
  sourcemap: true, // Genera archivos .map.json
  minify: false, // Desactiva la minificación
  outDir: "lib", // Directorio de salida
  splitting: false, // Desactiva el código dividido (opcional)
  target: 'es2020', // Establece el objetivo de compilación a ES2020
  cjsInterop: true, // Habilita la interoperabilidad entre CommonJS y ES modules,

});
