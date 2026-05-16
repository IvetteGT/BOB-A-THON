// Sistema de almacenamiento híbrido: localStorage (local) o Supabase (online)

// Inicializar storage
async function initStorage() {
    if (isOnlineMode()) {
        // Modo online con Supabase
        if (!initSupabase()) {
            console.error('Failed to initialize Supabase');
            return false;
        }
        console.log('✅ Modo Online: Usando Supabase');
        return true;
    } else {
        // Modo local con localStorage
        if (!localStorage.getItem('profiles')) {
            localStorage.setItem('profiles', JSON.stringify([]));
        }
        if (!localStorage.getItem('ratings')) {
            localStorage.setItem('ratings', JSON.stringify([]));
        }
        if (!localStorage.getItem('myProfile')) {
            localStorage.setItem('myProfile', JSON.stringify(null));
        }
        console.log('📱 Modo Local: Usando localStorage');
        return true;
    }
}

// ==================== PERFILES ====================

// Obtener todos los perfiles
async function getAllProfiles() {
    if (isOnlineMode()) {
        try {
            const client = getSupabaseClient();
            const { data, error } = await client
                .from('profiles')
                .select('*')
                .order('created_at', { ascending: false });
            
            if (error) throw error;
            return data || [];
        } catch (error) {
            console.error('Error getting profiles:', error);
            return [];
        }
    } else {
        // Modo local
        await initStorage();
        const profiles = JSON.parse(localStorage.getItem('profiles') || '[]');
        const myProfile = JSON.parse(localStorage.getItem('myProfile'));
        
        if (myProfile) {
            return [myProfile, ...profiles];
        }
        return profiles;
    }
}

// Obtener perfil por ID
async function getProfileById(id) {
    if (isOnlineMode()) {
        try {
            const client = getSupabaseClient();
            const { data, error } = await client
                .from('profiles')
                .select('*')
                .eq('id', id)
                .single();
            
            if (error) throw error;
            return data;
        } catch (error) {
            console.error('Error getting profile:', error);
            return null;
        }
    } else {
        // Modo local
        const profiles = await getAllProfiles();
        return profiles.find(p => p.id === id);
    }
}

// Guardar mi perfil
async function saveMyProfile(profile) {
    if (isOnlineMode()) {
        try {
            const client = getSupabaseClient();
            // Verificar si el perfil ya existe
            const { data: existing } = await client
                .from('profiles')
                .select('id')
                .eq('id', profile.id)
                .single();
            
            if (existing) {
                // Actualizar perfil existente
                const { data, error } = await client
                    .from('profiles')
                    .update(profile)
                    .eq('id', profile.id)
                    .select()
                    .single();
                
                if (error) throw error;
                return data;
            } else {
                // Crear nuevo perfil
                const { data, error } = await client
                    .from('profiles')
                    .insert([profile])
                    .select()
                    .single();
                
                if (error) throw error;
                return data;
            }
        } catch (error) {
            console.error('Error saving profile:', error);
            return null;
        }
    } else {
        // Modo local
        localStorage.setItem('myProfile', JSON.stringify(profile));
        return profile;
    }
}

// Obtener mi perfil
async function getMyProfile() {
    if (isOnlineMode()) {
        try {
            const client = getSupabaseClient();
            // En modo online, obtenemos el perfil del usuario autenticado
            const { data: { user } } = await client.auth.getUser();
            
            if (!user) return null;
            
            const { data, error } = await client
                .from('profiles')
                .select('*')
                .eq('user_id', user.id)
                .single();
            
            if (error && error.code !== 'PGRST116') throw error; // PGRST116 = no rows
            return data;
        } catch (error) {
            console.error('Error getting my profile:', error);
            return null;
        }
    } else {
        // Modo local
        await initStorage();
        return JSON.parse(localStorage.getItem('myProfile'));
    }
}

// ==================== CALIFICACIONES ====================

// Obtener calificaciones por perfil
async function getRatingsByProfile(profileId) {
    if (isOnlineMode()) {
        try {
            const client = getSupabaseClient();
            const { data, error } = await client
                .from('ratings')
                .select('*')
                .eq('profile_id', profileId)
                .order('created_at', { ascending: false });
            
            if (error) throw error;
            return data || [];
        } catch (error) {
            console.error('Error getting ratings:', error);
            return [];
        }
    } else {
        // Modo local
        await initStorage();
        const ratings = JSON.parse(localStorage.getItem('ratings') || '[]');
        return ratings.filter(r => r.profileId === profileId);
    }
}

// Agregar calificación
async function addRating(profileId, rating) {
    if (isOnlineMode()) {
        try {
            const client = getSupabaseClient();
            const newRating = {
                profile_id: profileId,
                rating: rating.rating,
                comment: rating.comment,
                author_name: rating.authorName || 'Anónimo',
                created_at: new Date().toISOString()
            };
            
            const { data, error } = await client
                .from('ratings')
                .insert([newRating])
                .select()
                .single();
            
            if (error) throw error;
            return data;
        } catch (error) {
            console.error('Error adding rating:', error);
            return null;
        }
    } else {
        // Modo local
        await initStorage();
        const ratings = JSON.parse(localStorage.getItem('ratings') || '[]');
        const newRating = {
            id: 'rating-' + Date.now(),
            profileId: profileId,
            date: new Date().toISOString().split('T')[0],
            ...rating
        };
        ratings.push(newRating);
        localStorage.setItem('ratings', JSON.stringify(ratings));
        return newRating;
    }
}

// Calcular calificación promedio
function calculateAverageRating(ratings) {
    if (ratings.length === 0) return 0;
    const sum = ratings.reduce((acc, r) => acc + r.rating, 0);
    return sum / ratings.length;
}

// ==================== AUTENTICACIÓN (Solo Online) ====================

// Registrar usuario
async function signUp(email, password) {
    if (!isOnlineMode()) {
        console.log('Authentication only available in online mode');
        return { error: 'Online mode required' };
    }
    
    try {
        const client = getSupabaseClient();
        const { data, error } = await client.auth.signUp({
            email: email,
            password: password
        });
        
        if (error) throw error;
        return { data, error: null };
    } catch (error) {
        console.error('Error signing up:', error);
        return { data: null, error };
    }
}

// Iniciar sesión
async function signIn(email, password) {
    if (!isOnlineMode()) {
        console.log('Authentication only available in online mode');
        return { error: 'Online mode required' };
    }
    
    try {
        const client = getSupabaseClient();
        const { data, error } = await client.auth.signInWithPassword({
            email: email,
            password: password
        });
        
        if (error) throw error;
        return { data, error: null };
    } catch (error) {
        console.error('Error signing in:', error);
        return { data: null, error };
    }
}

// Cerrar sesión
async function signOut() {
    if (!isOnlineMode()) return;
    
    try {
        const client = getSupabaseClient();
        const { error } = await client.auth.signOut();
        if (error) throw error;
    } catch (error) {
        console.error('Error signing out:', error);
    }
}

// Obtener usuario actual
async function getCurrentUser() {
    if (!isOnlineMode()) return null;
    
    try {
        const client = getSupabaseClient();
        const { data: { user } } = await client.auth.getUser();
        return user;
    } catch (error) {
        console.error('Error getting current user:', error);
        return null;
    }
}

// Made with Bob
