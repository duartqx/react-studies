import React from "react";

export default function MainContent() {
  let facts = [
    "Was first released in 2013",
    "Was originally created by Jordan Walke",
    "Has well over 100K starts on GitHub",
    "Is maintained by Facebook",
    "Powers thousands of enterprise apps, including mobile apps",
  ];
  return (
    <>
      <main className="flex flex-between">
        <div>
          <h1 className="h1">Fun facts about React</h1>
          <ul className="facts">
            {facts.map((f) => (
              <li>{f}</li>
            ))}
          </ul>
        </div>
      </main>
    </>
  );
}
