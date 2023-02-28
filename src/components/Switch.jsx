import { useState } from "react";

export default function Switch(props) {
  const { setDeploy } = props;

  const [deployPage, setDeployPage] = useState(true);

  return (
    <div
      className="flex justify-center items-center bg-off-white rounded-md shadow-lg w-full pt-10"
      role="group"
    >
      <button
        type="button"
        className={`"bg-off-white text-purple-3 border border-purple-3 rounded-l-lg px-8 py-2 text-md font-medium " ${
          deployPage ? "bg-purple-3 text-off-white" : ""
        }`}
        onClick={() => {
          setDeployPage(true);
          setDeploy(true);
        }}
      >
        Deploy
      </button>
      <button
        type="button"
        className={`"bg-off-white text-purple-3 border border-purple-3 rounded-r-lg px-8 py-2 text-md font-medium " ${
          !deployPage ? "bg-purple-3 text-off-white" : ""
        }`}
        onClick={() => {
          setDeployPage(false);
          setDeploy(false);
        }}
      >
        Remove
      </button>
    </div>
  );
}
