import { useEffect, useState } from "react";
import "./styles.css";
import Child from "./Child";

export default function App() {
  console.log("%cParent: render start", "color: MediumSpringGreen");

  const [showChild, setShowChild] = useState(() => {
    console.log("%cParent: useState callback", "color: tomato");
    return false;
  });

  useEffect(() => {
    console.log("%cParent: useEffect no deps", "color: LightCoral");
    return () => {
      console.log("%cParent: useEffect no deps cleanup", "color: LightCoral");
    };
  });

  useEffect(() => {
    console.log("%cParent: useEffect empty deps", "color: MediumTurquoise");
    return () => {
      console.log(
        "%cParent: useEffect empty deps cleanup",
        "color: MediumTurquoise"
      );
    };
  }, []);

  useEffect(() => {
    console.log("%cParent: useEffect with dep", "color: HotPink");
    return () => {
      console.log("%cParent: useEffect with dep cleanup", "color: HotPink");
    };
  }, [showChild]);

  const ParentElement = (
    <div className="App">
      <h1>I'm a Parent</h1>
      <label>
        <input
          type="checkbox"
          checked={showChild}
          onChange={(e) => setShowChild(e.target.checked)}
        />
        show child
      </label>
      <div
        style={{
          padding: 10,
          margin: 10,
          border: "solid"
        }}
      >
        {showChild ? <Child /> : null}
      </div>
    </div>
  );

  console.log("%cParent: render end", "color: MediumSpringGreen");

  return ParentElement;
}
