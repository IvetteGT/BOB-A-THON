# 🌐 Cómo Compartir tu Presentación Web

## 📋 Resumen Rápido

Para compartir tu presentación con cualquier persona, necesitas publicarla en GitHub Pages. Una vez publicada, tendrás una URL que cualquiera puede abrir en su navegador.

---

## 🚀 Opción 1: Publicar en GitHub Pages (Recomendado)

### Paso 1: Subir a GitHub

1. **Abre la terminal** en VS Code (Ctrl + ñ)

2. **Navega a la carpeta video-slides**:
```bash
cd video-slides
```

3. **Inicializa Git** (si no está inicializado):
```bash
git init
```

4. **Agrega todos los archivos**:
```bash
git add .
```

5. **Haz el primer commit**:
```bash
git commit -m "Presentación BOB-A-THON 2026 - TEAM WARRIORS"
```

6. **Crea un repositorio en GitHub**:
   - Ve a https://github.com
   - Haz clic en el botón **"+"** → **"New repository"**
   - Nombre: `presentacion-bobathon` (o el que prefieras)
   - Marca como **Public**
   - **NO** marques "Initialize with README"
   - Haz clic en **"Create repository"**

7. **Conecta con tu repositorio** (reemplaza TU_USUARIO):
```bash
git remote add origin https://github.com/TU_USUARIO/presentacion-bobathon.git
git branch -M main
git push -u origin main
```

### Paso 2: Activar GitHub Pages

1. Ve a tu repositorio en GitHub
2. Haz clic en **"Settings"** (Configuración)
3. En el menú lateral, haz clic en **"Pages"**
4. En **"Source"**, selecciona **"main"** branch
5. Haz clic en **"Save"**
6. Espera 1-2 minutos

### Paso 3: Obtener tu URL

Tu presentación estará disponible en:
```
https://TU_USUARIO.github.io/presentacion-bobathon/presentacion.html
```

**Ejemplo con tu usuario**:
```
https://ivettegt.github.io/presentacion-bobathon/presentacion.html
```

---

## 🔗 Opción 2: Usar el Repositorio Existente BOB-A-THON

Si ya tienes el repositorio `BOB-A-THON` publicado:

### Paso 1: Copiar archivos

1. Copia estos 4 archivos a tu carpeta `BOB-A-THON`:
   - `presentacion.html`
   - `presentacion.css`
   - `presentacion.js`
   - `README_PRESENTACION.md`

2. Puedes crear una subcarpeta `presentacion/` dentro de `BOB-A-THON`

### Paso 2: Subir cambios

```bash
cd BOB-A-THON
git add .
git commit -m "Agregar presentación interactiva"
git push
```

### Paso 3: Tu URL será

```
https://ivettegt.github.io/BOB-A-THON/presentacion.html
```

O si usaste subcarpeta:
```
https://ivettegt.github.io/BOB-A-THON/presentacion/presentacion.html
```

---

## 📱 Opción 3: Compartir Rápido (Sin GitHub)

Si necesitas compartir AHORA mismo sin publicar:

### A) Usar WeTransfer
1. Ve a https://wetransfer.com
2. Sube los 3 archivos (HTML, CSS, JS)
3. Envía el link
4. La persona descarga y abre `presentacion.html`

### B) Usar Google Drive
1. Sube los 3 archivos a Google Drive
2. Comparte la carpeta con "Cualquiera con el enlace"
3. La persona descarga y abre `presentacion.html`

### C) Usar Dropbox
1. Sube los archivos a Dropbox
2. Comparte el link
3. La persona descarga y abre `presentacion.html`

**⚠️ Limitación**: La persona necesita descargar los archivos y abrirlos localmente.

---

## 🎯 Opción 4: Netlify Drop (Más Rápido)

### Publicar en 30 segundos:

1. Ve a https://app.netlify.com/drop
2. Arrastra la carpeta `video-slides` completa
3. ¡Listo! Obtienes una URL instantánea

**Ventaja**: No necesitas cuenta de GitHub
**URL ejemplo**: `https://random-name-123.netlify.app/presentacion.html`

---

## ✅ URL Recomendada para Ti

Basándome en tu configuración actual, tu mejor opción es:

### Opción A: Repositorio Nuevo
```
https://ivettegt.github.io/presentacion-bobathon/presentacion.html
```

### Opción B: Repositorio Existente
```
https://ivettegt.github.io/BOB-A-THON/presentacion.html
```

---

## 📋 Checklist para Compartir

Antes de compartir, verifica:

- [ ] La presentación se ve bien en tu navegador local
- [ ] Todos los slides funcionan correctamente
- [ ] Los controles de navegación funcionan
- [ ] La imagen del slide 3 se carga (requiere internet)
- [ ] El link del slide 9 es correcto
- [ ] Has probado en modo pantalla completa (F)

---

## 🎁 Bonus: Crear un Link Corto

Una vez que tengas tu URL de GitHub Pages, puedes acortarla:

1. Ve a https://bit.ly
2. Pega tu URL larga
3. Crea un link personalizado como: `bit.ly/warriors-bobathon`

---

## 💡 Consejos para Compartir

### Para Jueces del BOB-A-THON:
```
🎯 Presentación TEAM WARRIORS
📊 Directorio de Talentos
🔗 [tu-url-aqui]

Navegación:
→ Siguiente slide
← Slide anterior
F = Pantalla completa
```

### Para Redes Sociales:
```
🚀 Nuestra presentación para el #BOBATHON2026

Proyecto: Directorio de Talentos
Equipo: TEAM WARRIORS

👉 Ver presentación: [tu-url-aqui]

#TechForGood #SocialImpact #CommunityTech
```

### Para Email:
```
Asunto: Presentación BOB-A-THON 2026 - TEAM WARRIORS

Hola,

Te comparto nuestra presentación interactiva del proyecto 
"Directorio de Talentos" para el BOB-A-THON 2026.

🔗 Link: [tu-url-aqui]

Instrucciones:
- Presiona F para pantalla completa
- Usa las flechas → ← para navegar
- Duración: 5 minutos

Saludos,
TEAM WARRIORS
```

---

## 🆘 Solución de Problemas

### "No puedo subir a GitHub"
→ Usa Netlify Drop (opción 4)

### "El link no funciona"
→ Verifica que GitHub Pages esté activado
→ Espera 2-3 minutos después de activarlo
→ Asegúrate de incluir `/presentacion.html` al final

### "La imagen no se ve"
→ Es normal si no hay internet
→ La imagen se carga desde Unsplash
→ Para uso offline, descarga la imagen localmente

### "Los controles no funcionan"
→ Asegúrate de que los 3 archivos estén en la misma carpeta
→ Verifica que JavaScript esté habilitado en el navegador

---

## 📞 Siguiente Paso

**Elige tu método preferido y sigue los pasos. En 5-10 minutos tendrás tu URL lista para compartir.**

**Recomendación**: Usa GitHub Pages (Opción 1 o 2) para una solución permanente y profesional.

---

¿Necesitas ayuda con algún paso específico? ¡Pregúntame! 🚀