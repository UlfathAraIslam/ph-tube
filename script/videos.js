function loadVideos() {
  // fetch the data
  fetch("https://openapi.programming-hero.com/api/phero-tube/videos")
    // get a promise and convert it in json
    .then((res) => res.json())
    // send data to displayVideos
    .then((data) => displayVideos(data.videos));
}
const displayVideos = (videos) => {
  // get the video container
  const videoContainer = document.getElementById("video-container");

  videoContainer.innerHTML = "";

  if(videos.length==0){
    videoContainer.innerHTML=`
    <div class="col-span-full flex flex-col justify-center items-center py-20">
        <img class="my-4" src="./assests/Icon.png" alt="">
        <h1 class="text-2xl font-bold">Oops!! Sorry, There is no content here</h1>
     </div>
    `
    return;
  }
     // loop on videos
  videos.forEach((video) => {
    console.log(video);
    // create an element
    const videoCard = document.createElement("div");
    videoCard.innerHTML = `
    <div class="card bg-base-100">
        <figure class="relative">
          <img class="rounded w-full h-[150px] object-cover" src="${video.thumbnail}" />
          <span
            class="absolute bg-black text-white text-sm bottom-2 right-5 rounded px-2"
            >3hrs 56 min ago</span
          >
        </figure>
        <div class="flex gap-3 px-0 py-5">
          <div class="profile">
            <div class="avatar">
              <div
                class="ring-primary ring-offset-base-100 w-6 rounded-full ring ring-offset-2"
              >
                <img
                  src="${video.authors[0].profile_picture}"
                />
              </div>
            </div>
          </div>
          <div class="intro">
            <h2 class="card-title">${video.title}</h2>
            <p class="text-gray-400 text-sm flex gap-1">
            ${video.authors[0].profile_name}
              <img
                class="w-6"
                src="https://img.icons8.com/?size=96&id=98A4yZTt9abw&format=png"
                alt=""
              />
            </p>
            <p class="text-gray-400 text-sm">${video.others.views}</p>
          </div>
        </div>
      </div>
    `
    // append the element
    videoContainer.append(videoCard);
  });
};
// loadVideos();
