document.addEventListener('DOMContentLoaded', function() {
    // Configuración común para ambas tablas
    const commonConfig = {
        responsive: true,
        language: {
            url: 'https://cdn.datatables.net/plug-ins/1.13.7/i18n/es-ES.json'
        },
        columns: [
            /* { 
                data: 'image',
                render: function(data) {
                    return `<img src="./resources/imgs/bosses/${data}" class="boss-image" alt="Imagen del jefe">`;
                }
            }, */
            { data: 'name' },
            { data: 'location' },
            { data: 'weaknesses' },
            { data: 'hp' },
            { 
                data: 'blood_echoes',
                render: function(data) {
                    return data.toLocaleString();
                }
            },
            { data: 'insight' }
        ]
    };

    // Cargar los datos del JSON
    fetch('./resources/data/bosses.json')
        .then(response => response.json())
        .then(data => {
            // Separar jefes obligatorios y opcionales
            const mandatoryBosses = data.bosses.filter(boss => !boss.optional);
            const optionalBosses = data.bosses.filter(boss => boss.optional);

            // Inicializar tabla de jefes obligatorios
            $('#mandatoryBossesTable').DataTable({
                ...commonConfig,
                data: mandatoryBosses,
                order: [[1, 'asc']], // Ordenar por nombre por defecto
            });

            // Inicializar tabla de jefes opcionales
            $('#optionalBossesTable').DataTable({
                ...commonConfig,
                data: optionalBosses,
                order: [[1, 'asc']], // Ordenar por nombre por defecto
            });
        })
        .catch(error => {
            console.error('Error cargando los datos:', error);
            // Mostrar mensaje de error en la página
            document.getElementById('error-message').style.display = 'block';
        });
});