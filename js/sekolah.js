let schools = [];
let currentFilterJenjang = "all"; // Untuk filter jenjang (SMA, SMK, MA)
let currentFilterKecamatan = "all"; // Untuk filter kecamatan
let currentFilterStatus = "all"; // Untuk filter status (negeri, swasta)
let currentSearchTerm = "";
// let currentPage = 1;
// let showAll = false;
// const cardsPerPage = 12;

const schoolListContainer = document.getElementById("school-list");
const noResultsMessage = document.getElementById("no-results");
const searchInput = document.getElementById("school-search");
const filterJenjangDropdown = document.getElementById("filter-jenjang");
const filterKecamatanDropdown = document.getElementById("filter-kecamatan");
const filterStatusDropdown = document.getElementById("filter-status");

async function fetchSchoolsData() {
  try {
    const response = await fetch("data/data.json");
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    schools = await response.json();
    populateKecamatanDropdown();
    renderSchools();
  } catch (error) {
    console.error("Error fetching school data:", error);
    schoolListContainer.innerHTML =
      '<p class="text-red-500 dark:text-red-400">Gagal memuat data sekolah. Silakan coba lagi nanti.</p>';
  }
}

function populateKecamatanDropdown() {
  const uniqueKecamatan = [
    ...new Set(schools.map((school) => school.kecamatan)),
  ]
    .filter(Boolean)
    .sort(); // Ambil nilai unik, saring yang kosong, dan urutkan

  // Kosongkan dulu opsi yang ada, kecuali "Semua Kecamatan"
  filterKecamatanDropdown.innerHTML =
    '<option value="all">Semua Kecamatan</option>';

  uniqueKecamatan.forEach((kecamatan) => {
    const option = document.createElement("option");
    option.value = kecamatan.toLowerCase();
    option.textContent = kecamatan;
    filterKecamatanDropdown.appendChild(option);
  });
}

function renderSchools() {
  schoolListContainer.innerHTML = "";
  const filteredAndSearchedSchools = schools.filter((school) => {
    const matchesJenjang =
      currentFilterJenjang === "all" ||
      school.type.toLowerCase() === currentFilterJenjang;
    const matchesKecamatan =
      currentFilterKecamatan === "all" ||
      (school.kecamatan &&
        school.kecamatan.toLowerCase() === currentFilterKecamatan);
    const matchesStatus =
      currentFilterStatus === "all" ||
      (school.jenis && school.jenis.toLowerCase() === currentFilterStatus);
    const matchesSearch = school.name
      .toLowerCase()
      .includes(currentSearchTerm.toLowerCase());

    return matchesJenjang && matchesKecamatan && matchesStatus && matchesSearch;
  });

  // Update total sekolah
  document.getElementById("totalschool").textContent =
    filteredAndSearchedSchools.length + " sekolah ditemukan";

  // PAGINATION
  // const totalPages = Math.ceil(filteredAndSearchedSchools.length / cardsPerPage);
  // if (currentPage > totalPages) currentPage = 1;
  // const startIdx = (currentPage - 1) * cardsPerPage;
  // const endIdx = startIdx + cardsPerPage;
  // const schoolsToShow = filteredAndSearchedSchools.slice(startIdx, endIdx);

  if (filteredAndSearchedSchools.length === 0) {
    noResultsMessage.classList.remove("hidden");
  } else {
    noResultsMessage.classList.add("hidden");
    filteredAndSearchedSchools.forEach((school) => {
      //untuk pagination, gunakan schoolsToShow
  // if (schoolsToShow.length === 0) {
  //   noResultsMessage.classList.remove("hidden");
  // } else {
  //   noResultsMessage.classList.add("hidden");
  //   schoolsToShow.forEach((school) => {
      // (Markup card sekolah seperti sebelumnya)
      const imageUrl = school.image;
      let typeColorClass = "";
      switch (school.type) {
        case "SMA":
          typeColorClass =
            "bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-300";
          break;
        case "SMK":
          typeColorClass =
            "bg-pink-100 text-pink-800 dark:bg-pink-900 dark:text-pink-300";
          break;
        case "MA":
          typeColorClass =
            "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300";
          break;
        default:
          typeColorClass =
            "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300";
      }

      const card = `
          <div class="enhanced-card rounded-2xl flex flex-col">
              <div class="image-overlay">
                  <img class="school-image w-full h-48 object-cover" 
                      src="${imageUrl}" 
                      alt="${school.name}">
                  <div class="floating-badge ${getBadgeClass(school.type)} text-white px-3 py-1 rounded-full text-xs font-bold">
                      <i class="${getTypeIcon(school.type)} mr-1"></i>
                      ${school.type}
                  </div>
              </div>
              
              <div class="card-content p-6 flex flex-col">
                  <div>
                      <div class="status-indicator">
                          <div class="pulse-dot"></div>
                          <span>Terakreditasi ${school.akreditasi}</span>
                      </div>
                      
                      <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-2">
                          ${school.name}
                      </h3>
                      
                      <p class="text-gray-600 dark:text-gray-300 text-sm mb-4">
                        ${school.address}
                      </p>
                      
                      <div class="info-grid flex flex-wrap justify-between items-center">
                          <div class="info-item w-auto">
                              <i class="fas fa-map-marker-alt ${getTypeColor(school.type)} text-xs"></i>
                              <span class="text-xs text-gray-600 dark:text-gray-300">${school.kecamatan}</span>
                          </div>
                          ${school.jurusan && school.jurusan.length > 0 ? `
                          <div class="info-item">
                              <i class="fas fa-book ${getTypeColor(school.type)} text-xs"></i>
                              <span class="text-xs text-gray-600 dark:text-gray-300">${school.jurusan.length} jurusan</span>
                          </div>
                          ` : ''}
                      </div>
                  </div>
                  
                  <div class="mt-auto">
                      <a href="detail-sekolah.html?id=${school.id}" 
                        class="enhanced-button w-full text-xs text-white font-semibold py-2 px-2 rounded-xl flex items-center justify-center gap-2 group block text-center no-underline">
                          <span>Lihat Detail</span>
                          <i class="fas fa-arrow-right text-sm transition-transform group-hover:translate-x-1"></i>
                      </a>
                  </div>
              </div>
          </div>
      `;

      // Helper functions (getBadgeClass, getTypeIcon, getTypeColor) seperti sebelumnya...
      function getBadgeClass(type) {
        switch (type) {
          case "SMA":
            return "bg-gradient-sma";
          case "SMK":
            return "bg-gradient-smk";
          case "MA":
            return "bg-gradient-ma";
          default:
            return "bg-gradient-indigo-pink";
        }
      }

      function getTypeIcon(type) {
        switch (type) {
          case "SMA":
            return "fas fa-graduation-cap";
          case "SMK":
            return "fas fa-tools";
          case "MA":
            return "fas fa-mosque";
          default:
            return "fas fa-school";
        }
      }

      function getTypeColor(type) {
        switch (type) {
          case "SMA":
            return "text-blue-500";
          case "SMK":
            return "text-amber-500";
          case "MA":
            return "text-emerald-500";
          default:
            return "text-indigo-500";
        }
      }

      schoolListContainer.innerHTML += card;
    });
  }
  // renderPagination(totalPages);
}

function renderPagination(totalPages) {
  let paginationContainer = document.getElementById("pagination");
  if (!paginationContainer) {
    paginationContainer = document.createElement("div");
    paginationContainer.id = "pagination";
    paginationContainer.className = "flex justify-center items-center gap-2 pb-8";
    schoolListContainer.parentNode.appendChild(paginationContainer);
  }
  paginationContainer.innerHTML = "";

  if (totalPages <= 1) {
    paginationContainer.style.display = "none";
    return;
  }
  paginationContainer.style.display = "flex";

  // Prev button
  const prevBtn = document.createElement("button");
  prevBtn.innerHTML = "&laquo;";
  prevBtn.className = "px-3 py-2 rounded bg-gray-200 hover:bg-indigo-200 text-xs text-gray-700 font-bold";
  prevBtn.disabled = currentPage === 1;
  prevBtn.onclick = () => {
    if (currentPage > 1) {
      currentPage--;
      renderSchools();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };
  paginationContainer.appendChild(prevBtn);

  // Page numbers (max 5 shown)
  let startPage = Math.max(1, currentPage - 2);
  let endPage = Math.min(totalPages, currentPage + 2);
  if (currentPage <= 3) endPage = Math.min(5, totalPages);
  if (currentPage >= totalPages - 2) startPage = Math.max(1, totalPages - 4);

  for (let i = startPage; i <= endPage; i++) {
    const pageBtn = document.createElement("button");
    pageBtn.textContent = i;
    pageBtn.className =
      "px-3 py-2 rounded " +
      (i === currentPage
        ? "bg-green-100 text-green-700 text-xs font-bold"
        : "bg-gray-200 hover:bg-indigo-200 text-xs text-gray-700");
    pageBtn.onclick = () => {
      currentPage = i;
      renderSchools();
      window.scrollTo({ top: 0, behavior: "smooth" });
    };
    paginationContainer.appendChild(pageBtn);
  }

  // Next button
  const nextBtn = document.createElement("button");
  nextBtn.innerHTML = "&raquo;";
  nextBtn.className = "px-3 py-2 rounded bg-gray-200 hover:bg-indigo-200 text-gray-700 font-bold";
  nextBtn.disabled = currentPage === totalPages;
  nextBtn.onclick = () => {
    if (currentPage < totalPages) {
      currentPage++;
      renderSchools();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };
  paginationContainer.appendChild(nextBtn);
}

function generateSchoolCard(school) {
  return `
    <div class="sekolah-card bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
      <img src="${school.image}" alt="${school.name}" class="rounded-t-2xl w-full h-48 object-cover">
      <div class="card-content p-6">
          <h3 class="text-xl font-semibold text-gray-900 mb-2">${school.name}</h3>
          <p class="text-gray-600 mb-4">${school.address}</p>
          <div class="btn-detail-container">
              <button onclick="showSchoolDetail(${school.id})" 
                class="w-full inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-indigo-600 to-pink-600 text-white rounded-xl hover:from-indigo-700 hover:to-pink-700 transition-all duration-300">
                Lihat Detail
              </button>
          </div>
      </div>
    </div>
  `;
}

// Event Listeners
searchInput.addEventListener("input", (event) => {
  currentSearchTerm = event.target.value.trim();
  renderSchools();
});

filterJenjangDropdown.addEventListener("change", (event) => {
  currentFilterJenjang = event.target.value;
  renderSchools();
});

filterKecamatanDropdown.addEventListener("change", (event) => {
  currentFilterKecamatan = event.target.value;
  renderSchools();
});

filterStatusDropdown.addEventListener("change", (event) => {
  currentFilterStatus = event.target.value;
  currentPage = 1;
  renderSchools();
});

// Clear filters function
function clearFilters() {
  currentFilterJenjang = "all";
  currentFilterKecamatan = "all";
  currentFilterStatus = "all";
  currentSearchTerm = "";

  searchInput.value = "";
  filterJenjangDropdown.value = "all";
  filterKecamatanDropdown.value = "all";
  filterStatusDropdown.value = "all";

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

// Initial data fetch and render when the DOM is fully loaded
document.addEventListener("DOMContentLoaded", fetchSchoolsData);
