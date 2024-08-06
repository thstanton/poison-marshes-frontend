import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router";
import { api } from "../lib/axiosConfig";

export default function LogOutButton() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const logout = useMutation({
    mutationFn: () => {
      return api.post("/auth/logout", {}, { withCredentials: true });
    },
    onSuccess() {
      queryClient.invalidateQueries({ queryKey: ["user"] });
      navigate("/login");
    },
  });

  return (
    <button
      className="btn btn-outline font-rock"
      onClick={() => logout.mutate()}
    >
      Logout
    </button>
  );
}
