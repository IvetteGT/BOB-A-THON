# 🌐 Cómo Activar GitHub Pages - Guía Visual

## 📍 Dónde Encontrar Settings en GitHub

### Paso 1: Ve a tu Repositorio

1. Abre tu navegador
2. Ve a: **https://github.com/IvetteGT/BOB-A-THON**
3. Deberías ver tu repositorio

### Paso 2: Encontrar Settings

```
┌─────────────────────────────────────────────────────┐
│  IvetteGT / BOB-A-THON                              │
│                                                     │
│  [Code] [Issues] [Pull requests] [Actions] [Settings] ← AQUÍ
│  ─────  ────────  ──────────────  ─────────  ────────│
└─────────────────────────────────────────────────────┘
```

**Settings está en la barra superior, a la derecha, junto a:**
- Code (izquierda)
- Issues
- Pull requests
- Actions
- **Settings** ← El último tab

### Paso 3: Ir a Pages

Una vez en Settings:

```
Settings (menú lateral izquierdo)
├── General
├── Access
│   ├── Collaborators
│   └── Moderation
├── Code and automation
│   ├── Branches
│   ├── Tags
│   ├── Actions
│   ├── Webhooks
│   └── Pages  ← CLICK AQUÍ
└── ...
```

**Pages está en el menú lateral izquierdo, en la sección "Code and automation"**

---

## 🚀 Activar GitHub Pages (Paso a Paso)

### Paso 1: Ir a Settings → Pages

1. **Ve a tu repo:** https://github.com/IvetteGT/BOB-A-THON
2. **Click en "Settings"** (tab superior derecho)
3. **En el menú izquierdo, busca "Pages"** (sección Code and automation)
4. **Click en "Pages"**

### Paso 2: Configurar Source

Verás una página que dice "GitHub Pages":

```
┌─────────────────────────────────────────┐
│  GitHub Pages                           │
│                                         │
│  Source                                 │
│  ┌─────────────────────────────────┐   │
│  │ Deploy from a branch        ▼   │   │ ← Click aquí
│  └─────────────────────────────────┘   │
│                                         │
│  Branch                                 │
│  ┌──────────┐  ┌──────────┐           │
│  │ master ▼ │  │ /docs  ▼ │  [Save]   │ ← Selecciona estos
│  └──────────┘  └──────────┘           │
└─────────────────────────────────────────┘
```

**Configuración:**
1. **Source:** Deploy from a branch
2. **Branch:** master
3. **Folder:** /docs
4. **Click "Save"**

### Paso 3: Esperar

Después de guardar:
- GitHub procesará tu sitio (1-2 minutos)
- Verás un mensaje: "Your site is ready to be published"
- Luego cambiará a: "Your site is live at..."

### Paso 4: Ver tu Sitio

Tu presentación estará en:
```
https://ivettegt.github.io/BOB-A-THON/presentacion/
```

---

## 📸 Guía Visual Detallada

### 1. Página Principal del Repo

```
┌──────────────────────────────────────────────────────────┐
│  GitHub                                    [Tu Avatar]    │
├──────────────────────────────────────────────────────────┤
│  IvetteGT / BOB-A-THON                    ⭐ Star        │
│                                                          │
│  [<> Code] [Issues] [Pull requests] [Actions] [Settings] │
│   ↑                                              ↑       │
│   Estás aquí normalmente              Click aquí         │
└──────────────────────────────────────────────────────────┘
```

### 2. Página de Settings

```
┌──────────────────────────────────────────────────────────┐
│  Settings                                                │
├────────────────┬─────────────────────────────────────────┤
│ General        │  Repository name                        │
│ Access         │  BOB-A-THON                            │
│ ├ Collaborators│                                         │
│ └ Moderation   │  Description                           │
│                │  [Add description]                      │
│ Code and auto  │                                         │
│ ├ Branches     │  ...                                    │
│ ├ Tags         │                                         │
│ ├ Actions      │                                         │
│ ├ Webhooks     │                                         │
│ └ Pages  ←─────┼─ CLICK AQUÍ                            │
│                │                                         │
│ Security       │                                         │
└────────────────┴─────────────────────────────────────────┘
```

### 3. Página de GitHub Pages

```
┌──────────────────────────────────────────────────────────┐
│  Pages                                                   │
├──────────────────────────────────────────────────────────┤
│                                                          │
│  GitHub Pages                                            │
│  ────────────                                            │
│                                                          │
│  Build and deployment                                    │
│                                                          │
│  Source                                                  │
│  ┌────────────────────────────────────────┐             │
│  │ Deploy from a branch              [▼]  │             │
│  └────────────────────────────────────────┘             │
│                                                          │
│  Branch                                                  │
│  ┌─────────────┐  ┌─────────────┐                      │
│  │ master  [▼] │  │ /docs   [▼] │  [Save]              │
│  └─────────────┘  └─────────────┘                      │
│                                                          │
│  ✓ Your site is live at                                 │
│    https://ivettegt.github.io/BOB-A-THON/               │
│                                                          │
└──────────────────────────────────────────────────────────┘
```

---

## ✅ Checklist Rápido

```
□ Ir a https://github.com/IvetteGT/BOB-A-THON
□ Click en "Settings" (tab superior)
□ En menú izquierdo, buscar "Pages"
□ Click en "Pages"
□ Source: Deploy from a branch
□ Branch: master
□ Folder: /docs
□ Click "Save"
□ Esperar 1-2 minutos
□ Verificar que diga "Your site is live"
□ Abrir: https://ivettegt.github.io/BOB-A-THON/presentacion/
```

---

## 🆘 Si No Encuentras Settings

### Posibles Razones:

1. **No tienes permisos:**
   - Debes ser el dueño del repositorio
   - O tener permisos de admin

2. **Estás en otro lugar:**
   - Asegúrate de estar en: github.com/IvetteGT/BOB-A-THON
   - No en github.com/IvetteGT (tu perfil)

3. **Settings está oculto:**
   - Haz scroll horizontal en los tabs
   - O reduce el zoom del navegador (Ctrl + -)

### Solución:

1. Ve directamente a:
   ```
   https://github.com/IvetteGT/BOB-A-THON/settings/pages
   ```

2. Esto te llevará directo a la página de GitHub Pages

---

## 🎯 Después de Activar

### Tu presentación estará en:
```
https://ivettegt.github.io/BOB-A-THON/presentacion/
```

### Tu aplicación estará en:
```
https://ivettegt.github.io/BOB-A-THON/directorio-talentos/docs/
```

---

## 💡 Tips

1. **Primera vez puede tardar:**
   - 2-5 minutos en activarse
   - Refresca la página de Settings → Pages

2. **Si no funciona:**
   - Verifica que la carpeta docs/ exista
   - Verifica que docs/presentacion/index.html exista
   - Espera unos minutos más

3. **Para actualizar:**
   - Solo haz push de cambios
   - GitHub Pages se actualiza automáticamente

---

## 📞 Link Directo

**Para ir directo a configurar Pages:**

https://github.com/IvetteGT/BOB-A-THON/settings/pages

Copia y pega este link en tu navegador.

---

**¡Listo! Tu presentación estará online en minutos! 🚀**