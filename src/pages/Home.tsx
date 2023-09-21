import React from "react"
import homemUsandoCapacete from "../assets/homem_usando_capacete.jpg"

export default function Home() {
    return (
        <>
            <main className="w-4/5 h-[90vh] flex ml-auto mr-auto">
                <section className="w-full h-full flex justify-around items-center ">
                    <div className="w-1/3 h-4/6">
                        <img className="object-cover w-full h-full" src={homemUsandoCapacete} alt="" />
                    </div>
                    <div className="w-2/5 h-4/6 flex flex-col gap-9">
                        <h1 className="text-3xl">Projeto: <span className="font-semibold text-senai-red">SMPA</span></h1>
                        <p className="text-lg">
                            Em uma era de avanços tecnológicos em constante evolução, a segurança no local de trabalho continua sendo uma preocupação fundamental. Para abordar essa questão crítica, apresentamos SMPA (Monitoramento de Segurança com Análise Preditiva), um projeto inovador de aprendizado de máquina projetado para aprimorar a segurança no local de trabalho por meio da detecção de conformidade com Equipamentos de Proteção Individual (EPI).
                        </p>
                    </div>
                </section>
            </main>
        </>
    )
}