const API =
  "https://youtube-v31.p.rapidapi.com/search?channelId=UCGyGwmuoWnaVVmHAEg4nNbw&part=snippet%2Cid&order=date&maxResults=50";
const content = null || document.getElementById("content");
const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "47feaeab2dmsh16b76981929e745p1be7f6jsn20adffafc9af",
    "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
  },
};
async function fetchData(urlAPI) {
  const response = await fetch(urlAPI, options);
  const data = await response.json();
  return data;
}
(async () => {
  try {
    const videos = await fetchData(API);
    let view = `
    ${videos.items
      .map(
        (video) => `
      <div class="group relative">
      <a href="https://www.youtube.com/watch?v=${video.id.videoId}">  
      <div
          class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
          <img src="${video.snippet.thumbnails.medium.url}" alt="${video.snippet.description}" class="w-full">
        </div>
        <div class="mt-4 flex justify-between">
          <h3 class="text-sm text-emerald-600 font-bold">
            <span aria-hidden="true" class="absolute inset-0"></span>
            ${video.snippet.title}
          </h3>
        </div></a>
      </div>
    `
      )
      .slice(1, 5)
      .join("")}
    `;
    content.innerHTML = view;
  } catch (error) {
    console.error(error);
  }
})();
