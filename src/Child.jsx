import React, { useEffect, useState } from "react";
// import "./styles.css";

export default function Child() {
  console.log("%c    Child: render start", "color: MediumSpringGreen");

  const [count, setCount] = useState(() => {
    console.log("%c    Child: useState callback", "color: tomato");
    return 0;
  });

  useEffect(() => {
    console.log("%c    Child: useEffect no deps", "color: LightCoral");
    return () => {
      console.log(
        "%c    Child: useEffect no deps cleanup",
        "color: LightCoral"
      );
    };
  });

  useEffect(() => {
    console.log("%c    Child: useEffect empty deps", "color: MediumTurquoise");
    return () => {
      console.log(
        "%c    Child: useEffect empty deps cleanup",
        "color: MediumTurquoise"
      );
    };
  }, []);

  useEffect(() => {
    console.log("%c    Child: useEffect with dep", "color: HotPink");
    return () => {
      console.log("%c    Child: useEffect with dep cleanup", "color: HotPink");
    };
  }, [count]);

  const element = (
    <>
      <h2>I'm A Child</h2>
      <button
        className="py-2 px-4 font-semibold rounded-lg shadow-md text-white bg-green-500 hover:bg-green-700"
        onClick={() => setCount((previousCount) => previousCount + 1)}
      >
        {count}
      </button>
    </>
  );

  console.log("%c    Child: render end", "color: MediumSpringGreen");

  return element;
}
