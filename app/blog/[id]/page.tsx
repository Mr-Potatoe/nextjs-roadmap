"use client";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

const TourButton = () => {
  const [Driver, setDriver] = useState<any>(null);

  useEffect(() => {
    import("driver.js").then((module) => {
      console.log("✅ Driver.js module loaded:", module);
      setDriver(() => module.default); // Set the Driver class
    }).catch((error) => console.error("❌ Failed to load Driver.js", error));
  }, []);

  const startTour = () => {
    if (!Driver) {
      console.error("❌ Driver.js is not loaded yet.");
      return;
    }

    console.log("🚀 Starting tour...");

    const driverInstance = new Driver({
      animate: true,
      opacity: 0.75,
      allowClose: true,
    });

    driverInstance.defineSteps([
      {
        element: "#tour-step-1",
        popover: { title: "Welcome!", description: "This is the first step." },
      },
      {
        element: "#tour-step-2",
        popover: { title: "Next Step", description: "This is the next step." },
      },
    ]);

    console.log("🎯 Defined steps:", driverInstance);
    driverInstance.start();
  };

  const params = useParams();

  return (
    <div className="container">
      <h1>Hi, I'm blogPost {params.id}</h1>
      <h1 id="tour-step-1">This is Step 1</h1>
      <p id="tour-step-2">This is Step 2</p>
      <button onClick={startTour} disabled={!Driver}>
        Start Tour
      </button>
    </div>
  );
};

export default TourButton;
