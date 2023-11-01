import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useAuthStore } from "../store/auth.store";

export const ButtonLogout = () => {
  const navigate = useNavigate();
  const logout = useAuthStore((state) => state.logout);
  const signOut = () => {
    logout();
    navigate("/");
  };
  return (
    <Button onClick={signOut} variant="outline-light">
      Logout
    </Button>
  );
};
