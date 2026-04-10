<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Nações Unidas Brasil - Elas do Campo à Mesa</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap');
        
        :root {
            --un-blue: #003087;
        }
        
        body {
            font-family: 'Roboto', system-ui, sans-serif;
        }
        
        /* TOP BAR EXATAMENTE como na primeira imagem */
        .top-bar {
            background-color: #f8f8f8;
            border-bottom: 1px solid #e5e5e5;
        }
        
        .blue-line {
            background: linear-gradient(to right, #003087 0%, #0072bc 100%);
            height: 4px;
        }
        
        .nav-link {
            transition: color 0.2s;
        }
        
        .nav-link:hover {
            color: #0072bc;
        }
        
        /* Layout da segunda imagem */
        .main-content {
            max-width: 1280px;
            margin: 0 auto;
        }
        
        .history-section {
            background-color: #0a3d62;
            color: white;
        }
        
        .photo-frame {
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
            border: 8px solid #fff;
        }
        
        /* Sidebar de notícias */
        .news-item {
            transition: all 0.2s;
        }
        
        .news-item:hover {
            background-color: #f8f9fa;
        }
        
        .saiba-mais {
            background-color: #0072bc;
            color: white;
            transition: background-color 0.3s;
        }
        
        .saiba-mais:hover {
            background-color: #005a96;
        }
    </style>
</head>
<body class="bg-white text-gray-900">

    <!-- TOP BAR - IGUAL À PRIMEIRA IMAGEM -->
    <header class="top-bar">
        <div class="max-w-screen-2xl mx-auto px-8">
            <!-- Primeira linha: Bem-vindo + Português -->
            <div class="flex items-center justify-between py-3 text-sm">
                <div class="flex items-center gap-3">
                    <span class="text-2xl">🏠</span>
                    <span class="font-medium">Bem-vindo às Nações Unidas</span>
                </div>
                <div class="flex items-center gap-6">
                    <a href="#" class="flex items-center gap-1 text-gray-700 hover:text-[#003087] font-medium">
                        Português
                        <span class="text-xs">▼</span>
                    </a>
                </div>
            </div>

            <!-- Linha azul -->
            <div class="blue-line"></div>

            <!-- Segunda linha: Logo + Título + Busca -->
            <div class="flex items-center justify-between py-5">
                <!-- Logo Nações Unidas Brasil -->
                <div class="flex items-center gap-4">
                    <div class="w-14 h-14 bg-[#0072bc] rounded-full flex items-center justify-center text-white text-4xl shadow-inner">
                        🌐
                    </div>
                    <div>
                        <div class="flex items-center gap-1 text-[#0072bc] font-bold text-xl tracking-widest">
                            NAÇÕES UNIDAS
                            <span class="text-[#f1c40f] text-xs">●</span>
                            <span class="text-[#e74c3c] text-xs">●</span>
                            <span class="text-[#2ecc71] text-xs">●</span>
                            <span class="text-[#3498db] text-xs">●</span>
                            <span class="text-[#9b59b6] text-xs">●</span>
                        </div>
                        <div class="text-xs text-gray-500 -mt-1">BRASIL</div>
                    </div>
                    <div class="h-10 w-px bg-gray-300"></div>
                    <div>
                        <h1 class="text-2xl font-bold leading-none">Nações Unidas</h1>
                        <h2 class="text-xl font-semibold text-[#003087]">Brasil</h2>
                    </div>
                </div>

                <!-- Barra de busca -->
                <div class="flex-1 max-w-xl mx-8">
                    <div class="relative">
                        <input 
                            type="text" 
                            placeholder="Encontre dados, recursos, notícias e mais"
                            class="w-full bg-white border border-gray-300 rounded-full py-3 px-6 pl-6 pr-12 text-gray-700 focus:outline-none focus:border-[#0072bc] shadow-sm">
                        <button class="absolute right-4 top-1/2 -translate-y-1/2 bg-[#0072bc] text-white rounded-full w-9 h-9 flex items-center justify-center">
                            🔎
                        </button>
                    </div>
                </div>

                <!-- Links rápidos -->
                <div class="flex items-center gap-8 text-sm font-medium">
                    <a href="#" class="nav-link">Sobre</a>
                    <a href="#" class="nav-link">Objetivos de Desenvolvimento Sustentável</a>
                    <a href="#" class="nav-link">Faça a sua parte</a>
                    <a href="#" class="nav-link">Histórias</a>
                    <a href="#" class="nav-link">Recursos</a>
                    <a href="#" class="nav-link">Centro de Imprensa</a>
                </div>
            </div>
        </div>
    </header>

    <!-- CONTEÚDO PRINCIPAL - IGUAL À SEGUNDA IMAGEM -->
    <main class="main-content px-8 py-10">
        <div class="flex gap-8">
            
            <!-- COLUNA ESQUERDA (azul) - História -->
            <div class="history-section w-96 rounded-3xl p-8 flex-shrink-0">
                <div class="text-sm opacity-75 mb-1">03 História</div>
                <h1 class="text-3xl font-bold leading-tight mb-6">
                    “Elas do Campo à Mesa”:<br>a força das mulheres q...
                </h1>
                <p class="text-base leading-relaxed mb-8">
                    Campanha percorre as cinco regiões do país para dar visibilidade às mulheres que protagonizam cada etapa da cadeia de abastecimento alimentar.
                </p>
                <a href="#" 
                   class="inline-flex items-center gap-2 bg-white text-[#0a3d62] hover:bg-gray-100 font-semibold px-6 py-3 rounded-2xl text-sm">
                    <span class="text-xl">➕</span>
                    <span>Leia mais</span>
                </a>
            </div>

            <!-- FOTO CENTRAL - SUBSTITUÍDA PELA TERCEIRA IMAGEM -->
            <div class="flex-1 flex flex-col">
                <div class="photo-frame bg-white rounded-3xl overflow-hidden flex-1 flex items-center justify-center p-4">
                    <!-- TERCEIRA IMAGEM INSERIDA AQUI -->
                    <img src="https://i.imgur.com/9Iiuo.png" 
                         alt="Ilustração Elas do Campo à Mesa - Mulheres e jovens trabalhando com tecnologia"
                         class="w-full h-full object-contain rounded-2xl">
                    <!-- 
                        OBSERVAÇÃO PARA VOCÊ (DESENVOLVEDOR):
                        Se você salvou a terceira imagem como arquivo local, troque o src acima por:
                        src="terceira-foto.png" ou o caminho que preferir.
                    -->
                </div>
                
                <!-- Botões Anterior / Próxima (exatamente como na segunda imagem) -->
                <div class="flex justify-between text-xs font-medium text-gray-400 mt-4 px-2">
                    <button class="flex items-center gap-2 hover:text-gray-600 transition-colors">
                        ← ANTERIOR
                    </button>
                    <button class="flex items-center gap-2 hover:text-gray-600 transition-colors">
                        PRÓXIMA →
                    </button>
                </div>
            </div>

            <!-- COLUNA DIREITA - Últimas -->
            <div class="w-80 flex-shrink-0">
                <h3 class="text-lg font-semibold mb-4 border-b border-gray-200 pb-2">Últimas</h3>
                
                <!-- Notícia 1 -->
                <div class="news-item p-4 rounded-2xl mb-3">
                    <div class="flex justify-between text-xs text-gray-500 mb-1">
                        <span>Notícias</span>
                        <span>09 abril 2026</span>
                    </div>
                    <p class="font-medium text-sm leading-tight mb-3">
                        Coletiva de imprensa: Lançamento do Relatório sobre Financiamento...
                    </p>
                    <a href="#" class="saiba-mais text-xs font-medium px-5 py-2 rounded-3xl inline-flex items-center">
                        Saiba mais
                    </a>
                </div>
                
                <!-- Notícia 2 -->
                <div class="news-item p-4 rounded-2xl mb-3">
                    <div class="flex justify-between text-xs text-gray-500 mb-1">
                        <span>Notícias</span>
                        <span>09 abril 2026</span>
                    </div>
                    <p class="font-medium text-sm leading-tight mb-3">
                        Com apoio do UNFPA, Plano Juventude Negra Viva completa...
                    </p>
                    <a href="#" class="saiba-mais text-xs font-medium px-5 py-2 rounded-3xl inline-flex items-center">
                        Saiba mais
                    </a>
                </div>
                
                <!-- Notícia 3 (exemplo) -->
                <div class="news-item p-4 rounded-2xl">
                    <div class="flex justify-between text-xs text-gray-500 mb-1">
                        <span>Notícias</span>
                        <span>09 abril 2026</span>
                    </div>
                    <p class="font-medium text-sm leading-tight">
                        Lançamento da campanha “Elas do Campo à Mesa” com Conab e UNOPS
                    </p>
                </div>
            </div>
        </div>
    </main>

    <script>
        // Tailwind script já carregado
        console.log('%c✅ Site ajustado com sucesso! Top bar = imagem 1 | Layout = imagem 2 | Foto central = imagem 3', 'color:#0072bc; font-weight:bold');
    </script>
</body>
</html>
