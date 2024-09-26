"use client";

import { ScaleLoader } from "react-spinners";

function Spinner() {
  return (
    <ScaleLoader
      className="text-center"
      color="#C69963"
      height={60}
      width={8}
      radius={3}
    />
  );
}

export default Spinner;
