// --- Configuración de farmacias (solo para 2026) ---
const pharmacies2026 = {
    yellow: {
        name: "D. Francisco C. y Dña. Josefa V. Godoy Sánchez",
        address: "Avda. Miguel Hernández, 13 Las Cabezas de San Juan",
        phone: "955870648"
    },
    blue: {
        name: "D. Juan A. Mendoza Mandado",
        address: "Avda. Pablo Iglesias, 59 Las Cabezas de San Jua",
        phone: "955871928"
    },
    gray: {
        name: "D. Francisco de Borja Molina Cerrato",
        address: "C/ Marismillas, 1 Las Cabezas de San Juan (Junto al Mercadona)",
        phone: "955870587"
    },
    red: {
        name: "Lcda. Adela Puig Hidalgo",
        address: "C/ Maestro Juan Marín de Vargas, 10 Las Cabezas de San Juan",
        phone: "955871107"
    },
    orange: {
        name: "Dña. Mª Rosario Corrales Márquez",
        address: "C/ Antonio Machado, 19 Las Cabezas de San Juan",
        phone: "955871016"
    },
};

// --- Datos de 2026 ---
const calendarData2026 = {
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

// --- Estados iniciales ---
const monthNamesES = [
    'enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio',
    'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'
];

// Obtener fecha actual del sistema
const now = new Date();
let currentYear = now.getFullYear(); // Ej: 2025
let currentMonthIndex = now.getMonth(); // Ej: 10 (noviembre)

// Forzar a 2026 si quieres, o dejar dinámico. Aquí lo dejamos dinámico.
// Pero si solo tienes datos para 2026, advertiremos cuando no esté disponible.

function getDaysInMonth(year, month) {
    return new Date(year, month + 1, 0).getDate();
}

function getFirstDayOfWeek(year, month) {
    // Lunes = 0
    const firstDay = new Date(year, month, 1).getDay();
    return (firstDay === 0) ? 6 : firstDay - 1;
}

function renderCalendar(year, monthIndex) {
    const is2026 = (year === 2026);
    const monthNameES = monthNamesES[monthIndex];
    const daysInMonth = is2026 && calendarData2026[monthNameES] 
        ? calendarData2026[monthNameES].length 
        : getDaysInMonth(year, monthIndex);
    
    const firstDayOffset = getFirstDayOfWeek(year, monthIndex);

    // Actualizar título y año
    document.getElementById('current-month-title').textContent = 
        monthNameES.charAt(0).toUpperCase() + monthNameES.slice(1);
    document.getElementById('display-year').textContent = year;

    const container = document.getElementById('calendar-container');
    container.innerHTML = `
        <div class="month-calendar">
            <div class="weekdays">
                <div>L</div><div>M</div><div>X</div><div>J</div><div>V</div><div>S</div><div>D</div>
            </div>
            <div class="days" id="days-grid"></div>
        </div>
    `;

    const daysGrid = document.getElementById('days-grid');

    // Espacios vacíos al inicio
    for (let i = 0; i < firstDayOffset; i++) {
        const empty = document.createElement('div');
        empty.className = 'day empty';
        daysGrid.appendChild(empty);
    }

    // Días del mes
    for (let day = 1; day <= daysInMonth; day++) {
        const dayDiv = document.createElement('div');
        
        if (is2026 && calendarData2026[monthNameES] && day <= calendarData2026[monthNameES].length) {
            const color = calendarData2026[monthNameES][day - 1];
            dayDiv.className = `day ${color}`;
            dayDiv.dataset.year = year;
            dayDiv.dataset.month = monthNameES;
            dayDiv.dataset.day = day;
            dayDiv.addEventListener('click', selectDay);
        } else {
            dayDiv.className = 'day no-data';
            dayDiv.textContent = day;
            // Sin evento ni datos
        }

        dayDiv.textContent = day;
        daysGrid.appendChild(dayDiv);
    }

    // Actualizar botones (solo permitimos navegación dentro de 2025-2026, por ejemplo)
    document.getElementById('prev-month').disabled = (year === 2025 && monthIndex === 0);
    document.getElementById('next-month').disabled = (year === 2026 && monthIndex === 11);
}

function selectDay(event) {
    document.querySelectorAll('.day').forEach(d => d.classList.remove('selected'));
    event.target.classList.add('selected');

    const year = event.target.dataset.year;
    const month = event.target.dataset.month;
    const day = event.target.dataset.day;
    const color = event.target.className.split(' ').find(cls => 
        ['yellow', 'blue', 'gray', 'red', 'orange'].includes(cls)
    );

    const pharmacy = pharmacies2026[color];

    const infoDiv = document.getElementById('pharmacy-info');
    if (pharmacy) {
        // Codificar la dirección para usar en URL
const encodedAddress = encodeURIComponent(pharmacy.address);
const mapsUrl = `https://www.google.com/maps?q=${encodedAddress}`;

infoDiv.innerHTML = `
    <h3>Farmacia de Guardia</h3>
    <p><strong>Nombre:</strong> ${pharmacy.name}</p>
    <p><strong>Dirección:</strong> 
        <a href="${mapsUrl}" target="_blank" rel="noopener noreferrer">
            ${pharmacy.address}
        </a>
    </p>
    <p><strong>Teléfono:</strong> ${pharmacy.phone}</p>
    <p><strong>Día:</strong> ${day} de ${month.charAt(0).toUpperCase() + month.slice(1)} de ${year}</p>
`;
    }
}

// Navegación
document.getElementById('prev-month').addEventListener('click', () => {
    if (currentMonthIndex > 0) {
        currentMonthIndex--;
    } else if (currentYear > 2025) {
        currentYear--;
        currentMonthIndex = 11;
    }
    renderCalendar(currentYear, currentMonthIndex);
});

document.getElementById('next-month').addEventListener('click', () => {
    const maxMonth = (currentYear === 2026) ? 11 : 11; // puedes ampliar si quieres más años
    if (currentMonthIndex < 11) {
        currentMonthIndex++;
    } else if (currentYear < 2026) {
        currentYear++;
        currentMonthIndex = 0;
    }
    renderCalendar(currentYear, currentMonthIndex);
});

// Iniciar la app
document.addEventListener('DOMContentLoaded', () => {
    renderCalendar(currentYear, currentMonthIndex);
});