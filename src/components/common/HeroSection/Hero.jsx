/* eslint-disable react/no-unescaped-entities */
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const ShuffleHero = () => {
  return (
    <section className="w-full h-screen px-[20px] py-12 grid grid-cols-1 md:grid-cols-2 items-center gap-8  mx-auto ">
      <div>
        <span className="block mb-4 text-xs md:text-sm text-indigo-500 font-medium">
          Better every day
        </span>
        <h3 className="text-4xl md:text-6xl font-semibold capitalize">
        limited time offer up to 50% off!
        </h3>
        <p className="text-base md:text-lg text-slate-700 my-4 md:my-6 capitalize">
        dont wait - limited stock at unbeatable prices!
        </p>
        <button className="bg-indigo-500 text-white font-medium py-2 px-4 rounded transition-all hover:bg-indigo-600 active:scale-95 capitalize">
          shop now
        </button>
      </div>
      <ShuffleGrid />
    </section>
  );
};

const shuffle = (array) => {
  let currentIndex = array.length,
    randomIndex;

  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
};

const squareData = [
  {
    id: 1,
    src: "../../../../public/hero/1.webp",
  },
  {
    id: 2,
    src: "../../../../public/hero/2.webp",
  },
  {
    id: 3,
    src: "../../../../public/hero/3.jpg",
  },
  {
    id: 4,
    src: "../../../../public/hero/4.png",
  },
  {
    id: 5,
    src: "../../../../public/hero/5.jpg",
  },
  {
    id: 6,
    src: "../../../../public/hero/6.jpg",
  },
  {
    id: 7,
    src: "../../../../public/hero/7.jpg",
  },
  {
    id: 8,
    src: "../../../../public/hero/8.jpg",
  },
  {
    id: 9,
    src: "../../../../public/hero/9.webp",
  },
  {
    id: 10,
    src: "../../../../public/hero/10.jpg",
  },
  {
    id: 11,
    src: "../../../../public/hero/11.png",
  },
  {
    id: 12,
    src: "../../../../public/hero/12.jpg",
  },
  {
    id: 13,
    src: "../../../../public/hero/13.png",
  },
  {
    id: 14,
    src: "../../../../public/hero/14.jpg",
  },
  {
    id: 15,
    src: "../../../../public/hero/15.jpg",
  },
  {
    id: 16,
    src: "../../../../public/hero/16.jpg",
  },
];

const generateSquares = () => {
  return shuffle(squareData).map((sq) => (
    <motion.div
      key={sq.id}
      layout
      transition={{ duration: 1.5, type: "spring" }}
      className="w-full h-full"
      style={{
        backgroundImage: `url(${sq.src})`,
        backgroundSize: "cover",
      }}
    ></motion.div>
  ));
};

const ShuffleGrid = () => {
  const timeoutRef = useRef(null);
  const [squares, setSquares] = useState(generateSquares());

  useEffect(() => {
    shuffleSquares();

    return () => clearTimeout(timeoutRef.current);
  }, []);

  const shuffleSquares = () => {
    setSquares(generateSquares());

    timeoutRef.current = setTimeout(shuffleSquares, 3000);
  };

  return (
    <div className="grid grid-cols-4 grid-rows-4 h-[450px] gap-1">
      {squares.map((sq) => sq)}
    </div>
  );
};

export default ShuffleHero;
