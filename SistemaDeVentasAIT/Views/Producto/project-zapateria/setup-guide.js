/**
 * Script para configurar automáticamente el proyecto ZapatosPRO
 * 
 * Este script crea un nuevo proyecto React con TypeScript,
 * instala las dependencias necesarias y configura los archivos
 * para que puedas ejecutar la aplicación localmente.
 * 
 * Instrucciones:
 * 1. Guarda este archivo como setup-guide.js
 * 2. Ejecuta: node setup-guide.js
 */

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

// Colores para la consola
const colors = {
  reset: '\x1b[0m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  magenta: '\x1b[35m',
  cyan: '\x1b[36m',
};

console.log(`${colors.cyan}=== Configuración de ZapatosPRO ====${colors.reset}\n`);

// Crear directorio del proyecto
const projectName = 'zapatospro';
const projectPath = path.join(process.cwd(), projectName);

try {
  // Paso 1: Crear proyecto con Vite
  console.log(`${colors.yellow}Paso 1: Creando un nuevo proyecto React con TypeScript...${colors.reset}`);
  execSync(`npx create-vite ${projectName} --template react-ts`, { stdio: 'inherit' });
  
  // Cambiar al directorio del proyecto
  process.chdir(projectPath);
  
  // Paso 2: Instalar dependencias
  console.log(`\n${colors.yellow}Paso 2: Instalando dependencias...${colors.reset}`);
  execSync('npm install lucide-react', { stdio: 'inherit' });
  execSync('npm install -D tailwindcss postcss autoprefixer', { stdio: 'inherit' });
  
  // Paso 3: Configurar Tailwind CSS
  console.log(`\n${colors.yellow}Paso 3: Configurando Tailwind CSS...${colors.reset}`);
  execSync('npx tailwindcss init -p', { stdio: 'inherit' });
  
  // Paso 4: Actualizar archivos de configuración
  console.log(`\n${colors.yellow}Paso 4: Actualizando archivos de configuración...${colors.reset}`);
  
  // Actualizar tailwind.config.js
  const tailwindConfig = `/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [],
};
`;
  fs.writeFileSync(path.join(projectPath, 'tailwind.config.js'), tailwindConfig);
  console.log(`${colors.green}✓ tailwind.config.js actualizado${colors.reset}`);
  
  // Actualizar src/index.css
  const indexCss = `@tailwind base;
@tailwind components;
@tailwind utilities;
`;
  fs.writeFileSync(path.join(projectPath, 'src', 'index.css'), indexCss);
  console.log(`${colors.green}✓ src/index.css actualizado${colors.reset}`);
  
  console.log(`\n${colors.yellow}Paso 5: Ahora necesitas copiar el código de App.tsx manualmente${colors.reset}`);
  console.log(`\n${colors.green}¡Configuración completada!${colors.reset}`);
  console.log(`\nPara iniciar la aplicación, ejecuta:`);
  console.log(`${colors.cyan}cd ${projectName}${colors.reset}`);
  console.log(`${colors.cyan}npm run dev${colors.reset}`);
  
} catch (error) {
  console.error('Error durante la configuración:', error);
}