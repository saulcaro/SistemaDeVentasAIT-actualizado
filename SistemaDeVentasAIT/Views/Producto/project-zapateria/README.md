# Instrucciones para ejecutar ZapatosPRO localmente

Sigue estos pasos para configurar y ejecutar la aplicación en tu PC local:

## Paso 1: Crear un nuevo proyecto React con TypeScript

```bash
npx create-vite mi-zapateria --template react-ts
cd mi-zapateria
```

## Paso 2: Instalar dependencias

```bash
npm install lucide-react
npm install -D tailwindcss postcss autoprefixer
```

## Paso 3: Configurar Tailwind CSS

Inicializa Tailwind CSS:

```bash
npx tailwindcss init -p
```

## Paso 4: Actualizar los archivos de configuración

Actualiza `tailwind.config.js` para incluir las rutas de tus archivos:

```javascript
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [],
};
```

Actualiza `src/index.css` para incluir las directivas de Tailwind:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

## Paso 5: Copiar el código de App.tsx

Reemplaza el contenido de `src/App.tsx` con el código proporcionado.

## Paso 6: Iniciar el servidor de desarrollo

```bash
npm run dev
```

Ahora podrás acceder a la aplicación en tu navegador en: http://localhost:5173