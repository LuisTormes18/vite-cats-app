import { Button } from "react-bootstrap";

import { useNavigate } from "react-router-dom";

export const Logo = () => {
  const navigate = useNavigate();
  const redirectToHome = () => navigate("/");

  return (
    <Button onClick={redirectToHome} className="text-white" variant="outline">
      Lt-Cast
    </Button>
  );
};
