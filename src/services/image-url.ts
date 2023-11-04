const getCroppedImageUrl = (url: string) => {
  if (!url)
    return "https://ngapihoney.com/wp-content/uploads/2019/06/no-image.jpg";
  const target = "media/";
  const index = url.indexOf(target) + target.length;
  return url.slice(0, index) + "crop/600/400/" + url.slice(index);
};

export default getCroppedImageUrl;
