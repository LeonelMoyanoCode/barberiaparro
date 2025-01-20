document.addEventListener("DOMContentLoaded", function() {
    const turnos = [
        { nombre: "Juan Perez", fecha: "2024-12-24", horario: "09:00", procedimiento: "Barberia, Corte" },
        { nombre: "Pedro López", fecha: "2024-12-24", horario: "10:00", procedimiento: "Tratamiento Capilar" },
        { nombre: "Jose Perez", fecha: "2024-12-24", horario: "12:00", procedimiento: "Barberia, Corte" },
        { nombre: "Jorge López", fecha: "2024-12-24", horario: "14:00", procedimiento: "Tratamiento Capilar" },
        { nombre: "Raul Perez", fecha: "2024-12-24", horario: "16:00", procedimiento: "Barberia, Corte" },

    ];

    const tablaCuerpo = document.getElementById("cuerpoTabla");

    turnos.forEach(turno => {
        const fila = document.createElement("tr");

        const celdaNombre = document.createElement("td");
        celdaNombre.textContent = turno.nombre;

        const celdaFecha = document.createElement("td");
        celdaFecha.textContent = turno.fecha;

        const celdaHorario = document.createElement("td");
        celdaHorario.textContent = turno.horario;

        const celdaProcedimiento = document.createElement("td");
        celdaProcedimiento.textContent = turno.procedimiento;

        fila.appendChild(celdaNombre);
        fila.appendChild(celdaFecha);
        fila.appendChild(celdaHorario);
        fila.appendChild(celdaProcedimiento);

        tablaCuerpo.appendChild(fila);
    });
    adminName = localStorage.getItem('loggedUser');
    document.getElementById("welcomeMessage").textContent = `Bienvenido ${adminName}.`;
});