import DOMPurify from "dompurify";

interface EmailDisplayProps {
  from: string;
  subject: string;
  html: string;
}

export default function EmailDisplay({
  from,
  subject,
  html,
}: EmailDisplayProps) {
  const sanitisedHtml = DOMPurify.sanitize(html);

  return (
    <div className="w-full bg-white p-8 drop-shadow-lg">
      <div>
        <div className="mb-4 border-b-2 border-solid border-gray-500 pb-4">
          <div className="mb-2 grid grid-cols-5 grid-rows-2">
            <p className="col-span-1 row-start-1 font-bold">From:</p>
            <p className="col-span-4 font-bold">{from}</p>
            <p className="col-span-1 row-start-2">Subject:</p>
            <p className="col-span-4">{subject}</p>
          </div>
        </div>
        <div className="prose">
          <p>Dear Tim,</p>
          {html && <div dangerouslySetInnerHTML={{ __html: sanitisedHtml }} />}
        </div>
      </div>
    </div>
  );
}
