# Plan de Implementación: Directorio de Talentos

## 📋 Resumen del Proyecto

**Nombre**: Directorio de Talentos  
**Tiempo estimado**: 6-8 horas  
**Objetivo**: Catálogo simple de vecinos con sus habilidades y contacto directo  
**Stack**: Vue.js + Vuetify + Supabase

---

## 🎯 Funcionalidades Core

### MVP Mínimo
1. ✅ Registro de usuario con 1 habilidad
2. ✅ Búsqueda de habilidades
3. ✅ Ver perfil con contacto
4. ✅ Sistema de calificación simple (1-5 estrellas)

### Fuera del Alcance (NO hacer)
- ❌ Chat integrado
- ❌ Sistema de reservas
- ❌ Pagos
- ❌ Múltiples habilidades por usuario
- ❌ Verificación de identidad

---

## 🗂️ Estructura de Base de Datos (Supabase)

### Tabla: `profiles`
```sql
CREATE TABLE profiles (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  full_name TEXT NOT NULL,
  skill TEXT NOT NULL,
  description TEXT,
  phone TEXT,
  email TEXT,
  neighborhood TEXT,
  avatar_url TEXT,
  created_at TIMESTAMP DEFAULT NOW(),
  UNIQUE(user_id)
);
```

### Tabla: `ratings`
```sql
CREATE TABLE ratings (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  profile_id UUID REFERENCES profiles(id) ON DELETE CASCADE,
  rated_by UUID REFERENCES auth.users(id),
  rating INTEGER CHECK (rating >= 1 AND rating <= 5),
  comment TEXT,
  created_at TIMESTAMP DEFAULT NOW(),
  UNIQUE(profile_id, rated_by)
);
```

### Vista: `profiles_with_ratings`
```sql
CREATE VIEW profiles_with_ratings AS
SELECT 
  p.*,
  COALESCE(AVG(r.rating), 0) as avg_rating,
  COUNT(r.id) as rating_count
FROM profiles p
LEFT JOIN ratings r ON p.id = r.profile_id
GROUP BY p.id;
```

---

## 📁 Estructura del Proyecto

```
directorio-talentos/
├── public/
│   └── favicon.ico
├── src/
│   ├── assets/
│   │   └── logo.png
│   ├── components/
│   │   ├── ProfileCard.vue
│   │   ├── SearchBar.vue
│   │   ├── RatingStars.vue
│   │   └── ProfileForm.vue
│   ├── views/
│   │   ├── Home.vue
│   │   ├── Profile.vue
│   │   └── MyProfile.vue
│   ├── router/
│   │   └── index.js
│   ├── supabase/
│   │   └── client.js
│   ├── App.vue
│   └── main.js
├── .env
├── package.json
└── vite.config.js
```

---

## ⏱️ Plan Hora por Hora

### **HORA 0-1: Setup del Proyecto**

#### Paso 1: Crear cuenta Supabase (10 min)
1. Ir a [supabase.com](https://supabase.com)
2. Crear cuenta gratuita
3. Crear nuevo proyecto: "directorio-talentos"
4. Guardar URL y API Key (anon public)

#### Paso 2: Configurar Base de Datos (15 min)
1. En Supabase Dashboard → SQL Editor
2. Ejecutar scripts de creación de tablas (arriba)
3. Habilitar Row Level Security (RLS):
```sql
-- Permitir lectura pública de perfiles
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Perfiles públicos" ON profiles FOR SELECT USING (true);
CREATE POLICY "Usuarios pueden crear su perfil" ON profiles FOR INSERT WITH CHECK (auth.uid() = user_id);
CREATE POLICY "Usuarios pueden actualizar su perfil" ON profiles FOR UPDATE USING (auth.uid() = user_id);

-- Permitir calificaciones
ALTER TABLE ratings ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Calificaciones públicas" ON ratings FOR SELECT USING (true);
CREATE POLICY "Usuarios pueden calificar" ON ratings FOR INSERT WITH CHECK (auth.uid() = rated_by);
```

#### Paso 3: Crear Proyecto Vue (20 min)
```bash
# Crear proyecto con Vite
npm create vite@latest directorio-talentos -- --template vue
cd directorio-talentos

# Instalar dependencias
npm install

# Instalar Vuetify
npm install vuetify @mdi/font
npm install @supabase/supabase-js

# Instalar Vue Router
npm install vue-router@4
```

#### Paso 4: Configurar Vuetify (15 min)
```javascript
// src/main.js
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import '@mdi/font/css/materialdesignicons.css'

const vuetify = createVuetify({
  components,
  directives,
  theme: {
    defaultTheme: 'light',
    themes: {
      light: {
        colors: {
          primary: '#2563eb',
          secondary: '#64748b',
          accent: '#10b981',
        }
      }
    }
  }
})

createApp(App)
  .use(router)
  .use(vuetify)
  .mount('#app')
```

---

### **HORA 1-2: Configuración de Supabase y Auth**

#### Paso 1: Cliente Supabase (10 min)
```javascript
// src/supabase/client.js
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
```

```env
# .env
VITE_SUPABASE_URL=tu-url-de-supabase
VITE_SUPABASE_ANON_KEY=tu-anon-key
```

#### Paso 2: Router (15 min)
```javascript
// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Profile from '../views/Profile.vue'
import MyProfile from '../views/MyProfile.vue'

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/profile/:id', name: 'Profile', component: Profile },
  { path: '/my-profile', name: 'MyProfile', component: MyProfile }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
```

#### Paso 3: App.vue con Navbar (25 min)
```vue
<!-- src/App.vue -->
<template>
  <v-app>
    <v-app-bar color="primary" dark>
      <v-toolbar-title>🎯 Directorio de Talentos</v-toolbar-title>
      <v-spacer></v-spacer>
      
      <v-btn v-if="!user" @click="signIn" text>
        Iniciar Sesión
      </v-btn>
      
      <template v-else>
        <v-btn to="/my-profile" text>Mi Perfil</v-btn>
        <v-btn @click="signOut" text>Salir</v-btn>
      </template>
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { supabase } from './supabase/client'

const user = ref(null)

onMounted(async () => {
  const { data } = await supabase.auth.getSession()
  user.value = data.session?.user || null

  supabase.auth.onAuthStateChange((event, session) => {
    user.value = session?.user || null
  })
})

async function signIn() {
  await supabase.auth.signInWithOAuth({
    provider: 'google'
  })
}

async function signOut() {
  await supabase.auth.signOut()
}
</script>
```

#### Paso 4: Habilitar Google Auth en Supabase (10 min)
1. Supabase Dashboard → Authentication → Providers
2. Habilitar Google
3. Configurar OAuth (usar credenciales de Google Cloud Console)

---

### **HORA 2-3: Componente de Búsqueda**

#### SearchBar.vue (30 min)
```vue
<!-- src/components/SearchBar.vue -->
<template>
  <v-card class="mx-auto my-4" max-width="800">
    <v-card-text>
      <v-text-field
        v-model="searchQuery"
        label="Buscar habilidad"
        prepend-inner-icon="mdi-magnify"
        variant="outlined"
        clearable
        @input="$emit('search', searchQuery)"
      ></v-text-field>
      
      <v-chip-group>
        <v-chip
          v-for="skill in popularSkills"
          :key="skill"
          @click="selectSkill(skill)"
          variant="outlined"
        >
          {{ skill }}
        </v-chip>
      </v-chip-group>
    </v-card-text>
  </v-card>
</template>

<script setup>
import { ref } from 'vue'

const searchQuery = ref('')
const popularSkills = [
  'Plomería', 'Electricidad', 'Carpintería', 
  'Clases de Inglés', 'Cuidado de Niños', 
  'Reparación de Computadoras', 'Jardinería'
]

const emit = defineEmits(['search'])

function selectSkill(skill) {
  searchQuery.value = skill
  emit('search', skill)
}
</script>
```

#### ProfileCard.vue (30 min)
```vue
<!-- src/components/ProfileCard.vue -->
<template>
  <v-card class="mb-4" elevation="2">
    <v-card-text>
      <div class="d-flex align-center mb-2">
        <v-avatar color="primary" size="48" class="mr-3">
          <span class="text-h6">{{ initials }}</span>
        </v-avatar>
        <div>
          <div class="text-h6">{{ profile.full_name }}</div>
          <div class="text-subtitle-2 text-grey">{{ profile.skill }}</div>
        </div>
      </div>

      <v-rating
        :model-value="profile.avg_rating"
        readonly
        density="compact"
        size="small"
      ></v-rating>
      <span class="text-caption ml-2">
        ({{ profile.rating_count }} valoraciones)
      </span>

      <p class="mt-2 text-body-2">{{ profile.description }}</p>

      <v-divider class="my-2"></v-divider>

      <div class="d-flex justify-space-between align-center">
        <div>
          <v-icon size="small">mdi-map-marker</v-icon>
          <span class="text-caption ml-1">{{ profile.neighborhood }}</span>
        </div>
        <v-btn
          color="primary"
          variant="outlined"
          size="small"
          :to="`/profile/${profile.id}`"
        >
          Ver Perfil
        </v-btn>
      </div>
    </v-card-text>
  </v-card>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  profile: {
    type: Object,
    required: true
  }
})

const initials = computed(() => {
  return props.profile.full_name
    .split(' ')
    .map(n => n[0])
    .join('')
    .toUpperCase()
    .slice(0, 2)
})
</script>
```

---

### **HORA 3-4: Vista Home (Lista de Perfiles)**

```vue
<!-- src/views/Home.vue -->
<template>
  <v-container>
    <div class="text-center my-8">
      <h1 class="text-h3 mb-2">🎯 Directorio de Talentos</h1>
      <p class="text-h6 text-grey">
        Encuentra vecinos con habilidades que necesitas
      </p>
    </div>

    <SearchBar @search="handleSearch" />

    <v-row v-if="loading" justify="center">
      <v-progress-circular indeterminate color="primary"></v-progress-circular>
    </v-row>

    <v-row v-else>
      <v-col
        v-for="profile in filteredProfiles"
        :key="profile.id"
        cols="12"
        md="6"
      >
        <ProfileCard :profile="profile" />
      </v-col>
    </v-row>

    <v-alert v-if="!loading && filteredProfiles.length === 0" type="info">
      No se encontraron perfiles con esa habilidad
    </v-alert>
  </v-container>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue'
import { supabase } from '../supabase/client'
import SearchBar from '../components/SearchBar.vue'
import ProfileCard from '../components/ProfileCard.vue'

const profiles = ref([])
const loading = ref(true)
const searchQuery = ref('')

onMounted(async () => {
  await loadProfiles()
})

async function loadProfiles() {
  loading.value = true
  const { data, error } = await supabase
    .from('profiles_with_ratings')
    .select('*')
    .order('avg_rating', { ascending: false })

  if (error) {
    console.error('Error loading profiles:', error)
  } else {
    profiles.value = data
  }
  loading.value = false
}

function handleSearch(query) {
  searchQuery.value = query
}

const filteredProfiles = computed(() => {
  if (!searchQuery.value) return profiles.value
  
  const query = searchQuery.value.toLowerCase()
  return profiles.value.filter(p => 
    p.skill.toLowerCase().includes(query) ||
    p.full_name.toLowerCase().includes(query) ||
    p.description?.toLowerCase().includes(query)
  )
})
</script>
```

---

### **HORA 4-5: Vista de Perfil Individual**

```vue
<!-- src/views/Profile.vue -->
<template>
  <v-container>
    <v-card v-if="profile" class="mx-auto" max-width="800">
      <v-card-text>
        <div class="text-center mb-4">
          <v-avatar color="primary" size="120">
            <span class="text-h3">{{ initials }}</span>
          </v-avatar>
          <h2 class="text-h4 mt-4">{{ profile.full_name }}</h2>
          <p class="text-h6 text-primary">{{ profile.skill }}</p>
          
          <v-rating
            :model-value="profile.avg_rating"
            readonly
            size="large"
          ></v-rating>
          <p class="text-caption">
            {{ profile.rating_count }} valoraciones
          </p>
        </div>

        <v-divider class="my-4"></v-divider>

        <div class="mb-4">
          <h3 class="text-h6 mb-2">Descripción</h3>
          <p>{{ profile.description || 'Sin descripción' }}</p>
        </div>

        <div class="mb-4">
          <h3 class="text-h6 mb-2">Información de Contacto</h3>
          <v-list>
            <v-list-item>
              <template v-slot:prepend>
                <v-icon>mdi-phone</v-icon>
              </template>
              <v-list-item-title>{{ profile.phone }}</v-list-item-title>
            </v-list-item>
            <v-list-item>
              <template v-slot:prepend>
                <v-icon>mdi-email</v-icon>
              </template>
              <v-list-item-title>{{ profile.email }}</v-list-item-title>
            </v-list-item>
            <v-list-item>
              <template v-slot:prepend>
                <v-icon>mdi-map-marker</v-icon>
              </template>
              <v-list-item-title>{{ profile.neighborhood }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </div>

        <v-divider class="my-4"></v-divider>

        <div v-if="canRate">
          <h3 class="text-h6 mb-2">Calificar</h3>
          <v-rating
            v-model="newRating"
            hover
            size="large"
          ></v-rating>
          <v-textarea
            v-model="newComment"
            label="Comentario (opcional)"
            rows="3"
            variant="outlined"
            class="mt-2"
          ></v-textarea>
          <v-btn
            color="primary"
            @click="submitRating"
            :loading="submitting"
            :disabled="!newRating"
          >
            Enviar Calificación
          </v-btn>
        </div>

        <div class="mt-4">
          <h3 class="text-h6 mb-2">Calificaciones</h3>
          <v-list v-if="ratings.length > 0">
            <v-list-item v-for="rating in ratings" :key="rating.id">
              <v-rating
                :model-value="rating.rating"
                readonly
                density="compact"
                size="small"
              ></v-rating>
              <p class="text-body-2 mt-1">{{ rating.comment }}</p>
              <p class="text-caption text-grey">
                {{ formatDate(rating.created_at) }}
              </p>
            </v-list-item>
          </v-list>
          <p v-else class="text-grey">Sin calificaciones aún</p>
        </div>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue'
import { useRoute } from 'vue-router'
import { supabase } from '../supabase/client'

const route = useRoute()
const profile = ref(null)
const ratings = ref([])
const currentUser = ref(null)
const newRating = ref(0)
const newComment = ref('')
const submitting = ref(false)

onMounted(async () => {
  const { data: { user } } = await supabase.auth.getUser()
  currentUser.value = user

  await loadProfile()
  await loadRatings()
})

async function loadProfile() {
  const { data, error } = await supabase
    .from('profiles_with_ratings')
    .select('*')
    .eq('id', route.params.id)
    .single()

  if (error) {
    console.error('Error loading profile:', error)
  } else {
    profile.value = data
  }
}

async function loadRatings() {
  const { data, error } = await supabase
    .from('ratings')
    .select('*')
    .eq('profile_id', route.params.id)
    .order('created_at', { ascending: false })

  if (error) {
    console.error('Error loading ratings:', error)
  } else {
    ratings.value = data
  }
}

async function submitRating() {
  if (!currentUser.value) {
    alert('Debes iniciar sesión para calificar')
    return
  }

  submitting.value = true
  const { error } = await supabase
    .from('ratings')
    .insert({
      profile_id: route.params.id,
      rated_by: currentUser.value.id,
      rating: newRating.value,
      comment: newComment.value
    })

  if (error) {
    console.error('Error submitting rating:', error)
    alert('Error al enviar calificación')
  } else {
    newRating.value = 0
    newComment.value = ''
    await loadProfile()
    await loadRatings()
  }
  submitting.value = false
}

const initials = computed(() => {
  if (!profile.value) return ''
  return profile.value.full_name
    .split(' ')
    .map(n => n[0])
    .join('')
    .toUpperCase()
    .slice(0, 2)
})

const canRate = computed(() => {
  return currentUser.value && 
         currentUser.value.id !== profile.value?.user_id
})

function formatDate(date) {
  return new Date(date).toLocaleDateString('es-ES', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}
</script>
```

---

### **HORA 5-6: Vista Mi Perfil (Crear/Editar)**

```vue
<!-- src/views/MyProfile.vue -->
<template>
  <v-container>
    <v-card class="mx-auto" max-width="800">
      <v-card-title>
        <span class="text-h5">
          {{ hasProfile ? 'Editar Mi Perfil' : 'Crear Mi Perfil' }}
        </span>
      </v-card-title>

      <v-card-text>
        <v-form @submit.prevent="saveProfile">
          <v-text-field
            v-model="form.full_name"
            label="Nombre Completo"
            required
            variant="outlined"
          ></v-text-field>

          <v-text-field
            v-model="form.skill"
            label="Tu Habilidad Principal"
            required
            variant="outlined"
            hint="Ejemplo: Plomería, Clases de Inglés, Carpintería"
          ></v-text-field>

          <v-textarea
            v-model="form.description"
            label="Descripción"
            rows="4"
            variant="outlined"
            hint="Cuéntanos sobre tu experiencia"
          ></v-textarea>

          <v-text-field
            v-model="form.phone"
            label="Teléfono"
            required
            variant="outlined"
            type="tel"
          ></v-text-field>

          <v-text-field
            v-model="form.email"
            label="Email"
            required
            variant="outlined"
            type="email"
          ></v-text-field>

          <v-text-field
            v-model="form.neighborhood"
            label="Barrio/Colonia"
            required
            variant="outlined"
          ></v-text-field>

          <v-btn
            type="submit"
            color="primary"
            block
            size="large"
            :loading="saving"
          >
            {{ hasProfile ? 'Actualizar Perfil' : 'Crear Perfil' }}
          </v-btn>
        </v-form>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { supabase } from '../supabase/client'

const router = useRouter()
const hasProfile = ref(false)
const saving = ref(false)
const form = ref({
  full_name: '',
  skill: '',
  description: '',
  phone: '',
  email: '',
  neighborhood: ''
})

onMounted(async () => {
  const { data: { user } } = await supabase.auth.getUser()
  
  if (!user) {
    router.push('/')
    return
  }

  // Cargar perfil existente
  const { data, error } = await supabase
    .from('profiles')
    .select('*')
    .eq('user_id', user.id)
    .single()

  if (data) {
    hasProfile.value = true
    form.value = { ...data }
  } else {
    // Pre-llenar email del usuario
    form.value.email = user.email
  }
})

async function saveProfile() {
  const { data: { user } } = await supabase.auth.getUser()
  
  if (!user) return

  saving.value = true

  const profileData = {
    ...form.value,
    user_id: user.id
  }

  let error
  if (hasProfile.value) {
    // Actualizar
    const result = await supabase
      .from('profiles')
      .update(profileData)
      .eq('user_id', user.id)
    error = result.error
  } else {
    // Crear
    const result = await supabase
      .from('profiles')
      .insert(profileData)
    error = result.error
  }

  if (error) {
    console.error('Error saving profile:', error)
    alert('Error al guardar perfil')
  } else {
    alert('Perfil guardado exitosamente')
    router.push('/')
  }

  saving.value = false
}
</script>
```

---

### **HORA 6-7: Testing y Datos de Prueba**

#### Crear Datos de Prueba (30 min)
```sql
-- Ejecutar en Supabase SQL Editor
-- Nota: Necesitas crear usuarios reales primero con Google Auth

INSERT INTO profiles (user_id, full_name, skill, description, phone, email, neighborhood) VALUES
('user-id-1', 'Juan Pérez', 'Plomería', 'Plomero con 15 años de experiencia. Reparaciones y mantenimiento.', '999-888-777', 'juan@email.com', 'Villa El Salvador'),
('user-id-2', 'María García', 'Clases de Inglés', 'Profesora certificada. Clases para niños y adultos.', '888-777-666', 'maria@email.com', 'San Juan de Miraflores'),
('user-id-3', 'Carlos López', 'Electricidad', 'Instalaciones eléctricas y reparaciones. Certificado.', '777-666-555', 'carlos@email.com', 'Surco'),
('user-id-4', 'Ana Martínez', 'Cuidado de Niños', 'Niñera con experiencia. Referencias disponibles.', '666-555-444', 'ana@email.com', 'Miraflores'),
('user-id-5', 'Pedro Sánchez', 'Carpintería', 'Muebles a medida y reparaciones. Trabajo garantizado.', '555-444-333', 'pedro@email.com', 'Barranco');

-- Agregar calificaciones de ejemplo
INSERT INTO ratings (profile_id, rated_by, rating, comment) VALUES
('profile-id-1', 'user-id-2', 5, 'Excelente trabajo, muy profesional'),
('profile-id-1', 'user-id-3', 5, 'Rápido y eficiente'),
('profile-id-2', 'user-id-1', 4, 'Muy buena profesora, paciente'),
('profile-id-3', 'user-id-4', 5, 'Resolvió el problema rápidamente');
```

#### Testing Manual (30 min)
- [ ] Registro de nuevo usuario
- [ ] Crear perfil
- [ ] Buscar habilidades
- [ ] Ver perfil de otro usuario
- [ ] Calificar a otro usuario
- [ ] Editar mi perfil
- [ ] Cerrar sesión
- [ ] Responsive en móvil

---

### **HORA 7-8: Deploy y Preparación de Pitch**

#### Deploy en Vercel (20 min)
```bash
# Instalar Vercel CLI
npm i -g vercel

# Deploy
vercel

# Configurar variables de entorno en Vercel Dashboard
# VITE_SUPABASE_URL
# VITE_SUPABASE_ANON_KEY
```

#### Video Demo (20 min)
**Guión (1 minuto)**:
1. Mostrar home con perfiles (5 seg)
2. Buscar "plomería" (5 seg)
3. Ver perfil de Juan (10 seg)
4. Mostrar contacto y calificaciones (10 seg)
5. Crear mi perfil (20 seg)
6. Aparecer en búsqueda (10 seg)

#### Pitch Deck (20 min)
**5 Slides**:
1. **Problema**: 60% de latinoamericanos busca servicios locales sin referencias
2. **Solución**: Directorio de talentos con calificaciones comunitarias
3. **Demo**: Screenshots clave
4. **Impacto**: Economía local + confianza + empleo
5. **Equipo y Próximos Pasos**

---

## 🎨 Mejoras Opcionales (Si sobra tiempo)

### Prioridad Alta (30 min cada una)
- [ ] Filtro por barrio
- [ ] Ordenar por calificación/recientes
- [ ] Compartir perfil (botón compartir)
- [ ] Modo oscuro

### Prioridad Media (1 hora cada una)
- [ ] Subir foto de perfil
- [ ] Múltiples habilidades por usuario
- [ ] Estadísticas (total usuarios, habilidades)
- [ ] Notificaciones de nuevas calificaciones

---

## 📊 Checklist de Completitud

### Funcionalidades Core
- [ ] ✅ Autenticación con Google
- [ ] ✅ Crear/editar perfil
- [ ] ✅ Buscar por habilidad
- [ ] ✅ Ver perfil completo
- [ ] ✅ Sistema de calificaciones
- [ ] ✅ Contacto directo visible

### Técnico
- [ ] ✅ Base de datos configurada
- [ ] ✅ RLS habilitado
- [ ] ✅ Responsive design
- [ ] ✅ Manejo de errores
- [ ] ✅ Loading states

### Presentación
- [ ] ✅ Deploy funcionando
- [ ] ✅ Datos de prueba
- [ ] ✅ Video demo
- [ ] ✅ Pitch deck
- [ ] ✅ README con instrucciones

---

## 🎯 Estructura del Pitch (3 minutos)

### Minuto 1: Problema
> "En América Latina, cuando necesitas un plomero, electricista o profesor, ¿a quién llamas? El 60% de las personas no tiene referencias confiables. Contratan a desconocidos, arriesgan su dinero y seguridad. Mientras tanto, vecinos talentosos buscan trabajo sin poder demostrar su experiencia."

### Minuto 2: Solución + Demo
> "Directorio de Talentos conecta vecinos con habilidades verificadas por la comunidad."

**[DEMO EN VIVO - 45 segundos]**
1. "Necesito un plomero" → Buscar
2. Mostrar Juan con 5 estrellas y 12 calificaciones
3. Ver contacto directo
4. Leer comentarios reales
5. "Así de simple. Así de confiable."

### Minuto 3: Impacto
> "En 6 horas construimos esto. Imaginen en 6 meses:
> - 10,000 vecinos registrados
> - 50 barrios conectados
> - Economía local fortalecida
> - Confianza comunitaria restaurada
> 
> No necesitamos intermediarios costosos. Necesitamos confiar en nuestros vecinos. Y eso empieza con un directorio simple."

---

## 💡 Tips Finales

### Durante el Desarrollo
1. **Commit frecuente**: Cada feature completada
2. **Probar en móvil**: Desde el inicio
3. **Datos realistas**: Nombres y habilidades locales
4. **Simplicidad**: Si algo toma >30 min, simplificar

### Durante la Presentación
1. **Internet backup**: Hotspot móvil listo
2. **Video demo**: Por si falla conexión
3. **Datos frescos**: Limpiar y recargar antes de demo
4. **Confianza**: Practicar demo 5+ veces

### Diferenciadores Clave
- ✅ **Calificaciones comunitarias** (no anónimas)
- ✅ **Contacto directo** (sin intermediarios)
- ✅ **Hiperlocal** (por barrio)
- ✅ **Gratuito** (sin comisiones)

---

## 🎉 ¡Éxito!

Con este plan tienes todo lo necesario para crear "Directorio de Talentos" en 6-8 horas. El proyecto es simple pero impactante, técnicamente sólido y con una demo memorable.

**Recuerda**: La simplicidad es tu ventaja. No agregues features innecesarias. Enfócate en ejecutar perfectamente las funcionalidades core.

---

*¿Listo para empezar? ¡Manos a la obra! 🚀*