import { useUser } from "../contexts/UserContext";

export default function Journal() {
  const userContext = useUser();
  return <div>Hello {userContext.user?.name}</div>;
}
