# 🚀 Guía para Publicar tu Directorio de Talentos

## Paso 1: Configurar Supabase como Público

1. **Ve a tu proyecto en Supabase**: https://supabase.com/dashboard
2. **Abre el SQL Editor** (en el menú lateral)
3. **Copia TODO el contenido** del archivo `supabase-public-config.sql`
4. **Pégalo en el editor SQL** y haz clic en **RUN**
5. Deberías ver: "Políticas públicas configuradas exitosamente"

✅ Ahora tu base de datos es pública y cualquiera puede usarla sin autenticación.

---

## Paso 2: Probar Localmente

### Opción A: Con Live Server (Recomendado)

1. **Instala Live Server en VS Code**:
   - Presiona `Ctrl + Shift + X`
   - Busca "Live Server" (de Ritwick Dey)
   - Haz clic en "Install"

2. **Inicia el servidor**:
   - Haz clic derecho en `index.html`
   - Selecciona "Open with Live Server"
   - Se abrirá en `http://localhost:5500`

3. **Verifica en la consola** (F12):
   - Deberías ver: "✅ Modo Online: Usando Supabase"
   - Los perfiles deberían cargarse automáticamente

### Opción B: Con Node.js

```bash
# Instala Node.js desde https://nodejs.org
# Luego ejecuta:
npx http-server directorio-talentos -p 8000
```

Abre: http://localhost:8000

---

## Paso 3: Publicar en GitHub Pages

### 3.1 Crear Repositorio en GitHub

1. Ve a https://github.com y haz login
2. Haz clic en el botón **"+"** → **"New repository"**
3. Nombre: `directorio-talentos` (o el que prefieras)
4. Marca como **Public**
5. **NO** marques "Initialize with README"
6. Haz clic en **"Create repository"**

### 3.2 Subir tu Código

Abre la terminal en VS Code (`Ctrl + ñ`) y ejecuta:

```bash
# Navega a la carpeta del proyecto
cd directorio-talentos

# Inicializa Git (si no está inicializado)
git init

# Agrega todos los archivos
git add .

# Haz el primer commit
git commit -m "Initial commit - Directorio de Talentos"

# Conecta con tu repositorio (reemplaza TU_USUARIO con tu usuario de GitHub)
git remote add origin https://github.com/TU_USUARIO/directorio-talentos.git

# Sube el código
git branch -M main
git push -u origin main
```

### 3.3 Activar GitHub Pages

1. Ve a tu repositorio en GitHub
2. Haz clic en **"Settings"** (Configuración)
3. En el menú lateral, haz clic en **"Pages"**
4. En **"Source"**, selecciona **"main"** branch
5. Haz clic en **"Save"**
6. Espera 1-2 minutos

Tu sitio estará disponible en:
```
https://TU_USUARIO.github.io/directorio-talentos/
```

---

## Paso 4: Verificar que Funciona

1. **Abre tu sitio publicado** en el navegador
2. **Abre la consola** (F12)
3. Deberías ver:
   - ✅ "Modo Online: Usando Supabase"
   - Los perfiles cargándose desde Supabase

4. **Prueba las funcionalidades**:
   - Buscar perfiles
   - Ver detalles de un perfil
   - Crear tu perfil en "Mi Perfil"
   - Agregar calificaciones

---

## 🎉 ¡Listo!

Tu Directorio de Talentos está ahora:
- ✅ Publicado en internet
- ✅ Usando Supabase como base de datos
- ✅ Accesible desde cualquier dispositivo
- ✅ Completamente funcional

### Compartir tu Sitio

Comparte este enlace con tu comunidad:
```
https://TU_USUARIO.github.io/directorio-talentos/
```

---

## 🔧 Solución de Problemas

### No se cargan los perfiles

1. Verifica que ejecutaste `supabase-public-config.sql`
2. Revisa la consola del navegador (F12) para ver errores
3. Verifica que las credenciales en `js/config.js` sean correctas

### Error de CORS

- GitHub Pages debería funcionar sin problemas de CORS
- Si usas otro hosting, asegúrate de que permita peticiones a Supabase

### Los cambios no se reflejan

1. Haz commit y push de tus cambios:
```bash
git add .
git commit -m "Descripción de cambios"
git push
```

2. Espera 1-2 minutos para que GitHub Pages se actualice
3. Limpia la caché del navegador (Ctrl + Shift + R)

---

## 📝 Próximos Pasos

- Personaliza los estilos en `css/styles.css`
- Agrega más funcionalidades
- Comparte con tu comunidad
- ¡Recibe feedback y mejora!

---

Made with ❤️ by Bob