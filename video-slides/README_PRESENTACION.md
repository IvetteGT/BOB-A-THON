# 🎯 Presentación Web Interactiva - Directorio de Talentos

## 📁 Archivos Creados

```
video-slides/
├── presentacion.html          ← Archivo principal (ABRIR ESTE)
├── presentacion.css           ← Estilos profesionales
├── presentacion.js            ← Funcionalidad interactiva
└── README_PRESENTACION.md     ← Este archivo
```

---

## 🚀 Cómo Usar

### Opción 1: Abrir Directamente (Recomendado)
1. Haz doble clic en `presentacion.html`
2. Se abrirá en tu navegador predeterminado
3. ¡Listo para presentar!

### Opción 2: Servidor Local (Para desarrollo)
```bash
# Si tienes Python instalado:
cd video-slides
python -m http.server 8000

# Luego abre: http://localhost:8000/presentacion.html
```

### Opción 3: Live Server (VS Code)
1. Instala extensión "Live Server" en VS Code
2. Click derecho en `presentacion.html`
3. Selecciona "Open with Live Server"

---

## ⌨️ Controles de Navegación

### Teclado
- **→ / Espacio / PageDown** - Siguiente slide
- **← / PageUp** - Slide anterior
- **Home** - Primer slide
- **End** - Último slide
- **F** - Pantalla completa
- **ESC** - Salir de pantalla completa
- **1-9** - Ir a slide específico (1-9)

### Mouse
- **Click en botones** - Navegar adelante/atrás
- **Scroll del mouse** - Navegar slides

### Táctil (Móvil/Tablet)
- **Swipe izquierda** - Siguiente slide
- **Swipe derecha** - Slide anterior
- **Tap en botones** - Navegar

---

## 📊 Estructura de la Presentación

### 17 Slides - 5 Minutos Total

| # | Slide | Duración | Tiempo |
|---|-------|----------|--------|
| 1 | Portada | 15s | 0:00-0:15 |
| 2 | Problema - Estadística | 15s | 0:15-0:30 |
| 3 | Problema - Talentos Ocultos | 15s | 0:30-0:45 |
| 4 | Problema - Intermediarios | 15s | 0:45-1:00 |
| 5 | Pregunta Central | 15s | 1:00-1:15 |
| 6 | Solución - Concepto | 20s | 1:15-1:35 |
| 7 | Características | 20s | 1:35-1:55 |
| 8 | Tecnología | 20s | 1:55-2:15 |
| 9 | Transición Demo | 3s | 2:15-2:18 |
| 10 | Nota Demo | 120s | 2:18-4:18 |
| 11-13 | (Demo en vivo) | - | - |
| 14 | Impacto Económico | 15s | 4:18-4:33 |
| 15 | Impacto Social | 10s | 4:33-4:43 |
| 16 | Escalabilidad | 10s | 4:43-4:53 |
| 17 | Cierre | 7s | 4:53-5:00 |

---

## 🎨 Características

### ✅ Diseño Profesional
- Colores exactos según especificaciones
- Tipografía Inter (sistema fallback)
- Animaciones suaves
- Responsive (funciona en cualquier dispositivo)

### ✅ Navegación Intuitiva
- Controles visuales en pantalla
- Barra de progreso
- Contador de slides
- Atajos de teclado
- Soporte táctil

### ✅ Funcionalidades Avanzadas
- Modo pantalla completa
- Auto-play opcional
- Prevención de cierre accidental
- Exportar a PDF (Ctrl+P)
- Consola de debugging

---

## 🎥 Para Grabar Video

### Preparación
1. Abre `presentacion.html` en navegador
2. Presiona **F** para pantalla completa
3. Ajusta zoom del navegador si es necesario (Ctrl + +/-)
4. Ten el script abierto en otro monitor o impreso

### Durante la Grabación
1. Usa **→** o **Espacio** para avanzar
2. Mantén ritmo constante según timing
3. En slide 10, cambia a la aplicación para demo
4. Vuelve a la presentación para slides finales

### Tips
- Practica la navegación 2-3 veces antes
- Usa OBS Studio o Loom para grabar
- Graba en 1920x1080 (Full HD)
- Asegúrate de que el audio esté claro

---

## 🛠️ Personalización

### Cambiar Tu Nombre
Edita `presentacion.html`, línea 18:
```html
<p>Por: [Tu Nombre]</p>
```

### Cambiar Contacto
Edita `presentacion.html`, línea 203-204:
```html
<p>[tu-email@ejemplo.com]</p>
<p>github.com/tu-usuario/directorio-talentos</p>
```

### Cambiar Colores
Edita `presentacion.css`, busca los colores específicos:
```css
/* Ejemplo: cambiar azul principal */
#2563eb → tu-color-hex
```

### Agregar Imagen de Fondo (Slide 3)
1. Guarda tu imagen como `community.jpg` en la carpeta
2. Edita `presentacion.css`, línea ~90:
```css
background: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),
            url('community.jpg');
```

---

## 💻 Comandos de Consola

Abre la consola del navegador (F12) y usa:

```javascript
// Ir a slide específico
presentation.goToSlide(5);

// Información del slide actual
presentation.getCurrentSlideInfo();

// Iniciar auto-play (5 segundos por slide)
autoPlay.start();

// Detener auto-play
autoPlay.stop();

// Imprimir/Exportar PDF
presentation.print();
```

---

## 📱 Compatibilidad

### Navegadores Soportados
- ✅ Chrome/Edge (Recomendado)
- ✅ Firefox
- ✅ Safari
- ✅ Opera
- ⚠️ Internet Explorer (no recomendado)

### Dispositivos
- ✅ Desktop (Windows, Mac, Linux)
- ✅ Tablet (iPad, Android)
- ✅ Móvil (iOS, Android)

---

## 🎯 Casos de Uso

### 1. Presentación en Vivo
- Conecta laptop a proyector
- Modo pantalla completa (F)
- Navega con teclado o control remoto

### 2. Grabación de Video
- Graba pantalla con OBS/Loom
- Narra mientras avanzas slides
- Edita después si es necesario

### 3. Compartir Online
- Sube a GitHub Pages
- Comparte link directo
- Funciona sin instalación

### 4. Exportar PDF
- Ctrl+P o Cmd+P
- Selecciona "Guardar como PDF"
- Todos los slides en un archivo

---

## 🐛 Solución de Problemas

### Los slides no se ven
- ✅ Verifica que los 3 archivos estén en la misma carpeta
- ✅ Abre `presentacion.html` (no los otros archivos)
- ✅ Usa un navegador moderno

### La navegación no funciona
- ✅ Abre consola (F12) y busca errores
- ✅ Recarga la página (Ctrl+R)
- ✅ Verifica que JavaScript esté habilitado

### Los colores se ven diferentes
- ✅ Usa Chrome/Edge para mejor compatibilidad
- ✅ Verifica calibración de monitor
- ✅ Desactiva extensiones de tema oscuro

### El texto es muy pequeño/grande
- ✅ Ajusta zoom del navegador (Ctrl + +/-)
- ✅ Edita tamaños de fuente en CSS
- ✅ Usa pantalla completa (F)

---

## 📚 Archivos de Referencia

Para crear el contenido de la presentación, consulta:

- `SCRIPT_COMPLETO_NARRACION.md` - Guion palabra por palabra
- `TODOS_LOS_SLIDES.md` - Diseños originales
- `PLAN_ACCION_HOY.md` - Plan de grabación
- `GUIA_VIDEO_PRESENTACION.md` - Guía completa

---

## 🚀 Próximos Pasos

1. **Personaliza** tu nombre y contacto
2. **Practica** la navegación 2-3 veces
3. **Graba** tu video siguiendo el script
4. **Comparte** tu presentación

---

## 💡 Tips Profesionales

### Para Mejor Presentación
- ✅ Practica el timing con cronómetro
- ✅ Memoriza los atajos de teclado
- ✅ Ten agua cerca durante grabación
- ✅ Sonríe mientras presentas (se nota en la voz)

### Para Mejor Video
- ✅ Graba en lugar silencioso
- ✅ Usa micrófono de calidad
- ✅ Iluminación adecuada
- ✅ Pantalla limpia y sin distracciones

### Para Mejor Impacto
- ✅ Mantén contacto visual (si apareces en cámara)
- ✅ Varía el tono de voz
- ✅ Pausas estratégicas para énfasis
- ✅ Energía positiva pero no exagerada

---

## 📞 Soporte

Si tienes problemas o preguntas:

1. Revisa la sección "Solución de Problemas"
2. Abre consola del navegador (F12) para ver errores
3. Verifica que todos los archivos estén presentes
4. Consulta los archivos de documentación

---

## 🎉 ¡Listo para Presentar!

Tu presentación web interactiva está lista. Solo necesitas:

1. ✅ Abrir `presentacion.html`
2. ✅ Presionar F para pantalla completa
3. ✅ Usar → para avanzar
4. ✅ ¡Impresionar a la audiencia!

**¡Mucha suerte con tu presentación del BOB-A-THON 2026! 🚀**

---

*Creado con ❤️ para el proyecto Directorio de Talentos*