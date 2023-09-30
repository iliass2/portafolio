export function Compo({ children, hola }) {
  return (
    <strong>
      {children} <p>{hola}</p>
    </strong>
  );
}
