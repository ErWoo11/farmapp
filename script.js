const pharmacies = {
    yellow: {
        name: "D. Francisco C. y Dña. Josefa V. Godoy Sánchez",
        address: "Avda. Miguel Hernández, 13",
        phone: "955870648"
    },
    blue: {
        name: "D. Juan A. Mendoza Mandado",
        address: "Avda. Pablo Iglesias, 59",
        phone: "955871928"
    },
    gray: {
        name: "D. Francisco de Borja Molina Cerrato",
        address: "Marismillas, 1 (Junto al Mercadona)",
        phone: "955870587"
    },
    red: {
        name: "Lcda. Adela Puig Hidalgo",
        address: "C/ Maestro Juan Marín de Vargas, 10",
        phone: "955871107"
    },
    orange: {
        name: "Dña. Mª Rosario Corrales Márquez",
        address: "C/ Antonio Machado, 19",
        phone: "955871016"
    },
};

// Datos del calendario para 2026 (debes actualizar los colores según el nuevo turno)
const calendarData = {
    enero: ['gray', 'gray', 'red', 'red', 'red', 'red', 'red', 'red', 'red', 'orange', 'orange', 'orange', 'orange', 'orange', 'orange', 'orange', 'yellow', 'yellow', 'yellow', 'yellow', 'yellow', 'yellow', 'yellow', 'blue', 'blue', 'blue', 'blue', 'blue', 'blue', 'blue', 'gray'],
    febrero: [ 'gray', 'gray', 'gray', 'gray', 'gray', 'gray', 'red', 'red', 'red', 'red', 'red', 'red', 'red', 'orange', 'orange', 'orange', 'orange', 'orange', 'orange', 'orange', 'yellow', 'yellow', 'yellow', 'yellow', 'yellow', 'yellow', 'yellow', 'blue' ],
    marzo: [ 'blue', 'blue', 'blue', 'blue', 'blue', 'blue', 'gray', 'gray', 'gray', 'gray', 'gray', 'gray', 'gray', 'red', 'red', 'red', 'red', 'red', 'red', 'red', 'orange', 'orange', 'orange', 'orange', 'orange', 'orange', 'orange', 'yellow', 'yellow', 'yellow', 'yellow' ],
    abril: [ 'yellow', 'yellow', 'yellow', 'blue', 'blue', 'blue', 'blue', 'blue', 'blue', 'blue', 'gray', 'gray', 'gray', 'gray', 'gray', 'gray', 'gray', 'red', 'red', 'red', 'red', 'red', 'red', 'red', 'orange', 'orange', 'orange', 'orange', 'orange', 'orange' ],
    mayo: [ 'orange', 'yellow', 'yellow', 'yellow', 'yellow', 'yellow', 'yellow', 'yellow', 'blue', 'blue', 'blue', 'blue', 'blue', 'blue', 'blue', 'gray', 'gray', 'gray', 'gray', 'gray', 'gray', 'gray', 'red', 'red', 'red', 'red', 'red', 'red', 'red', 'orange', 'orange' ],
    junio: [ 'orange', 'orange', 'orange', 'orange', 'orange', 'yellow', 'yellow', 'yellow', 'yellow', 'yellow', 'yellow', 'yellow', 'blue', 'blue', 'blue', 'blue', 'blue', 'blue', 'blue', 'gray', 'gray', 'gray', 'gray', 'gray', 'gray', 'gray', 'red', 'red', 'red', 'red' ],
    julio: [ 'red', 'red', 'red', 'orange', 'orange', 'orange', 'orange', 'orange', 'orange', 'orange', 'yellow', 'yellow', 'yellow', 'yellow', 'yellow', 'yellow', 'yellow', 'blue', 'blue', 'blue', 'blue', 'blue', 'blue', 'blue', 'gray', 'gray', 'gray', 'gray', 'gray', 'gray', 'gray' ],
    agosto: [ 'red', 'red', 'red', 'red', 'red', 'red', 'red', 'orange', 'orange', 'orange', 'orange', 'orange', 'orange', 'orange', 'yellow', 'yellow', 'yellow', 'yellow', 'yellow', 'yellow', 'yellow', 'blue', 'blue', 'blue', 'blue', 'blue', 'blue', 'blue', 'gray', 'gray', 'gray' ],
    septiembre: [ 'gray', 'gray', 'gray', 'gray', 'red', 'red', 'red', 'red', 'red', 'red', 'red', 'orange', 'orange', 'orange', 'orange', 'orange', 'orange', 'orange', 'yellow', 'yellow', 'yellow', 'yellow', 'yellow', 'yellow', 'yellow', 'blue', 'blue', 'blue', 'blue', 'blue' ],
    octubre: [ 'blue', 'blue', 'gray', 'gray', 'gray', 'gray', 'gray', 'gray', 'gray', 'red', 'red', 'red', 'red', 'red', 'red', 'red', 'orange', 'orange', 'orange', 'orange', 'orange', 'orange', 'orange', 'yellow', 'yellow', 'yellow', 'yellow', 'yellow', 'yellow', 'yellow', 'blue' ],
    noviembre: [ 'blue', 'blue', 'blue', 'blue', 'blue', 'blue', 'gray', 'gray', 'gray', 'gray', 'gray', 'gray', 'gray', 'red', 'red', 'red', 'red', 'red', 'red', 'red', 'orange', 'orange', 'orange', 'orange', 'orange', 'orange', 'orange', 'yellow', 'yellow', 'yellow' ],
    diciembre: [ 'yellow', 'yellow', 'yellow', 'yellow', 'blue', 'blue', 'blue', 'blue', 'blue', 'blue', 'blue', 'gray', 'gray', 'gray', 'gray', 'gray', 'gray', 'gray', 'red', 'red', 'red', 'red', 'red', 'red', 'red', 'orange', 'orange', 'orange', 'orange', 'orange', 'orange' ]
};

// Obtener el día de la semana del 1 de cada mes
function getWeekdayOffset(year, monthIndex) {
    const date = new Date(year, monthIndex, 1);
    return (date.getDay() + 6) % 7; // Ajuste para que Lunes = 0, Domingo = 6
}

function generateCalendar() {
    const container = document.getElementById('calendar-container');
    const months = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'];
    const year = 2026;

    months.forEach((month, index) => {
        const monthDiv = document.createElement('div');
        monthDiv.className = 'month';

        const header = document.createElement('div');
        header.className = 'month-header';
        header.textContent = `${month.charAt(0).toUpperCase() + month.slice(1)} ${year}`;
        monthDiv.appendChild(header);

        const weekdays = document.createElement('div');
        weekdays.className = 'weekdays';
        ['L', 'M', 'X', 'J', 'V', 'S', 'D'].forEach(day => {
            const dayDiv = document.createElement('div');
            dayDiv.textContent = day;
            weekdays.appendChild(dayDiv);
        });
        monthDiv.appendChild(weekdays);

        const daysDiv = document.createElement('div');
        daysDiv.className = 'days';

        const offset = getWeekdayOffset(year, index);
        for (let j = 0; j < offset; j++) {
            const emptyDiv = document.createElement('div');
            emptyDiv.className = 'day empty';
            daysDiv.appendChild(emptyDiv);
        }

        const daysInMonth = calendarData[month];
        for (let i = 0; i < daysInMonth.length; i++) {
            const dayDiv = document.createElement('div');
            dayDiv.className = `day ${daysInMonth[i]}`;
            dayDiv.textContent = i + 1;
            dayDiv.dataset.month = month;
            dayDiv.dataset.day = i + 1;
            dayDiv.addEventListener('click', selectDay);
            daysDiv.appendChild(dayDiv);
        }

        monthDiv.appendChild(daysDiv);
        container.appendChild(monthDiv);
    });
}

function selectDay(event) {
    document.querySelectorAll('.day').forEach(day => {
        day.classList.remove('selected');
    });

    event.target.classList.add('selected');

    const month = event.target.dataset.month;
    const day = parseInt(event.target.dataset.day);
    const color = event.target.className.split(' ')[1];
    const pharmacy = pharmacies[color];

    const infoDiv = document.getElementById('pharmacy-info');
    infoDiv.innerHTML = `
        <h3>Farmacia de Guardia</h3>
        <p><strong>Nombre:</strong> ${pharmacy.name}</p>
        <p><strong>Dirección:</strong> ${pharmacy.address}</p>
        <p><strong>Teléfono:</strong> ${pharmacy.phone}</p>
        <p><strong>Día:</strong> ${day} de ${month.charAt(0).toUpperCase() + month.slice(1)} de 2026</p>
    `;
}

document.addEventListener('DOMContentLoaded', generateCalendar);