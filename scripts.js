   // Función para cargar datos de ejemplo
   function cargarDatosEjemplo() {
    document.getElementById('nombre').textContent = 'Jorge Eliecer Marin Castillo';
    document.getElementById('email').textContent = 'jorgemarinjemc85gmail.com';
    document.getElementById('telefono').textContent = '+573125513617';
    document.getElementById('objetivo-text').textContent = 'Es diseñar, desarrollar y optimizar soluciones tecnológicas que mejoren la gestión de información y procesos en las organizaciones, mediante el análisis de requerimientos, la creación de aplicaciones, la administración de bases de datos, la automatización de procesos y el soporte técnico continuo, asegurando siempre la calidad, seguridad y escalabilidad de las soluciones implementadas.';

    const experiencias = [
        { puesto: 'Asesor', empresa: 'Staffing', periodo: '2024 - Presente' },
        { puesto: 'Asesor', empresa: 'Web Help', periodo: '2023 - 2024' }
    ];

    const educacion = [
        { titulo: 'Tecnologo en Analisis y Desarrollo de Sistemas de Informacion', institucion: 'Servicio Nacional de Aprendizaje SENA', año: '2021' },
        { titulo: 'Bachiller Academico', institucion: 'Colegio Distrital Estanislao Zuleta', año: '2002' }
    ];

    const expList = document.getElementById('experiencia-list');
    experiencias.forEach(exp => {
        expList.innerHTML += `
            <div>
                <h3>${exp.puesto}</h3>
                <p>${exp.empresa} | ${exp.periodo}</p>
            </div>
        `;
    });

    const eduList = document.getElementById('educacion-list');
    educacion.forEach(edu => {
        eduList.innerHTML += `
            <div>
                <h3>${edu.titulo}</h3>
                <p>${edu.institucion} | ${edu.año}</p>
            </div>
        `;
    });
}