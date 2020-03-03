import React from 'react';
import {Link} from "react-router-dom";

export default function Header() {
    return (
        <header className="flex justify-between bg-black py-5 text-white align-center px-10">
            <div>
                <img src="" alt=""/>
            </div>
            <nav>
                <ul className="flex">
                    <Link to="/" className="mr-4 font-bold text-sm uppercase">Home</Link>
                    <Link to="/nominations" className="mr-4 font-bold text-sm uppercase">Nominations</Link>
                    <Link to="/vote" className="mr-4 font-bold text-sm uppercase">Vote</Link>
                    <Link to="/past-winners" className="mr-4 font-bold text-sm uppercase">Past Winners</Link>
                    <Link to="/about" className="mr-4 font-bold text-sm uppercase">About</Link>
                    <Link to="/news" className=" font-bold text-sm uppercase">News</Link>
                </ul>
            </nav>
        </header>
    )

}