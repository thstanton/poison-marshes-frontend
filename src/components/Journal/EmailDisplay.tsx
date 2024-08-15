import { Email } from "../../types/Email";
import DOMPurify from "dompurify";

interface EmailDisplayProps {
  email: Email;
}

export default function EmailDisplay({ email }: EmailDisplayProps) {
  const sanitisedHtml = DOMPurify.sanitize(email.html);

  return (
    <div className="w-full bg-white p-8 drop-shadow-lg">
      <div>
        <div className="mb-4 border-b-2 border-solid border-gray-500 pb-4">
          <div className="mb-2 grid grid-cols-5 grid-rows-2">
            <p className="col-span-1 row-start-1 font-bold">From:</p>
            <p className="col-span-4 font-bold">{email.from}</p>
            <p className="col-span-1 row-start-2">Subject:</p>
            <p className="col-span-4">{email.subject}</p>
          </div>
        </div>
        <div className="prose">
          <p>Dear Tim,</p>
          {email.html && (
            <div dangerouslySetInnerHTML={{ __html: sanitisedHtml }} />
          )}
        </div>
      </div>
    </div>
  );
}
