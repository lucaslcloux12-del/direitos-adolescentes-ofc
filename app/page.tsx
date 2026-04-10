"use client";
import { useState } from "react";
import { auth, googleProvider } from "@/lib/firebase";
import { signInWithPopup } from "firebase/auth";
import { useRouter } from "next/navigation";

export default function Home() {
  const [user, setUser] = useState<any>(null);
  const [showChat, setShowChat] = useState(false);
  const router = useRouter();

  const loginGoogle = () => signInWithPopup(auth, googleProvider);

  return (
    <div className="min-h-screen bg-white text-[#222]">
      {/* TOP BAR EXATAMENTE IGUAL À PRIMEIRA FOTO */}
      <header className="bg-[#003087] text-white py-3 px-6 flex items-center justify-between border-b-4 border-[#00a1e7]">
        <div className="flex items-center gap-6">
          {/* Ícone de casa */}
          <a href="/" className="text-2xl">🏠</a>
          <span className="font-medium">Bem-vindo à Declaração dos Direitos dos Adolescentes</span>
        </div>

        <div className="flex items-center gap-8">
          <nav className="flex gap-6 text-sm font-medium">
            <a href="#" className="hover:underline">Início</a>
            <a href="#" className="hover:underline">Declaração</a>
            <a href="#" className="hover:underline">Sobre</a>
            <a href="#" className="hover:underline">Contato</a>
          </nav>

          {/* Busca */}
          <div className="relative">
            <input 
              type="text" 
              placeholder="Encontre direitos, artigos e mais..." 
              className="bg-white text-black px-5 py-2 rounded-full w-80 text-sm focus:outline-none"
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

      {/* HERO COM A TERCEIRA IMAGEM (desenho dos adolescentes) */}
      <div 
        className="h-[640px] bg-cover bg-center relative flex items-center justify-center"
        style={{ backgroundImage: "url('https://i.imgur.com/3fK8vL9.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative text-center text-white z-10 px-6">
          <h1 className="text-6xl font-bold leading-none mb-6">
            DECLARAÇÃO DOS DIREITOS<br />DOS ADOLESCENTES
          </h1>
          <p className="text-2xl max-w-2xl mx-auto">
            Todo adolescente tem direito a ser ouvido, protegido e respeitado.
          </p>
        </div>
      </div>

      {/* BOTÃO DE CHAT (estilo exato da segunda imagem + animação de 180°) */}
      <button
        onClick={() => setShowChat(!showChat)}
        className={`fixed bottom-8 right-8 w-16 h-16 bg-[#003087] rounded-full flex items-center justify-center shadow-2xl transition-transform duration-700 hover:scale-110 ${showChat ? 'rotate-180' : ''}`}
      >
        💬
      </button>

      {/* Chat em tempo real (abrirá no próximo passo) */}
      {showChat && (
        <div className="fixed bottom-28 right-8 w-96 h-[500px] bg-white border border-gray-300 rounded-3xl shadow-2xl flex flex-col overflow-hidden">
          <div className="p-4 bg-[#003087] text-white flex justify-between items-center">
            <span>Chat da Equipe 3</span>
            <span className="text-xs opacity-70">lucaslcloux12@gmail.com</span>
          </div>
          <div className="flex-1 p-4 overflow-auto text-sm bg-gray-50">
            {/* Chat funcional virá no próximo passo */}
          </div>
        </div>
      )}

      <div className="max-w-6xl mx-auto px-6 py-12">
        <h2 className="text-4xl font-bold text-[#003087] mb-8">Os Direitos dos Adolescentes</h2>
        {/* Conteúdo editável será adicionado no próximo passo */}
      </div>
    </div>
  );
}
