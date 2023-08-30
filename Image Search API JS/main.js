const searchForm = document.querySelector(".search-form");
const searchInput = document.querySelector("#search-input");
const searchResult = document.getElementById("search-result");
const showMoreButton = document.getElementById("show-more-button");

let keyword = "";
let page = 1;
const accessKey = "ksg6y7tRFauQjnsjtdiGGEBassnKeCqmEoXJsOo_Clg";

async function searchImage() {
  keyword = searchInput.value;
  const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accessKey}&per_page=12`;

  const response = await fetch(url);
  const data = await response.json();

  if(page === 1){
    searchResult.innerHTML = "";
  }

  const results = data.results;

  results.map((result) => {
    const image = document.createElement("img");
    image.src = result.urls.small;
    const link = document.createElement("a");
    link.href = result.links.html;
    link.target = "_blank";

    link.appendChild(image);
    searchResult.appendChild(link);
  });

  showMoreButton.style.display = "block";
}

searchForm.addEventListener("submit", (e) => {
  e.preventDefault();
  page = 1;
  searchImage();
});

showMoreButton.addEventListener("click", () => {
  page++;
  searchImage();
});
