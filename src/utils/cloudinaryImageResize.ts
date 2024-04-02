export const cloudinaryImageResize = ({
  imageUrl,
  width,
  height,
}: {
  imageUrl: string;
  width: number;
  height: number;
}) => {
  const userName = 'shaifarfan';
  const path = `${userName}/image/upload`;
  const newPath = `${path}/c_fill,w_${width},h_${height}/`;
  const res = imageUrl.replace(path, newPath);

  return res;
};
