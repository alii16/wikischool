// detail-sekolah.js

document.addEventListener("DOMContentLoaded", async () => {
  const urlParams = new URLSearchParams(window.location.search);
  const schoolId = urlParams.get("id");

  let school = null;

  try {
    const response = await fetch("data/data.json");
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const schools = await response.json();
    school = schools.find((s) => s.id === schoolId);
  } catch (error) {
    console.error("Error fetching school data for detail page:", error);
    document.getElementById("school-detail-container").classList.add("hidden");
    document.getElementById("not-found").classList.remove("hidden");
    document.getElementById("not-found").textContent =
      "Gagal memuat detail sekolah. Silakan coba lagi nanti.";
    return;
  }

  if (school) {
    // 1. Informasi Dasar Sekolah
    document.getElementById("school-name").textContent = school.name || "Nama Sekolah Tidak Tersedia";

    const schoolTypeElement = document.getElementById("school-type");
    schoolTypeElement.textContent = school.type || "Tipe Tidak Tersedia";
    schoolTypeElement.className = "text-sm font-semibold mb-6 px-2 py-1 rounded-full self-start"; // Reset class

    // Penentuan warna berdasarkan tipe sekolah
    switch (school.type) {
      case "SMA":
        schoolTypeElement.classList.add("bg-indigo-100", "text-indigo-800", "dark:bg-indigo-900", "dark:text-indigo-300");
        break;
      case "SMK":
        schoolTypeElement.classList.add("bg-pink-100", "text-pink-800", "dark:bg-pink-900", "dark:text-pink-300");
        break;
      case "MA":
        schoolTypeElement.classList.add("bg-purple-100", "text-purple-800", "dark:bg-purple-900", "dark:text-purple-300");
        break;
      default:
        schoolTypeElement.classList.add("bg-gray-100", "text-gray-800", "dark:bg-gray-700", "dark:text-gray-300");
    }

    document.getElementById("school-image").src = school.image || "https://via.placeholder.com/1200x600/CCD1D7/5B798F?text=Gambar+Tidak+Tersedia";
    document.getElementById("school-image").alt = school.name;

    // 2. Detail Informasi
    // Pastikan Anda memiliki elemen dengan ID berikut di detail-sekolah.html Anda
    // Contoh: <p id="school-npsn"></p>
    // Contoh: <p id="school-jenis"></p>
    // Contoh: <p id="school-kecamatan"></p>

    document.getElementById("school-address").textContent = school.address || "Alamat Tidak Tersedia";
    document.getElementById("school-akreditasi").textContent = school.akreditasi || "N/A";
    
    // NPSN
    const npsnElement = document.getElementById("school-npsn");
    if (npsnElement) npsnElement.textContent = school.npsn || "N/A";

    // Jenis (Negeri/Swasta)
    const jenisElement = document.getElementById("school-jenis");
    if (jenisElement) jenisElement.textContent = school.jenis || "N/A";

    // Kecamatan
    const kecamatanElement = document.getElementById("school-kecamatan");
    if (kecamatanElement) kecamatanElement.textContent = school.kecamatan || "N/A";


    // 3. Kontak (Website, Email, Telepon)
    const websiteLink = document.getElementById("school-website");
    if (websiteLink) { // Pastikan elemennya ada
        if (school.website && school.website !== '-') { // Periksa apakah properti website ada dan bukan '-'
            websiteLink.href = school.website;
            websiteLink.textContent = school.website.replace(/(^\w+:|^)\/\//, ""); // Menghapus http/https dari tampilan
            websiteLink.closest('.detail-item')?.classList.remove("hidden"); // Tampilkan div parent jika ada website (asumsi ada div dengan class detail-item)
        } else {
            websiteLink.closest('.detail-item')?.classList.add("hidden"); // Sembunyikan div parent jika tidak ada website
        }
    }

    const emailElement = document.getElementById("school-email");
    if (emailElement) { // Pastikan elemennya ada
        if (school.email && school.email !== '-') {
            emailElement.textContent = school.email;
            emailElement.closest('.detail-item')?.classList.remove("hidden");
        } else {
            emailElement.closest('.detail-item')?.classList.add("hidden");
        }
    }

    const phoneElement = document.getElementById("school-phone"); // Asumsi ada ID school-phone
    if (phoneElement) { // Pastikan elemennya ada
        if (school.telepon && school.telepon !== '-') { // Asumsi ada properti 'telepon'
            phoneElement.textContent = school.telepon;
            phoneElement.closest('.detail-item')?.classList.remove("hidden");
        } else {
            phoneElement.closest('.detail-item')?.classList.add("hidden");
        }
    }

    // 4. Jurusan (Hanya untuk SMK)
      // Jurusan (conditional untuk SMK, SMA, MA)
    const jurusanSection = document.getElementById("school-jurusan-section");
    const jurusanList = document.getElementById("school-jurusan");

    // Cek jika sekolah bertipe SMK, SMA, atau MA dan memiliki jurusan
    if (
      (school.type === "SMK" || school.type === "SMA" || school.type === "MA") &&
      school.jurusan &&
      school.jurusan.length > 0
    ) {
      jurusanSection.classList.remove("hidden"); // Tampilkan section
      jurusanList.innerHTML = ""; // Kosongkan daftar sebelumnya (untuk mencegah duplikasi)
      school.jurusan.forEach((jurusan) => {
        const li = document.createElement("li");
        li.textContent = jurusan;
        jurusanList.appendChild(li);
      });
    } else {
      jurusanSection.classList.add("hidden"); // Sembunyikan jika tidak ada jurusan
    }

    // 5. Fasilitas
    const fasilitasList = document.getElementById("school-fasilitas");
    fasilitasList.innerHTML = ""; // Bersihkan list sebelum mengisi
    if (school.fasilitas && school.fasilitas.length > 0) {
      school.fasilitas.forEach((fasilitas) => {
        const li = document.createElement("li");
        li.textContent = fasilitas;
        fasilitasList.appendChild(li);
      });
    } else {
      fasilitasList.innerHTML = "<li>Tidak ada informasi fasilitas yang tersedia.</li>";
    }

    // 6. Ekstrakurikuler
    const ekskulList = document.getElementById("school-ekskul");
    ekskulList.innerHTML = ""; // Bersihkan list sebelum mengisi
    if (school.ekskul && school.ekskul.length > 0) {
      school.ekskul.forEach((ekskul) => {
        const li = document.createElement("li");
        li.textContent = ekskul;
        ekskulList.appendChild(li);
      });
    } else {
      ekskulList.innerHTML = "<li>Tidak ada informasi ekstrakurikuler yang tersedia.</li>";
    }

    // 7. Peta dan Rute
    const mapIframe = document.querySelector("#school-map iframe");
    mapIframe.src = school.mapEmbed;
    document.getElementById("school-route-btn").href = school.routeLink;

    document
      .getElementById("school-detail-container")
      .classList.remove("hidden");
    document.getElementById("not-found").classList.add("hidden");
  } else {
    document.getElementById("school-detail-container").classList.add("hidden");
    document.getElementById("not-found").classList.remove("hidden");
  }
});