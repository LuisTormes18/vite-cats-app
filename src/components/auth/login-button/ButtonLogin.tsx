import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export const ButtonLogin = () => {
  const navigate = useNavigate();
  const redirectToLogin = () => navigate("/login");
  return (
    <Button onClick={redirectToLogin} variant="outline-light">
      Login
    </Button>
  );
};
