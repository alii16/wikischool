// Dummy Data
const schools = [
  {
    id: "sma-1",
    name: "SMA Negeri 1 Jakarta",
    type: "SMA",
    address: "Jl. Wijaya Kusuma No. 1, Jakarta Pusat",
    image: "https://images.pexels.com/photos/710743/pexels-photo-710743.jpeg",
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
    address: "Jl. Budi Utomo No. 1, Jakarta Pusat",
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
    address: "Jl. Kebon Jeruk No. 10, Jakarta Barat",
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
    address: "Jl. Merdeka No. 5, Bandung",
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
    address: "Jl. Cihampelas No. 1, Bandung",
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
    address: "Jl. Pahlawan No. 7, Surabaya",
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

let currentFilter = "all";
let currentSearchTerm = "";

const schoolListContainer = document.getElementById("school-list");
const noResultsMessage = document.getElementById("no-results");
const filterButtons = document.querySelectorAll(".filter-btn");
const searchInput = document.getElementById("school-search");

function renderSchools() {
  schoolListContainer.innerHTML = ""; // Clear previous cards
  const filteredAndSearchedSchools = schools.filter((school) => {
    const matchesFilter =
      currentFilter === "all" || school.type.toLowerCase() === currentFilter;
    const matchesSearch = school.name
      .toLowerCase()
      .includes(currentSearchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  if (filteredAndSearchedSchools.length === 0) {
    noResultsMessage.classList.remove("hidden");
  } else {
    noResultsMessage.classList.add("hidden");
    filteredAndSearchedSchools.forEach((school) => {
      const card = `
                        <div class="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden flex flex-col transform transition-transform duration-300 hover:scale-[1.02]">
                            <img class="w-full h-48 object-cover" src="${
                              school.image
                            }" alt="${school.name}">
                            <div class="p-6 flex flex-col flex-grow">
                                <span class="text-xs font-semibold px-2 py-1 rounded-full ${
                                  school.type === "SMA"
                                    ? "bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-300"
                                    : "bg-pink-100 text-pink-800 dark:bg-pink-900 dark:text-pink-300"
                                } mb-2 self-start">
                                    ${school.type}
                                </span>
                                <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-2">${
                                  school.name
                                }</h3>
                                <p class="text-gray-600 dark:text-gray-400 text-sm flex-grow mb-4">${
                                  school.address
                                }</p>
                                <a href="detail-sekolah.html?id=${
                                  school.id
                                }" class="inline-flex items-center justify-center px-4 py-2 text-sm font-medium rounded-lg text-white bg-gradient-indigo-pink hover:opacity-90 transition-all duration-300">
                                    Lihat Detail
                                    <svg class="w-3 h-3 ml-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                                    </svg>
                                </a>
                            </div>
                        </div>
                    `;
      schoolListContainer.innerHTML += card;
    });
  }
}

// Event Listeners for Filters
filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    filterButtons.forEach((btn) => {
      btn.classList.remove("bg-gradient-indigo-pink", "text-white");
      btn.classList.add(
        "bg-white",
        "text-gray-700",
        "border",
        "border-gray-300",
        "dark:bg-gray-700",
        "dark:text-gray-100",
        "dark:border-gray-600",
        "hover:bg-gray-100",
        "dark:hover:bg-gray-600"
      );
    });
    button.classList.add("bg-gradient-indigo-pink", "text-white");
    button.classList.remove(
      "bg-white",
      "text-gray-700",
      "border",
      "border-gray-300",
      "dark:bg-gray-700",
      "dark:text-gray-100",
      "dark:border-gray-600",
      "hover:bg-gray-100",
      "dark:hover:bg-gray-600"
    );

    currentFilter = button.dataset.filter;
    renderSchools();
  });
});

// Event Listener for Search
searchInput.addEventListener("keyup", (event) => {
  currentSearchTerm = event.target.value;
  renderSchools();
});

// Initial render on page load
document.addEventListener("DOMContentLoaded", renderSchools);

function clearFilters() {
  // Reset filter to 'all'
  currentFilter = "all";
  // Reset search input
  currentSearchTerm = "";
  searchInput.value = "";
  // Update filter button styles
  filterButtons.forEach((btn) => {
    btn.classList.remove("bg-gradient-indigo-pink", "text-white");
    btn.classList.add(
      "bg-white",
      "text-gray-700",
      "border",
      "border-gray-300",
      "dark:bg-gray-700",
      "dark:text-gray-100",
      "dark:border-gray-600",
      "hover:bg-gray-100",
      "dark:hover:bg-gray-600"
    );
    if (btn.dataset.filter === "all") {
      btn.classList.add("bg-gradient-indigo-pink", "text-white");
      btn.classList.remove(
        "bg-white",
        "text-gray-700",
        "border",
        "border-gray-300",
        "dark:bg-gray-700",
        "dark:text-gray-100",
        "dark:border-gray-600",
        "hover:bg-gray-100",
        "dark:hover:bg-gray-600"
      );
    }
  });
  renderSchools();
}

// Back to top functionality
window.addEventListener("scroll", function () {
  const backToTop = document.getElementById("backToTop");
  if (window.pageYOffset > 300) {
    backToTop.classList.remove("opacity-0", "invisible");
    backToTop.classList.add("opacity-100", "visible");
  } else {
    backToTop.classList.remove("opacity-100", "visible");
    backToTop.classList.add("opacity-0", "invisible");
  }
});

document.getElementById("backToTop").addEventListener("click", function () {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});
