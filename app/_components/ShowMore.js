"use client";

import { useState } from "react";

function ShowMore({ children }) {
  const [showmore, setShowmore] = useState(false);
  if (children.length < 40) return children;
  if (showmore)
    return (
      <>
        <span>{children} </span>
        <button
          className="underline text-primary-600"
          onClick={() => setShowmore(false)}
        >
          showless
        </button>
      </>
    );
  else
    return (
      <>
        <span>{children.slice(0, 300)}... </span>
        <button
          className="underline text-primary-600"
          onClick={() => setShowmore(true)}
        >
          showmore
        </button>
      </>
    );
}

export default ShowMore;
