let dataPoliklinik = [
    {
        id: 1,
        nama: "Poli Umum",
        dokter: "dr. Harun Yahya",
        jadwal: "Senin-Jumat, 08.00-16.00",
        status: "Aktif"
    },
    {
        id: 2,
        nama: "Poli Gigi",
        dokter: "dr. Eka Vitaloka",
        jadwal: "Selasa-Kamis, 09.00-15.00",
        status: "Aktif"
    },
    {
        id: 3,
        nama: "Poli Anak",
        dokter: "dr. Mochammad Mahardika",
        jadwal: "Rabu-Jumat, 10.00-14.00",
        status: "Non-Aktif"
    },
    {
        id: 4,
        nama: "Poli Kandungan",
        dokter: "dr. Ananda Tasya",
        jadwal: "Senin-Rabu, 08.00-12.00",
        status: "Aktif"
    }
];

function renderPoliklinik() {
    const daftarPoliklinik = document.getElementById("daftarPoliklinik");
    daftarPoliklinik.innerHTML = ""; // Kosongkan konten sebelum mengisi ulang

    dataPoliklinik.forEach((poliklinik) => {
        const card = `
            <div class="col-md-4 mb-4">
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">${poliklinik.nama}</h5>
                        <p class="card-text">Dokter: ${poliklinik.dokter}</p>
                        <p class="card-text">Jadwal: ${poliklinik.jadwal}</p>
                        <p class="card-text">
                            Status: 
                            <span class="badge ${poliklinik.status === 'Aktif' ? 'bg-success' : 'bg-danger'}">
                                ${poliklinik.status}
                            </span>
                        </p>
                        <!-- <div class="d-flex justify-content-between">
                            <button class="btn btn-warning btn-sm" onclick="editPoliklinik(${poliklinik.id})">Edit</button>
                            <button class="btn btn-danger btn-sm" onclick="hapusPoliklinik(${poliklinik.id})">Hapus</button>
                        </div> -->
                    </div>
                </div>
            </div>
        `;
        daftarPoliklinik.innerHTML += card;
    });
}

document.addEventListener("DOMContentLoaded", renderPoliklinik);
