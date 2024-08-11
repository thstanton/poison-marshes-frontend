import { useMutation } from "@tanstack/react-query";
import { api } from "../../lib/axiosConfig";
import { useRef, useState } from "react";
import { z } from "zod";
import { levelSchema } from "../../schemas/levelSchema";
import { emailSchema } from "../../schemas/emailSchema";

type LevelCreate = z.infer<typeof levelSchema>;
type EmailCreate = z.infer<typeof emailSchema>;

export default function LevelCreateForm() {
  const [message, setMessage] = useState<string[]>([]);
  const formRef = useRef<HTMLFormElement>(null);

  const mutation = useMutation({
    mutationFn: (level: LevelCreate) => {
      return api.post("/levels", { level });
    },
    onMutate() {
      setMessage([]);
    },
    onError(error) {
      setMessage((prevMessages) => [...prevMessages, error.message]);
    },
    onSuccess() {
      setMessage((prevMessages) => [
        ...prevMessages,
        "Level created successfully",
      ]);
      formRef.current?.reset();
    },
  });

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const level: LevelCreate = {
      actSequence: Number(formData.get("actSequence")),
      sequence: Number(formData.get("sequence")),
      name: formData.get("name") as string,
      flavourText: formData.get("flavourText") as string,
      task: formData.get("task") as string,
      solution: formData.get("solution") as string,
      hints: [],
    };

    const email: EmailCreate = {
      from: formData.get("emailFrom") as string,
      subject: formData.get("emailSubject") as string,
      text: formData.get("emailBodyText") as string,
      html: formData.get("emailBodyHtml") as string,
    };
    if (email) level.email = email;

    const hint1 = formData.get("hint1") as string;
    const hint2 = formData.get("hint2");
    const hint3 = formData.get("hint3");

    level.hints.push(hint1);
    if (hint2) level.hints.push(hint2 as string);
    if (hint3) level.hints.push(hint3 as string);

    const videoId = formData.get("videoId") as string;
    if (videoId) level.videoId = videoId;
    try {
      levelSchema.parse(level);
      mutation.mutate(level);
    } catch (error) {
      if (error instanceof z.ZodError) {
        setMessage((prevMessages) => [
          ...prevMessages,
          ...error.issues.map((issue) => issue.message),
        ]);
      }
    }
  };

  return (
    <form
      className="flex flex-col gap-2 py-6"
      onSubmit={onSubmit}
      ref={formRef}
    >
      <div className="flex justify-between gap-4">
        <input
          type="number"
          name="sequence"
          placeholder="Level Sequence (in act)"
          className="input input-bordered grow"
        />
        <input
          type="number"
          name="actSequence"
          placeholder="Act Sequence"
          className="input input-bordered grow"
        />
      </div>
      <input
        type="text"
        name="name"
        placeholder="Level Name"
        className="input input-bordered"
      />
      <textarea
        name="flavourText"
        placeholder="Flavour Text (the story that has led to this point)"
        className="textarea textarea-bordered"
      />
      <textarea
        name="task"
        placeholder="Task - what does the player need to do?"
        className="textarea textarea-bordered"
      />
      <input
        type="text"
        name="solution"
        placeholder="Solution - what is the answer the player is seeking?"
        className="input input-bordered"
      />
      <input
        type="text"
        name="videoId"
        placeholder="YouTube Video ID (optional) eg. huGd4efgdPA"
        className="input input-bordered"
      />
      <h1 className="text-center font-special text-black">Hints</h1>
      <input
        type="text"
        name="hint1"
        placeholder="Hint 1 (at least 1 hint required)"
        className="input input-bordered"
      />
      <input
        type="text"
        name="hint2"
        placeholder="Hint 2 (optional)"
        className="input input-bordered"
      />
      <input
        type="text"
        name="hint3"
        placeholder="Hint 3 (optional)"
        className="input input-bordered"
      />
      <h1 className="text-center font-special text-black">Email</h1>
      <input
        type="text"
        name="emailFrom"
        placeholder="Email from (optional)"
        className="input input-bordered"
      />
      <input
        type="text"
        name="emailSubject"
        placeholder="Email subject (optional)"
        className="input input-bordered"
      />
      <textarea
        name="emailBodyText"
        placeholder="Email body text (optional)"
        className="textarea textarea-bordered"
      />
      <textarea
        name="emailBodyHtml"
        placeholder="Email body HTML (optional)"
        className="textarea textarea-bordered"
      />
      <button className="btn btn-primary">Submit</button>
      {message.map((message) => (
        <p className="text-red-500">{message}</p>
      ))}
    </form>
  );
}
