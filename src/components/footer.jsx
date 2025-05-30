import React from "react";
export default function Footer(){
    return (
        <footer>
            <div>
                <p className="font-apple bg-white text-gray flex justify-center text-sm">Nael HADDADI</p>
                <p className="font-apple bg-white text-gray-700 flex justify-center text-xs">
                    Portfolio fait avec React 
                    <img src="../img/react.svg" width={30} height={30} />
                    et Tailwind 
                    <img src="../img/Tailwind.png" width={30} height={20} />
                </p>

            </div>
        </footer>
    )
}