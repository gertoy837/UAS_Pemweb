document.addEventListener("DOMContentLoaded", function () {
    let currentDate = new Date(2025, 0, 1);

    function updateCalendar() {
        const monthYearElement = document.getElementById("monthYear");
        const calendarBody = document.getElementById("calendarBody");

        calendarBody.innerHTML = "";

        const monthNames = ["JANUARY", "FEBRUARY", "MARCH", "APRIL", "MAY", "JUNE", "JULY", "AUGUST", "SEPTEMBER", "OCTOBER", "NOVEMBER", "DECEMBER"];
        monthYearElement.textContent = `${monthNames[currentDate.getMonth()]} ${currentDate.getFullYear()}`;

        const firstDay = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);
        const lastDay = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0);

        const prevLastDay = new Date(currentDate.getFullYear(), currentDate.getMonth(), 0).getDate();

        const daysInMonth = lastDay.getDate();

        const firstDayIndex = firstDay.getDay();

        let row = document.createElement("tr");
        let day = 1;

        // Isi hari-hari bulan sebelumnya (jika ada)
        for (let i = firstDayIndex; i > 0; i--) {
            const cell = document.createElement("td");
            cell.classList.add("text-muted");
            cell.textContent = prevLastDay - i + 1;
            row.appendChild(cell);
        }

        // Isi hari-hari bulan ini
        for (let i = 1; i <= daysInMonth; i++) {
            const cell = document.createElement("td");
            cell.textContent = i;
            row.appendChild(cell);

            // Jika sudah mencapai akhir minggu (7 hari), buat baris baru
            if ((i + firstDayIndex - 1) % 7 === 6 || i === daysInMonth) {
                calendarBody.appendChild(row);
                row = document.createElement("tr");
            }
        }

        // Isi hari-hari bulan berikutnya (jika ada)
        let nextDay = 1;
        while (row.children.length < 7) {
            const cell = document.createElement("td");
            cell.classList.add("text-muted");
            cell.textContent = nextDay++;
            row.appendChild(cell);
        }
        if (row.children.length > 0) {
            calendarBody.appendChild(row);
        }
    }

    document.getElementById("prevMonth").addEventListener("click", function () {
        currentDate.setMonth(currentDate.getMonth() - 1);
        updateCalendar();
    });

    document.getElementById("nextMonth").addEventListener("click", function () {
        currentDate.setMonth(currentDate.getMonth() + 1);
        updateCalendar();
    });

    updateCalendar();
});