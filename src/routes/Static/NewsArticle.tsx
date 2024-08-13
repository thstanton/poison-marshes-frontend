import YouTube from "react-youtube";

const NewsArticle = () => {
  return (
    <div className="mx-auto bg-gray-300 font-sans">
      <div className="mx-auto max-w-5xl bg-white">
        <div className="mb-6 w-full bg-yellow-500 p-4 text-black">
          <h2 className="border-b border-black pb-2 text-3xl font-bold uppercase">
            <ABCLogo /> News
          </h2>
          <p className="pt-1">
            Alrewas &#x2022; Fradley &#x2022; Wychnor &#x2022; King's Bromley
          </p>
        </div>
        <div className="mb-4 p-4">
          <h1 className="text-3xl font-extrabold leading-tight text-gray-900">
            Something fishy has been happening in the Marshes...
          </h1>
          <p className="mt-4 text-sm text-gray-400">July 30, 2024</p>
          <p className="text-sm text-gray-400">By Jane Doe</p>
        </div>
        <div className="prose-lg prose max-w-none p-4">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
            lacinia odio vitae vestibulum vestibulum. Cras venenatis euismod
            malesuada.
          </p>
          <div className="flex w-full justify-center">
            <YouTube
              videoId="GtB1__4QTcc"
              className="mx-auto min-w-20 max-w-full md:min-w-80"
            />
          </div>
          <p>
            Curabitur pharetra quam vitae ex facilisis, a bibendum ipsum
            ullamcorper. Nam tristique velit et mauris suscipit, non feugiat
            libero ullamcorper.
          </p>
          <blockquote>We are appalled by this...</blockquote>
          <p>
            In hac habitasse platea dictumst. Proin ac facilisis neque. Vivamus
            elementum, turpis at volutpat viverra, libero eros tincidunt metus,
            a malesuada libero erat at lorem.
          </p>
        </div>
        <div className="mt-8 border-t border-gray-200 bg-amber-300 px-2 pt-4">
          <div className="prose pb-4">
            <p className="text-sm font-bold text-black">Related Articles:</p>
            <ul>
              <li>Article</li>
              <li>Article</li>
              <li>Article</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsArticle;

const ABCLogo = () => {
  return (
    <div className="inline">
      <ABCChar>A</ABCChar>
      <ABCChar>B</ABCChar>
      <ABCChar>C</ABCChar>
    </div>
  );
};

const ABCChar = ({ children }: { children: React.ReactNode }) => {
  return <div className="mr-1 inline bg-black px-2 text-white">{children}</div>;
};
