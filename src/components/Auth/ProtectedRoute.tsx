import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../../contexts/useAuth";

const ProtectedRoute = () => {
  const { user, isLoading } = useAuth();

  if (isLoading) {
    return <div>Loading...</div>; // You can replace this with a loading spinner
  }

  return user ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoute;
