# ⚡ Instrucciones Rápidas - Directorio de Talentos

## 🎯 ¿Qué es esto?

Una plataforma web para conectar vecinos con habilidades. Ahora funciona **local Y online**.

## 🚀 Inicio Rápido

### Opción 1: Modo Local (Sin configurar nada)
```bash
# Abre index.html en tu navegador
# O usa un servidor local:
cd directorio-talentos
python -m http.server 8000
```
✅ Funciona inmediatamente con localStorage

### Opción 2: Modo Online (Base de datos compartida)
1. Lee [`GUIA_SUPABASE.md`](GUIA_SUPABASE.md) (5 minutos)
2. Crea cuenta en [Supabase](https://supabase.com) (gratis)
3. Configura credenciales en `js/config.js`
4. Ejecuta SQL en Supabase
5. ¡Listo! Ahora es multi-usuario

## 📁 Archivos Importantes

```
directorio-talentos/
├── index.html              # Página principal
├── mi-perfil.html         # Crear/editar perfil
├── perfil.html            # Ver perfil individual
├── js/
│   ├── config.js          # ⚙️ CONFIGURA AQUÍ tus credenciales
│   ├── storage.js         # Sistema híbrido local/online
│   ├── app.js             # Lógica principal
│   └── data.js            # Datos de ejemplo
├── supabase-schema.sql    # Script SQL para Supabase
├── GUIA_SUPABASE.md       # 📖 Guía completa paso a paso
└── README.md              # Documentación completa
```

## 🔧 Configuración Online (Resumen)

### 1. Crear proyecto Supabase
- Ve a https://supabase.com
- New Project → Copia URL y anon key

### 2. Configurar credenciales
Edita `js/config.js`:
```javascript
const SUPABASE_CONFIG = {
    url: 'https://xxxxx.supabase.co',     // ← Tu URL
    anonKey: 'eyJhbGc...'                  // ← Tu key
};
```

### 3. Crear tablas
- Supabase → SQL Editor
- Copia contenido de `supabase-schema.sql`
- Run ▶️

### 4. ¡Listo!
Abre `index.html` y verás: `✅ Modo Online: Usando Supabase`

## 🌐 Publicar en Internet

### GitHub Pages
```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/tu-usuario/directorio-talentos.git
git push -u origin main
# Settings → Pages → Deploy from main
```

### Netlify (Más fácil)
1. Arrastra carpeta `directorio-talentos` a netlify.com
2. ¡Listo! URL: `https://nombre.netlify.app`

### Vercel
1. Importa repo en vercel.com
2. Deploy automático

## 🎮 Funcionalidades

### Ver Perfiles
- Abre `index.html`
- 6 perfiles de ejemplo pre-cargados
- Búsqueda en tiempo real

### Crear Tu Perfil
- Clic en "Mi Perfil"
- Llena formulario
- Guardar → Aparece en lista

### Calificar
- Clic en cualquier perfil
- Selecciona estrellas (1-5)
- Agrega comentario
- Enviar

### Buscar
- Escribe habilidad en barra de búsqueda
- O clic en chips (Plomería, Electricidad, etc.)
- Filtrado instantáneo

## 🔄 Diferencias: Local vs Online

| Característica | Modo Local | Modo Online |
|---------------|------------|-------------|
| Almacenamiento | localStorage | PostgreSQL (Supabase) |
| Usuarios | Solo tú | Múltiples usuarios |
| Datos compartidos | ❌ No | ✅ Sí |
| Requiere internet | Solo al cargar | Sí |
| Configuración | Ninguna | 5 minutos |
| Ideal para | Desarrollo/pruebas | Producción |

## 🐛 Solución Rápida de Problemas

### "No se muestran perfiles"
- F12 → Consola → Busca errores
- Verifica que archivos JS estén cargados

### "Modo Local cuando debería ser Online"
- Verifica `js/config.js`
- URL y key deben estar configuradas
- No deben ser los valores por defecto

### "Error de Supabase"
- Verifica credenciales en `config.js`
- Ejecutaste el SQL en Supabase?
- Revisa logs en Supabase Dashboard

### "CORS error"
- Usa servidor local (no abrir HTML directamente)
- `python -m http.server 8000`

## 📊 Límites Gratuitos

**Supabase Free:**
- 500 MB base de datos
- 1 GB archivos
- 2 GB ancho de banda/mes
- 50,000 usuarios activos/mes

**Suficiente para:**
- Miles de perfiles
- Decenas de miles de calificaciones
- Cientos de usuarios activos

## 💡 Tips Pro

1. **Desarrollo local primero**: Prueba todo en modo local antes de configurar Supabase
2. **Backup**: Exporta datos desde Supabase Table Editor regularmente
3. **Monitoreo**: Revisa Dashboard de Supabase para ver uso
4. **Seguridad**: Solo usa `anon key`, nunca `service_role key`
5. **Performance**: Los índices ya están configurados en el SQL

## 📚 Documentación Completa

- **Guía Supabase**: [`GUIA_SUPABASE.md`](GUIA_SUPABASE.md) - Paso a paso detallado
- **README**: [`README.md`](README.md) - Documentación completa del proyecto
- **SQL Schema**: [`supabase-schema.sql`](supabase-schema.sql) - Estructura de base de datos

## 🎯 Para Demo/Presentación

### Preparación (2 minutos)
1. Abre `index.html`
2. Verifica que se vean perfiles
3. Prueba búsqueda rápida

### Durante Demo (3 minutos)
1. **Problema** (30s): "¿A quién llamas cuando necesitas un plomero?"
2. **Solución** (2m): 
   - Mostrar búsqueda de "plomería"
   - Abrir perfil con calificaciones
   - Crear perfil nuevo en vivo
3. **Impacto** (30s): "Ahora funciona online, múltiples usuarios, base de datos real"

## 🆘 Ayuda

**Modo Local**: Revisa README.md sección "Solución de Problemas"
**Modo Online**: Lee GUIA_SUPABASE.md completa
**Supabase**: https://supabase.com/docs

---

**¿Listo para empezar?** 
- Modo Local: Abre `index.html` ✅
- Modo Online: Lee `GUIA_SUPABASE.md` 📖