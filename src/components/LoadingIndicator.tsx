import StickyLabel from "./StickyLabel";

export default function LoadingIndicator() {
  return (
    <StickyLabel>
      <div className="loading loading-spinner loading-lg"></div>
      <h1>Loading...</h1>
    </StickyLabel>
  );
}
