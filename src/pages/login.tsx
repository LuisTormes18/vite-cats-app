import { Alert, Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

import { useForm } from "../hooks";
import { loginUser } from "../services/auth";
import { useAuthStore } from "../store/auth.store";
import { IUser } from "../types";

export const LoginPage = () => {
  const { formData, handleInputChange, messageError, setMessageError } = useForm({ username: "", password: "" });
  const login = useAuthStore((state) => state.login);
  const navigate = useNavigate();

  // handlers
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { username, password } = formData;

    if (username === "") {
      setMessageError("username is required");
      return;
    }
    if (password === "") {
      setMessageError("password is required");
      return;
    }

    const { ok, data, message } = await loginUser(formData);

    if (!ok) {
      setMessageError(message);
      return;
    }

    login(data as IUser);
    navigate("/profile");
  };

  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100%", width: "100%" }}>
      <Form data-testid="loginForm" style={{ width: "100%", maxWidth: "350px" }} onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicUser">
          <Form.Label className="text-white">Usuario</Form.Label>
          <Form.Control
            type="text"
            placeholder="usuario"
            name="username"
            value={formData.username}
            onChange={handleInputChange}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label className="text-white">Contraseña</Form.Label>
          <Form.Control
            type="password"
            placeholder="contraseña"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            required
          />
        </Form.Group>
        {messageError ? <Alert variant="warning">{messageError}</Alert> : null}
        <Button variant="primary" type="submit" className="w-100 mb-3">
          Iniciar sesión
        </Button>
        <Button href="/register" variant="outline-light" type="button" className="w-100">
          Registrase
        </Button>
      </Form>
    </div>
  );
};
