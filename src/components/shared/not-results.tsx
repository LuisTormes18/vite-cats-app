export const NotResults = ({ message = "No hay resultados" }) => {
  return (
    <div>
      <h1 className="text-white">{message}</h1>
    </div>
  );
};
