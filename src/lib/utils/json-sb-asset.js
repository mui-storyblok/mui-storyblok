// https://gist.github.com/DominikAngerer/dc9c7735021c13a4a05ee4752e3591ce
// https://forum.storyblok.com/t/cors-and-assets/282/7
// using storyblok assets add theme to page as json file

// Current blob size limit is around 500MB for browsers
const jsonSbAsset = async (url) => {
  // use the direct S3 domain
  const s3Domain = url.replace('a.storyblok', 's3.amazonaws.com/a.storyblok');
  let res;
  try {
    res = await fetch(s3Domain, {
      headers: new Headers({
        Origin: window.location.origin,
      }),
      mode: 'cors',
    });
    return res.json();
  } catch (err) {
    throw new Error(err);
  }
};

export default jsonSbAsset;
