// --- Configuración de farmacias (Lebrija) ---
const pharmacies = {
    yellow: {
        name: "D. Ramón Mendaro Torres",
        displayAddress: "Avda. Andalucía, 8",
        mapsAddress: "Farmacia Ramón Mendaro Torres, Lebrija, Sevilla",
        phone: "955972551"
    },
    blue: {
        name: "Dña. Mª Carmen García Fernández-Julia Parrilla Olivares",
        displayAddress: "C/ Vicente Velarde, 39. Bda. Huerta Macena",
        mapsAddress: "Vicente Velarde, 39, Lebrija, Sevilla",
        phone: "955973666"
    },
    gray: {
        name: "Dña. Adela Redondo Tena",
        displayAddress: "Avda. Doctor Fleming, 15",
        mapsAddress: "Farmacia Adela Redondo Tena, Lebrija, Sevilla",
        phone: "955971304"
    },
    red: {
        name: "Dña. Ayala Muñoz, Blanca Dulce",
        displayAddress: "Plaza Santa Brígida, 4",
        mapsAddress: "Farmacia y Óptica Santa Brigida Blanca Dulce Ayala Muñoz, Lebrija, Sevilla",
        phone: "955975810"
    },
    orange: {
        name: "D. Dorantes Calderón, Benito",
        displayAddress: "Avda. José Fernández Ruiz, 48",
        mapsAddress: "Benito Dorantes Calderón, Lebrija, Sevilla",
        phone: "955972518"
    },
    green: {
        name: "D. Emilio A. Mendaro Torres",
        displayAddress: "C/ Corredera, 20",
        mapsAddress: "Calle Corredera, 20, Lebrija, Sevilla",
        phone: "955972135"
    },
    purple: {
        name: "Dña. Mª Pilar y Mª Antonia Merchan Salvatierra",
        displayAddress: "C/ Sevilla, 5",
        mapsAddress: "Farmacia y Laboratorio Carmelo Merchan CB, Lebrija, Sevilla",
        phone: "955973739"
    },
    pink: {
        name: "Dña. Mª Regla y Ana Vega Alva",
        displayAddress: "C/ Arcos, 8",
        mapsAddress: "Vega C B, Lebrija, Sevilla",
        phone: "955972636"
    },
    brown: {
        name: "D. José Luis Salinas Montes",
        displayAddress: "C/ Tetuan, 4",
        mapsAddress: "Farmacia Salinas Montés, Lebrija, Sevilla",
        phone: "955972415"
    },
};

// --- Datos de 2026 (por ahora vacíos) ---
const calendarData2026 = {
    enero: [], febrero: [], marzo: [], abril: [], mayo: [],
    junio: [], julio: [], agosto: [], septiembre: [], octubre: [],
    noviembre: [], diciembre: []
};

// --- Datos de 2025 ---
const calendarData2025 = {
    enero: [], febrero: [], marzo: [], abril: [], mayo: [],
    junio: [], julio: [], agosto: [], septiembre: [], octubre: [],
    noviembre: ['gray', 'red', 'orange', 'green', 'purple', 'pink', 'brown', 'yellow', 'blue', 'gray', 'red', 'orange', 'green', 'purple', 'pink', 'brown', 'yellow', 'blue', 'gray', 'red', 'orange', 'green', 'purple', 'pink', 'brown', 'yellow', 'blue', 'gray', 'red', 'orange'],
    diciembre: ['gray', 'red', 'orange', 'green', 'purple', 'pink', 'brown', 'yellow', 'blue', 'gray', 'red', 'orange', 'green', 'purple', 'pink', 'brown', 'yellow', 'blue', 'gray', 'red', 'orange', 'green', 'purple', 'pink', 'brown', 'yellow', 'blue', 'gray', 'red', 'orange', 'green']
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
    return (firstDay === 0) ? 6 : firstDay - 1;
}

function renderCalendar(year, monthIndex) {
    const monthNameES = monthNamesES[monthIndex];
    const calendarData = (year === 2025) ? calendarData2025 :
                         (year === 2026) ? calendarData2026 : null;
    
    const hasData = calendarData && Array.isArray(calendarData[monthNameES]) && calendarData[monthNameES].length > 0;
    const daysInMonth = hasData ? calendarData[monthNameES].length : getDaysInMonth(year, monthIndex);
    const firstDayOffset = getFirstDayOfWeek(year, monthIndex);

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

    for (let i = 0; i < firstDayOffset; i++) {
        const empty = document.createElement('div');
        empty.className = 'day empty';
        daysGrid.appendChild(empty);
    }

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

    document.getElementById('prev-month').disabled = (year === 2025 && monthIndex === 0);
    document.getElementById('next-month').disabled = (year === 2026 && monthIndex === 11);
}

function selectDay(event) {
    document.querySelectorAll('.day').forEach(d => d.classList.remove('selected'));
    event.target.classList.add('selected');

    const year = parseInt(event.target.dataset.year, 10);
    const month = event.target.dataset.month;
    const day = event.target.dataset.day;

    // ✅ CORREGIDO: Soporta los 9 colores de Lebrija
    const colorClasses = event.target.className.split(' ').filter(cls =>
        ['yellow', 'blue', 'gray', 'red', 'orange', 'green', 'purple', 'pink', 'brown'].includes(cls)
    );
    const color = colorClasses[0];

    const infoDiv = document.getElementById('pharmacy-info');
    
    if (color && pharmacies[color]) {
        const pharmacy = pharmacies[color];
        // ✅ CORREGIDO: Eliminados espacios extra en la URL
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

    const today = new Date();
    const todayYear = today.getFullYear();
    const todayMonthIndex = today.getMonth();
    const todayDay = today.getDate();

    if (![2025, 2026].includes(todayYear)) return;

    const todayMonthName = monthNamesES[todayMonthIndex];
    const calendarData = todayYear === 2025 ? calendarData2025 : calendarData2026;
    const hasData = calendarData[todayMonthName] && todayDay <= calendarData[todayMonthName].length;

    if (hasData) {
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