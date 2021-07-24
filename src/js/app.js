import ImageLoader from "./ImageLoader";
import loadFile from "./loadFile";

const loadedImage = document.getElementsByClassName("loaded-images")[0];
const selectFile = document.querySelector("#select-file");
const dropFile = document.querySelector("#drop-file");
const imageLoader = new ImageLoader(loadedImage);

dropFile.addEventListener("click", () => {
  selectFile.value = null;
  selectFile.dispatchEvent(new MouseEvent("click"));
});

dropFile.addEventListener("dragover", (event) => {
  event.preventDefault();
});

dropFile.addEventListener("drop", (event) => {
  event.preventDefault();
  const { files } = event.dataTransfer;
  loadFile(files, imageLoader, selectFile);
});

selectFile.addEventListener("input", (event) => {
  const { files } = event.currentTarget;
  loadFile(files, imageLoader, selectFile);
});

loadedImage.addEventListener("click", (event) => {
  if (event.target.className === "delete") {
    const itemElement = event.target.closest(".loaded-image");
    loadedImage.removeChild(itemElement);
  }
});
