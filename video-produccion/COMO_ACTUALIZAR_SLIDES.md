# 🔄 Cómo Actualizar Slides PNG después de Editar en Canva

## 📝 El Proceso

Cuando editas un slide en Canva, los archivos PNG que ya descargaste **NO se actualizan automáticamente**. Necesitas volver a exportarlos.

---

## ⚡ Método Rápido: Exportar Solo el Slide Modificado

### Paso a Paso:

1. **Termina de editar tu slide en Canva**
   - Haz todos los cambios necesarios
   - Verifica que todo se vea bien

2. **Selecciona el slide modificado**
   - Click en el slide en el panel lateral izquierdo
   - O navega hasta ese slide

3. **Click en "Compartir"** (esquina superior derecha)

4. **Selecciona "Descargar"**

5. **Configura la descarga:**
   ```
   ┌─────────────────────────────────────┐
   │  Tipo de archivo: PNG ✓             │
   │                                     │
   │  Calidad: Alta ✓                    │
   │                                     │
   │  Páginas: Página actual ✓           │  ← IMPORTANTE
   │  ● Página actual (ej: página 5)     │  ← Solo esta página
   │  ○ Todas las páginas                │
   │  ○ Páginas personalizadas           │
   │                                     │
   │  [    Descargar    ]                │
   └─────────────────────────────────────┘
   ```

6. **Descargar**
   - Se descargará solo ese slide
   - Nombre típico: `Directorio-de-Talentos_5.png` (ejemplo)

7. **Reemplazar el archivo anterior**
   - Ve a `video-produccion/slides/`
   - Encuentra el archivo que corresponde (ej: `05-pregunta.png`)
   - **Elimina** el archivo viejo
   - **Copia** el nuevo archivo descargado
   - **Renombra** con el nombre correcto (ej: `05-pregunta.png`)

---

## 🔄 Método Completo: Re-exportar Todos los Slides

Si hiciste cambios en varios slides:

### Paso a Paso:

1. **Termina todas tus ediciones en Canva**

2. **Click en "Compartir" → "Descargar"**

3. **Configura:**
   - Tipo: **PNG**
   - Calidad: **Alta**
   - Páginas: **Todas las páginas (1-14)** ← Todas

4. **Descargar**
   - Se descargará un ZIP con todos los slides

5. **Extraer el ZIP**
   - Abre el archivo ZIP descargado
   - Extrae todos los archivos

6. **Reemplazar archivos en tu carpeta**
   - Ve a `video-produccion/slides/`
   - **Elimina todos los PNG viejos**
   - **Copia los nuevos PNG**
   - **Renombra** cada uno con los nombres correctos

---

## 📋 Tabla de Correspondencia

Para saber qué archivo renombrar:

| Archivo de Canva | Renombrar a | Slide # |
|------------------|-------------|---------|
| Directorio-de-Talentos_1.png | 01-portada.png | 1 |
| Directorio-de-Talentos_2.png | 02-problema-estadistica.png | 2 |
| Directorio-de-Talentos_3.png | 03-talentos-ocultos.png | 3 |
| Directorio-de-Talentos_4.png | 04-intermediarios.png | 4 |
| Directorio-de-Talentos_5.png | 05-pregunta.png | 5 |
| Directorio-de-Talentos_6.png | 06-concepto.png | 6 |
| Directorio-de-Talentos_7.png | 07-caracteristicas.png | 7 |
| Directorio-de-Talentos_8.png | 08-tecnologia.png | 8 |
| Directorio-de-Talentos_9.png | 09-transicion-demo.png | 9 |
| Directorio-de-Talentos_10.png | 10-nota-demo.png | 10 |
| Directorio-de-Talentos_11.png | 14-impacto-economico.png | 11 |
| Directorio-de-Talentos_12.png | 15-impacto-social.png | 12 |
| Directorio-de-Talentos_13.png | 16-escalabilidad.png | 13 |
| Directorio-de-Talentos_14.png | 17-cierre.png | 14 |

---

## 💡 Tips para Evitar Confusiones

### 1. Usa nombres descriptivos en Canva
Aunque Canva numera automáticamente, puedes:
- Renombrar cada página en Canva
- Esto te ayuda a identificar qué es qué

### 2. Mantén un backup
Antes de reemplazar:
```
video-produccion/
├── slides/              ← Versión actual
└── slides-backup/       ← Copia de seguridad
```

### 3. Verifica antes de reemplazar
- Abre el PNG nuevo
- Confirma que es el correcto
- Luego reemplaza el viejo

### 4. Renombra inmediatamente
- No dejes archivos con nombres de Canva
- Renombra apenas descargues
- Evita confusiones después

---

## 🎯 Flujo de Trabajo Recomendado

### Cuando editas 1-2 slides:

```
1. Editar en Canva
2. Descargar solo esas páginas
3. Reemplazar archivos específicos
4. Continuar con tu trabajo
```

### Cuando editas muchos slides:

```
1. Hacer todas las ediciones
2. Descargar todo de nuevo (ZIP)
3. Reemplazar toda la carpeta slides/
4. Renombrar todos
5. Continuar con tu trabajo
```

---

## 🔄 Si Ya Estás Editando Video

### ¿Qué pasa si ya importaste los slides al editor de video?

**Opción 1: Reemplazar en el editor**
1. Elimina el slide viejo del timeline
2. Importa el slide nuevo
3. Colócalo en la misma posición
4. Ajusta timing si es necesario

**Opción 2: Re-importar todo**
1. Guarda tu proyecto de edición
2. Reemplaza los PNG en la carpeta
3. El editor detectará los cambios
4. Puede que necesites "Recargar" o "Refresh"

**Opción 3: Empezar de nuevo (si es al inicio)**
1. Si apenas empezaste a editar
2. Mejor actualiza los PNG primero
3. Luego continúa editando

---

## ⚠️ Importante: Mantén Consistencia

### Antes de exportar, verifica:

- [ ] Todos los cambios están guardados en Canva
- [ ] Los colores son consistentes
- [ ] El texto es legible
- [ ] Las imágenes se ven bien
- [ ] No hay errores de ortografía

### Después de exportar:

- [ ] Descargaste en PNG (no JPG)
- [ ] Calidad es Alta
- [ ] Archivos están en la carpeta correcta
- [ ] Nombres son correctos
- [ ] Puedes abrir cada PNG sin problemas

---

## 🆘 Problemas Comunes

### "No sé cuál slide modifiqué"
✅ **Solución**:
- Revisa tu historial en Canva
- O descarga todos de nuevo
- Compara fechas de archivos

### "El editor de video no ve los cambios"
✅ **Solución**:
- Cierra y abre el proyecto
- O usa "Recargar medios" / "Reload media"
- O elimina y re-importa el slide

### "Descargué pero es el slide viejo"
✅ **Solución**:
- Verifica que guardaste cambios en Canva
- Refresca la página de Canva
- Intenta descargar de nuevo

### "No recuerdo qué número es cada slide"
✅ **Solución**:
- Usa la tabla de correspondencia arriba
- O abre cada PNG para verificar
- O mira el orden en Canva

---

## 📝 Checklist de Actualización

Cuando actualizas un slide:

```
□ Edité el slide en Canva
□ Guardé los cambios (Canva guarda automáticamente)
□ Descargué el slide actualizado (PNG, Alta calidad)
□ Identifiqué qué archivo es (usando tabla)
□ Eliminé el archivo viejo de video-produccion/slides/
□ Copié el nuevo archivo
□ Renombré con el nombre correcto
□ Verifiqué que se ve bien (abrí el PNG)
□ Si ya estoy editando video, actualicé en el editor
```

---

## 🎬 Para tu Proyecto Específico

### Ejemplo práctico:

**Situación**: Actualizaste el Slide 5 (Pregunta)

**Pasos:**
1. ✅ Editaste en Canva
2. ✅ Compartir → Descargar
3. ✅ PNG, Alta, **Página actual (5)**
4. ✅ Descargar
5. ✅ Archivo descargado: `Directorio-de-Talentos_5.png`
6. ✅ Ve a `video-produccion/slides/`
7. ✅ Elimina `05-pregunta.png` (viejo)
8. ✅ Copia el nuevo archivo
9. ✅ Renombra a `05-pregunta.png`
10. ✅ ¡Listo!

---

## 💾 Backup Recomendado

Antes de reemplazar archivos importantes:

```bash
# Crea carpeta de backup
video-produccion/
├── slides/              ← Versión actual
├── slides-v1/           ← Primera versión
├── slides-v2/           ← Segunda versión
└── slides-backup/       ← Backup general
```

Así siempre puedes volver atrás si algo sale mal.

---

## ✅ Resumen Ultra-Rápido

**Para actualizar 1 slide:**
```
1. Editar en Canva
2. Descargar → PNG → Página actual
3. Reemplazar archivo en video-produccion/slides/
4. Renombrar correctamente
5. ¡Listo!
```

**Para actualizar todos:**
```
1. Editar todos en Canva
2. Descargar → PNG → Todas las páginas
3. Extraer ZIP
4. Reemplazar todos en video-produccion/slides/
5. Renombrar todos
6. ¡Listo!
```

---

## 🎯 Siguiente Paso

Una vez actualizados tus slides:

1. ✅ Verifica que todos los PNG estén correctos
2. ✅ Continúa con la producción de video
3. ✅ Si ya estás editando, actualiza en el editor

---

**¡Ahora sabes cómo mantener tus slides actualizados! 🔄**

Recuerda: Canva no actualiza automáticamente los PNG descargados. Siempre debes volver a exportar después de editar.