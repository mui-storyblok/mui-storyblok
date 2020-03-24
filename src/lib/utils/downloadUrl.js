// makes a tag to handle url download
const downloadUrl = (href, fileName) => {
  const tempLink = document.createElement('a');
  tempLink.href = href;
  tempLink.setAttribute('download', fileName);
  tempLink.setAttribute('target', '_blank');
  tempLink.click();
  tempLink.remove();
};

export default downloadUrl;
