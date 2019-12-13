export const ImageToBase64 = (file, callback) => {
  let reader = new FileReader();
  if (file && file.type.match('image.*')) {
    reader.readAsDataURL(file);
  }
  reader.onload = function () {
    callback(reader.result);
  };
  reader.onerror = function (error) {
      console.log('Error: ', error);
  };
}