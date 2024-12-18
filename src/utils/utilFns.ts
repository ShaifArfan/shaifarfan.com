export const removeTrailingSlash = (str: string) => {
  let tempStr = str;
  if (tempStr[tempStr.length - 1] === '/') {
    tempStr = tempStr.slice(0, tempStr.length - 1);
  }

  return tempStr;
};
