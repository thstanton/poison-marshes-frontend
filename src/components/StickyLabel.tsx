export default function StickyLabel({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex w-11/12 -rotate-2 flex-col items-center justify-center gap-8 rounded-lg bg-stone-300/90 p-4 text-center font-rock text-lg font-bold text-stone-700 drop-shadow-xl md:w-[700px] md:p-8 md:text-3xl">
      {children}
    </div>
  );
}
