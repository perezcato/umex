import React from 'react';

export default function Header() {
    return (
        <header className="flex justify-between bg-black py-3 text-white align-center px-10">
            <div>
                <img src="" alt=""/>
            </div>
            
            <nav>
                <ul className="flex">
                    <li className="mr-4 font-bold text-sm uppercase">Nominations</li>
                    <li className="mr-4 font-bold text-sm uppercase">Vote</li>
                    <li className="mr-4 font-bold text-sm uppercase">Past Winners</li>
                    <li className="mr-4 font-bold text-sm uppercase">About</li>
                    <li className=" font-bold text-sm uppercase">News</li>
                </ul>
            </nav>
        </header>
    )

}