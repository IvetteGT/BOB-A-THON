# 🚀 Guía Paso a Paso - Configuración de Supabase

## ✅ PASO 1: Crear Cuenta en Supabase

1. En la página de Supabase que se abrió (https://supabase.com)
2. Haz clic en **"Start your project"** o **"Sign In"** (arriba a la derecha)
3. Selecciona una opción para registrarte:
   - ✅ **Con GitHub** (Recomendado - más rápido)
   - ✅ Con email y contraseña
   - ✅ Con Google
4. Completa el registro
5. Verifica tu email si es necesario

---

## ✅ PASO 2: Crear Nuevo Proyecto

Una vez que hayas iniciado sesión:

1. Verás el Dashboard de Supabase
2. Haz clic en **"New Project"** (botón verde)
3. Completa el formulario:

   **Name (Nombre del proyecto):**
   ```
   directorio-talentos
   ```
   
   **Database Password (Contraseña de la base de datos):**
   - Crea una contraseña segura
   - ⚠️ **IMPORTANTE**: Guarda esta contraseña en un lugar seguro
   - Ejemplo: `MiPassword123!Segura`
   
   **Region (Región):**
   - Selecciona la más cercana a tu ubicación
   - Para México: `South America (São Paulo)` o `US West (Oregon)`
   
   **Pricing Plan:**
   - Selecciona **"Free"** (gratis)

4. Haz clic en **"Create new project"**
5. ⏳ Espera 2-3 minutos mientras se crea el proyecto
   - Verás una barra de progreso
   - No cierres la ventana

---

## ✅ PASO 3: Obtener las Credenciales

Una vez que el proyecto esté listo:

1. En el menú lateral izquierdo, haz clic en **"Settings"** (⚙️)
2. Luego haz clic en **"API"**
3. Verás dos secciones importantes:

### 📋 Project URL
```
https://xxxxxxxxxxxxx.supabase.co
```
- Copia este valor completo
- Lo necesitarás en el siguiente paso

### 🔑 Project API keys
Busca la sección **"anon public"**:
```
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6...
```
- Es una clave MUY larga (varias líneas)
- Haz clic en el icono de **copiar** (📋)
- ⚠️ **NO copies la "service_role" key** - solo la "anon public"

---

## ✅ PASO 4: Configurar el Proyecto

Ahora voy a configurar automáticamente tu proyecto con estas credenciales.

**Cuando tengas ambos valores, dímelos y yo los configuraré por ti.**

---

## ✅ PASO 5: Crear las Tablas en la Base de Datos

Después de configurar las credenciales:

1. En Supabase, ve a **"SQL Editor"** en el menú lateral
2. Haz clic en **"New query"**
3. Yo te proporcionaré el SQL completo para copiar y pegar
4. Haz clic en **"Run"** (▶️) en la esquina inferior derecha
5. Deberías ver: "Success. No rows returned"

---

## ✅ PASO 6: Verificar que Funciona

1. Ve a **"Table Editor"** en el menú lateral
2. Deberías ver dos tablas:
   - ✅ `profiles` (perfiles)
   - ✅ `ratings` (calificaciones)
3. Haz clic en `profiles` y verás 6 perfiles de ejemplo

---

## 🎉 ¡Listo!

Tu aplicación ahora funciona en línea con base de datos compartida.

---

## 📝 Resumen de lo que necesito de ti:

1. ✅ Crear cuenta en Supabase
2. ✅ Crear proyecto llamado "directorio-talentos"
3. ✅ Copiar **Project URL**
4. ✅ Copiar **anon public key**
5. ✅ Darme ambos valores

**Yo me encargo de:**
- Configurar el archivo config.js
- Ejecutar el SQL en Supabase
- Verificar que todo funcione

---

## 🆘 ¿Problemas?

- **No puedo crear cuenta**: Intenta con GitHub, es más rápido
- **No veo "New Project"**: Asegúrate de haber verificado tu email
- **El proyecto tarda mucho**: Es normal, espera hasta 3 minutos
- **No encuentro las credenciales**: Settings → API → Busca "Project URL" y "anon public"

---

**¿Listo? Dime cuando tengas las dos credenciales y continuamos! 🚀**