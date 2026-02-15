const form = document.getElementById("form-absensi");
const nama = document.getElementById("nama");
const kelas = document.getElementById("kelas");
const status = document.getElementById("status");

let dataAbsensi = JSON.parse(localStorage.getItem("dataAbsensi")) || [];

const saveData = () => {
  localStorage.setItem("dataAbsensi", JSON.stringify(dataAbsensi));
};

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const namaValue = nama.value.trim();
  const kelasValue = kelas.value.trim();
  const statusValue = status.value;

  if (namaValue === "") {
    alert("Nama tidak boleh kosong!!!");
    namaValue.focus();
    return;
  } else if (kelasValue === "") {
    alert("Kelas tidak boleh kosong!!!");
    kelasValue.focus();
    return;
  } else if (statusValue === "") {
    alert("Status tidak boleh kosong!!!");
    statusValue.focus();
    return;
  }

  const absenData = {
    nama: namaValue,
    kelas: kelasValue,
    status: statusValue,
    tanggal: new Date().toLocaleDateString("id-ID"),
    jam: new Date().toLocaleTimeString("id-ID"),
  };

  dataAbsensi.push(absenData);

  localStorage.setItem("dataAbsensi", JSON.stringify(dataAbsensi));

  window.location.href = "data.html";
});
