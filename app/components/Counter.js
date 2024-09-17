"use client";
import { useState } from "react";

function Counter({ users }) {
  const [Count, setCount] = useState(0);

  return (
    <>
      <p>There are {users.length} of users</p>
      <button onClick={() => setCount(Count + 1)}>{Count}</button>
    </>
  );
}

export default Counter;
