import { useMutation, useQueryClient } from "@tanstack/react-query";
import { api } from "../../lib/axiosConfig";
import { useNavigate } from "react-router";

export default function LogOutButton() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const logout = useMutation({
    mutationFn: () => {
      return api.post("/auth/logout");
    },
    onSuccess() {
      queryClient.invalidateQueries();
      queryClient.resetQueries();
    },
    onSettled() {
      navigate("/");
    },
  });

  return (
    <button
      className="btn btn-outline btn-sm border-warning font-rock text-xs text-warning md:btn-md md:text-base"
      onClick={() => logout.mutate()}
    >
      Logout
    </button>
  );
}
