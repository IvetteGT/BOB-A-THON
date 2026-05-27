// Cargar perfiles al iniciar la página
window.onload = async function() {
    await initStorage();
    if (document.getElementById('profilesContainer')) {
        const profiles = await getAllProfiles();
        await displayProfiles(profiles);
        await generateDynamicChips(profiles); // Generar chips dinámicos
    }
};

// Generar chips dinámicos basados en las 5 habilidades más populares
async function generateDynamicChips(profiles) {
    const chipsContainer = document.querySelector('.chips-container');
    if (!chipsContainer) {
        console.log('No se encontró el contenedor de chips');
        return;
    }
    
    console.log('Generando chips para', profiles.length, 'perfiles');
    
    // Contar cuántos perfiles hay por cada habilidad
    const skillCount = {};
    profiles.forEach(profile => {
        const skill = profile.skill;
        skillCount[skill] = (skillCount[skill] || 0) + 1;
    });
    
    console.log('Conteo de habilidades:', skillCount);
    
    // Convertir a array y ordenar por cantidad (de mayor a menor)
    const sortedSkills = Object.entries(skillCount)
        .sort((a, b) => b[1] - a[1])  // Ordenar por cantidad descendente
        .map(entry => entry[0]);      // Obtener solo los nombres
    
    console.log('Habilidades ordenadas por popularidad:', sortedSkills);
    
    // Limpiar chips existentes
    chipsContainer.innerHTML = '';
    
    // Mostrar solo las 5 habilidades más populares
    const top5Skills = sortedSkills.slice(0, 5);
    
    if (top5Skills.length > 0) {
        top5Skills.forEach(skill => {
            const chip = document.createElement('span');
            chip.className = 'chip';
            chip.textContent = skill;
            chip.onclick = () => buscarPorChip(skill);
            chipsContainer.appendChild(chip);
        });
        console.log('✅ Top 5 habilidades mostradas:', top5Skills);
    } else {
        // Si no hay habilidades, mostrar chips por defecto
        console.log('No hay habilidades, mostrando chips por defecto');
        const defaultSkills = ['Plomería', 'Electricidad', 'Carpintería', 'Clases de Inglés', 'Cuidado de Niños'];
        defaultSkills.forEach(skill => {
            const chip = document.createElement('span');
            chip.className = 'chip';
            chip.textContent = skill;
            chip.onclick = () => buscarPorChip(skill);
            chipsContainer.appendChild(chip);
        });
    }
}

// Mostrar perfiles en la página principal
async function displayProfiles(profiles) {
    const container = document.getElementById('profilesContainer');
    const noResults = document.getElementById('noResults');

    if (profiles.length === 0) {
        container.innerHTML = '';
        noResults.style.display = 'block';
        return;
    }

    noResults.style.display = 'none';
    
    // Obtener ratings para cada perfil
    const profilesWithRatings = await Promise.all(profiles.map(async profile => {
        const ratings = await getRatingsByProfile(profile.id);
        const avgRating = calculateAverageRating(ratings);
        return { profile, ratings, avgRating };
    }));
    
    container.innerHTML = profilesWithRatings.map(({ profile, ratings, avgRating }) => {
        const initials = profile.name.split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2);

        return `
            <div class="profile-card" onclick="window.location.href='perfil.html?id=${profile.id}'">
                <div class="profile-card-header">
                    <div class="avatar">${initials}</div>
                    <div class="profile-card-info">
                        <h3>${profile.name}</h3>
                        <span class="skill-badge">${profile.skill}</span>
                    </div>
                </div>
                <div class="rating">
                    <span class="stars">${generateStars(avgRating)}</span>
                    <span class="rating-count">(${ratings.length})</span>
                </div>
                <p class="profile-card-description">
                    ${profile.description ? profile.description.substring(0, 100) + '...' : 'Sin descripción'}
                </p>
                <div class="profile-card-footer">
                    <span class="location">📍 ${profile.neighborhood}</span>
                    <a href="perfil.html?id=${profile.id}" class="btn-view" onclick="event.stopPropagation()">
                        Ver Perfil
                    </a>
                </div>
            </div>
        `;
    }).join('');
}

// Buscar talentos
async function buscarTalentos() {
    const query = document.getElementById('searchInput').value.toLowerCase();
    const profiles = await getAllProfiles();
    
    if (!query) {
        await displayProfiles(profiles);
        return;
    }

    const filtered = profiles.filter(p =>
        p.skill.toLowerCase().includes(query) ||
        p.name.toLowerCase().includes(query) ||
        (p.description && p.description.toLowerCase().includes(query))
    );

    await displayProfiles(filtered);
}

// Buscar por chip
function buscarPorChip(skill) {
    document.getElementById('searchInput').value = skill;
    buscarTalentos();
}

// Generar estrellas
function generateStars(rating) {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 >= 0.5;
    let stars = '';
    
    for (let i = 0; i < fullStars; i++) stars += '★';
    if (halfStar) stars += '⯨';
    for (let i = fullStars + (halfStar ? 1 : 0); i < 5; i++) stars += '☆';
    
    return stars;
}

// Permitir buscar con Enter
document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                buscarTalentos();
            }
        });
    }
});

// Made with Bob
