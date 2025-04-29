"use client";

import { useEffect, useState } from "react";

const messages = [
  "NEW COLLECTION AVAILABLE",
  "LIMITED TIME OFFER!",
  "FREE SHIPPING OVER $XX",
];

const BannerCarousel = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % messages.length);
    }, 3000); // 3 seconds per slide

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-[#9837AE] text-white text-center py-2 text-sm font-semibold transition-all duration-500 ease-in-out">
      <span className="mx-2">&lt;</span>
      {messages[current]}
      <span className="mx-2">&gt;</span>
    </div>
  );
};

export default BannerCarousel;
