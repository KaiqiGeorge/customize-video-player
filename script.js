const player = document.querySelector(".player");
const video = player.querySelector(".viewer");
const progress = player.querySelector(".progress");
const progressBar = player.querySelector(".progress_filled");
const toggle = player.querySelector(".toggle");
const skipButtons = player.querySelectorAll("[data-skip]");
const ranges = player.querySelectorAll(".player_slider");

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
  video[this.name] = this.value;
}

function handleProgress() {
  const percent = (video.currentTime / video.duration) * 100;
  progressBar.style.flexBasis = `${percent}%`;
}

function updatePlayTime(e) {
    let newTime=(e.offsetX/progress.offsetWidth)*video.duration;
    video.currentTime=newTime;

}

video.addEventListener("click", togglePlay);
video.addEventListener("timeupdate", handleProgress);
video.addEventListener("click", updateIcon);
toggle.addEventListener("click", togglePlay);
toggle.addEventListener("click", updateIcon);

skipButtons.forEach((button) => button.addEventListener("click", skip));
ranges.forEach((range) =>
  range.addEventListener("mousemove", handleUpdateRange)
);
ranges.forEach((range) => range.addEventListener("change", handleUpdateRange));

let mousedown = false;
progress.addEventListener("click", updatePlayTime);
progress.addEventListener("mouseup", ()=>mousedown=false);
progress.addEventListener("mousedown", ()=>mousedown=true);
progress.addEventListener("mousemove", (e)=>mousedown && updatePlayTime(e));

