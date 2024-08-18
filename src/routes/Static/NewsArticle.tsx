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
            WORM Activists Stir Controversy in Alrewas with Radical Tactics
          </h1>
          <p className="mt-4 text-sm text-gray-400">August 16, 2024</p>
          <p className="text-sm text-gray-400">By Phil Furlong</p>
        </div>
        <div className="prose prose-lg max-w-none p-4">
          <p>
            <strong>Alrewas, Staffordshire</strong> – The Wasteland Organised
            Resistance Movement (WORM), a grassroots activist group, has
            garnered both praise and criticism in the small village of Alrewas.
            Formed in response to local concerns about environmental
            degradation, WORM has been a vocal force advocating for the
            protection of the village’s natural surroundings and its fragile
            ecology.
          </p>
          <div className="flex w-full justify-center">
            <YouTube
              videoId="j5cY4CAa2cc"
              className="mx-auto min-w-20 max-w-full md:min-w-80"
            />
          </div>
          <section>
            <p>
              WORM's mission centers on preserving the green spaces around
              Alrewas, which they claim are under threat from unchecked
              development and pollution. Their campaigns, which include
              organizing protests, lobbying local authorities, and raising
              public awareness, have resonated with many residents who share
              their environmental concerns. "We’re fighting to keep Alrewas
              green," said a WORM spokesperson. "Our village deserves to be
              preserved for future generations."
            </p>
          </section>
          <section>
            <p>
              However, WORM’s methods have also drawn criticism. The group has
              been linked to several disruptive activities, including the
              blocking of local roads and vandalism of construction sites, which
              some villagers say have caused unnecessary tension. Reports
              suggest that these actions have led to delays in infrastructure
              projects and increased friction with local businesses. "They’ve
              crossed the line from activism to aggression," a spokesperson for
              Wellfield Energy commented. "Their actions are hurting the very
              community they claim to protect."
            </p>
          </section>
          <section>
            <p>
              The growing divide over WORM’s tactics has sparked a heated debate
              in Alrewas. While some villagers support the group’s environmental
              message, others are concerned that their increasingly radical
              approach may do more harm than good.
            </p>
            <p>
              As the conflict intensifies, both sides agree on one thing: the
              future of Alrewas hangs in the balance, with the village’s fate
              increasingly entwined with the actions of WORM.
            </p>
          </section>
        </div>
        <div className="mt-8 border-t border-gray-200 bg-amber-300 px-2 pt-4">
          {/* <div className="prose pb-4">
            <p className="text-sm font-bold text-black">Related Articles:</p>
            <ul>
              <li>Article</li>
              <li>Article</li>
              <li>Article</li>
            </ul>
          </div> */}
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
