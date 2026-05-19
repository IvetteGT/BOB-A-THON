# 🚀 PUBLICAR PRESENTACIÓN - PASOS EXACTOS

## ⚡ Opción Más Rápida: Copiar a tu repositorio BOB-A-THON existente

### 📋 Paso 1: Abre la Terminal en VS Code

Presiona: **Ctrl + ñ** (o Ctrl + `)

### 📋 Paso 2: Copia y pega estos comandos UNO POR UNO

```bash
# 1. Ir a la carpeta raíz del proyecto
cd c:/Users/IvetteGonzalezTovar/Desktop/BOB-A-THON

# 2. Verificar que estás en la carpeta correcta
pwd

# 3. Copiar los archivos de presentación (ejecuta los 3 comandos)
copy video-slides\presentacion.html .
copy video-slides\presentacion.css .
copy video-slides\presentacion.js .

# 4. Verificar que se copiaron
dir presentacion.*

# 5. Agregar los archivos a Git
git add presentacion.html presentacion.css presentacion.js

# 6. Hacer commit
git commit -m "Agregar presentacion interactiva TEAM WARRIORS"

# 7. Subir a GitHub
git push
```

### ✅ Paso 3: Espera 2-3 minutos

GitHub Pages se actualizará automáticamente.

### 🎯 Paso 4: Tu URL estará lista

```
https://ivettegt.github.io/BOB-A-THON/presentacion.html
```

---

## 🔗 Alternativa: Si no tienes el repositorio BOB-A-THON configurado

### Opción A: Crear nuevo repositorio

```bash
# 1. Ir a la carpeta video-slides
cd c:/Users/IvetteGonzalezTovar/Desktop/BOB-A-THON/video-slides

# 2. Inicializar Git
git init

# 3. Agregar archivos
git add presentacion.html presentacion.css presentacion.js README_PRESENTACION.md

# 4. Hacer commit
git commit -m "Presentacion BOB-A-THON 2026 - TEAM WARRIORS"

# 5. Crear repositorio en GitHub (hazlo manualmente en github.com)
# - Ve a https://github.com/new
# - Nombre: presentacion-bobathon
# - Public
# - NO marques "Initialize with README"
# - Clic en "Create repository"

# 6. Conectar con GitHub (reemplaza si es necesario)
git remote add origin https://github.com/ivettegt/presentacion-bobathon.git

# 7. Subir
git branch -M main
git push -u origin main
```

Luego activa GitHub Pages:
1. Ve a https://github.com/ivettegt/presentacion-bobathon/settings/pages
2. Source: main branch
3. Save

Tu URL será: `https://ivettegt.github.io/presentacion-bobathon/presentacion.html`

---

## 🎯 Opción B: Netlify Drop (SIN GIT - 30 segundos)

### Pasos:

1. **Abre tu navegador** y ve a: https://app.netlify.com/drop

2. **Arrastra la carpeta** `video-slides` completa a la página

3. **¡Listo!** Obtienes una URL instantánea como:
   ```
   https://random-name-123.netlify.app/presentacion.html
   ```

4. **Opcional**: Puedes cambiar el nombre del sitio en Netlify

---

## ✅ Verificación

Después de publicar, verifica:

1. Abre la URL en tu navegador
2. Presiona F para pantalla completa
3. Navega con → y ←
4. Verifica que todos los slides funcionan
5. Comprueba que la imagen del slide 3 se carga

---

## 📱 Compartir tu URL

Una vez publicada, comparte así:

### Para WhatsApp/Email:
```
🎯 Presentación TEAM WARRIORS - BOB-A-THON 2026

Proyecto: Directorio de Talentos

🔗 Ver presentación:
[TU-URL-AQUI]

Navegación:
→ Siguiente | ← Anterior | F = Pantalla completa
```

### Para Jueces:
```
Estimados jueces,

Adjunto el link de nuestra presentación interactiva:
[TU-URL-AQUI]

Duración: 5 minutos
Equipo: TEAM WARRIORS
Proyecto: Directorio de Talentos

Saludos cordiales
```

---

## 🆘 Si algo no funciona

### Error: "git no reconocido"
→ Instala Git desde: https://git-scm.com/download/win

### Error: "Permission denied"
→ Configura tu cuenta de GitHub:
```bash
git config --global user.name "Tu Nombre"
git config --global user.email "tu-email@ejemplo.com"
```

### Error: "Repository not found"
→ Verifica que creaste el repositorio en GitHub primero

### No quieres usar Git
→ Usa Netlify Drop (Opción B) - es más fácil

---

## 💡 Recomendación Final

**Para ti, lo más fácil es**:

1. **Si ya tienes BOB-A-THON en GitHub**: Usa los comandos del Paso 2 (arriba)
2. **Si no**: Usa Netlify Drop (Opción B) - toma 30 segundos

---

## 📞 Siguiente Paso

**Elige tu opción y ejecuta los comandos en la terminal de VS Code.**

**¿Listo? ¡Copia y pega los comandos uno por uno! 🚀**