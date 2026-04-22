# Mi Blog - React + Markdown

Un blog minimalista y limpio hecho con React, Vite y Markdown puro en JavaScript. 

## 🎯 Características

- ✍️ **Markdown puro** - Escribe contenido en archivos `.md`
- ⚡ **Sin complejidad** - JavaScript vanilla, sin TypeScript
- 🚀 **Vite** - Build tool ultrarrápido
- 📦 **Minimalista** - 158 paquetes (muy ligero)
- 🎨 **CSS simple** - Estilos sin frameworks

## Stack Tecnológico

- **React 19** - Biblioteca de UI
- **Vite 8** - Build tool con HMR
- **JavaScript ES6+** - Sin tipado, simple y directo
- **markdown-it** - Renderizado de Markdown a HTML

## 📁 Estructura del Proyecto

```
portfolioCICD/
├── index.html              # Punto de entrada HTML
├── vite.config.js          # Configuración de Vite
├── package.json            # Dependencias y scripts
├── .gitignore              # Archivos ignorados en Git
├── public/
│   ├── favicon.svg
│   └── icons.svg
├── src/
│   ├── App.jsx             # Componente principal (carga markdown)
│   ├── main.jsx            # Punto de entrada React
│   ├── index.css           # Estilos globales
│   ├── assets/
│   │   └── posts/
│   │       ├── bienvenida.md      # Primer post (ejemplo)
│   │       └── react-hooks.md     # Segundo post (ejemplo)
│   └── utils/
│       └── markdown-loader.js     # Carga y renderiza markdown
└── README_BLOG.md          # Este archivo
```

## 🚀 Inicio Rápido

### Instalación
```bash
npm install
```

### Desarrollo
```bash
npm run dev
```
Abre [http://localhost:5173](http://localhost:5173) en tu navegador.

### Compilar para Producción
```bash
npm run build
```

## 📝 Cómo Funciona

1. **App.jsx** es el componente principal que se renderiza
2. **main.jsx** inicia React y monta App.jsx en el DOM
3. App.jsx llama a `loadMarkdown()` cuando carga
4. **markdown-loader.js** lee el archivo markdown y lo renderiza
5. El HTML renderizado se muestra en la página

### Flujo Visual
```
main.jsx 
  → App.jsx 
    → loadMarkdown() 
      → markdown-loader.js 
        → Lee bienvenida.md 
        → Renderiza HTML 
        → Muestra en pantalla
```

## 📄 Crear Nuevo Contenido

### 1. Crear archivo markdown
Crea un archivo en `src/assets/posts/mi-post.md`:

```markdown
---
title: "Mi Primer Post"
date: "2024-04-19"
tags: ["javascript", "react"]
excerpt: "Un resumen corto"
---

# Mi Primer Post

Aquí va tu contenido en **markdown**...

## Sección

- Bullet 1
- Bullet 2
```

### 2. Actualizar markdown-loader.js
Abre `src/utils/markdown-loader.js` e importa tu archivo:

```javascript
import miPostRaw from '../assets/posts/mi-post.md?raw';
```

**Nota**: El frontmatter YAML (entre `---`) se extrae automáticamente. Solo se renderiza el contenido markdown.

## ✨ Sintaxis Markdown Soportada

| Elemento | Ejemplo |
|----------|---------|
| **Encabezados** | `# H1`, `## H2`, `### H3` |
| **Énfasis** | `*itálica*`, `**negrita**` |
| **Listas** | `- item` o `1. item` |
| **Enlaces** | `[texto](https://url)` |
| **Imágenes** | `![alt](ruta/imagen.png)` |
| **Código** | `` `inline` `` o ` ``` ``` (bloque) |
| **Citas** | `> cita` |
| **Tablas** | Tablas markdown estándar |

## 🔧 Comandos NPM

```bash
npm run dev      # Inicia servidor de desarrollo
npm run build    # Compila para producción
npm run preview  # Vista previa del build
npm run lint     # Ejecuta linter
```

## 📦 Dependencias

Solo 3 dependencias principales:
- **markdown-it** - Convierte Markdown a HTML
- **react** - Framework UI
- **react-dom** - Renderizado en el navegador

Eso es todo. ¡Sin complejidad innecesaria!

## 🎓 Notas de Desarrollo

- **Sin TypeScript**: Usando JavaScript puro por simplicidad
- **Sin enrutamiento**: Es una página única (para agregar múltiples posts)
- **Sin CSS framework**: Estilos CSS vanilla en `index.css`
- **Sin base de datos**: Los posts son archivos markdown estáticos
- **Edición simple**: Solo edita archivos markdown y actualiza el loader

## 📚 Posts Incluidos

1. **bienvenida.md** - Introducción al blog (ejemplo)
2. **react-hooks.md** - Guía de React Hooks (ejemplo)

Úsalos como referencia para crear tus propios posts.

## 🚀 Próximas Mejoras (Opcional)

- [ ] Cargar posts automáticamente sin editar el loader
- [ ] Página de inicio con lista de posts
- [ ] Sistema de categorías/tags
- [ ] Búsqueda
- [ ] Modo oscuro
- [ ] Comentarios
- [ ] Feed RSS

## 🌐 Deploy

### Vercel (Recomendado)
```bash
npm install -g vercel
vercel
```

### Netlify
```bash
npm install -g netlify-cli
netlify deploy --prod --dir=dist
```

### GitHub Pages
1. `npm run build`
2. Sube carpeta `dist/` a GitHub
3. Configura en Settings → Pages

## 📝 Licencia

MIT - Libre para usar y modificar

---

**Disfruta escribiendo tu blog!** ✨

¿Preguntas o sugerencias? Revisa el código en `src/` - ¡es simple de entender!


