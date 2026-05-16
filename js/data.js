// Datos de ejemplo (se cargan al inicio)
function loadSampleData() {
    const sampleProfiles = [
        {
            id: 'profile-1',
            name: 'Juan Pérez',
            skill: 'Plomería',
            description: 'Plomero con 15 años de experiencia. Reparaciones, instalaciones y mantenimiento. Trabajo garantizado.',
            phone: '999-888-777',
            email: 'juan.perez@email.com',
            neighborhood: 'Villa El Salvador'
        },
        {
            id: 'profile-2',
            name: 'María García',
            skill: 'Clases de Inglés',
            description: 'Profesora certificada con 10 años de experiencia. Clases para niños y adultos, todos los niveles.',
            phone: '888-777-666',
            email: 'maria.garcia@email.com',
            neighborhood: 'San Juan de Miraflores'
        },
        {
            id: 'profile-3',
            name: 'Carlos López',
            skill: 'Electricidad',
            description: 'Electricista certificado. Instalaciones eléctricas, reparaciones y mantenimiento preventivo.',
            phone: '777-666-555',
            email: 'carlos.lopez@email.com',
            neighborhood: 'Surco'
        },
        {
            id: 'profile-4',
            name: 'Ana Martínez',
            skill: 'Cuidado de Niños',
            description: 'Niñera con 8 años de experiencia. Referencias disponibles. Primeros auxilios certificados.',
            phone: '666-555-444',
            email: 'ana.martinez@email.com',
            neighborhood: 'Miraflores'
        },
        {
            id: 'profile-5',
            name: 'Pedro Sánchez',
            skill: 'Carpintería',
            description: 'Carpintero especializado en muebles a medida. Reparaciones y restauración. Trabajo garantizado.',
            phone: '555-444-333',
            email: 'pedro.sanchez@email.com',
            neighborhood: 'Barranco'
        },
        {
            id: 'profile-6',
            name: 'Laura Torres',
            skill: 'Repostería',
            description: 'Repostera profesional. Tortas, pasteles y postres para eventos. Pedidos personalizados.',
            phone: '444-333-222',
            email: 'laura.torres@email.com',
            neighborhood: 'Chorrillos'
        }
    ];

    const sampleRatings = [
        { id: 'r1', profileId: 'profile-1', rating: 5, comment: 'Excelente trabajo, muy profesional', date: '2024-01-15' },
        { id: 'r2', profileId: 'profile-1', rating: 5, comment: 'Rápido y eficiente', date: '2024-01-20' },
        { id: 'r3', profileId: 'profile-1', rating: 4, comment: 'Buen servicio', date: '2024-02-01' },
        { id: 'r4', profileId: 'profile-2', rating: 5, comment: 'Muy buena profesora, paciente y clara', date: '2024-01-18' },
        { id: 'r5', profileId: 'profile-2', rating: 5, comment: 'Mi hijo aprendió mucho', date: '2024-02-05' },
        { id: 'r6', profileId: 'profile-3', rating: 5, comment: 'Resolvió el problema rápidamente', date: '2024-01-22' },
        { id: 'r7', profileId: 'profile-4', rating: 5, comment: 'Muy responsable y cariñosa con los niños', date: '2024-01-25' },
        { id: 'r8', profileId: 'profile-5', rating: 4, comment: 'Buen trabajo, muebles de calidad', date: '2024-02-03' }
    ];

    // Solo cargar si no hay datos
    if (!localStorage.getItem('profiles') || JSON.parse(localStorage.getItem('profiles')).length === 0) {
        localStorage.setItem('profiles', JSON.stringify(sampleProfiles));
    }
    if (!localStorage.getItem('ratings') || JSON.parse(localStorage.getItem('ratings')).length === 0) {
        localStorage.setItem('ratings', JSON.stringify(sampleRatings));
    }
}

// Cargar datos al inicio
loadSampleData();

// Made with Bob
