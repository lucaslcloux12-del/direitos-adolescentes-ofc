"use client";
import { useState } from "react";
import { auth, googleProvider } from "@/lib/firebase";
import { signInWithPopup, onAuthStateChanged } from "firebase/auth";

export default function Home() {
  const [user, setUser] = useState<any>(null);
  const [showChat, setShowChat] = useState(false);

  // Login Google
  const loginGoogle = () => signInWithPopup(auth, googleProvider);

  // Simula o chat girando 180°
  const toggleChat = () => setShowChat(!showChat);

  return (
    <div className="min-h-screen bg-white text-[#222]">
      {/* Top Bar idêntica à ONU */}
      <header className="bg-[#003087] text-white py-3 px-6 flex items-center justify-between sticky top-0 z-50 shadow">
        <div className="flex items-center gap-8">
          <img src="https://brasil.un.org/themes/custom/undp/assets/logo-onu-brasil.svg" alt="ONU Brasil" className="h-10" />
          <nav className="flex gap-6 text-sm font-medium">
            <a href="#" className="hover:underline">Início</a>
            <a href="#" className="hover:underline">Declaração</a>
            <a href="#" className="hover:underline">Sobre</a>
            <a href="#" className="hover:underline">Contato</a>
          </nav>
        </div>

        <div className="flex items-center gap-4">
          <input 
            type="text" 
            placeholder="Buscar na Declaração..." 
            className="bg-white text-black px-4 py-2 rounded-full w-72 text-sm focus:outline-none"
          />
          <button onClick={loginGoogle} className="bg-white text-[#003087] px-5 py-2 rounded-full text-sm font-medium hover:bg-gray-100">
            Entrar com Google
          </button>
        </div>
      </header>

      {/* Hero com foto de adolescentes */}
      <div className="relative h-[600px] bg-cover bg-center flex items-center justify-center" 
           style={{ backgroundImage: "url('https://i.imgur.com/3fK8vL9.jpg')" }}>
        <div className="text-center text-white z-10">
          <h1 className="text-6xl font-bold mb-4">Declaração dos Direitos dos Adolescentes</h1>
          <p className="text-2xl">Uma visão jovem para um mundo mais justo</p>
        </div>
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Conteúdo principal - vai ser editável */}
      <main className="max-w-6xl mx-auto px-6 py-12">
        <h2 className="text-4xl font-bold text-[#003087] mb-8">Os 30 Direitos dos Adolescentes</h2>
        {/* Aqui vamos colocar os 30 tópicos editáveis no próximo passo */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Placeholder - vamos substituir no próximo passo */}
          <div className="border border-gray-300 rounded-2xl p-8">
            <h3 className="font-semibold text-xl">Direito 1 – Ser ouvido</h3>
            <p className="mt-4 text-gray-700">Todo adolescente tem direito de expressar sua opinião e ser ouvido em todas as decisões que afetam sua vida.</p>
          </div>
        </div>
      </main>

      {/* Botão de Chat flutuante (gira 180° quando clicado) */}
      <button 
        onClick={toggleChat}
        className={`fixed bottom-8 right-8 w-16 h-16 bg-[#003087] rounded-full flex items-center justify-center shadow-2xl transition-transform duration-500 ${showChat ? 'rotate-180' : ''}`}
      >
        💬
      </button>

      {/* Chat em tempo real (vai ser implementado no próximo passo) */}
      {showChat && (
        <div className="fixed bottom-28 right-8 w-96 h-96 bg-white border border-gray-300 rounded-3xl shadow-2xl flex flex-col">
          <div className="p-4 border-b">Chat em tempo real • Equipe 3</div>
          <div className="flex-1 p-4 overflow-auto text-sm">Chat funcional em breve...</div>
          <div className="p-4 border-t flex gap-2">
            <input className="flex-1 border rounded-3xl px-4 py-3 text-sm" placeholder="Digite sua mensagem..." />
            <button className="bg-[#003087] text-white px-6 rounded-3xl">Enviar</button>
          </div>
        </div>
      )}
    </div>
  );
}
