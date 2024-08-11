// import { useMutation, useQuery } from "@tanstack/react-query";
// import { useState, useRef } from "react";
// import { z } from "zod";
// import { api } from "../../lib/axiosConfig";
// import { levelSchema } from "../../schemas/levelSchema";
// import LoadingIndicator from "../UI/LoadingIndicator";

// interface LevelName {
//   name: string;
//   id: number;
//   sequence: number;
//   actSequence: number;
// }

// const partialLevelSchema = levelSchema
//   .partial({
//     sequence: true,
//     actSequence: true,
//     videoId: true,
//     task: true,
//     solution: true,
//     flavourText: true,
//     name: true,
//   })
//   .omit({ email: true });
// type LevelUpdate = z.infer<typeof partialLevelSchema>;

// export default function LevelUpdatePage() {
//   const [selectedLevel, setSelectedLevel] = useState<number>();
//   const [message, setMessage] = useState<string[]>([]);
//   const formRef = useRef<HTMLFormElement>(null);

//   const {
//     data: levelNames = [],
//     isSuccess,
//     isLoading,
//   } = useQuery({
//     queryKey: ["levelNames"],
//     queryFn: async (): Promise<LevelName[]> => {
//       const res = await api.get("/levels/names");
//       return res.data;
//     },
//   });

//   const { data: level, isSuccess: isSuccessLevel } = useQuery({
//     queryKey: ["level", selectedLevel],
//     queryFn: async () => {
//       const res = await api.get(`/levels/${selectedLevel}`);
//       return res.data;
//     },
//     enabled: !!selectedLevel,
//   });

//   const mutateLevel = useMutation({
//     mutationFn: ({ level, id }: { level: LevelUpdate; id: number }) => {
//       return api.put(`/levels/${id}`, { level });
//     },
//     onMutate() {
//       setMessage([]);
//     },
//     onError(error) {
//       setMessage((prevMessages) => [...prevMessages, error.message]);
//     },
//     onSuccess() {
//       setMessage((prevMessages) => [
//         ...prevMessages,
//         "Level updated successfully",
//       ]);
//       formRef.current?.reset();
//     },
//   });

//   const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     const formData = new FormData(e.currentTarget);
//     const levelUpdate: LevelUpdate = {};

//     const sequence = Number(formData.get("sequence"));
//     const name = formData.get("name") as string;
//     const task = formData.get("task") as string;
//     const solution = formData.get("solution") as string;
//     const flavourText = formData.get("flavourText") as string;
//     const videoId = formData.get("videoId") as string;
//     const hint1 = formData.get("hint1") as string;
//     const hint2 = formData.get("hint2") as string;
//     const hint3 = formData.get("hint3") as string;

//     if (hint1) level.hints[0] = hint1;
//     if (hint2) level.hints[1] = hint2;
//     if (hint3) level.hints[2] = hint3;
//     if (videoId) level.videoId = videoId;

//     try {
//       console.log(level);
//       levelSchema.parse(level);
//       mutateLevel.mutate({ level: levelUpdate, id: level.id });
//     } catch (error) {
//       if (error instanceof z.ZodError) {
//         setMessage((prevMessages) => [
//           ...prevMessages,
//           ...error.issues.map((issue) => issue.message),
//         ]);
//       }
//     }
//   };

//   if (isLoading) {
//     return <LoadingIndicator />;
//   }

//   if (isSuccess) {
//     return (
//       <div>
//         <div>
//           <select
//             className="select select-bordered"
//             onChange={(e) => setSelectedLevel(Number(e.target.value))}
//           >
//             <option value="">Select a level</option>
//             {levelNames.map((levelName: LevelName) => (
//               <option
//                 key={levelName.id}
//                 value={levelName.id}
//               >{`Act ${levelName.actSequence} - Level ${levelName.sequence}: ${levelName.name}`}</option>
//             ))}
//           </select>
//         </div>
//         <div className="mt-3 rounded-xl bg-stone-300/40 p-6 text-black">
//           {isSuccessLevel && (
//             <LevelUpdateForm
//               level={level}
//               onSubmit={onSubmit}
//               formRef={formRef}
//             />
//           )}
//           {message.map((message) => (
//             <p key={message} className="text-red-500">
//               {message}
//             </p>
//           ))}
//         </div>
//       </div>
//     );
//   }
// }

// interface LevelUpdateFormProps {
//   level: LevelUpdate;
//   onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
//   formRef: React.RefObject<HTMLFormElement>;
// }

// export function LevelUpdateForm({
//   level,
//   onSubmit,
//   formRef,
// }: LevelUpdateFormProps) {
//   return (
//     <form className="flex flex-col gap-2" onSubmit={onSubmit} ref={formRef}>
//       <div className="flex items-center justify-between gap-4">
//         <label htmlFor="actSequence" className="form-control">
//           <div className="label">
//             <span className="label-text">Act Sequence</span>
//           </div>
//           <input
//             type="number"
//             name="actSequence"
//             placeholder={level.actSequence?.toString() ?? "Act Sequence"}
//             className="input input-bordered grow border-stone-600 bg-transparent placeholder:text-stone-100"
//             disabled
//           />
//         </label>

//         <label htmlFor="sequence" className="form-control">
//           <div className="label">
//             <span className="label-text">Level Sequence</span>
//           </div>
//           <input
//             type="number"
//             name="sequence"
//             placeholder={
//               level.sequence?.toString() ?? "Level Sequence (in act)"
//             }
//             className="input input-bordered grow border-stone-600 bg-transparent placeholder:text-stone-100"
//           />
//         </label>
//       </div>

//       <label htmlFor="name" className="form-control">
//         <div className="label">
//           <span className="label-text">Name</span>
//         </div>
//         <input
//           type="text"
//           name="name"
//           placeholder={level.name ?? "Level Name"}
//           className="input input-bordered border-stone-600 bg-transparent placeholder:text-stone-100"
//         />
//       </label>
//       <label htmlFor="flavourText" className="form-control">
//         <div className="label">
//           <span className="label-text">Flavour Text</span>
//         </div>
//         <textarea
//           name="flavourText"
//           placeholder={
//             level.flavourText ??
//             "Flavour Text (the story that has led to this point)"
//           }
//           className="textarea textarea-bordered border-stone-600 bg-transparent placeholder:text-stone-100"
//         />
//       </label>
//       <label htmlFor="task">
//         <div className="label">
//           <span className="label-text">Task</span>
//         </div>
//         <textarea
//           name="task"
//           placeholder={level.task ?? "Task - what does the player need to do?"}
//           className="textarea textarea-bordered w-full border-stone-600 bg-transparent placeholder:text-stone-100"
//         />
//       </label>
//       <label htmlFor="solution">
//         <div className="label">
//           <span className="label-text">Solution</span>
//         </div>
//         <input
//           type="text"
//           name="solution"
//           placeholder={
//             level.solution ??
//             "Solution - what is the answer the player is seeking?"
//           }
//           className="input input-bordered border-stone-600 bg-transparent placeholder:text-stone-100"
//         />
//       </label>
//       <label htmlFor="videoId">
//         <div className="label">
//           <span className="label-text">Video ID</span>
//         </div>
//         <input
//           type="text"
//           name="videoId"
//           placeholder={
//             level.videoId ?? "YouTube Video ID (optional) eg. huGd4efgdPA"
//           }
//           className="input input-bordered border-stone-600 bg-transparent placeholder:text-stone-100"
//         />
//       </label>
//       <h1 className="text-center font-special text-black">Hints</h1>
//       <label htmlFor="hint1">
//         <div className="label">
//           <span className="label-text">Hint 1</span>
//         </div>
//         <input
//           type="text"
//           name="hint1"
//           placeholder={level.hints[0] ?? "Hint 1 (at least 1 hint required)"}
//           className="input input-bordered w-full border-stone-600 bg-transparent placeholder:text-stone-100"
//         />
//       </label>
//       <label htmlFor="hint2">
//         <div className="label">
//           <span className="label-text">Hint 2</span>
//         </div>
//         <input
//           type="text"
//           name="hint2"
//           placeholder={level.hints[1] ?? "Hint 2 (optional)"}
//           className="input input-bordered w-full border-stone-600 bg-transparent placeholder:text-stone-100"
//         />
//       </label>
//       <label htmlFor="hint1">
//         <div className="label">
//           <span className="label-text">Hint 3</span>
//         </div>
//         <input
//           type="text"
//           name="hint3"
//           placeholder={level.hints[2] ?? "Hint 3 (optional)"}
//           className="input input-bordered w-full border-stone-600 bg-transparent placeholder:text-stone-100"
//         />
//       </label>
//       <button className="btn btn-primary">Submit</button>
//     </form>
//   );
// }
