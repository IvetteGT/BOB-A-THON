-- Script para configurar Supabase como PÚBLICO (sin autenticación)
-- Ejecuta este script en el SQL Editor de Supabase

-- ==================== ELIMINAR POLÍTICAS ANTIGUAS ====================

-- Eliminar políticas de profiles
DROP POLICY IF EXISTS "Perfiles son públicos para lectura" ON profiles;
DROP POLICY IF EXISTS "Usuarios pueden crear su propio perfil" ON profiles;
DROP POLICY IF EXISTS "Usuarios pueden actualizar su propio perfil" ON profiles;
DROP POLICY IF EXISTS "Usuarios pueden eliminar su propio perfil" ON profiles;

-- Eliminar políticas de ratings
DROP POLICY IF EXISTS "Calificaciones son públicas para lectura" ON ratings;
DROP POLICY IF EXISTS "Cualquiera puede agregar calificaciones" ON ratings;

-- ==================== CREAR POLÍTICAS PÚBLICAS ====================

-- PROFILES: Acceso público total (sin autenticación)
CREATE POLICY "Acceso público total a perfiles - lectura"
    ON profiles FOR SELECT
    USING (true);

CREATE POLICY "Acceso público total a perfiles - inserción"
    ON profiles FOR INSERT
    WITH CHECK (true);

CREATE POLICY "Acceso público total a perfiles - actualización"
    ON profiles FOR UPDATE
    USING (true);

CREATE POLICY "Acceso público total a perfiles - eliminación"
    ON profiles FOR DELETE
    USING (true);

-- RATINGS: Acceso público total (sin autenticación)
CREATE POLICY "Acceso público total a calificaciones - lectura"
    ON ratings FOR SELECT
    USING (true);

CREATE POLICY "Acceso público total a calificaciones - inserción"
    ON ratings FOR INSERT
    WITH CHECK (true);

CREATE POLICY "Acceso público total a calificaciones - actualización"
    ON ratings FOR UPDATE
    USING (true);

CREATE POLICY "Acceso público total a calificaciones - eliminación"
    ON ratings FOR DELETE
    USING (true);

-- ==================== VERIFICACIÓN ====================
SELECT 'Políticas públicas configuradas exitosamente' AS status;

-- Made with Bob