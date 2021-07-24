export default class ImageLoader {
  constructor(loadedImages) {
    this.loadedImages = loadedImages;
    this.error = null;
  }

  addImage(name, url) {
    this.error = document.getElementById("error");
    const image = document.createElement("img");
    image.src = url;

    image.addEventListener("load", () => {
      this.error.classList.add("hidden");
      image.className = "image";
      image.alt = name;

      const loadedImage = document.createElement("div");
      loadedImage.className = "loaded-image";
      loadedImage.innerHTML = "<div class=\"delete\"></div>";
      loadedImage.appendChild(image);
      this.loadedImages.appendChild(loadedImage);
    });

    image.addEventListener("error", () => {
      this.error.classList.remove("hidden");
    });
  }
}
