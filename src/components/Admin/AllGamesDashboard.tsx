import useGamesDashboard from "../../hooks/useGamesDashboard";
import { GamesDashboardItem } from "../../types/Game";

export default function AllGamesDashboard() {
  const { data: games } = useGamesDashboard();

  return (
    <div>
      <h1 className="mb-3 text-center font-rock text-3xl">Games in Progress</h1>
      {games?.map((game) => <GameCard key={game.id} game={game} />)}
    </div>
  );
}

function GameCard({ game }: { game: GamesDashboardItem }) {
  const createdAtDate = new Date(game.createdAt);
  const updatedAtDate = new Date(game.updatedAt);

  const dateFormatOptions: Intl.DateTimeFormatOptions = {
    dateStyle: "medium",
    timeStyle: "short",
  };

  const createdAt = new Intl.DateTimeFormat("en-GB", dateFormatOptions).format(
    createdAtDate,
  );
  const updatedAt = new Intl.DateTimeFormat("en-GB", dateFormatOptions).format(
    updatedAtDate,
  );

  const goodThreshold = Date.now() - 1000 * 60 * 60 * 24 * 1;
  const OKThreshold = Date.now() - 1000 * 60 * 60 * 24 * 2;

  const progressIndicator =
    updatedAtDate.getTime() > goodThreshold
      ? "🟢"
      : updatedAtDate.getTime() > OKThreshold
        ? "🟠"
        : "🔴";

  return (
    <div className="card card-bordered mb-2 bg-white/50">
      <div className="card-body">
        <div className="card-title flex flex-col items-start">
          <h1>{game.account.name}</h1>
          <h2 className="text-sm font-normal italic">
            {game.account.user.email} | Started {createdAt}
          </h2>
        </div>
        <p>
          Act: {game.level.actSequence} Level: {game.level.sequence}
        </p>
        <p>{game.level.name}</p>
        <p>
          Latest progress: {progressIndicator} {updatedAt}
        </p>
      </div>
    </div>
  );
}
