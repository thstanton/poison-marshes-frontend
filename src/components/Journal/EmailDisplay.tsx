export default function EmailDisplay() {
  return (
    <div className="w-full bg-white p-8 drop-shadow-lg">
      <div>
        <div className="mb-4 border-b-2 border-solid border-gray-500 pb-4">
          <div className="mb-2 grid grid-cols-5 grid-rows-2">
            <p className="col-span-1 row-start-1 font-bold">From:</p>
            <p className="col-span-4 font-bold">
              Edwin Marsh {"<"}edwin@cliki.in{">"}
            </p>
            <p className="col-span-1 row-start-2">Subject:</p>
            <p className="col-span-4"> This is an email</p>
          </div>
        </div>
        <div className="prose">
          <p>Dear Tim,</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore,
            quis? Laboriosam ab excepturi eligendi error iure et dolorum
            corporis, omnis incidunt voluptates odio modi rem esse a voluptas!
            Voluptas, atque.
          </p>
        </div>
      </div>
    </div>
  );
}
