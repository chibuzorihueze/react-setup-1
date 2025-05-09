// src/pages/Home.tsx
import { useState } from "react";

function Home() {
  const [fail, setFail] = useState(false);

  if (fail) throw new Error("Test crash!");

  return (
    <div className="flex items-center justify-center h-screen">
      <button
        className="px-4 py-2 bg-blue-600 text-white rounded shadow cursor-pointer"
        onClick={() => setFail(true)}
      >
        Break App
      </button>
    </div>
  );
}

export default Home;
