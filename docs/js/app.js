// Cargar perfiles al iniciar la página
window.onload = async function() {
    await initStorage();
    if (document.getElementById('profilesContainer')) {
        const profiles = await getAllProfiles();
        displayProfiles(profiles);
    }
};

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
