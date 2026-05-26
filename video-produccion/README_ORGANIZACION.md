# 🎬 Guía de Organización - Producción de Video

## 📁 Estructura de Carpetas Creada

```
video-produccion/
├── slides/              ← Exporta aquí tus slides desde Canva (PNG)
├── grabaciones/         ← Guarda aquí tus grabaciones de pantalla
├── audio/              ← Guarda aquí tus narraciones de audio
└── proyecto-final/     ← Proyecto de edición y video final
```

---

## 🎨 Paso 1: Exportar Slides desde Canva

### Slides que necesitas crear (14 slides):

1. **01-portada.png** - Título del proyecto + tu nombre
2. **02-problema-estadistica.png** - "60% sin referencias confiables"
3. **03-talentos-ocultos.png** - Millones de talentos invisibles
4. **04-intermediarios.png** - Plataformas cobran 20-30%
5. **05-pregunta.png** - "¿A quién llamas cuando necesitas...?"
6. **06-concepto.png** - Directorio de Talentos - Solución
7. **07-caracteristicas.png** - Búsqueda, calificaciones, contacto directo
8. **08-tecnologia.png** - HTML, CSS, JS + Supabase
9. **09-transicion-demo.png** - "Veamos cómo funciona"
10. **10-nota-demo.png** - Nota sobre demo en vivo (2 minutos)
11. **14-impacto-economico.png** - 0% comisión, ahorro $50-100
12. **15-impacto-social.png** - Conexión vecinal, confianza
13. **16-escalabilidad.png** - De 100 a 100,000 usuarios
14. **17-cierre.png** - Contacto + llamado a la acción

### Cómo exportar desde Canva:
1. Abre tu presentación en Canva
2. Click en "Compartir" → "Descargar"
3. Formato: **PNG**
4. Calidad: **Alta calidad**
5. Páginas: Selecciona todas
6. Descarga y guarda en `video-produccion/slides/`
7. Renombra los archivos según la lista de arriba

---

## 🎤 Paso 2: Grabar Audio (Narración)

### Herramientas recomendadas:
- **Audacity** (gratis) - https://www.audacityteam.org/
- **OBS Studio** (gratis) - https://obsproject.com/
- Micrófono de tu laptop/PC o externo

### Script de narración:
Consulta: `../video-slides/SCRIPT_COMPLETO_NARRACION.md`

### Proceso de grabación:
1. Abre Audacity
2. Configura tu micrófono
3. Haz una prueba de 10 segundos
4. Graba el script completo (5 minutos)
5. Edita: elimina pausas largas, ruidos
6. Exporta como: `narracion-completa.mp3`
7. Guarda en `video-produccion/audio/`

### Tips para mejor audio:
- ✅ Graba en lugar silencioso
- ✅ Habla claro y con energía
- ✅ Mantén distancia constante del micrófono
- ✅ Haz pausas naturales entre secciones
- ✅ Si te equivocas, pausa y repite la frase

---

## 🖥️ Paso 3: Grabar Demo de la Aplicación

### Qué grabar (2 minutos):
1. **Página principal** (15s)
   - Muestra los 6 perfiles
   - Scroll suave por la lista

2. **Búsqueda** (20s)
   - Escribe "plomería" en buscador
   - Muestra cómo se filtran resultados
   - Click en chip "Electricidad"

3. **Perfil completo** (30s)
   - Abre perfil de Juan Pérez
   - Muestra calificaciones (5 estrellas)
   - Scroll por comentarios
   - Muestra datos de contacto

4. **Crear perfil** (45s)
   - Click en "Mi Perfil"
   - Llena formulario en vivo:
     * Nombre: "María Rodríguez"
     * Habilidad: "Diseño Gráfico"
     * Descripción: "10 años de experiencia..."
     * Teléfono: "555-1234"
     * Email: "maria@email.com"
     * Barrio: "Miraflores"
   - Click "Guardar Perfil"
   - Vuelve a inicio y muestra nuevo perfil

5. **Calificar** (10s)
   - Abre un perfil
   - Da 5 estrellas
   - Escribe comentario breve
   - Guarda calificación

### Herramientas para grabar pantalla:
- **OBS Studio** (gratis, profesional)
- **Loom** (gratis, fácil)
- **Windows Game Bar** (Win+G, incluido en Windows)

### Configuración OBS:
1. Fuente: Captura de pantalla
2. Resolución: 1920x1080 (Full HD)
3. FPS: 30
4. Formato: MP4
5. Guarda en `video-produccion/grabaciones/demo-app.mp4`

### Tips para mejor demo:
- ✅ Cierra pestañas innecesarias
- ✅ Oculta barra de marcadores
- ✅ Aumenta zoom del navegador (Ctrl + +)
- ✅ Movimientos de mouse suaves
- ✅ No vayas muy rápido
- ✅ Practica 2-3 veces antes de grabar

---

## 🎬 Paso 4: Editar Video Final

### Software de edición recomendado:
- **DaVinci Resolve** (gratis, profesional)
- **Shotcut** (gratis, simple)
- **CapCut** (gratis, fácil)
- **Adobe Premiere** (pago, profesional)

### Estructura del video (5 minutos):

| Tiempo | Contenido | Archivo |
|--------|-----------|---------|
| 0:00-0:15 | Portada | 01-portada.png |
| 0:15-0:30 | Problema - Estadística | 02-problema-estadistica.png |
| 0:30-0:45 | Talentos Ocultos | 03-talentos-ocultos.png |
| 0:45-1:00 | Intermediarios | 04-intermediarios.png |
| 1:00-1:15 | Pregunta Central | 05-pregunta.png |
| 1:15-1:35 | Concepto Solución | 06-concepto.png |
| 1:35-1:55 | Características | 07-caracteristicas.png |
| 1:55-2:15 | Tecnología | 08-tecnologia.png |
| 2:15-2:18 | Transición Demo | 09-transicion-demo.png |
| 2:18-4:18 | DEMO EN VIVO | demo-app.mp4 |
| 4:18-4:33 | Impacto Económico | 14-impacto-economico.png |
| 4:33-4:43 | Impacto Social | 15-impacto-social.png |
| 4:43-4:53 | Escalabilidad | 16-escalabilidad.png |
| 4:53-5:00 | Cierre | 17-cierre.png |

### Proceso de edición:

1. **Importar archivos**
   - Todos los 14 slides PNG
   - Demo de la app (MP4)
   - Audio de narración (MP3)

2. **Timeline principal**
   - Arrastra audio de narración a pista de audio
   - Sincroniza slides con audio según timing
   - Inserta demo en el minuto 2:18

3. **Transiciones**
   - Entre slides: Fade (0.3 segundos)
   - Entrada demo: Fade (0.5 segundos)
   - Salida demo: Fade (0.5 segundos)

4. **Efectos opcionales**
   - Zoom suave en slides importantes
   - Resaltar cursor durante demo
   - Música de fondo suave (opcional)

5. **Exportar**
   - Formato: MP4
   - Resolución: 1920x1080 (Full HD)
   - Bitrate: 8-10 Mbps
   - Audio: AAC, 192 kbps
   - Nombre: `directorio-talentos-presentacion-final.mp4`
   - Guardar en: `video-produccion/proyecto-final/`

---

## ✅ Checklist de Producción

### Pre-producción
- [ ] Crear slides en Canva (13 slides)
- [ ] Exportar slides como PNG
- [ ] Renombrar archivos correctamente
- [ ] Revisar script de narración
- [ ] Preparar aplicación para demo

### Producción
- [ ] Grabar narración completa (5 min)
- [ ] Editar audio (eliminar ruidos)
- [ ] Grabar demo de aplicación (2 min)
- [ ] Revisar calidad de grabaciones

### Post-producción
- [ ] Importar todos los archivos
- [ ] Sincronizar audio con slides
- [ ] Insertar demo en timeline
- [ ] Agregar transiciones
- [ ] Revisar timing completo
- [ ] Exportar video final
- [ ] Ver video completo (control de calidad)

### Publicación
- [ ] Subir a YouTube/Vimeo
- [ ] Agregar título descriptivo
- [ ] Escribir descripción con links
- [ ] Agregar tags relevantes
- [ ] Compartir link en presentación

---

## 🎯 Tips Profesionales

### Para mejor calidad:
1. **Iluminación**: Graba en lugar bien iluminado
2. **Audio**: Usa audífonos para monitorear
3. **Estabilidad**: Mantén cámara/pantalla estable
4. **Ritmo**: No hables muy rápido ni muy lento
5. **Energía**: Mantén tono entusiasta pero natural

### Para ahorrar tiempo:
1. **Practica**: Ensaya 2-3 veces antes de grabar
2. **Segmentos**: Graba en partes si es necesario
3. **Plantillas**: Usa presets de exportación
4. **Atajos**: Aprende shortcuts del editor
5. **Backup**: Guarda copias de archivos importantes

### Para mejor impacto:
1. **Inicio fuerte**: Primeros 10 segundos son cruciales
2. **Claridad**: Explica conceptos de forma simple
3. **Visual**: Muestra, no solo cuentes
4. **Ritmo**: Varía velocidad para mantener interés
5. **Cierre**: Llamado a la acción claro

---

## 📊 Especificaciones Técnicas

### Slides (PNG)
- Resolución: 1920x1080 px
- Formato: PNG
- Calidad: Alta
- Tamaño aprox: 500 KB - 2 MB cada uno

### Audio
- Formato: MP3 o WAV
- Bitrate: 192 kbps (MP3) o 16-bit (WAV)
- Sample rate: 44.1 kHz
- Mono o Estéreo
- Duración: ~5 minutos

### Video Demo
- Resolución: 1920x1080 (Full HD)
- FPS: 30
- Formato: MP4
- Codec: H.264
- Duración: ~2 minutos

### Video Final
- Resolución: 1920x1080 (Full HD)
- FPS: 30
- Formato: MP4
- Codec: H.264
- Bitrate: 8-10 Mbps
- Audio: AAC, 192 kbps
- Duración: 5 minutos
- Tamaño aprox: 150-250 MB

---

## 🚀 Recursos Adicionales

### Documentación del proyecto:
- `../video-slides/SCRIPT_COMPLETO_NARRACION.md` - Script palabra por palabra
- `../video-slides/TODOS_LOS_SLIDES.md` - Diseño de cada slide
- `../video-slides/GUIA_CANVA_COLORES.md` - Paleta de colores
- `../video-slides/PLAN_ACCION_HOY.md` - Plan de trabajo

### Aplicación para demo:
- `../directorio-talentos/index.html` - Abrir para demo
- `../directorio-talentos/README.md` - Instrucciones de uso

### Herramientas gratuitas:
- **Canva**: https://www.canva.com/
- **Audacity**: https://www.audacityteam.org/
- **OBS Studio**: https://obsproject.com/
- **DaVinci Resolve**: https://www.blackmagicdesign.com/products/davinciresolve
- **Shotcut**: https://shotcut.org/

---

## 📞 Soporte

Si tienes problemas:
1. Revisa esta guía paso a paso
2. Consulta los archivos de referencia
3. Busca tutoriales en YouTube para tu software
4. Practica con archivos de prueba primero

---

## 🎉 ¡Listo para Producir!

Tienes todo lo necesario para crear un video profesional de 5 minutos. Sigue los pasos en orden y tómate tu tiempo. ¡Mucha suerte con tu presentación del BOB-A-THON 2026! 🚀

---

*Creado para el proyecto Directorio de Talentos - BOB-A-THON 2026*