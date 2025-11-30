// --- Configuración de farmacias (solo para 2026) ---
const pharmacies = {
    yellow: {
        name: "D. Francisco C. y Dña. Josefa V. Godoy Sánchez",
        displayAddress: "Avda. Miguel Hernández, 13",
        mapsAddress: "Farmacia Godoy, C.B., Las Cabezas de San Juan, Sevilla",
        phone: "955870648"
    },
    blue: {
        name: "D. Juan A. Mendoza Mandado",
        displayAddress: "Avda. Pablo Iglesias, 59",
        mapsAddress: "FARMACIA MENDOZA, Las Cabezas de San Juan, Sevilla",
        phone: "955871928"
    },
    gray: {
        name: "D. Francisco de Borja Molina Cerrato",
        displayAddress: "C/ Marismillas, 1 (Junto al Mercadona)",
        mapsAddress: "Farmacia 365 Las Cabezas de San Juan, Las Cabezas de San Juan, Sevilla",
        phone: "955870587"
    },
    red: {
        name: "Lcda. Adela Puig Hidalgo",
        displayAddress: "C/ Maestro Juan Marín de Vargas, 10",
        mapsAddress: "FARMACIA LDA. ADELA PUIG HIDALGO, Las Cabezas de San Juan, Sevilla",
        phone: "955871107"
    },
    orange: {
        name: "Dña. Mª Rosario Corrales Márquez",
        displayAddress: "C/ Antonio Machado, 19",
        mapsAddress: "FARMACIA ROSARIO CORRALES MÁRQUEZ - RCFARMA, Las Cabezas de San Juan, Sevilla",
        phone: "955871016"
    },
};

// --- Datos de 2026 (reales) ---
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

// --- Datos de 2025 ---
const calendarData2025 = {
    enero: [],
    febrero: [],
    marzo: [],
    abril: [],
    mayo: [],
    junio: [],
    julio: [],
    agosto: [],
    septiembre: [],
    octubre: [],
    noviembre: ['orange', 'orange', 'orange', 'orange', 'orange', 'orange', 'orange', 'yellow', 'yellow', 'yellow', 'yellow', 'yellow', 'yellow', 'yellow', 'blue', 'blue', 'blue', 'blue', 'blue', 'blue', 'blue', 'gray', 'gray', 'gray', 'gray', 'gray', 'gray', 'gray', 'red', 'red'],
    diciembre: ['red', 'red', 'red', 'red', 'red', 'orange', 'orange', 'orange', 'orange', 'orange', 'orange', 'orange', 'yellow', 'yellow', 'yellow', 'yellow', 'yellow', 'yellow', 'yellow', 'blue', 'blue', 'blue', 'blue', 'blue', 'blue', 'blue', 'gray', 'gray', 'gray', 'gray', 'gray']
};

// --- Meses en español ---
const monthNamesES = [
    'enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio',
    'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'
];

// --- Fecha actual y límites ---
const now = new Date();
let currentYear = now.getFullYear();
let currentMonthIndex = now.getMonth();

// Asegurar que estemos en el rango 2025–2026
if (currentYear < 2025) {
    currentYear = 2025;
    currentMonthIndex = 0;
} else if (currentYear > 2026) {
    currentYear = 2026;
    currentMonthIndex = 11;
}

function getDaysInMonth(year, month) {
    return new Date(year, month + 1, 0).getDate();
}

function getFirstDayOfWeek(year, month) {
    const firstDay = new Date(year, month, 1).getDay();
    return (firstDay === 0) ? 6 : firstDay - 1; // Lunes = 0
}

function renderCalendar(year, monthIndex) {
    const monthNameES = monthNamesES[monthIndex];
    const calendarData = (year === 2025) ? calendarData2025 :
                         (year === 2026) ? calendarData2026 : null;
    
    const hasData = calendarData && Array.isArray(calendarData[monthNameES]) && calendarData[monthNameES].length > 0;
    const daysInMonth = hasData ? calendarData[monthNameES].length : getDaysInMonth(year, monthIndex);
    const firstDayOffset = getFirstDayOfWeek(year, monthIndex);

    // Actualizar título
    document.getElementById('current-month-title').textContent = 
        monthNameES.charAt(0).toUpperCase() + monthNameES.slice(1);
    document.getElementById('display-year').textContent = year;

    // Renderizar calendario
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

    // Días vacíos al inicio
    for (let i = 0; i < firstDayOffset; i++) {
        const empty = document.createElement('div');
        empty.className = 'day empty';
        daysGrid.appendChild(empty);
    }

    // Días del mes
    for (let day = 1; day <= daysInMonth; day++) {
        const dayDiv = document.createElement('div');

        if (hasData && day <= calendarData[monthNameES].length) {
            const color = calendarData[monthNameES][day - 1];
            dayDiv.className = `day ${color}`;
            dayDiv.dataset.year = year;
            dayDiv.dataset.month = monthNameES;
            dayDiv.dataset.day = day;
            dayDiv.addEventListener('click', selectDay);
        } else {
            dayDiv.className = 'day no-data';
        }

        dayDiv.textContent = day;
        daysGrid.appendChild(dayDiv);
    }

    // Deshabilitar botones en los extremos
    document.getElementById('prev-month').disabled = (year === 2025 && monthIndex === 0);
    document.getElementById('next-month').disabled = (year === 2026 && monthIndex === 11);
}

function selectDay(event) {
    document.querySelectorAll('.day').forEach(d => d.classList.remove('selected'));
    event.target.classList.add('selected');

    const year = parseInt(event.target.dataset.year, 10);
    const month = event.target.dataset.month;
    const day = event.target.dataset.day;

    const colorClasses = event.target.className.split(' ').filter(cls =>
        ['yellow', 'blue', 'gray', 'red', 'orange'].includes(cls)
    );
    const color = colorClasses[0];

    const infoDiv = document.getElementById('pharmacy-info');
    
    if (color && pharmacies[color]) {
        const pharmacy = pharmacies[color];
        // 🔧 Corrección: eliminado espacio extra en la URL
        const encodedMapsAddress = encodeURIComponent(pharmacy.mapsAddress);
        const mapsUrl = `https://www.google.com/maps?q=${encodedMapsAddress}`;
        const monthCapitalized = month.charAt(0).toUpperCase() + month.slice(1);

        infoDiv.innerHTML = `
            <h3>Farmacia de Guardia</h3>
            <p><strong>Nombre:</strong> ${pharmacy.name}</p>
            <p><strong>Dirección:</strong> ${pharmacy.displayAddress}</p>
            <p>
                <a href="${mapsUrl}" target="_blank" rel="noopener noreferrer" class="map-link">
                    🗺️ Ver en mapa
                </a>
            </p>
            <p><strong>Teléfono:</strong> ${pharmacy.phone}</p>
            <p><strong>Día:</strong> ${day} de ${monthCapitalized} de ${year}</p>
        `;
    } else {
        infoDiv.innerHTML = '<p>No hay farmacia de guardia asignada para esta fecha.</p>';
    }
}

// --- Navegación ---
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
    if (currentMonthIndex < 11) {
        currentMonthIndex++;
    } else if (currentYear < 2026) {
        currentYear++;
        currentMonthIndex = 0;
    }
    renderCalendar(currentYear, currentMonthIndex);
});

// === ✨ Selección automática del día actual (si hay datos) ===
document.addEventListener('DOMContentLoaded', () => {
    renderCalendar(currentYear, currentMonthIndex);

    // Comprobar si hoy tiene datos
    const today = new Date();
    const todayYear = today.getFullYear();
    const todayMonthIndex = today.getMonth();
    const todayDay = today.getDate();

    // Solo considerar 2025 y 2026
    if (![2025, 2026].includes(todayYear)) return;

    const todayMonthName = monthNamesES[todayMonthIndex];
    const calendarData = todayYear === 2025 ? calendarData2025 : calendarData2026;
    const hasData = calendarData[todayMonthName] && todayDay <= calendarData[todayMonthName].length;

    if (hasData) {
        // Si estamos en el mes actual, resaltar y seleccionar
        if (todayYear === currentYear && todayMonthIndex === currentMonthIndex) {
            const daysGrid = document.getElementById('days-grid');
            const firstDayOffset = getFirstDayOfWeek(todayYear, todayMonthIndex);
            const todayElement = daysGrid.children[firstDayOffset + todayDay - 1];

            if (todayElement && !todayElement.classList.contains('empty') && !todayElement.classList.contains('no-data')) {
                todayElement.classList.add('today');
                selectDay({ target: todayElement });
            }
        }
    }
});