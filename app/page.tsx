"use client";
import { useState } from "react";
import { auth, googleProvider } from "@/lib/firebase";
import { signInWithPopup } from "firebase/auth";

export default function Home() {
  const [user, setUser] = useState<any>(null);
  const [showChat, setShowChat] = useState(false);

  const loginGoogle = () => signInWithPopup(auth, googleProvider);

  return (
    <div className="min-h-screen bg-white text-[#222]">
      {/* TOP BAR - EXATAMENTE IGUAL À PRIMEIRA FOTO */}
      <header className="bg-[#003087] text-white py-3 px-6 flex items-center justify-between border-b-4 border-[#00a1e7]">
        <div className="flex items-center gap-8">
          <a href="/" className="text-3xl">🏠</a>
          <span className="font-medium">Bem-vindo à Declaração dos Direitos dos Adolescentes</span>
        </div>

        <div className="flex items-center gap-8">
          <nav className="flex gap-6 text-sm font-medium">
            <a href="#" className="hover:underline">Início</a>
            <a href="#" className="hover:underline">Declaração</a>
            <a href="#" className="hover:underline">Sobre</a>
            <a href="#" className="hover:underline">Contato</a>
          </nav>

          {/* Busca idêntica */}
          <div className="relative w-80">
            <input 
              type="text" 
              placeholder="Encontre dados, recursos, notícias e mais" 
              className="bg-white text-black px-5 py-2 rounded-full w-full text-sm focus:outline-none"
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

      {/* HERO - Foto de adolescentes em desenho animado (terceira imagem) */}
      <div className="h-[620px] bg-cover bg-center relative" style={{ backgroundImage: "url('https://i.imgur.com/3fK8vL9.jpg')" }}>
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="absolute bottom-16 left-12 text-white max-w-xl">
          <h1 className="text-5xl font-bold leading-none mb-4">
            DECLARAÇÃO DOS DIREITOS<br />DOS ADOLESCENTES
          </h1>
          <p className="text-2xl">Uma visão jovem para um mundo mais justo e igualitário</p>
        </div>
      </div>

      {/* BOTÃO DE CHAT - Círculo azul que gira 180° */}
      <button
        onClick={() => setShowChat(!showChat)}
        className={`fixed bottom-8 right-8 w-16 h-16 bg-[#003087] rounded-full flex items-center justify-center shadow-2xl transition-transform duration-700 hover:scale-110 ${showChat ? 'rotate-180' : ''}`}
      >
        💬
      </button>

      {/* Conteúdo principal - estilo da segunda foto */}
      <div className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Coluna esquerda - Texto principal */}
        <div className="lg:col-span-7">
          <div className="text-sm text-gray-500 mb-2">01 • DECLARAÇÃO</div>
          <h2 className="text-4xl font-bold text-[#003087] mb-6">
            Os Direitos dos Adolescentes no Brasil
          </h2>
          <p className="text-lg leading-relaxed text-gray-700">
            Todo adolescente tem direito a ser ouvido, protegido, educado e respeitado. 
            Esta declaração foi criada por jovens para garantir que suas vozes sejam levadas em conta.
          </p>
          <button className="mt-8 bg-[#003087] text-white px-8 py-4 rounded-full text-sm font-medium flex items-center gap-2">
            Ler a Declaração Completa →
          </button>
        </div>

        {/* Coluna direita - Últimas (estilo da segunda foto) */}
        <div className="lg:col-span-5 bg-white border border-gray-200 rounded-3xl p-6">
          <h3 className="font-semibold text-xl mb-6">Últimas Atualizações</h3>
          <div className="space-y-8">
            <div>
              <p className="text-sm text-gray-500">09 abril 2026</p>
              <p className="font-medium">Campanha “Adolescentes pela Igualdade” chega a 5 estados</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">08 abril 2026</p>
              <p className="font-medium">Novo projeto de lei garante voz dos adolescentes no Congresso</p>
            </div>
          </div>
        </div>
      </div>

      {/* Chat em tempo real (vai ser ativado no próximo passo) */}
      {showChat && (
        <div className="fixed bottom-28 right-8 w-96 h-[520px] bg-white border border-gray-300 rounded-3xl shadow-2xl flex flex-col">
          <div className="p-4 bg-[#003087] text-white flex justify-between">
            <span>Chat da Equipe 3</span>
          </div>
          <div className="flex-1 p-4 overflow-auto bg-gray-50 text-sm">
            Chat em tempo real será implementado no próximo passo.
          </div>
        </div>
      )}
    </div>
  );
}
