// Configuración de Supabase
// IMPORTANTE: Reemplaza estos valores con los de tu proyecto en https://supabase.com

const SUPABASE_CONFIG = {
    url: 'https://tzgnofmairxletvhyshg.supabase.co', // Ejemplo: https://xxxxx.supabase.co
    anonKey: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InR6Z25vZm1haXJ4bGV0dmh5c2hnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzg4NjQxODMsImV4cCI6MjA5NDQ0MDE4M30.t7OFWuW3R6HuxStv8TQg47gnoyJPd7UY5cYbKQDlcKo' // Tu clave pública (anon key)
};

// Inicializar cliente de Supabase
let supabaseClient = null;

function initSupabase() {
    if (supabaseClient === null) {
        // Verificar que la librería de Supabase esté cargada
        if (typeof window.supabase === 'undefined') {
            console.error('Supabase library not loaded');
            return false;
        }
        
        // Crear cliente de Supabase
        supabaseClient = window.supabase.createClient(
            SUPABASE_CONFIG.url,
            SUPABASE_CONFIG.anonKey
        );
    }
    return true;
}

// Obtener el cliente de Supabase
function getSupabaseClient() {
    return supabaseClient;
}

// Verificar si estamos en modo online o local
function isOnlineMode() {
    return SUPABASE_CONFIG.url !== 'TU_SUPABASE_URL' && 
           SUPABASE_CONFIG.anonKey !== 'TU_SUPABASE_ANON_KEY';
}

// Made with Bob