// Data Array untuk menyimpan data
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


function renderTable() {
    const tbody = document.querySelector("#tabelTimMedis tbody");
    if (!tbody) return; // Jika tidak ada tabel, keluar dari fungsi

    tbody.innerHTML = "";
    dataTimMedis.forEach((data, index) => {
        const row = `
            <tr>
                <td>${data.id}</td>
                <td>${data.nama}</td>
                <td>${data.jabatan}</td>
                <td>${data.tempatLahir}</td>
                <td>${data.tanggalLahir}</td>
                <td><span class="badge ${data.aktif ? 'bg-success' : 'bg-danger'}">${data.aktif ? 'Aktif' : 'Non-Aktif'}</span></td>
                <td>
                    <button class="btn btn-sm btn-warning" onclick="editData(${index})">Edit</button>
                    <button class="btn btn-sm btn-danger" onclick="hapusData(${index})">Hapus</button>
                </td>
            </tr>
        `;
        tbody.innerHTML += row;
    });
}

function editData(index) {
    const data = dataTimMedis[index];
    const nama = prompt("Edit Nama:", data.nama);
    const jabatan = prompt("Edit Jabatan:", data.jabatan);
    const tempatLahir = prompt("Edit Tempat Lahir:", data.tempatLahir);
    const tanggalLahir = prompt("Edit Tanggal Lahir (YYYY-MM-DD):", data.tanggalLahir);
    const aktif = confirm("Apakah aktif? (OK untuk Ya, Cancel untuk Tidak)");

    if (nama && jabatan && tempatLahir && tanggalLahir) {
        dataTimMedis[index] = {
            id: data.id,
            nama,
            jabatan,
            tempatLahir,
            tanggalLahir,
            aktif
        };
        renderTable();
    }
}

function hapusData(index) {
    if (confirm("Apakah Anda yakin ingin menghapus data ini?")) {
        dataTimMedis.splice(index, 1);
        renderTable();
    }
}

document.addEventListener("DOMContentLoaded", renderTable);