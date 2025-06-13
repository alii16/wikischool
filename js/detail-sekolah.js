// Dummy Data
const schools = [
  {
    id: "sma-1",
    name: "SMA Negeri 1 Jakarta",
    type: "SMA",
    address: "Jl. Wijaya Kusuma No. 1, Jakarta Pusat, DKI Jakarta",
    image:
      "https://images.pexels.com/photos/31986952/pexels-photo-31986952.jpeg",
    jurusan: [],
    website: "https://sman1jakarta.sch.id",
    mapEmbed:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.666427387201!2d106.82030097499015!3d-6.175392493817107!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f5d37617d3d7%3A0x67c29e79b92138a0!2sSMA%20Negeri%201%20Jakarta!5e0!3m2!1sen!2sid!4v1700000000000!5m2!1sen!2sid",
    routeLink:
      "https://www.google.com/maps/dir/?api=1&destination=SMA+Negeri+1+Jakarta",
    akreditasi: "A",
    fasilitas: [
      "Laboratorium Komputer",
      "Perpustakaan",
      "Lapangan Olahraga",
      "Mushola",
      "Kantin",
    ],
    ekskul: ["Paskibra", "Pramuka", "Basket", "Futsal", "Rohis", "Teater"],
  },
  {
    id: "smk-1",
    name: "SMK Negeri 1 Jakarta",
    type: "SMK",
    address: "Jl. Budi Utomo No. 1, Jakarta Pusat, DKI Jakarta",
    image: "https://images.pexels.com/photos/710743/pexels-photo-710743.jpeg",
    jurusan: [
      "Teknik Komputer & Jaringan",
      "Multimedia",
      "Akuntansi",
      "Perhotelan",
    ],
    website: "https://smkn1jakarta.sch.id",
    mapEmbed:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.666427387201!2d106.82030097499015!3d-6.175392493817107!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f5d37617d3d7%3A0x67c29e79b92138a0!2sSMK%20Negeri%201%20Jakarta!5e0!3m2!1sen!2sid!4v1700000000000!5m2!1sen!2sid", // Placeholder, use a real one
    routeLink:
      "https://www.google.com/maps/dir/?api=1&destination=SMK+Negeri+1+Jakarta",
    akreditasi: "A",
    fasilitas: [
      "Bengkel TKJ",
      "Lab Multimedia",
      "Studio Rekaman",
      "Hotel Mini",
      "Perpustakaan",
    ],
    ekskul: ["Robotik", "Desain Grafis", "Paskibra", "Futsal"],
  },
  {
    id: "sma-2",
    name: "SMA Swasta Harapan Bangsa",
    type: "SMA",
    address: "Jl. Kebon Jeruk No. 10, Jakarta Barat, DKI Jakarta",
    image: "https://images.pexels.com/photos/710743/pexels-photo-710743.jpeg",
    jurusan: [],
    website: "https://harapanbangsa.sch.id",
    mapEmbed:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.666427387201!2d106.82030097499015!3d-6.175392493817107!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f5d37617d3d7%3A0x67c29e79b92138a0!2sSMA%20Swasta%20Harapan%20Bangsa!5e0!3m2!1sen!2sid!4v1700000000000!5m2!1sen!2sid", // Placeholder
    routeLink:
      "https://www.google.com/maps/dir/?api=1&destination=SMA+Swasta+Harapan+Bangsa",
    akreditasi: "A",
    fasilitas: [
      "Kolam Renang",
      "Auditorium",
      "Laboratorium Bahasa",
      "Lapangan Indoor",
    ],
    ekskul: ["Debat", "Musik", "Renang", "Badminton"],
  },
  {
    id: "smk-2",
    name: "SMK Pusat Unggulan Kreatif",
    type: "SMK",
    address: "Jl. Merdeka No. 5, Bandung, Jawa Barat",
    image: "https://images.pexels.com/photos/710743/pexels-photo-710743.jpeg",
    jurusan: [
      "Desain Komunikasi Visual",
      "Pengembangan Perangkat Lunak",
      "Tata Boga",
    ],
    website: "https://smkpusatunggulan.sch.id",
    mapEmbed:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.666427387201!2d106.82030097499015!3d-6.175392493817107!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f5d37617d3d7%3A0x67c29e79b92138a0!2sSMK%20Pusat%20Unggulan%20Kreatif!5e0!3m2!1sen!2sid!4v1700000000000!5m2!1sen!2sid", // Placeholder
    routeLink:
      "https://www.google.com/maps/dir/?api=1&destination=SMK+Pusat+Unggulan+Kreatif",
    akreditasi: "B",
    fasilitas: [
      "Dapur Praktik",
      "Lab Komputer",
      "Studio Desain",
      "Ruang Co-working",
    ],
    ekskul: ["Klub Film", "Jurnalistik", "Komunitas Programmer"],
  },
  {
    id: "sma-3",
    name: "SMA Negeri 2 Bandung",
    type: "SMA",
    address: "Jl. Cihampelas No. 1, Bandung, Jawa Barat",
    image: "https://images.pexels.com/photos/710743/pexels-photo-710743.jpeg",
    jurusan: [],
    website: "https://sman2bandung.sch.id",
    mapEmbed:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.666427387201!2d106.82030097499015!3d-6.175392493817107!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f5d37617d3d7%3A0x67c29e79b92138a0!2sSMA%20Negeri%202%20Bandung!5e0!3m2!1sen!2sid!4v1700000000000!5m2!1sen!2sid", // Placeholder
    routeLink:
      "https://www.google.com/maps/dir/?api=1&destination=SMA+Negeri+2+Bandung",
    akreditasi: "A",
    fasilitas: [
      "Gedung Olahraga",
      "Ruang Serbaguna",
      "Klinik Kesehatan",
      "Area Parkir Luas",
    ],
    ekskul: ["Olimpiade Sains", "Karya Ilmiah Remaja", "Paduan Suara"],
  },
  {
    id: "smk-3",
    name: "SMK Kesehatan Bakti Utama",
    type: "SMK",
    address: "Jl. Pahlawan No. 7, Surabaya, Jawa Timur",
    image: "https://images.pexels.com/photos/710743/pexels-photo-710743.jpeg",
    jurusan: [
      "Farmasi Klinis dan Komunitas",
      "Keperawatan Gigi",
      "Teknologi Laboratorium Medik",
    ],
    website: "https://smkkesehatan.sch.id",
    mapEmbed:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.666427387201!2d106.82030097499015!3d-6.175392493817107!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f5d37617d3d7%3A0x67c29e79b92138a0!2sSMK%20Kesehatan%20Bakti%20Utama!5e0!3m2!1sen!2sid!4v1700000000000!5m2!1sen!2sid", // Placeholder
    routeLink:
      "https://www.google.com/maps/dir/?api=1&destination=SMK+Kesehatan+Bakti+Utama",
    akreditasi: "B",
    fasilitas: [
      "Laboratorium Farmasi",
      "Lab Keperawatan",
      "Simulasi Klinik",
      "Ruang Steril",
    ],
    ekskul: ["Palang Merah Remaja (PMR)", "Kerohanian", "Voli"],
  },
];

document.addEventListener("DOMContentLoaded", () => {
  const urlParams = new URLSearchParams(window.location.search);
  const schoolId = urlParams.get("id");

  const school = schools.find((s) => s.id === schoolId);

  if (school) {
    document.getElementById("school-name").textContent = school.name;

    const schoolTypeElement = document.getElementById("school-type");
    schoolTypeElement.textContent = school.type;
    if (school.type === "SMA") {
      schoolTypeElement.classList.add(
        "bg-indigo-100",
        "text-indigo-800",
        "dark:bg-indigo-900",
        "dark:text-indigo-300"
      );
    } else {
      schoolTypeElement.classList.add(
        "bg-pink-100",
        "text-pink-800",
        "dark:bg-pink-900",
        "dark:text-pink-300"
      );
    }

    document.getElementById("school-image").src = school.image; // Main image for carousel
    document.getElementById("school-address").textContent = school.address;
    document.getElementById("school-akreditasi").textContent =
      school.akreditasi;

    const websiteLink = document.getElementById("school-website");
    websiteLink.href = school.website;
    websiteLink.textContent = school.website.replace(/(^\w+:|^)\/\//, ""); // Display without http(s)://

    // Jurusan (conditional for SMK)
    const jurusanSection = document.getElementById("school-jurusan-section");
    const jurusanList = document.getElementById("school-jurusan");
    if (school.type === "SMK" && school.jurusan && school.jurusan.length > 0) {
      jurusanSection.classList.remove("hidden");
      school.jurusan.forEach((jurusan) => {
        const li = document.createElement("li");
        li.textContent = jurusan;
        jurusanList.appendChild(li);
      });
    } else {
      jurusanSection.classList.add("hidden");
    }

    // Fasilitas
    const fasilitasList = document.getElementById("school-fasilitas");
    if (school.fasilitas && school.fasilitas.length > 0) {
      school.fasilitas.forEach((fasilitas) => {
        const li = document.createElement("li");
        li.textContent = fasilitas;
        fasilitasList.appendChild(li);
      });
    } else {
      fasilitasList.innerHTML =
        "<li>Tidak ada informasi fasilitas yang tersedia.</li>";
    }

    // Ekskul
    const ekskulList = document.getElementById("school-ekskul");
    if (school.ekskul && school.ekskul.length > 0) {
      school.ekskul.forEach((ekskul) => {
        const li = document.createElement("li");
        li.textContent = ekskul;
        ekskulList.appendChild(li);
      });
    } else {
      ekskulList.innerHTML =
        "<li>Tidak ada informasi ekstrakurikuler yang tersedia.</li>";
    }

    // Map
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
