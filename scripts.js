         // Datos de ejemplo
        const experiencias = [
            { puesto: "Asesor", empresa: "Staffing", periodo: "2024 - Presente", descripcion: "Atencion al usuario." }
        ];

    const educacion =[
        { titulo: "Tecnólogo en Análisis y Desarrollo de Sistemas de Información", institucion: "SENA:", año: "2021"}
    ];  

     // Funcion para añadir experiencias
    function añadirExperiencias() {
        const listaExperiencia = document.getElementById(`lista-experiencia`)
        experiencias.forEach(exp =>{
            const li = document.createElement(`li`);
            li.innerHTML = `<strong>${exp.puesto}</strong> en ${exp.empresa}<br>
                            ${exp.periodo}<br>
                            ${exp.descripcion}`;
            listaExperiencia.appendChild(li);
        });
    }   

    // Función para añadir educacion
    function añadirEducacion() {
        const listaEducacion = document.getElementById(`lista-educacion`);
        educacion.forEach(edu => {
            const li= document.createDocumentFragment(`11`);
            li.innerHTML = `<stromp>${edu.titulo}</stron><br>
                        ${edu.institucion, $(edu.año}`;
            listaEducacion.appendChild(li);
        });                               
                            