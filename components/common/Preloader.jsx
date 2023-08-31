"use client";

import React, { useState, useEffect } from "react";

export default function Preloader() {
  const [preloaderDisable, setPreloaderDisable] = useState(false);
  useEffect(() => {
    setPreloaderDisable(true);
  }, []);

  return (
    <div className="preloader js-preloader">
      <div
        className=""
        style={preloaderDisable ? { transform: "scale(1,0)" } : {}}
      ></div>
    </div>
  );
}
