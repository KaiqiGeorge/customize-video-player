const player = document.querySelector(".player");
const video = player.querySelector(".viewer");
const progress = player.querySelector(".progress");
const progressBar = player.querySelector(".progress__filled");
const toggle = player.querySelector(".toggle");
const skipButtons = player.querySelectorAll("[data-skip]");
const ranges = player.querySelectorAll(".player__slider");

function togglePlay() {
  const method = video.paused ? "play" : "pause";
  video[method]();
}
function updateIcon() {
  const icon = video.paused ? "►" : "❚ ❚";
  toggle.innerText = icon;
}

function skip() {
  video.currentTime += parseFloat(this.dataset.skip);
}

function handleUpdateRange() {
  console.log(this.name);
  console.log(this.value);
  video[this.name]=this.value;
}

video.addEventListener("click", togglePlay);
toggle.addEventListener("click", togglePlay);
toggle.addEventListener("click", updateIcon);

skipButtons.forEach(button => button.addEventListener("click", skip));
ranges.forEach(range => range.addEventListener("change", handleUpdateRange));
ranges.forEach(range => range.addEventListener("mousemove", handleUpdateRange));
