import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export const PrivateRoute = ({ children }) => {
  const isAuth = useSelector((store) => store.authReducer.token);

  if (!isAuth) {
    return <Navigate to={"/login"} />;
  }
  return children;
};
