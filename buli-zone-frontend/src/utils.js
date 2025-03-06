export const getImageUrl = (path) => {
    const url = `/src/assets/${path}`;
    const img_url = new URL(url, import.meta.url).href;
    return img_url;
  };
  
  