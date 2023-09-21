import React from "react";
import logoSenai from "../assets/SENAI_São_Paulo_logo.png"

export default function Navbar() {
    return (
        <>
            <header className="w-full h-28 bg-white flex justify-center items-center flex-col ">
                <div className="w-full h-4 bg-senai-red"></div>
                <nav className="w-1/3 h-full flex justify-center items-end">
                    <div className="w-full flex justify-evenly">
                        <a href="https://www.sp.senai.br/"><img className="w-40" src={logoSenai} alt="Logo SENAI" /></a>
                        <div className="w-3/5 flex justify-center border-b-4 border-senai-red">
                            <ul className="flex w-full justify-between">
                                <li className="text-lg font-medium hover:text-senai-red transition-all ease-in-out"><a href="">Como Funciona</a></li>
                                <li className="text-lg font-medium hover:text-senai-red transition-all ease-in-out"><a href="">Sou Professor</a></li>
                                <li className="text-lg font-medium hover:text-senai-red transition-all ease-in-out"><a href="">Sou Aluno</a></li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
        </>
    )
}