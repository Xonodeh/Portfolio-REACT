import React from "react";

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-900 py-4">
      <div className="text-center">
        <p className="font-apple text-gray-700 dark:text-gray-300 text-sm">
          Nael HADDADI
        </p>
        <p className="font-apple text-gray-700 dark:text-gray-400 text-xs flex items-center justify-center gap-2 mt-1">
          Portfolio fait avec React 
          <img src="../img/react.svg" width={30} height={30} alt="React logo" />
          et Tailwind 
          <img src="../img/Tailwind.png" width={30} height={20} alt="Tailwind logo" />
        </p>
      </div>
    </footer>
  );
}
