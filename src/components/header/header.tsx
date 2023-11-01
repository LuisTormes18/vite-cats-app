import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

import { useAuthStore } from "../../store/auth.store";
import { ButtonLogin } from "../ButtonLogin";
import { ButtonLogout } from "../ButtonLogout";
import { Logo } from "../Logo";

export const Header = () => {
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);

  return (
    <Navbar bg="dark" className="absolute top-2 left-0 d-flex justify-content-between items-center text-white">
      <Logo />
      <Nav>
        <Nav.Link as={Link} to="/profile" className="text-white">
          Profile
        </Nav.Link>
        <Nav.Link as={Link} to="/cats" className="text-white">
          Cats
        </Nav.Link>
        {!isAuthenticated ? <ButtonLogin /> : <ButtonLogout />}
      </Nav>
    </Navbar>
  );
};
