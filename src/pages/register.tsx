import { Alert, Button, Form } from "react-bootstrap";
import { useForm } from "../hooks";
import { registerUser } from "../services/auth";
import { useAuthStore } from "../store/auth.store";

export const RegisterPage = () => {
  const { formData, handleInputChange, messageError, setMessageError } = useForm({
    name: "",
    username: "",
    password: "",
  });
  const login = useAuthStore((state) => state.login);

  // handlers
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const { name, username, password } = formData;

    if (name === "") {
      setMessageError("name is required");
      return;
    }

    if (username === "") {
      setMessageError("username is required");
      return;
    }
    if (password === "") {
      setMessageError("password is required");
      return;
    }

    const { ok, data, message } = await registerUser(formData);

    if (!ok) {
      setMessageError(message);
      return;
    }

    login(data);
    window.location.href = "/profile";
  };

  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100%", width: "100%" }}>
      <Form style={{ width: "100%", maxWidth: "350px" }} onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label className="text-white">Nombre</Form.Label>
          <Form.Control
            type="text"
            placeholder="nombre"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
          />
        </Form.Group>
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
          Registrarse
        </Button>
        <Button href="/login" variant="outline-light" type="button" className="w-100">
          Iniciar sesión
        </Button>
      </Form>
    </div>
  );
};
