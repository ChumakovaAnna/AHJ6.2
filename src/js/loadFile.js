export default function loadFile(files, imageLoader, selectFile) {
  files.forEach((item) => {
    const imageUrl = URL.createObjectURL(item);
    imageLoader.addImage("no-name", imageUrl);
    selectFile.addEventListener("load", () => {
      URL.revokeObjectURL(imageUrl);
    });
  });
}
