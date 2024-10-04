import { useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError();
  console.log("eeeeeeee = ", err);
  return (
    <div>
      <h2>Oops!!!</h2>
      <h3>{err?.error?.message || err}</h3>
    </div>
  );
};

export default Error;
