import { useSelector } from "react-redux";
import type { RootState } from "../redux/store";
import { Navigate } from "react-router-dom";

const ProtectedRoute: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const user = useSelector((state: RootState) => state.userAuth.user);

  if (user?.role !== "manager") {
    return <Navigate to="/login" replace />;
  }
  return children;
};

export default ProtectedRoute;