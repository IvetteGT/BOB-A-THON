# 🎯 Directorio de Talentos

Plataforma web para conectar vecinos con habilidades y servicios en la comunidad.

## 📋 Descripción

**Directorio de Talentos** es una aplicación web que permite a los vecinos:
- Publicar sus habilidades y servicios
- Buscar personas con habilidades específicas
- Calificar y comentar sobre servicios recibidos
- Conectar directamente sin intermediarios

## ✨ Características

- ✅ **Modo Híbrido**: Funciona local (localStorage) u online (Supabase)
- ✅ **Sin instalación**: Solo abrir el archivo HTML
- ✅ **Base de datos en la nube**: Comparte datos entre usuarios (modo online)
- ✅ **Responsive**: Funciona en móvil y desktop
- ✅ **6 perfiles de ejemplo** pre-cargados
- ✅ **Sistema de calificaciones** con estrellas
- ✅ **Búsqueda en tiempo real**
- ✅ **Fácil de publicar**: GitHub Pages, Netlify, Vercel

## 🚀 Cómo Usar

### 🏠 Modo Local (Sin Internet)

**Opción 1: Abrir Directamente**
1. Navega a la carpeta `directorio-talentos`
2. Haz doble clic en `index.html`
3. ¡Listo! Funciona con localStorage

**Opción 2: Con Servidor Local**
```bash
cd directorio-talentos
python -m http.server 8000
# O con Node.js: npx serve
```

### 🌐 Modo Online (Con Internet)

**Para usar la base de datos en la nube:**
1. Lee la guía completa: [`GUIA_SUPABASE.md`](GUIA_SUPABASE.md)
2. Crea una cuenta gratuita en [Supabase](https://supabase.com)
3. Configura las credenciales en `js/config.js`
4. Ejecuta el script SQL en Supabase
5. ¡Listo! Ahora todos pueden ver y agregar perfiles

**Publicar en Internet:**
- GitHub Pages (gratis)
- Netlify (gratis)
- Vercel (gratis)

Ver detalles en [`GUIA_SUPABASE.md`](GUIA_SUPABASE.md)

## 📁 Estructura del Proyecto

```
directorio-talentos/
├── index.html              # Página principal (lista de talentos)
├── perfil.html            # Ver perfil individual
├── mi-perfil.html         # Crear/editar mi perfil
├── css/
│   └── styles.css         # Todos los estilos
├── js/
│   ├── storage.js         # Manejo de localStorage
│   ├── data.js            # Datos de ejemplo
│   └── app.js             # Lógica principal
└── README.md              # Este archivo
```

## 🎮 Funcionalidades

### 1. Ver Perfiles
- Abre `index.html`
- Verás 6 perfiles de ejemplo con calificaciones
- Cada perfil muestra: nombre, habilidad, calificación promedio, barrio

### 2. Buscar Habilidades
- Usa la barra de búsqueda en la parte superior
- Escribe una habilidad (ej: "plomería", "inglés")
- O haz clic en los chips de habilidades populares
- Los resultados se filtran en tiempo real

### 3. Ver Perfil Completo
- Haz clic en cualquier tarjeta de perfil
- Verás información completa: descripción, contacto, calificaciones
- Puedes calificar al profesional (1-5 estrellas)
- Agrega comentarios opcionales

### 4. Crear Tu Perfil
- Haz clic en "Mi Perfil" en el menú superior
- Llena el formulario con tus datos:
  - Nombre completo
  - Tu habilidad principal
  - Descripción de tus servicios
  - Teléfono y email
  - Tu barrio
- Haz clic en "Guardar Perfil"
- Tu perfil aparecerá en la lista principal

### 5. Editar Tu Perfil
- Ve a "Mi Perfil"
- El formulario se llenará con tus datos actuales
- Modifica lo que necesites
- Guarda los cambios

## 💾 Datos

### Perfiles de Ejemplo Incluidos

1. **Juan Pérez** - Plomería (Villa El Salvador)
2. **María García** - Clases de Inglés (San Juan de Miraflores)
3. **Carlos López** - Electricidad (Surco)
4. **Ana Martínez** - Cuidado de Niños (Miraflores)
5. **Pedro Sánchez** - Carpintería (Barranco)
6. **Laura Torres** - Repostería (Chorrillos)

### Almacenamiento

**Modo Local:**
- Usa `localStorage` del navegador
- Los datos solo existen en tu computadora
- Persisten mientras no borres el caché

**Modo Online:**
- Usa base de datos PostgreSQL en Supabase
- Los datos se comparten entre todos los usuarios
- Accesible desde cualquier dispositivo
- Backup automático en la nube

## 🔧 Personalización

### Cambiar Colores

Edita `css/styles.css` y modifica las variables CSS:

```css
:root {
    --primary: #2563eb;        /* Color principal */
    --primary-dark: #1e40af;   /* Color principal oscuro */
    --success: #10b981;        /* Color de éxito */
    --bg: #f8fafc;             /* Color de fondo */
}
```

### Agregar Más Perfiles de Ejemplo

Edita `js/data.js` y agrega más objetos al array `sampleProfiles`:

```javascript
{
    id: 'profile-7',
    name: 'Tu Nombre',
    skill: 'Tu Habilidad',
    description: 'Tu descripción',
    phone: '123-456-789',
    email: 'tu@email.com',
    neighborhood: 'Tu Barrio'
}
```

### Cambiar Habilidades Populares

Edita `index.html` y modifica los chips:

```html
<span class="chip" onclick="buscarPorChip('Tu Habilidad')">Tu Habilidad</span>
```

## 📱 Compatibilidad

- ✅ Chrome/Edge (Recomendado)
- ✅ Firefox
- ✅ Safari
- ✅ Opera
- ✅ Navegadores móviles

## 🐛 Solución de Problemas

### Los perfiles no se muestran
- Abre la consola del navegador (F12)
- Verifica que no haya errores en rojo
- Asegúrate de que los archivos JS estén en la carpeta correcta

### Las calificaciones no se guardan
- Verifica que localStorage esté habilitado en tu navegador
- Algunos navegadores en modo incógnito no permiten localStorage

### Los estilos no se aplican
- Verifica que `css/styles.css` exista
- Revisa la ruta en el `<link>` del HTML

### Resetear todos los datos
Abre la consola del navegador (F12) y ejecuta:
```javascript
localStorage.clear();
location.reload();
```

## 🎨 Capturas de Pantalla

### Página Principal
- Lista de perfiles con búsqueda
- Tarjetas con avatar, nombre, habilidad y calificación
- Diseño responsive en grid

### Perfil Individual
- Avatar grande con iniciales
- Información completa de contacto
- Sistema de calificación interactivo
- Lista de comentarios

### Mi Perfil
- Formulario simple y claro
- Validación de campos requeridos
- Guardado instantáneo

## 🚀 Para Presentación/Demo

### Preparación (5 minutos antes)

1. Abre `index.html` en el navegador
2. Verifica que los 6 perfiles se muestren
3. Prueba la búsqueda con "plomería"
4. Abre un perfil y verifica las calificaciones

### Durante la Demo (3 minutos)

**Minuto 1: Problema**
> "Cuando necesitas un plomero, ¿a quién llamas? El 60% no tiene referencias confiables."

**Minuto 2: Solución + Demo**
1. Mostrar página principal con 6 perfiles
2. Buscar "plomería" → Mostrar filtrado
3. Abrir perfil de Juan (5 estrellas, 3 calificaciones)
4. Mostrar contacto directo
5. Ir a "Mi Perfil" y crear uno nuevo en vivo
6. Volver y mostrar que aparece en la lista

**Minuto 3: Impacto**
> "Construido en 4 horas con HTML, CSS y JavaScript puro. Sin frameworks, sin backend. Funciona offline, en cualquier dispositivo. Porque las mejores soluciones son las más simples."

### Tips para la Demo

- ✅ Tener el navegador abierto antes de empezar
- ✅ Cerrar otras pestañas para evitar distracciones
- ✅ Aumentar el zoom del navegador (Ctrl/Cmd + +)
- ✅ Tener datos de prueba listos para "Mi Perfil"
- ✅ Practicar el flujo 2-3 veces antes

## 📊 Métricas del Proyecto

- **Tiempo de desarrollo**: 4-6 horas
- **Líneas de código**: ~1,000
- **Archivos**: 7 (3 HTML, 1 CSS, 3 JS)
- **Dependencias**: 0 (cero)
- **Tamaño total**: ~50 KB

## 🎯 Mejoras Implementadas

- ✅ **Backend real con Supabase** (PostgreSQL en la nube)
- ✅ **Modo híbrido** (funciona local y online)
- ✅ **Base de datos compartida** (múltiples usuarios)
- ✅ **Fácil de publicar** (GitHub Pages, Netlify, Vercel)

## 🚀 Próximas Mejoras Posibles

1. **Autenticación de usuarios** (login con email/Google)
2. **Fotos de perfil** (subir imágenes)
3. **Filtro por barrio** (dropdown de barrios)
4. **Chat directo** (mensajería entre usuarios)
5. **Modo oscuro** (toggle de tema)
6. **Notificaciones** (cuando te califican)
7. **App móvil** (React Native, Flutter)
8. **Geolocalización** (mapa de talentos cercanos)

## 📄 Licencia

Este proyecto es de código abierto y puede ser usado libremente para fines educativos y comerciales.

## 👥 Créditos

Desarrollado para el **BOB-A-THON** - Hackathon de impacto social latinoamericano.

---

## 🆘 Soporte

**Modo Local:**
1. Revisa la sección "Solución de Problemas"
2. Verifica que todos los archivos estén en su lugar
3. Abre la consola del navegador para ver errores

**Modo Online:**
1. Lee la guía completa: [`GUIA_SUPABASE.md`](GUIA_SUPABASE.md)
2. Verifica las credenciales en `js/config.js`
3. Revisa los logs en Supabase Dashboard
4. Consulta la [documentación de Supabase](https://supabase.com/docs)

---

**¡Disfruta conectando con tu comunidad! 💙**