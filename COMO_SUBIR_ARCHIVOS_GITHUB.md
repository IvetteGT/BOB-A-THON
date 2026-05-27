# 📤 Cómo Subir Archivos a GitHub

## 🎯 3 Métodos Fáciles

---

## ✅ MÉTODO 1: Desde la Web (MÁS FÁCIL)

### Paso 1: Ve a tu Repositorio
```
https://github.com/IvetteGT/BOB-A-THON
```

### Paso 2: Navega a la Carpeta
- Si quieres subir a la raíz, quédate en la página principal
- Si quieres subir a una carpeta específica, haz clic en ella (ej: `docs`, `video-produccion`)

### Paso 3: Sube el Archivo
1. Haz clic en **"Add file"** (botón arriba a la derecha)
2. Selecciona **"Upload files"**
3. Arrastra tu archivo O haz clic en "choose your files"
4. Selecciona el archivo de tu computadora
5. Escribe un mensaje (ej: "Agregar presentación")
6. Haz clic en **"Commit changes"**

### ✅ ¡Listo! Tu archivo está en GitHub

---

## 💻 MÉTODO 2: Desde PowerShell (Recomendado)

### Paso 1: Abre PowerShell en tu Carpeta
1. Abre la carpeta `BOB-A-THON` en el Explorador de Windows
2. Haz clic en la barra de dirección (arriba)
3. Escribe `powershell` y presiona Enter

### Paso 2: Copia el Archivo a la Carpeta
Si tu archivo está en otro lugar, cópialo primero:
```powershell
Copy-Item "C:\ruta\a\tu\archivo.pdf" -Destination .
```

### Paso 3: Sube a GitHub
```powershell
git add archivo.pdf
git commit -m "Agregar archivo.pdf"
git push origin master
```

### Ejemplo Completo:
```powershell
# Si tu archivo está en el Escritorio
Copy-Item "$env:USERPROFILE\Desktop\mi-documento.pdf" -Destination .

# Subir a GitHub
git add mi-documento.pdf
git commit -m "Agregar mi-documento.pdf"
git push origin master
```

---

## 🖱️ MÉTODO 3: Arrastrar y Soltar en GitHub Desktop

### Si tienes GitHub Desktop:
1. Abre GitHub Desktop
2. Selecciona el repositorio "BOB-A-THON"
3. Arrastra tu archivo a la carpeta del proyecto en el Explorador
4. En GitHub Desktop verás el archivo en "Changes"
5. Escribe un mensaje en "Summary"
6. Haz clic en **"Commit to master"**
7. Haz clic en **"Push origin"**

---

## 📁 Subir Múltiples Archivos

### Desde PowerShell:
```powershell
# Subir todos los archivos nuevos
git add .
git commit -m "Agregar múltiples archivos"
git push origin master
```

### Desde la Web:
1. En "Upload files" puedes seleccionar múltiples archivos
2. O arrastrar una carpeta completa
3. GitHub subirá todo junto

---

## 🎯 Ejemplos Prácticos

### Subir un Video:
```powershell
# Copiar video desde Descargas
Copy-Item "$env:USERPROFILE\Downloads\mi-video.mp4" -Destination "video-produccion\grabaciones\"

# Subir a GitHub
git add video-produccion/grabaciones/mi-video.mp4
git commit -m "Agregar video de demostración"
git push origin master
```

### Subir Slides de Canva:
```powershell
# Copiar todos los slides
Copy-Item "$env:USERPROFILE\Downloads\*.png" -Destination "video-produccion\slides\"

# Subir a GitHub
git add video-produccion/slides/*.png
git commit -m "Agregar slides de presentación"
git push origin master
```

### Subir un PDF:
```powershell
# Desde el Escritorio
Copy-Item "$env:USERPROFILE\Desktop\documento.pdf" -Destination .

# Subir a GitHub
git add documento.pdf
git commit -m "Agregar documento PDF"
git push origin master
```

---

## ⚠️ Notas Importantes

### Tamaño de Archivos:
- GitHub tiene un límite de **100 MB por archivo**
- Para archivos grandes (videos), considera usar:
  - YouTube (para videos)
  - Google Drive (para archivos grandes)
  - Git LFS (para archivos muy grandes)

### Archivos que NO Debes Subir:
- ❌ Contraseñas o claves API
- ❌ Archivos temporales (.tmp, .cache)
- ❌ Carpetas de dependencias (node_modules)
- ❌ Archivos del sistema (.DS_Store, Thumbs.db)

### Buenas Prácticas:
- ✅ Usa mensajes descriptivos en los commits
- ✅ Organiza archivos en carpetas apropiadas
- ✅ Verifica que el archivo se subió correctamente en GitHub

---

## 🆘 Solución de Problemas

### "Permission denied":
```powershell
# Verifica que estás en la carpeta correcta
cd C:\Users\IvetteGonzalezTovar\Desktop\BOB-A-THON
```

### "File too large":
- Comprime el archivo
- O súbelo a otro servicio (YouTube, Drive)
- Y agrega el link en un archivo .md

### "Nothing to commit":
```powershell
# Verifica que el archivo está en la carpeta
ls
```

---

## 🚀 Método Rápido (Recomendado)

Para subir un archivo rápidamente:

1. **Copia el archivo a la carpeta BOB-A-THON**
2. **Abre PowerShell en esa carpeta**
3. **Ejecuta estos 3 comandos:**

```powershell
git add .
git commit -m "Agregar nuevo archivo"
git push origin master
```

**¡Eso es todo!** 🎉

---

## 📞 ¿Necesitas Ayuda?

Si tienes problemas:
1. Dime qué archivo quieres subir
2. Dime dónde está ubicado
3. Te daré los comandos exactos para subirlo

**Ejemplo:**
> "Quiero subir mi-video.mp4 que está en Descargas a la carpeta video-produccion/grabaciones"

Y te daré los comandos exactos. 😊