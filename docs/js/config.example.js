// Configuración de Supabase - PLANTILLA
// INSTRUCCIONES:
// 1. Copia este archivo y renómbralo a "config.js"
// 2. Reemplaza los valores con tus credenciales de Supabase
// 3. NO subas config.js con credenciales reales a GitHub

const SUPABASE_CONFIG = {
    url: 'TU_SUPABASE_URL', // Ejemplo: https://xxxxx.supabase.co
    anonKey: 'TU_SUPABASE_ANON_KEY' // Tu clave pública (anon key)
};

// Inicializar cliente de Supabase
let supabase = null;

function initSupabase() {
    if (typeof supabase === 'undefined' || supabase === null) {
        // Verificar que la librería de Supabase esté cargada
        if (typeof window.supabase === 'undefined') {
            console.error('Supabase library not loaded');
            return false;
        }
        
        // Crear cliente de Supabase
        supabase = window.supabase.createClient(
            SUPABASE_CONFIG.url,
            SUPABASE_CONFIG.anonKey
        );
    }
    return true;
}

// Verificar si estamos en modo online o local
function isOnlineMode() {
    return SUPABASE_CONFIG.url !== 'TU_SUPABASE_URL' && 
           SUPABASE_CONFIG.anonKey !== 'TU_SUPABASE_ANON_KEY';
}

// Made with Bob