// --- Configuración de farmacias (solo para 2026) ---
const pharmacies2026 = {
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

const now = new Date();
let currentYear = now.getFullYear();
let currentMonthIndex = now.getMonth();

function getDaysInMonth(year, month) {
    return new Date(year, month + 1, 0).getDate();
}

function getFirstDayOfWeek(year, month) {
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
        
        if (is2026 && calendarData2026[monthNameES] && day <= calendarData2026[monthNameES].length) {
            const color = calendarData2026[monthNameES][day - 1];
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

    const year = event.target.dataset.year;
    const month = event.target.dataset.month;
    const day = event.target.dataset.day;
    const color = event.target.className.split(' ').find(cls => 
        ['yellow', 'blue', 'gray', 'red', 'orange'].includes(cls)
    );

    const pharmacy = pharmacies2026[color];
    const infoDiv = document.getElementById('pharmacy-info');
    
    if (pharmacy) {
        // Usar mapsAddress para el enlace, displayAddress para el texto
        const encodedMapsAddress = encodeURIComponent(pharmacy.mapsAddress);
        const mapsUrl = `https://www.google.com/maps?q=${encodedMapsAddress}`;

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
    if (currentMonthIndex < 11) {
        currentMonthIndex++;
    } else if (currentYear < 2026) {
        currentYear++;
        currentMonthIndex = 0;
    }
    renderCalendar(currentYear, currentMonthIndex);
});

// === ✨ Menú de ajustes (engranaje) ===
document.addEventListener('DOMContentLoaded', () => {
    renderCalendar(currentYear, currentMonthIndex);

    const settingsBtn = document.getElementById('settings-btn');
    const modal = document.getElementById('settings-modal');
    const overlay = document.getElementById('modal-overlay');
    const closeBtn = document.getElementById('close-settings');
    const shareBtn = document.getElementById('share-app');
    const modalContent = document.querySelector('.modal-content');

    if (!settingsBtn || !modal || !overlay || !closeBtn || !shareBtn || !modalContent) {
        console.warn('Faltan elementos del menú de ajustes');
        return;
    }

    const openSettings = () => {
        modal.classList.remove('hidden');
        overlay.classList.remove('hidden');
        document.body.style.overflow = 'hidden';
    };

    const closeSettings = () => {
        modal.classList.add('hidden');
        overlay.classList.add('hidden');
        document.body.style.overflow = '';
    };

    settingsBtn.addEventListener('click', openSettings);
    closeBtn.addEventListener('click', closeSettings);
    overlay.addEventListener('click', closeSettings);

    // 🔑 ¡Clave! Evita que el clic en el contenido cierre el modal
    modalContent.addEventListener('click', (e) => {
        e.stopPropagation();
    });

    // Compartir aplicación
    shareBtn.addEventListener('click', () => {
        const url = window.location.href;
        const text = '¡Consulta las farmacias de guardia en Las Cabezas de San Juan con FarmApp!';

        if (navigator.share) {
            navigator.share({ title: 'FarmApp', text, url })
                .catch(() => fallbackShare(url));
        } else {
            fallbackShare(url);
        }
    });

    function fallbackShare(url) {
        if (navigator.clipboard) {
            navigator.clipboard.writeText(url).then(() => {
                alert('Enlace copiado al portapapeles.\n¡Pégalo en WhatsApp, Telegram o donde quieras!');
            });
        } else {
            prompt('Copia y comparte este enlace:', url);
        }
        closeSettings();
    }
});