import { useLoaderData } from "react-router";
import { Level } from "../types/Level";
import LevelDisplay from "../components/LevelDisplay";

export default function LevelPage() {
  const level = useLoaderData() as Level;

  return <LevelDisplay level={level} />;
}
