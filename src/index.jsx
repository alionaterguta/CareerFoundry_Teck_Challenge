import { createRoot } from "react-dom/client";
import "./index.css";

const NewProjectSinglePage = () => {
  return (
    <div className="single-page">
      <div>This is a new project!</div>
    </div>
  );
};

// Finds the root of your app
const container = document.querySelector("#root");
const root = createRoot(container);

// Tells React to render the app in the root DOM element
root.render(<NewProjectSinglePage />);
