const NewsArticle = () => {
return (
<div className="mx-auto bg-white">
    <div className="mb-6 bg-yellow-500 text-black w-full p-4">
        <h2 className="text-lg font-bold uppercase border-b border-black">News</h2>
        <p>Bringing you the latest goss in Alrewas</p>
    </div>
  <div className="mb-4 p-4">
    <h1 className="text-3xl font-extrabold leading-tight text-gray-900">
      Something fishy has been happening in the Marshes...
    </h1>
    <p className="text-sm text-gray-400 mt-4">July 30, 2024</p>
    <p className="text-sm text-gray-400">By Jane Doe</p>
  </div>
  <div className="prose prose-lg max-w-none p-4">
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
      lacinia odio vitae vestibulum vestibulum. Cras venenatis euismod
      malesuada.
    </p>
    <img className="my-4 w-full h-auto rounded" src="/src/assets/news-image.jpg" alt="just a placeholder pic" />
    <p>
      Curabitur pharetra quam vitae ex facilisis, a bibendum ipsum
      ullamcorper. Nam tristique velit et mauris suscipit, non feugiat
      libero ullamcorper.
    </p>
    <p>
      In hac habitasse platea dictumst. Proin ac facilisis neque. Vivamus
      elementum, turpis at volutpat viverra, libero eros tincidunt metus, a
      malesuada libero erat at lorem.
    </p>
  </div>
  <div className="mt-8 border-t border-gray-200 pt-4">
    <p className="text-sm text-gray-500">
      Related Articles: <a href="#" className="text-blue-500 hover:underline">Link to related article</a>
    </p>
  </div>
</div>
)
};

export default NewsArticle;