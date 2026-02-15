const key = "dataAbsensi";
const tbody = document.getElementById("data-absensi");

const ambilData = () => {
  const dataString = localStorage.getItem(key);

  return JSON.parse(dataString) || [];
};

const renderTampilan = () => {
  let data = ambilData();

  tbody.innerHTML = "";

  data.forEach((siswa, index) => {
    const tr = document.createElement("tr");

    tr.innerHTML = `
            <td>${index + 1}</td>
            <td>${siswa.nama}</td>
            <td>${siswa.kelas}</td>
            <td>${siswa.status}</td>
            <td>${siswa.tanggal}</td>
            <td>${siswa.jam}</td>
        `;

    tbody.appendChild(tr);
  });
};

renderTampilan();
