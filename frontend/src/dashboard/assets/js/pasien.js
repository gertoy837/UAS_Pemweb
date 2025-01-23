// Data tim medis (disimpan dalam array)
let dataTimMedis = [
    {
        id: 1,
        nama: "Dr. Eka Vitaloka",
        jabatan: "Dokter Umum",
        tempatLahir: "Jakarta",
        tanggalLahir: "1990-05-15",
        aktif: true
    },
    {
        id: 2,
        nama: "Dr. Harun Yahya",
        jabatan: "Dokter Gigi",
        tempatLahir: "Bandung",
        tanggalLahir: "1985-10-20",
        aktif: false
    },
    {
        id: 3,
        nama: "Dr. Ananda Tasya",
        jabatan: "Dokter Spesialis Anak",
        tempatLahir: "Surabaya",
        tanggalLahir: "1988-03-25",
        aktif: true
    },
    {
        id: 4,
        nama: "Dr. Mochammad Mahardika",
        jabatan: "Dokter Bedah",
        tempatLahir: "Yogyakarta",
        tanggalLahir: "1982-07-12",
        aktif: true
    }
];


let dataPasien = [
    {
        no: 1,
        nama: "Emah Suemah",
        kelurahan: "Kukusan",
        tanggal: "2025-01-10",
        umur: 58,
        dokterId: 1
    },
    {
        no: 2,
        nama: "Ridwan Hanif",
        kelurahan: "Beji Timur",
        tanggal: "2025-01-10",
        umur: 3,
        dokterId: 2
    },
    {
        no: 3,
        nama: "Ari Marwanti",
        kelurahan: "Kukusan",
        tanggal: "2024-01-08",
        umur: 24,
        dokterId: 1
    }
];

// Fungsi untuk mendapatkan nama dokter berdasarkan id
function getNamaDokter(dokterId) {
    const dokter = dataTimMedis.find(d => d.id === dokterId);
    return dokter ? dokter.nama : "Dokter Tidak Ditemukan";
}

// Fungsi untuk menampilkan data ke tabel
function renderTable(data) {
    const tbody = document.querySelector("#tabelPasien tbody");
    tbody.innerHTML = ""; // Kosongkan tabel sebelum mengisi ulang

    data.forEach((pasien) => {
        const row = `
            <tr>
                <td>${pasien.no}</td>
                <td>${pasien.nama}</td>
                <td>${pasien.kelurahan}</td>
                <td>${pasien.tanggal}</td>
                <td>${pasien.umur}</td>
                <td>${getNamaDokter(pasien.dokterId)}</td>
            </tr>
        `;
        tbody.innerHTML += row;
    });
}

// Fungsi untuk memfilter data berdasarkan bulan dan tahun
function filterData() {
    const bulan = document.getElementById("bulan").value;
    const tahun = document.getElementById("tahun").value;

    // Filter data berdasarkan bulan dan tahun
    const filteredData = dataPasien.filter((pasien) => {
        const [tahunPasien, bulanPasien] = pasien.tanggal.split("-");
        return bulanPasien === bulan && tahunPasien === tahun;
    });

    // Tampilkan data yang sudah difilter
    renderTable(filteredData);
}

// Tampilkan semua data saat halaman pertama kali dimuat
document.addEventListener("DOMContentLoaded", () => {
    renderTable(dataPasien);
});