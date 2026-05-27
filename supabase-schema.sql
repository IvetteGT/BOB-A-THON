-- Esquema de base de datos para Directorio de Talentos en Supabase
-- Ejecuta este script en el SQL Editor de tu proyecto Supabase

-- ==================== TABLA DE PERFILES ====================
CREATE TABLE IF NOT EXISTS profiles (
    id TEXT PRIMARY KEY,
    user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
    name TEXT NOT NULL,
    skill TEXT NOT NULL,
    description TEXT,
    phone TEXT NOT NULL,
    email TEXT NOT NULL,
    neighborhood TEXT NOT NULL,
    is_my_profile BOOLEAN DEFAULT false,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Índices para mejorar el rendimiento
CREATE INDEX IF NOT EXISTS idx_profiles_skill ON profiles(skill);
CREATE INDEX IF NOT EXISTS idx_profiles_neighborhood ON profiles(neighborhood);
CREATE INDEX IF NOT EXISTS idx_profiles_user_id ON profiles(user_id);

-- ==================== TABLA DE CALIFICACIONES ====================
CREATE TABLE IF NOT EXISTS ratings (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    profile_id TEXT NOT NULL REFERENCES profiles(id) ON DELETE CASCADE,
    rating INTEGER NOT NULL CHECK (rating >= 1 AND rating <= 5),
    comment TEXT,
    author_name TEXT DEFAULT 'Anónimo',
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Índice para mejorar consultas de calificaciones por perfil
CREATE INDEX IF NOT EXISTS idx_ratings_profile_id ON ratings(profile_id);

-- ==================== POLÍTICAS DE SEGURIDAD (RLS) ====================

-- Habilitar Row Level Security
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE ratings ENABLE ROW LEVEL SECURITY;

-- Políticas para PROFILES
-- Todos pueden leer perfiles
CREATE POLICY "Perfiles son públicos para lectura"
    ON profiles FOR SELECT
    USING (true);

-- Solo el dueño puede insertar su perfil
CREATE POLICY "Usuarios pueden crear su propio perfil"
    ON profiles FOR INSERT
    WITH CHECK (auth.uid() = user_id OR user_id IS NULL);

-- Solo el dueño puede actualizar su perfil
CREATE POLICY "Usuarios pueden actualizar su propio perfil"
    ON profiles FOR UPDATE
    USING (auth.uid() = user_id OR user_id IS NULL);

-- Solo el dueño puede eliminar su perfil
CREATE POLICY "Usuarios pueden eliminar su propio perfil"
    ON profiles FOR DELETE
    USING (auth.uid() = user_id);

-- Políticas para RATINGS
-- Todos pueden leer calificaciones
CREATE POLICY "Calificaciones son públicas para lectura"
    ON ratings FOR SELECT
    USING (true);

-- Cualquiera puede agregar calificaciones (incluso anónimos)
CREATE POLICY "Cualquiera puede agregar calificaciones"
    ON ratings FOR INSERT
    WITH CHECK (true);

-- ==================== FUNCIONES ÚTILES ====================

-- Función para actualizar el timestamp de updated_at automáticamente
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Trigger para actualizar updated_at en profiles
CREATE TRIGGER update_profiles_updated_at
    BEFORE UPDATE ON profiles
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column();

-- ==================== DATOS DE EJEMPLO ====================

-- Insertar perfiles de ejemplo (opcional)
INSERT INTO profiles (id, name, skill, description, phone, email, neighborhood, created_at) VALUES
('profile-1', 'Juan Pérez', 'Plomería', 'Plomero con 15 años de experiencia. Reparaciones, instalaciones y mantenimiento. Trabajo garantizado.', '999-888-777', 'juan.perez@email.com', 'Villa El Salvador', NOW()),
('profile-2', 'María García', 'Clases de Inglés', 'Profesora certificada con 10 años de experiencia. Clases para niños y adultos, todos los niveles.', '888-777-666', 'maria.garcia@email.com', 'San Juan de Miraflores', NOW()),
('profile-3', 'Carlos López', 'Electricidad', 'Electricista certificado. Instalaciones eléctricas, reparaciones y mantenimiento preventivo.', '777-666-555', 'carlos.lopez@email.com', 'Surco', NOW()),
('profile-4', 'Ana Martínez', 'Cuidado de Niños', 'Niñera con 8 años de experiencia. Referencias disponibles. Primeros auxilios certificados.', '666-555-444', 'ana.martinez@email.com', 'Miraflores', NOW()),
('profile-5', 'Pedro Sánchez', 'Carpintería', 'Carpintero especializado en muebles a medida. Reparaciones y restauración. Trabajo garantizado.', '555-444-333', 'pedro.sanchez@email.com', 'Barranco', NOW()),
('profile-6', 'Laura Torres', 'Repostería', 'Repostera profesional. Tortas, pasteles y postres para eventos. Pedidos personalizados.', '444-333-222', 'laura.torres@email.com', 'Chorrillos', NOW())
ON CONFLICT (id) DO NOTHING;

-- Insertar calificaciones de ejemplo
INSERT INTO ratings (profile_id, rating, comment, author_name, created_at) VALUES
('profile-1', 5, 'Excelente trabajo, muy profesional', 'Cliente Satisfecho', '2024-01-15'),
('profile-1', 5, 'Rápido y eficiente', 'María R.', '2024-01-20'),
('profile-1', 4, 'Buen servicio', 'Pedro G.', '2024-02-01'),
('profile-2', 5, 'Muy buena profesora, paciente y clara', 'Padre de Familia', '2024-01-18'),
('profile-2', 5, 'Mi hijo aprendió mucho', 'Ana L.', '2024-02-05'),
('profile-3', 5, 'Resolvió el problema rápidamente', 'Juan M.', '2024-01-22'),
('profile-4', 5, 'Muy responsable y cariñosa con los niños', 'Familia López', '2024-01-25'),
('profile-5', 4, 'Buen trabajo, muebles de calidad', 'Carlos S.', '2024-02-03');

-- ==================== VERIFICACIÓN ====================

-- Verificar que las tablas se crearon correctamente
SELECT 'Tablas creadas exitosamente' AS status;
SELECT COUNT(*) AS total_profiles FROM profiles;
SELECT COUNT(*) AS total_ratings FROM ratings;

-- Made with Bob
