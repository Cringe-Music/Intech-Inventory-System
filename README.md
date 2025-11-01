# 🏢 IIS - Intech Inventory System

![IIS Banner](IMG/IIS.png)

**Sistema de Gestión de Inventario Tecnológico** - Plataforma web moderna para el control y eficiencia en la gestión de activos tecnológicos empresariales.

[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/es/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/es/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/es/docs/Web/JavaScript)
[![Google Apps Script](https://img.shields.io/badge/Google%20Apps%20Script-4285F4?style=for-the-badge&logo=google&logoColor=white)](https://developers.google.com/apps-script)

---

## 📋 Tabla de Contenidos

- [Descripción](#-descripción)
- [Características](#-características)
- [Tecnologías](#️-tecnologías-utilizadas)
- [Estructura del Proyecto](#-estructura-del-proyecto)
- [Instalación](#-instalación)
- [Uso](#-uso)
- [Proceso BPMN](#-proceso-bpmn)
- [Capturas de Pantalla](#-capturas-de-pantalla)
- [Optimizaciones](#-optimizaciones)
- [Contribución](#-contribución)
- [Licencia](#-licencia)
- [Contacto](#-contacto)

---

## 📖 Descripción

**Intech Inventory System (IIS)** es una solución integral para la gestión de activos tecnológicos empresariales. Simplifica el seguimiento, mantenimiento y ciclo de vida de equipos mediante una plataforma centralizada, intuitiva y accesible desde cualquier dispositivo.

### 🎯 Objetivo del Proyecto

Optimizar la gestión de inventarios tecnológicos mediante:
- ✅ Registro instantáneo de activos
- ✅ Validación automática de datos en tiempo real
- ✅ Integración con Google Sheets para almacenamiento
- ✅ Generación automática de reportes
- ✅ Notificaciones y confirmaciones al usuario

---

## ✨ Características

### 🚀 Funcionalidades Principales

| Característica | Descripción |
|----------------|-------------|
| **Registro Instantáneo** | Ingrese datos de activos en segundos con validación en tiempo real |
| **Validación Automática** | Detección de errores antes de enviar el formulario |
| **Almacenamiento en la Nube** | Integración directa con Google Sheets |
| **Reportes Dinámicos** | Generación automática de informes personalizados |
| **Sincronización Automática** | Datos siempre actualizados en tiempo real |
| **Responsive Design** | Funciona perfectamente en desktop, tablet y móvil |

### 🎨 Diseño y UX

- **Diseño Moderno**: Paleta de colores profesional (azul #2563EB, cian #0891B2)
- **Accesibilidad WCAG 2.1 AA**: Navegación por teclado, ARIA labels, contraste optimizado
- **Animaciones Suaves**: Transiciones CSS y efectos visuales profesionales
- **Sin Scroll Excesivo**: Layout optimizado para visualización completa

### 🔒 Seguridad

- Validación de datos tanto en frontend como backend
- Protección contra XSS mediante sanitización de inputs
- Integración segura con Google Apps Script
- Formularios con validación HTML5 nativa

---

## 🛠️ Tecnologías Utilizadas

### Frontend

- **HTML5**: Estructura semántica con etiquetas ARIA
- **CSS3**: 
  - Variables CSS (Custom Properties)
  - Grid y Flexbox
  - Animaciones y transiciones
  - Diseño responsive mobile-first
- **JavaScript (ES6+)**:
  - Validación de formularios en tiempo real
  - Manipulación del DOM
  - Event handling
  - Contador de caracteres dinámico

### Backend / Servicios

- **Google Apps Script**: Procesamiento de formularios
- **Google Sheets**: Base de datos para almacenamiento de activos

### Herramientas de Desarrollo

- Visual Studio Code
- Git/GitHub
- Chrome DevTools
- Lighthouse (Auditoría de performance)

---

## 📁 Estructura del Proyecto

```
IIS-Intech-Inventory-System/
│
├── index_1.html              # Página principal (Inicio)
├── proceso_1.html            # Página de proceso BPMN
├── demo_1.html               # Página de demostración en video
├── contacto_1.html           # Página de contacto con formulario
│
├── CSS/
│   └── styles.css            # Hoja de estilos principal (Versión 7.0)
│
├── Js/
│   └── main.js               # JavaScript principal (validación, contador)
│
├── IMG/
│   ├── IIS.png               # Logo/Banner del proyecto
│   ├── Hero-IIS.jpg          # Imagen hero de la página principal
│   └── BPMN.png              # Diagrama de flujo BPMN
│
├── VIDEO/
│   ├── demo.mp4              # Video demostrativo del sistema
│   └── demo-captions-es.vtt  # Subtítulos en español
│
└── README.md                 # Este archivo
```

---

## 🚀 Instalación

### Requisitos Previos

- Navegador web moderno (Chrome 90+, Firefox 88+, Safari 14+, Edge 90+)
- Editor de código (recomendado: VS Code)
- Git (opcional, para clonar el repositorio)

### Pasos de Instalación

1. **Clonar el repositorio**
   ```bash
   git clone https://github.com/tu-usuario/IIS-Intech-Inventory-System.git
   cd IIS-Intech-Inventory-System
   ```

2. **Abrir el proyecto**
   ```bash
   code .
   ```

3. **Ejecutar localmente**
   
   **Opción A: Con Live Server (VS Code)**
   - Instalar extensión "Live Server"
   - Click derecho en `index_1.html` → "Open with Live Server"

   **Opción B: Con Python**
   ```bash
   # Python 3
   python -m http.server 8000
   
   # Abrir en navegador: http://localhost:8000
   ```

   **Opción C: Abrir directamente**
   - Doble click en `index_1.html`

---

## 💻 Uso

### Navegación

1. **Inicio** (`index_1.html`): Página principal con hero y CTA
2. **Proceso** (`proceso_1.html`): Diagrama BPMN y fases del sistema
3. **Demo** (`demo_1.html`): Video demostrativo del formulario
4. **Contacto** (`contacto_1.html`): Formulario de contacto funcional

### Formulario de Contacto

El formulario incluye:
- **Validación en tiempo real**: Errores mostrados inmediatamente
- **Contador de caracteres**: Límite de 500 caracteres en mensaje
- **Campos requeridos**: Nombre, email, asunto, mensaje
- **Checkbox de privacidad**: Aceptación de términos obligatoria

**Ejemplo de uso:**
```javascript
// El formulario envía datos a Google Apps Script
// URL configurada en contacto_1.html línea 117
const SCRIPT_URL = 'https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec';
```

---

## 🔄 Proceso BPMN

El sistema sigue un flujo de 4 fases optimizado:

```
┌─────────────┐    ┌─────────────┐    ┌─────────────┐    ┌─────────────┐
│   SOLICITUD │ -> │  EVALUACIÓN │ -> │ APROBACIÓN  │ -> │ DEVOLUCIÓN  │
│   (Fase 1)  │    │   (Fase 2)  │    │  (Fase 3)   │    │  (Fase 4)   │
└─────────────┘    └─────────────┘    └─────────────┘    └─────────────┘
```

### Fases del Proceso

1. **Solicitud**: Usuario solicita activo → Registro en sistema
2. **Evaluación**: Validación técnica → Verificación de disponibilidad
3. **Aprobación**: Autorización gerencial → Asignación de activo
4. **Devolución**: Recepción de activo → Actualización de inventario

---

## ⚡ Optimizaciones

### Performance

- **CSS Optimizado**: Variables CSS para reutilización
- **Imágenes Optimizadas**: 
  - Imagen BPMN: `max-height: 400px` para evitar scroll excesivo
  - Hero image: `aspect-ratio: 4/3` con `object-fit: cover`
- **Lazy Loading**: Animaciones con `fadeInUp` solo al aparecer en viewport
- **Sin JavaScript pesado**: Vanilla JS sin dependencias externas

### Accesibilidad

- ✅ Semántica HTML5 (`<header>`, `<nav>`, `<main>`, `<footer>`)
- ✅ ARIA labels y roles (`role="banner"`, `aria-labelledby`)
- ✅ Navegación por teclado funcional
- ✅ Contraste de colores WCAG AA
- ✅ Formularios accesibles con labels explícitos

### SEO

- Meta tags optimizados (`description`, `keywords`)
- Títulos jerárquicos correctos (H1 → H6)
- URLs semánticas y descriptivas
- Schema markup (potencial mejora futura)

---

## 🤝 Contribución

Las contribuciones son bienvenidas. Para contribuir:

1. **Fork** el proyecto
2. Crea una **rama** para tu feature (`git checkout -b feature/AmazingFeature`)
3. **Commit** tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. **Push** a la rama (`git push origin feature/AmazingFeature`)
5. Abre un **Pull Request**

### Guía de Estilo

- Usar **HTML5 semántico**
- **CSS**: Variables CSS para colores y espaciados
- **JavaScript**: ES6+ (const/let, arrow functions, template literals)
- **Comentarios**: Documentar código complejo
- **Commits**: Mensajes descriptivos en inglés

---

## 📜 Licencia

Este proyecto está bajo la Licencia MIT. Ver archivo `LICENSE` para más detalles.

```
MIT License

Copyright (c) 2025 Intech Consulting

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.
```

---

## 📞 Contacto

**Intech Consulting**

- 📧 Email: contacto@intechconsulting.com
- 🌐 Website: [intechconsulting.com](https://intechconsulting.com)
- 📱 WhatsApp: +51 999-123-4567
- 💼 LinkedIn: [linkedin.com/company/intech-consulting](https://linkedin.com/company/intech-consulting)

---

## 🙏 Agradecimientos

- **Iconografía**: [Tabler Icons](https://tabler-icons.io/)
- **Fuentes**: System fonts (San Francisco, Segoe UI, Roboto)
- **Inspiración de diseño**: Modern SaaS platforms
- **Herramientas**: VS Code, Chrome DevTools, Git

---

## 🔮 Roadmap

### Versión 1.1 (Próxima)
- [ ] Dashboard de administración
- [ ] Autenticación de usuarios
- [ ] Exportación de reportes a PDF
- [ ] Modo oscuro (dark mode)

### Versión 2.0 (Futuro)
- [ ] PWA (Progressive Web App)
- [ ] Notificaciones push
- [ ] Integración con APIs de inventario
- [ ] Panel de analytics

---

## 📊 Estadísticas del Proyecto

- **Líneas de código CSS**: ~2,500
- **Líneas de código JavaScript**: ~150
- **Páginas HTML**: 4
- **Peso total**: < 2MB
- **Tiempo de carga**: < 1.5s (3G)
- **Performance Score (Lighthouse)**: 95+

---

## 🐛 Reportar Bugs

Si encuentras un bug, por favor abre un [issue](https://github.com/tu-usuario/IIS-Intech-Inventory-System/issues) con:

- Descripción del bug
- Pasos para reproducirlo
- Comportamiento esperado vs. comportamiento actual
- Capturas de pantalla (si aplica)
- Navegador y versión

---

<div align="center">

**Hecho con ❤️ por Intech Consulting**

⭐ Si este proyecto te fue útil, considera darle una estrella en GitHub

[⬆ Volver arriba](#-iis---intech-inventory-system)

</div>