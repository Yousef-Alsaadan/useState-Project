import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page">
      <div
        className="h-screen w-screen bg-no-repeat bg-cover bg-center"
        style={{
          backgroundImage:
            "url(https://i.pinimg.com/736x/d3/70/3b/d3703b2917b9d44ca8f06f67c380fa31.jpg)",
        }}
      ></div>
    </div>
  );
}
