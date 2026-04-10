"use client";
import { useState } from "react";
import { auth, googleProvider } from "@/lib/firebase";
import { signInWithPopup } from "firebase/auth";

export default function Home() {
  const [showChat, setShowChat] = useState(false);

  const loginGoogle = () => signInWithPopup(auth, googleProvider);

  return (
    <div className="min-h-screen bg-white text-[#222]">
      {/* TOP BAR - EXATAMENTE IGUAL À PRIMEIRA FOTO */}
      <header className="bg-[#003087] text-white py-3 px-6 flex items-center justify-between border-b-4 border-[#00a1e7]">
        <div className="flex items-center gap-8">
          <a href="/" className="text-3xl">🏠o</a>
          <span className="font-medium">Bem-vindo à Declaração dos Direitos dos Adolescentes</span>
        </div>

        <div className="flex items-center gap-8">
          {/* Logo ONU Brasil */}
          <div className="flex items-center gap-2">
            <img src="https://brasil.un.org/themes/custom/undp/assets/logo-onu-brasil.svg" alt="ONU Brasil" className="h-10" />
            <div>
              <span className="text-xs tracking-widest">NAÇÕES UNIDAS</span><br />
              <span className="font-bold">Brasil</span>
            </div>
          </div>

          {/* Busca idêntica */}
          <div className="relative w-80">
            <input 
              type="text" 
              placeholder="Encontre dados, recursos, notícias e mais" 
              className="bg-white text-black px-5 py-2 rounded-full w-full text-sm focus:outline-none border border-gray-300"
            />
            <button className="absolute right-3 top-1/2 -translate-y-1/2 bg-[#00a1e7] text-white w-8 h-8 rounded-full flex items-center justify-center">
              🔎
            </button>
          </div>

          <button onClick={loginGoogle} className="bg-white text-[#003087] px-6 py-2 rounded-full text-sm font-medium">
            Entrar com Google
          </button>
        </div>
      </header>

      {/* CORPO DO SITE - EXATAMENTE IGUAL À SEGUNDA FOTO */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-0">
        {/* Coluna esquerda azul */}
        <div className="lg:col-span-5 bg-[#003087] text-white p-12">
          <div className="text-sm opacity-70 mb-2">01 • DECLARAÇÃO</div>
          <h1 className="text-5xl font-bold leading-tight mb-8">
            DECLARAÇÃO DOS DIREITOS<br />DOS ADOLESCENTES
          </h1>
          <p className="text-lg leading-relaxed opacity-90">
            Todo adolescente tem direito a ser ouvido, protegido, educado e respeitado em todas as decisões que afetam sua vida.
          </p>
          <button className="mt-12 bg-white text-[#003087] px-8 py-4 rounded-full font-medium flex items-center gap-2">
            Ler a Declaração Completa →
          </button>
        </div>

        {/* Coluna central - Foto de adolescentes em desenho animado */}
        <div 
          className="lg:col-span-4 bg-cover bg-center min-h-[620px]"
          style={{ backgroundImage: "url('https://i.imgur.com/3fK8vL9.jpg')" }}
        />

        {/* Coluna direita - Últimas */}
        <div className="lg:col-span-3 bg-white p-8 border-l border-gray-200">
          <h3 className="font-semibold text-xl mb-6 text-[#003087]">Últimas Atualizações</h3>
          <div className="space-y-8 text-sm">
            <div>
              <span className="text-gray-500">09 abril 2026</span>
              <p className="font-medium mt-1">Campanha “Adolescentes pela Igualdade” chega a 5 estados</p>
            </div>
            <div>
              <span className="text-gray-500">08 abril 2026</span>
              <p className="font-medium mt-1">Novo projeto de lei garante voz dos adolescentes no Congresso</p>
            </div>
          </div>
        </div>
      </div>

      {/* BOTÃO DE CHAT - CÍRCULO AZUL NO CANTO INFERIOR ESQUERDO (gira 180°) */}
      <button
        onClick={() => setShowChat(!showChat)}
        className={`fixed bottom-8 left-8 w-16 h-16 bg-[#003087] rounded-full flex items-center justify-center shadow-2xl transition-transform duration-700 hover:scale-110 ${showChat ? 'rotate-180' : ''}`}
      >
        💬
      </button>

      {/* Chat (pronto para o próximo passo) */}
      {showChat && (
        <div className="fixed bottom-28 left-8 w-96 h-[520px] bg-white border border-gray-300 rounded-3xl shadow-2xl flex flex-col">
          <div className="p-4 bg-[#003087] text-white">Chat da Equipe 3</div>
          <div className="flex-1 p-4 overflow-auto bg-gray-50 text-sm">Chat em tempo real será implementado no próximo passo.</div>
        </div>
      )}
    </div>
  );
}
