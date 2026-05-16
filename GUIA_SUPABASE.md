# 🚀 Guía de Configuración de Supabase

Esta guía te ayudará a configurar el proyecto para que funcione en línea usando Supabase.

## 📋 Requisitos Previos

- Una cuenta en [Supabase](https://supabase.com) (gratis)
- Navegador web moderno
- Conexión a internet

## 🎯 Paso 1: Crear Proyecto en Supabase

1. Ve a [https://supabase.com](https://supabase.com)
2. Haz clic en "Start your project" o "Sign In"
3. Crea una cuenta o inicia sesión (puedes usar GitHub)
4. Haz clic en "New Project"
5. Completa los datos:
   - **Name**: `directorio-talentos` (o el nombre que prefieras)
   - **Database Password**: Crea una contraseña segura (guárdala)
   - **Region**: Selecciona la más cercana a tu ubicación
   - **Pricing Plan**: Free (gratis)
6. Haz clic en "Create new project"
7. Espera 2-3 minutos mientras se crea el proyecto

## 🔑 Paso 2: Obtener las Credenciales

1. Una vez creado el proyecto, ve a **Settings** (⚙️) en el menú lateral
2. Haz clic en **API**
3. Encontrarás dos valores importantes:
   - **Project URL**: Algo como `https://xxxxx.supabase.co`
   - **anon public key**: Una clave larga que empieza con `eyJ...`
4. **¡COPIA ESTOS VALORES!** Los necesitarás en el siguiente paso

## 📝 Paso 3: Configurar las Credenciales en el Proyecto

1. Abre el archivo `directorio-talentos/js/config.js`
2. Reemplaza los valores de configuración:

```javascript
const SUPABASE_CONFIG = {
    url: 'https://xxxxx.supabase.co', // ← Pega tu Project URL aquí
    anonKey: 'eyJhbGc...' // ← Pega tu anon public key aquí
};
```

3. Guarda el archivo

## 🗄️ Paso 4: Crear las Tablas en la Base de Datos

1. En tu proyecto de Supabase, ve a **SQL Editor** en el menú lateral
2. Haz clic en "New query"
3. Abre el archivo `supabase-schema.sql` de este proyecto
4. Copia TODO el contenido del archivo
5. Pégalo en el editor SQL de Supabase
6. Haz clic en "Run" (▶️) en la esquina inferior derecha
7. Deberías ver el mensaje: "Success. No rows returned"
8. Ve a **Table Editor** para verificar que se crearon las tablas:
   - `profiles` (perfiles)
   - `ratings` (calificaciones)

## ✅ Paso 5: Verificar que Funciona

1. Abre el archivo `index.html` en tu navegador
2. Abre la consola del navegador (F12)
3. Deberías ver el mensaje: `✅ Modo Online: Usando Supabase`
4. Si ves perfiles de ejemplo, ¡todo está funcionando!

## 🎨 Paso 6: Probar las Funcionalidades

### Crear tu Perfil
1. Haz clic en "Mi Perfil" en el menú
2. Llena el formulario con tus datos
3. Haz clic en "Guardar Perfil"
4. Verifica que aparezca en la lista principal

### Buscar Perfiles
1. Usa la barra de búsqueda
2. Prueba con: "plomería", "inglés", etc.
3. Los resultados se filtran en tiempo real

### Calificar un Perfil
1. Haz clic en cualquier perfil
2. Selecciona estrellas (1-5)
3. Agrega un comentario (opcional)
4. Haz clic en "Enviar Calificación"
5. La calificación aparecerá inmediatamente

## 🔒 Seguridad y Privacidad

### Row Level Security (RLS)
El proyecto incluye políticas de seguridad:
- ✅ Todos pueden ver perfiles y calificaciones
- ✅ Solo tú puedes editar tu propio perfil
- ✅ Cualquiera puede agregar calificaciones

### Datos Públicos
⚠️ **IMPORTANTE**: Los datos en este proyecto son públicos por diseño:
- Los perfiles son visibles para todos
- Las calificaciones son públicas
- No compartas información sensible

## 🌐 Paso 7: Publicar en Internet (Opcional)

### Opción A: GitHub Pages (Gratis)

1. Crea un repositorio en GitHub
2. Sube todos los archivos del proyecto
3. Ve a Settings → Pages
4. Selecciona la rama `main` y carpeta `/directorio-talentos`
5. Guarda y espera unos minutos
6. Tu sitio estará en: `https://tu-usuario.github.io/nombre-repo`

### Opción B: Netlify (Gratis)

1. Ve a [netlify.com](https://netlify.com)
2. Arrastra la carpeta `directorio-talentos` a Netlify
3. ¡Listo! Tu sitio estará en línea en segundos
4. URL: `https://nombre-aleatorio.netlify.app`

### Opción C: Vercel (Gratis)

1. Ve a [vercel.com](https://vercel.com)
2. Importa tu repositorio de GitHub
3. Configura la carpeta raíz como `directorio-talentos`
4. Deploy automático
5. URL: `https://nombre-proyecto.vercel.app`

## 🔄 Modo Híbrido: Local y Online

El proyecto funciona en **dos modos**:

### Modo Local (Sin configurar Supabase)
- Usa `localStorage` del navegador
- Los datos solo existen en tu computadora
- No requiere internet después de cargar
- Perfecto para desarrollo y pruebas

### Modo Online (Con Supabase configurado)
- Usa base de datos en la nube
- Los datos se comparten entre usuarios
- Requiere internet
- Perfecto para producción

El sistema detecta automáticamente qué modo usar.

## 🐛 Solución de Problemas

### Error: "Supabase library not loaded"
**Solución**: Verifica tu conexión a internet. La librería se carga desde CDN.

### Error: "Invalid API key"
**Solución**: 
1. Verifica que copiaste correctamente la `anon key`
2. No debe tener espacios al inicio o final
3. Debe empezar con `eyJ`

### Error: "relation 'profiles' does not exist"
**Solución**: 
1. Ve al SQL Editor de Supabase
2. Ejecuta el script `supabase-schema.sql` completo
3. Verifica en Table Editor que las tablas existen

### Los perfiles no se muestran
**Solución**:
1. Abre la consola del navegador (F12)
2. Busca errores en rojo
3. Verifica que el mensaje sea "✅ Modo Online: Usando Supabase"
4. Si dice "📱 Modo Local", revisa el archivo `config.js`

### Error de CORS
**Solución**:
1. En Supabase, ve a Settings → API
2. En "API Settings", verifica que tu dominio esté permitido
3. Para desarrollo local, `localhost` debería estar permitido por defecto

## 📊 Límites del Plan Gratuito de Supabase

- ✅ 500 MB de base de datos
- ✅ 1 GB de transferencia de archivos
- ✅ 2 GB de ancho de banda
- ✅ 50,000 usuarios activos mensuales
- ✅ Autenticación social (Google, GitHub, etc.)

**Suficiente para**:
- Miles de perfiles
- Decenas de miles de calificaciones
- Cientos de usuarios activos

## 🎓 Recursos Adicionales

- [Documentación de Supabase](https://supabase.com/docs)
- [Guías de Supabase](https://supabase.com/docs/guides)
- [Comunidad de Supabase](https://github.com/supabase/supabase/discussions)
- [Videos tutoriales](https://www.youtube.com/c/Supabase)

## 💡 Consejos Pro

1. **Backup de datos**: Exporta tus datos regularmente desde Table Editor
2. **Monitoreo**: Revisa el Dashboard de Supabase para ver uso y estadísticas
3. **Logs**: En Supabase, ve a Logs para ver errores y consultas
4. **Optimización**: Crea índices adicionales si las búsquedas son lentas
5. **Seguridad**: Nunca compartas tu `service_role` key (solo usa `anon` key)

## 🆘 Soporte

Si tienes problemas:
1. Revisa esta guía completa
2. Verifica la consola del navegador (F12)
3. Revisa los logs en Supabase Dashboard
4. Consulta la documentación oficial de Supabase

---

**¡Felicidades! 🎉** Tu Directorio de Talentos ahora funciona en línea y puede ser usado por toda tu comunidad.