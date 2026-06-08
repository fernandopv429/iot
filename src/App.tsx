import { useState } from 'react';
import { Globe, Grid3x3, Cpu, Eye, Activity, Network, ArrowRight, ArrowLeft } from 'lucide-react';

export default function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'services'>('home');

  return (
    <div className="min-h-screen w-full bg-[#08080a] relative font-sans selection:bg-[#1b3fff] selection:text-white text-white overflow-x-hidden">
      {/* Grid Lines Global */}
      <div className="fixed inset-0 pointer-events-none z-0 grid grid-cols-4 divide-x divide-white/[0.03]">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>

      {/* Header (Sticky now) */}
      <header className="fixed top-0 w-full px-8 md:px-16 lg:px-24 py-8 flex items-center justify-between z-50 bg-gradient-to-b from-[#08080a] to-transparent backdrop-blur-sm">
        <div className="text-xl font-display font-bold tracking-[0.2em] relative z-10 flex items-center cursor-pointer" onClick={() => setCurrentPage('home')}>
          N.JEY
        </div>

        <nav className="hidden md:flex gap-16 text-[10px] tracking-[0.2em] font-medium text-white/50 absolute left-1/2 -translate-x-1/2">
          <a href="#" onClick={(e) => { e.preventDefault(); setCurrentPage('home'); }} className={`${currentPage === 'home' ? 'text-white' : 'hover:text-white'} relative flex items-center transition-colors`}>
            {currentPage === 'home' && <span className="absolute -left-3 w-1 h-1 bg-[#1b3fff] shadow-[0_0_8px_#1b3fff]"></span>}
            HOME
          </a>
          <a href="#" className="hover:text-white transition-colors">ABOUT</a>
          <a href="#" className="hover:text-white transition-colors">WORKS</a>
          <a href="#" onClick={(e) => { e.preventDefault(); setCurrentPage('services'); }} className={`${currentPage === 'services' ? 'text-white' : 'hover:text-white'} relative flex items-center transition-colors`}>
            {currentPage === 'services' && <span className="absolute -left-3 w-1 h-1 bg-[#1b3fff] shadow-[0_0_8px_#1b3fff]"></span>}
            SERVIÇOS
          </a>
          <a href="#" className="hover:text-white transition-colors">CONTACTS</a>
        </nav>

        <div className="flex items-center gap-8 md:gap-14 relative z-10">
          <div className="hidden sm:flex items-center gap-3 text-[10px] font-bold tracking-[0.2em]">
            <button className="text-white flex items-center gap-2 hover:opacity-80 transition-opacity">
              <Globe className="w-3 h-3" /> PT
            </button>
            <span className="text-white/30 cursor-pointer hover:text-white/60 transition-colors">EN</span>
          </div>
          <button className="text-white/60 hover:text-white transition-colors p-1" aria-label="Menu">
             <Grid3x3 className="w-5 h-5" />
          </button>
        </div>
      </header>

      {currentPage === 'home' ? (
        <>
          {/* Hero Section */}
      <section className="h-screen w-full relative overflow-hidden shrink-0">
        {/* Left Decoration */}
        <div className="hidden md:flex absolute left-8 lg:left-10 top-1/2 -translate-y-1/2 flex-col items-center gap-3 z-20">
          <div className="w-[2px] h-6 bg-[#1b3fff] shadow-[0_0_8px_#1b3fff] mb-2"></div>
          <div className="w-1 h-1 bg-white/20 rounded-full"></div>
          <div className="w-1 h-1 bg-white/20 rounded-full"></div>
          <div className="w-1 h-1 bg-white/20 rounded-full"></div>
          <div className="w-1 h-1 bg-white/20 rounded-full"></div>
        </div>

        {/* Right Socials */}
        <div className="hidden md:flex absolute right-8 lg:right-10 top-1/2 -translate-y-1/2 flex-col gap-8 z-20 text-[9px] font-bold tracking-widest text-white/40">
          <a href="#" className="hover:text-white transition-colors">Vk</a>
          <a href="#" className="hover:text-white transition-colors">Tw</a>
          <a href="#" className="hover:text-white transition-colors">Fb</a>
          <a href="#" className="hover:text-white transition-colors">In</a>
          <a href="#" className="hover:text-white transition-colors">Bē</a>
        </div>

        {/* Hero 3D Background */}
        <div className="absolute top-0 right-0 w-[60%] lg:w-[50%] h-full z-0 pointer-events-none opacity-90">
          <div className="absolute inset-0 bg-gradient-to-r from-[#08080a] lg:via-[#08080a]/50 to-transparent z-10 w-[40%]"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#08080a] via-transparent to-transparent z-10 h-full"></div>
          <img
            src="/ambev.jpg"
            alt="Visão Computacional e Automação"
            className="w-full h-full object-cover opacity-70 mix-blend-lighten"
            style={{ filter: 'contrast(1.3) grayscale(40%) brightness(0.6)', objectPosition: 'left 25%' }}
          />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#1b3fff] rounded-full blur-[200px] opacity-[0.04] z-0"></div>
        </div>

        {/* Main Content Areas */}
        <div className="relative w-full h-full flex z-10 mt-16">
          <div className="w-full lg:w-[60%] h-full pl-12 md:pl-32 lg:pl-[25%] pt-[20vh] pr-10 relative">
            <div className="relative mb-14">
              <div className="absolute -left-4 md:-left-8 top-1 w-8 md:w-16 h-[70px] md:h-[100px] bg-[#1b3fff] z-0"></div>
              <div className="relative z-10 pl-1 md:pl-2 pt-2">
                <h2 className="text-[9px] md:text-[11px] tracking-[0.2em] font-medium uppercase mb-4 text-white drop-shadow-md">
                  IoT & Automação
                </h2>
              </div>
              <div className="relative z-10 mt-1">
                 <h1 className="text-[5rem] md:text-[7rem] lg:text-[8rem] xl:text-[9.5rem] font-display font-medium tracking-[0.1em] lg:tracking-[0.15em] uppercase text-white leading-[0.85] -ml-1 select-none">
                   Visão
                 </h1>
              </div>
            </div>

            <div className="ml-1 md:ml-4 border-l border-white/20 pl-6 lg:pl-8 max-w-sm mb-16">
              <p className="text-[11px] md:text-xs text-white/50 leading-relaxed font-light">
                Conectando o mundo físico ao digital através de sensores IoT e algoritmos de visão computacional para automação de alta precisão.
              </p>
            </div>

            <button className="ml-1 md:ml-4 flex items-center justify-center border border-white/20 px-10 py-4 text-[9px] tracking-[0.2em] font-bold uppercase transition-all bg-transparent hover:bg-white hover:text-black hover:border-white">
               Começar
            </button>
          </div>
        </div>

        {/* Annotations */}
        <div className="hidden lg:flex absolute top-[28%] right-[22%] xl:right-[26%] z-30 items-center gap-4 group">
          <div className="relative w-40 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-white/40">
             <div className="absolute right-0 -top-1 w-2 h-2 border border-white/60 rounded-full bg-[#08080a] group-hover:bg-white transition-colors shadow-[0_0_10px_rgba(255,255,255,0.5)] group-hover:shadow-[0_0_15px_#1b3fff]"></div>
          </div>
          <span className="text-[8px] tracking-[0.3em] font-medium text-white/70">VISÃO COMPUTACIONAL</span>
        </div>

        <div className="hidden lg:flex absolute top-[58%] right-[42%] xl:right-[46%] z-30 items-center gap-4 flex-row-reverse group">
          <div className="relative w-32 h-[1px] bg-gradient-to-l from-transparent via-white/10 to-white/40">
             <div className="absolute left-0 -top-1 w-2 h-2 border border-white/60 rounded-full bg-[#08080a] group-hover:bg-white transition-colors shadow-[0_0_10px_rgba(255,255,255,0.5)] group-hover:shadow-[0_0_15px_#1b3fff]"></div>
          </div>
          <span className="text-[8px] tracking-[0.3em] font-medium text-white/70">SENSORES IOT</span>
        </div>

        {/* Bottom Right Glass Cards */}
        <div className="hidden md:flex absolute bottom-0 right-0 z-30 w-[80%] lg:w-[50%] max-w-[650px] h-[200px]">
           <div className="flex-1 bg-gradient-to-b from-white/[0.04] to-transparent border-t border-l border-white/10 backdrop-blur-md p-10 flex flex-col justify-center transition-colors hover:bg-white/[0.06] cursor-default">
             <h3 className="text-[10px] tracking-[0.2em] font-bold mb-4 text-white">CONECTIVIDADE</h3>
             <p className="text-[11px] text-white/40 leading-relaxed font-light pr-4">
                Integração fluida de dispositivos IoT para monitoramento em tempo real e resposta adaptativa.
             </p>
           </div>
           <div className="flex-1 bg-gradient-to-b from-white/[0.04] to-transparent border-t border-l border-white/10 backdrop-blur-md p-10 flex flex-col justify-center transition-colors hover:bg-white/[0.06] cursor-default">
             <h3 className="text-[10px] tracking-[0.2em] font-bold mb-4 text-white">ANÁLISE ESPACIAL</h3>
             <p className="text-[11px] text-white/40 leading-relaxed font-light pr-4">
                Extração avançada de dados de imagem para detecção de anomalias e automação óptica.
             </p>
           </div>
        </div>
      </section>

      {/* Feature Section: The Core Engine */}
      <section className="relative w-full py-32 px-8 md:px-16 lg:pl-[25%] lg:pr-24 z-20">
        <div className="flex flex-col gap-6 mb-20 max-w-2xl">
          <h2 className="text-[10px] tracking-[0.4em] font-medium uppercase text-[#1b3fff] flex items-center gap-4">
            <span className="w-8 h-[1px] bg-[#1b3fff]"></span> Cérebro Central
          </h2>
          <h3 className="text-4xl md:text-5xl font-display font-medium tracking-wide">
            Inteligência Analítica Distribuída
          </h3>
          <p className="text-sm text-white/50 font-light leading-relaxed mt-4">
            A convergência entre visão computacional de alta performance e redes IoT permite a autonomia completa de sistemas industriais complexos. Operando em edge e na nuvem simultaneamente.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10">
          <div className="group border border-white/10 bg-white/[0.02] p-8 hover:bg-white/[0.04] transition-all hover:border-white/20">
            <div className="w-12 h-12 bg-[#1b3fff]/10 flex items-center justify-center rounded-sm mb-8 text-[#1b3fff] group-hover:scale-110 transition-transform">
              <Eye className="w-6 h-6" />
            </div>
            <h4 className="text-xs tracking-[0.2em] font-bold mb-3">VISÃO SINTÉTICA</h4>
            <p className="text-xs text-white/40 leading-relaxed font-light">
              Mapeamento volumétrico e reconhecimento de padrões visuais com latência ultrabaixa para detecção instantânea na linha de produção.
            </p>
          </div>

          <div className="group border border-white/10 bg-white/[0.02] p-8 hover:bg-white/[0.04] transition-all hover:border-white/20">
            <div className="w-12 h-12 bg-[#1b3fff]/10 flex items-center justify-center rounded-sm mb-8 text-[#1b3fff] group-hover:scale-110 transition-transform">
              <Network className="w-6 h-6" />
            </div>
            <h4 className="text-xs tracking-[0.2em] font-bold mb-3">MALHA IOT MESH</h4>
            <p className="text-xs text-white/40 leading-relaxed font-light">
              Arquitetura neuronal de sensores descentralizados. Tolerância máxima a falhas com redirecionamento de banda dinâmico.
            </p>
          </div>

          <div className="group border border-white/10 bg-white/[0.02] p-8 hover:bg-white/[0.04] transition-all hover:border-white/20">
            <div className="w-12 h-12 bg-[#1b3fff]/10 flex items-center justify-center rounded-sm mb-8 text-[#1b3fff] group-hover:scale-110 transition-transform">
              <Cpu className="w-6 h-6" />
            </div>
            <h4 className="text-xs tracking-[0.2em] font-bold mb-3">EDGE COMPUTING</h4>
            <p className="text-xs text-white/40 leading-relaxed font-light">
              Processamento de dados na borda minimiza envio para a nuvem. Decisões mitigatórias efetuadas em sub-milisegundos localmente.
            </p>
          </div>
        </div>
      </section>

      {/* Metrics Section */}
      <section className="relative w-full py-24 bg-white/[0.02] border-y border-white/5 z-20">
        <div className="mx-auto px-8 md:px-16 lg:px-24 grid grid-cols-2 md:grid-cols-4 gap-12 lg:pl-[25%] lg:pr-24">
           <div>
             <div className="text-4xl md:text-5xl font-display font-bold text-white mb-2 tracking-tight">99.8<span className="text-[#1b3fff]">%</span></div>
             <div className="text-[9px] tracking-[0.2em] font-bold text-white/50">PRECISÃO DE FOCALIZAÇÃO</div>
           </div>
           <div>
             <div className="text-4xl md:text-5xl font-display font-bold text-white mb-2 tracking-tight">0.2<span className="text-[#1b3fff]">ms</span></div>
             <div className="text-[9px] tracking-[0.2em] font-bold text-white/50">LATÊNCIA DE RESPOSTA</div>
           </div>
           <div>
             <div className="text-4xl md:text-5xl font-display font-bold text-white mb-2 tracking-tight">24<span className="text-[#1b3fff] text-2xl relative -top-3">/7</span></div>
             <div className="text-[9px] tracking-[0.2em] font-bold text-white/50">MONITORAMENTO CONTÍNUO</div>
           </div>
           <div>
             <div className="text-4xl md:text-5xl font-display font-bold text-white mb-2 tracking-tight">10<span className="text-[#1b3fff] text-2xl relative -top-3">k+</span></div>
             <div className="text-[9px] tracking-[0.2em] font-bold text-white/50">NODES SINCRONIZADOS</div>
           </div>
        </div>
      </section>

      {/* Real-time Interaction Preview */}
      <section className="relative w-full py-32 px-8 md:px-16 lg:px-24 z-20">
        <div className="lg:pl-[8%] lg:pr-[8%]">
          <div className="flex flex-col lg:flex-row justify-between items-end mb-16 gap-8">
             <div className="max-w-xl">
               <h2 className="text-[10px] tracking-[0.4em] font-medium uppercase text-[#1b3fff] flex items-center gap-4 mb-4">
                 <span className="w-8 h-[1px] bg-[#1b3fff]"></span> Fluxo de Ação
               </h2>
               <h3 className="text-3xl md:text-4xl font-display font-medium tracking-wide">
                 Controle Ambiental e Otimização
               </h3>
             </div>
             <button className="flex items-center gap-4 text-[10px] tracking-[0.2em] font-bold uppercase hover:text-[#1b3fff] transition-colors group">
               Explorar Arquitetura <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
             </button>
          </div>

          {/* Split Panel Dashboard */}
          <div className="flex flex-col md:flex-row w-full border border-white/10 bg-[#08080a] overflow-hidden shadow-2xl">
             
             {/* Left: Camera Feed (Fixed Aspect Ratio to guarantee center targeting across devices) */}
             <div className="relative w-full md:w-[65%] min-h-[300px] md:min-h-[500px] flex-shrink-0 bg-black flex flex-col justify-center overflow-hidden">
                <div className="relative w-full aspect-[5/4]">
                  <img 
                    src="/garrafa_pet_sem_tampa_cinza.png" 
                    alt="Conveyor Belt Feed" 
                    className="absolute inset-0 w-full h-full object-cover opacity-60 grayscale" 
                  />
                  <div className="absolute inset-0 bg-[#1b3fff]/5 mix-blend-overlay pointer-events-none"></div>
                  
                  {/* Status Indicator */}
                  <div className="absolute top-4 left-4 flex items-center gap-3 bg-black/80 px-3 py-1.5 border border-white/10 backdrop-blur-md z-10">
                     <div className="w-1.5 h-1.5 bg-red-500 rounded-full animate-ping"></div>
                     <span className="text-[8px] font-mono text-white tracking-widest font-bold">CAM 01 // LIVE FEED</span>
                  </div>

                  {/* Generic Targeting Reticle */}
                  <div className="absolute top-1/2 left-[31%] -translate-x-1/2 -translate-y-1/2 w-[40%] max-w-[220px] aspect-[1/2] border border-white/10 flex items-center justify-center opacity-70 pointer-events-none">
                     <div className="absolute -top-0.5 -left-0.5 w-4 h-4 border-t-2 border-l-2 border-[#1b3fff]"></div>
                     <div className="absolute -top-0.5 -right-0.5 w-4 h-4 border-t-2 border-r-2 border-[#1b3fff]"></div>
                     <div className="absolute -bottom-0.5 -left-0.5 w-4 h-4 border-b-2 border-l-2 border-[#1b3fff]"></div>
                     <div className="absolute -bottom-0.5 -right-0.5 w-4 h-4 border-b-2 border-r-2 border-[#1b3fff]"></div>
                     {/* Center Crosshair */}
                     <div className="w-full h-[1px] bg-[#1b3fff]/30"></div>
                     <div className="absolute w-[1px] h-full bg-[#1b3fff]/30"></div>
                  </div>

                  {/* Scrubber line */}
                  <div className="absolute top-0 left-0 w-full h-[2px] bg-[#1b3fff] shadow-[0_0_15px_#1b3fff] animate-[scan_2s_ease-in-out_infinite] z-10"></div>
                </div>
             </div>

             {/* Right: Data Analysis Panel */}
             <div className="w-full md:w-[35%] p-6 md:p-8 flex flex-col bg-[#0b0b0e] relative z-10 border-t md:border-t-0 md:border-l border-white/5">
                <div className="flex items-center gap-3 mb-8 pb-4 border-b border-white/5">
                   <Activity className="w-4 h-4 text-[#1b3fff]" />
                   <h3 className="text-[9px] font-bold tracking-[0.3em] text-white uppercase">Inspeção em Tempo Real</h3>
                </div>

                <div className="flex-1 flex flex-col justify-center gap-8">
                   {/* Object Identity */}
                   <div className="flex flex-col gap-1.5">
                      <span className="text-[8px] font-mono text-[#1b3fff] tracking-widest font-bold">OBJETO IDENTIFICADO</span>
                      <span className="text-sm font-mono text-white tracking-widest">GARRAFA_PET_500ML</span>
                      <span className="text-[8px] font-mono text-white/40 tracking-wider">MARGEM DE CONFIANÇA: 99.8%</span>
                   </div>

                   {/* Parameters List */}
                   <div className="flex flex-col gap-3">
                      <div className="flex items-center justify-between bg-white/[0.02] border border-white/5 px-4 py-3">
                         <span className="text-[9px] font-mono text-white/60 tracking-widest">RÓTULO</span>
                         <span className="text-[9px] font-mono font-bold text-green-400 tracking-widest">OK</span>
                      </div>
                      
                      <div className="flex items-center justify-between bg-white/[0.02] border border-white/5 px-4 py-3">
                         <span className="text-[9px] font-mono text-white/60 tracking-widest">NÍVEL_LÍQUIDO</span>
                         <span className="text-[9px] font-mono font-bold text-green-400 tracking-widest">OK</span>
                      </div>

                      {/* Critical Alert */}
                      <div className="flex flex-col bg-red-500/10 border border-red-500/30 p-4 relative overflow-hidden group shadow-[0_0_20px_rgba(239,68,68,0.1)]">
                         <div className="absolute inset-0 bg-red-500/5 animate-pulse"></div>
                         <div className="flex items-center justify-between relative z-10 mb-2 border-b border-red-500/20 pb-2">
                            <span className="text-[9px] font-mono text-white font-bold tracking-widest">TAMPA</span>
                            <span className="text-[9px] font-mono font-bold text-red-500 tracking-widest animate-pulse">AUSENTE</span>
                         </div>
                         <div className="flex justify-between items-end relative z-10">
                            <span className="text-[7px] font-mono text-white/50 tracking-wider">ALERTA DE SEGURANÇA ALIMENTAR</span>
                            <span className="text-[8px] font-mono text-red-500 tracking-widest font-bold">AÇÃO: DESCARTAR</span>
                         </div>
                      </div>
                   </div>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* Featured Video Services Section */}
      <section className="relative w-full py-32 px-8 md:px-16 lg:px-24 z-20 border-t border-white/5 bg-[#0b0b0e]">
        <div className="lg:pl-[8%] lg:pr-[8%]">
          <div className="flex flex-col mb-16 max-w-2xl">
            <h2 className="text-[10px] tracking-[0.4em] font-medium uppercase text-[#1b3fff] flex items-center gap-4 mb-4">
              <span className="w-8 h-[1px] bg-[#1b3fff]"></span> Destaques
            </h2>
            <h3 className="text-3xl md:text-4xl font-display font-medium tracking-wide">
              Principais Serviços de Referência
            </h3>
            <p className="text-sm text-white/50 font-light leading-relaxed mt-4">
              Acompanhe as demonstrações em tempo real de nossas principais soluções autônomas em operação.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Highlight Video 1 */}
            <div className="w-full aspect-video bg-[#050505] border border-white/10 relative overflow-hidden group cursor-pointer" onClick={() => setCurrentPage('services')}>
              <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:opacity-80 transition-opacity duration-700">
                <source src="https://db.a5ecossistema.tech/api/files/pbc_1857547928/wmkwybahr26qj8r/smart_machines_and_ai_a_new_era_in_manufacturing_excellence_xis_ai_1080p_h264_youtube_1_mrh5qztnys.mp4" type="video/mp4" />
              </video>
              <div className="absolute inset-0 border border-[#1b3fff]/0 group-hover:border-[#1b3fff]/30 transition-colors z-10 pointer-events-none"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none z-10"></div>
              <div className="absolute bottom-6 left-6 right-6 z-20 translate-y-2 group-hover:translate-y-0 transition-transform">
                <h4 className="text-sm font-mono text-white tracking-widest font-bold mb-1">MANUFATURA INTELIGENTE</h4>
                <p className="text-[10px] text-white/50 tracking-wider">A Nova Era da Excelência na Manufatura</p>
              </div>
            </div>

            {/* Highlight Video 2 */}
            <div className="w-full aspect-video bg-[#050505] border border-white/10 relative overflow-hidden group cursor-pointer" onClick={() => setCurrentPage('services')}>
              <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:opacity-80 transition-opacity duration-700">
                <source src="https://db.a5ecossistema.tech/api/files/pbc_1857547928/sub5ai8i87d5dzx/ai_based_vehicle_parking_management_system_using_computer_vision_deep_learning_ai_projects_hub_1080p_jehbqfkgpy.mp4" type="video/mp4" />
              </video>
              <div className="absolute inset-0 border border-[#1b3fff]/0 group-hover:border-[#1b3fff]/30 transition-colors z-10 pointer-events-none"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none z-10"></div>
              <div className="absolute bottom-6 left-6 right-6 z-20 translate-y-2 group-hover:translate-y-0 transition-transform">
                <h4 className="text-sm font-mono text-white tracking-widest font-bold mb-1">CONTROLE DE ESTACIONAMENTO</h4>
                <p className="text-[10px] text-white/50 tracking-wider">Gestão Automatizada com Visão Computacional</p>
              </div>
            </div>

            {/* Highlight Video 3 */}
            <div className="w-full aspect-video bg-[#050505] border border-white/10 relative overflow-hidden group cursor-pointer" onClick={() => setCurrentPage('services')}>
              <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:opacity-80 transition-opacity duration-700">
                <source src="https://db.a5ecossistema.tech/api/files/pbc_1857547928/ncned71xjyj4sxz/presence_absence_inspection_system_for_bottle_labels_animation_precision_cutting_systems_1080p_h264__g94ruitgpn.mp4" type="video/mp4" />
              </video>
              <div className="absolute inset-0 border border-[#1b3fff]/0 group-hover:border-[#1b3fff]/30 transition-colors z-10 pointer-events-none"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none z-10"></div>
              <div className="absolute bottom-6 left-6 right-6 z-20 translate-y-2 group-hover:translate-y-0 transition-transform">
                <h4 className="text-sm font-mono text-white tracking-widest font-bold mb-1">INSPEÇÃO DE RÓTULOS</h4>
                <p className="text-[10px] text-white/50 tracking-wider">Controle de Presença e Ausência em Garrafas</p>
              </div>
            </div>

            {/* Highlight Video 4 */}
            <div className="w-full aspect-video bg-[#050505] border border-white/10 relative overflow-hidden group cursor-pointer" onClick={() => setCurrentPage('services')}>
              <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:opacity-80 transition-opacity duration-700">
                <source src="https://db.a5ecossistema.tech/api/files/pbc_1857547928/6t0eu7rxmypro4n/bottle_detection_on_production_line_computervision_objectdetection_deeplearning_opencv_axiom_monolit_x7hchnf29h.mp4" type="video/mp4" />
              </video>
              <div className="absolute inset-0 border border-[#1b3fff]/0 group-hover:border-[#1b3fff]/30 transition-colors z-10 pointer-events-none"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none z-10"></div>
              <div className="absolute bottom-6 left-6 right-6 z-20 translate-y-2 group-hover:translate-y-0 transition-transform">
                <h4 className="text-sm font-mono text-white tracking-widest font-bold mb-1">DETECÇÃO EM LINHA</h4>
                <p className="text-[10px] text-white/50 tracking-wider">Identificação de Garrafas na Produção</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="relative w-full py-32 px-8 md:px-16 lg:px-24 z-20 border-t border-white/5">
        <div className="lg:pl-[8%] lg:pr-[8%]">
          <div className="flex flex-col mb-16 max-w-2xl">
            <h2 className="text-[10px] tracking-[0.4em] font-medium uppercase text-[#1b3fff] flex items-center gap-4 mb-4">
              <span className="w-8 h-[1px] bg-[#1b3fff]"></span> Blog
            </h2>
            <h3 className="text-3xl md:text-4xl font-display font-medium tracking-wide">
              Últimos Artigos
            </h3>
            <p className="text-sm text-white/50 font-light leading-relaxed mt-4">
              Insights, tendências e inovações do setor industrial. Acompanhe nossos artigos sobre tecnologia, Inteligência Artificial e automação aplicada ao chão de fábrica.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Case 1 */}
            <div className="group flex flex-col border border-white/10 bg-white/[0.02] hover:bg-white/[0.04] transition-all hover:border-white/20 overflow-hidden cursor-pointer">
              <div className="w-full aspect-video bg-[#111116] relative overflow-hidden">
                <div className="absolute inset-0 bg-[#1b3fff]/10 mix-blend-overlay z-10 group-hover:opacity-0 transition-opacity duration-500"></div>
                <img 
                  src="https://images.unsplash.com/photo-1565514020179-026b92b84bb6?auto=format&fit=crop&q=80&w=800" 
                  alt="Linha de Envase" 
                  className="w-full h-full object-cover opacity-60 grayscale group-hover:scale-105 group-hover:grayscale-0 transition-all duration-700" 
                />
              </div>
              <div className="p-6 pb-8 flex flex-col flex-1">
                <div className="text-[8px] font-mono text-[#1b3fff] tracking-widest font-bold mb-3">01 // INDÚSTRIA DE BEBIDAS</div>
                <h4 className="text-lg font-display font-medium tracking-wide mb-3">Controle em Linha de Envase</h4>
                <p className="text-xs text-white/50 leading-relaxed font-light mb-6">
                  Inspeção a 400 garrafas por minuto com detecção de falhas estruturada em Edge AI.
                </p>
                <div className="mt-auto">
                   <div className="inline-flex items-center gap-2 border-b border-white/20 pb-1 text-[9px] tracking-widest font-bold uppercase hover:text-[#1b3fff] hover:border-[#1b3fff] transition-colors">
                     Ler Artigo <ArrowRight className="w-3 h-3" />
                   </div>
                </div>
              </div>
            </div>

            {/* Case 2 */}
            <div className="group flex flex-col border border-white/10 bg-white/[0.02] hover:bg-white/[0.04] transition-all hover:border-white/20 overflow-hidden cursor-pointer">
              <div className="w-full aspect-video bg-[#111116] relative overflow-hidden">
                <div className="absolute inset-0 bg-[#1b3fff]/10 mix-blend-overlay z-10 group-hover:opacity-0 transition-opacity duration-500"></div>
                <img 
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800" 
                  alt="Metalurgia" 
                  className="w-full h-full object-cover opacity-60 grayscale group-hover:scale-105 group-hover:grayscale-0 transition-all duration-700" 
                />
              </div>
              <div className="p-6 pb-8 flex flex-col flex-1">
                <div className="text-[8px] font-mono text-[#1b3fff] tracking-widest font-bold mb-3">02 // METALURGIA PESADA</div>
                <h4 className="text-lg font-display font-medium tracking-wide mb-3">Mapeamento Térmico e Fissuras</h4>
                <p className="text-xs text-white/50 leading-relaxed font-light mb-6">
                  Integração de câmeras térmicas para identificar anomalias no resfriamento de ligas.
                </p>
                <div className="mt-auto">
                   <div className="inline-flex items-center gap-2 border-b border-white/20 pb-1 text-[9px] tracking-widest font-bold uppercase hover:text-[#1b3fff] hover:border-[#1b3fff] transition-colors">
                     Ler Artigo <ArrowRight className="w-3 h-3" />
                   </div>
                </div>
              </div>
            </div>

            {/* Case 3 */}
            <div className="group flex flex-col border border-white/10 bg-white/[0.02] hover:bg-white/[0.04] transition-all hover:border-white/20 overflow-hidden cursor-pointer">
              <div className="w-full aspect-video bg-[#111116] relative overflow-hidden">
                <div className="absolute inset-0 bg-[#1b3fff]/10 mix-blend-overlay z-10 group-hover:opacity-0 transition-opacity duration-500"></div>
                <img 
                  src="https://images.unsplash.com/photo-1533090161767-e6ffed986c88?auto=format&fit=crop&q=80&w=800" 
                  alt="Componentes Eletrônicos" 
                  className="w-full h-full object-cover opacity-60 grayscale group-hover:scale-105 group-hover:grayscale-0 transition-all duration-700" 
                />
              </div>
              <div className="p-6 pb-8 flex flex-col flex-1">
                <div className="text-[8px] font-mono text-[#1b3fff] tracking-widest font-bold mb-3">03 // SEMICONDUTORES</div>
                <h4 className="text-lg font-display font-medium tracking-wide mb-3">Microscopia Analítica</h4>
                <p className="text-xs text-white/50 leading-relaxed font-light mb-6">
                  Automação de microscópios para curtos-circuitos operando com rede 5G privada.
                </p>
                <div className="mt-auto">
                   <div className="inline-flex items-center gap-2 border-b border-white/20 pb-1 text-[9px] tracking-widest font-bold uppercase hover:text-[#1b3fff] hover:border-[#1b3fff] transition-colors">
                     Ler Artigo <ArrowRight className="w-3 h-3" />
                   </div>
                </div>
              </div>
            </div>

            {/* Case 4 */}
            <div className="group flex flex-col border border-white/10 bg-white/[0.02] hover:bg-white/[0.04] transition-all hover:border-white/20 overflow-hidden cursor-pointer">
              <div className="w-full aspect-video bg-[#111116] relative overflow-hidden">
                <div className="absolute inset-0 bg-[#1b3fff]/10 mix-blend-overlay z-10 group-hover:opacity-0 transition-opacity duration-500"></div>
                <img 
                  src="https://images.unsplash.com/photo-1506521781263-d8422e82f27a?auto=format&fit=crop&q=80&w=800" 
                  alt="Estacionamento" 
                  className="w-full h-full object-cover opacity-60 grayscale group-hover:scale-105 group-hover:grayscale-0 transition-all duration-700" 
                />
              </div>
              <div className="p-6 pb-8 flex flex-col flex-1">
                <div className="text-[8px] font-mono text-[#1b3fff] tracking-widest font-bold mb-3">04 // MOBILIDADE URBANA</div>
                <h4 className="text-lg font-display font-medium tracking-wide mb-3">Controle de Estacionamento</h4>
                <p className="text-xs text-white/50 leading-relaxed font-light mb-6">
                  Leitura de placa (LPR) integrada à cancela. Início da contagem de tempo na entrada e cobrança automatizada via tempo na saída.
                </p>
                <div className="mt-auto">
                   <div className="inline-flex items-center gap-2 border-b border-white/20 pb-1 text-[9px] tracking-widest font-bold uppercase hover:text-[#1b3fff] hover:border-[#1b3fff] transition-colors">
                     Ler Artigo <ArrowRight className="w-3 h-3" />
                   </div>
                </div>
              </div>
            </div>

            {/* Case 5 */}
            <div className="group flex flex-col border border-white/10 bg-white/[0.02] hover:bg-white/[0.04] transition-all hover:border-white/20 overflow-hidden cursor-pointer">
              <div className="w-full aspect-video bg-[#111116] relative overflow-hidden">
                <div className="absolute inset-0 bg-[#1b3fff]/10 mix-blend-overlay z-10 group-hover:opacity-0 transition-opacity duration-500"></div>
                <img 
                  src="/ambev.jpg" 
                  alt="Processo e automação Ambev" 
                  className="w-full h-full object-cover opacity-60 grayscale group-hover:scale-105 group-hover:grayscale-0 transition-all duration-700" 
                />
              </div>
              <div className="p-6 pb-8 flex flex-col flex-1">
                <div className="text-[8px] font-mono text-[#1b3fff] tracking-widest font-bold mb-3">05 // ESTRATÉGIA E GESTÃO</div>
                <h4 className="text-lg font-display font-medium tracking-wide mb-3">Análise de Dados e Estratégia</h4>
                <p className="text-xs text-white/50 leading-relaxed font-light mb-6">
                  Visita Ambev: Mapeamento de processos e aplicação de automação para aumento da eficiência na linha de produção.
                </p>
                <div className="mt-auto">
                   <div className="inline-flex items-center gap-2 border-b border-white/20 pb-1 text-[9px] tracking-widest font-bold uppercase hover:text-[#1b3fff] hover:border-[#1b3fff] transition-colors">
                     Ler Artigo <ArrowRight className="w-3 h-3" />
                   </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
        </>
      ) : (
        <div className="pt-32 min-h-screen relative w-full px-8 md:px-16 lg:px-24 z-20 bg-[#0b0b0e]">
          <div className="lg:pl-[8%] lg:pr-[8%]">
            <button 
              onClick={() => setCurrentPage('home')}
              className="flex items-center gap-3 text-[10px] tracking-[0.2em] font-medium uppercase hover:text-[#1b3fff] transition-colors mb-12 border border-white/10 px-4 py-2 hover:border-[#1b3fff]/30 bg-transparent"
            >
              <ArrowLeft className="w-3 h-3" /> Voltar
            </button>
            <div className="flex flex-col mb-16 max-w-2xl">
              <h2 className="text-[10px] tracking-[0.4em] font-medium uppercase text-[#1b3fff] flex items-center gap-4 mb-4">
                <span className="w-8 h-[1px] bg-[#1b3fff]"></span> Nossos Serviços
              </h2>
              <h3 className="text-3xl md:text-4xl font-display font-medium tracking-wide">
                Showcase em Vídeo
              </h3>
              <p className="text-sm text-white/50 font-light leading-relaxed mt-4">
                Explore o potencial das nossas implementações por meio de demonstrações operacionais capturadas diretamente nos mais adversos cenários industriais.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pb-32">
              {/* Video 1 */}
              <div className="w-full aspect-video bg-[#050505] border border-white/10 relative overflow-hidden group cursor-pointer">
                <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:opacity-80 transition-opacity duration-700">
                  <source src="https://videos.pexels.com/video-files/5049363/5049363-uhd_2732_1440_30fps.mp4" type="video/mp4" />
                </video>
                <div className="absolute inset-0 border border-[#1b3fff]/0 group-hover:border-[#1b3fff]/30 transition-colors z-10 pointer-events-none"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none z-10"></div>
                <div className="absolute bottom-6 left-6 right-6 z-20 translate-y-2 group-hover:translate-y-0 transition-transform">
                  <h4 className="text-sm font-mono text-white tracking-widest font-bold mb-1">LINHA DE MONTAGEM</h4>
                  <p className="text-[10px] text-white/50 tracking-wider">Braços Robotizados Guiados por Visão Computacional</p>
                </div>
              </div>

              {/* Video 2 */}
              <div className="w-full aspect-video bg-[#050505] border border-white/10 relative overflow-hidden group cursor-pointer">
                <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:opacity-80 transition-opacity duration-700">
                  <source src="https://videos.pexels.com/video-files/3129540/3129540-uhd_3840_2160_24fps.mp4" type="video/mp4" />
                </video>
                <div className="absolute inset-0 border border-[#1b3fff]/0 group-hover:border-[#1b3fff]/30 transition-colors z-10 pointer-events-none"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none z-10"></div>
                <div className="absolute bottom-6 left-6 right-6 z-20 translate-y-2 group-hover:translate-y-0 transition-transform">
                  <h4 className="text-sm font-mono text-white tracking-widest font-bold mb-1">MÉTRICAS IOT</h4>
                  <p className="text-[10px] text-white/50 tracking-wider">Monitoramento em Tempo Real de Bancos de Dados</p>
                </div>
              </div>

              {/* Video 3 */}
              <div className="w-full aspect-video bg-[#050505] border border-white/10 relative overflow-hidden group cursor-pointer">
                <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:opacity-80 transition-opacity duration-700">
                  <source src="https://videos.pexels.com/video-files/5453622/5453622-uhd_3840_2160_30fps.mp4" type="video/mp4" />
                </video>
                <div className="absolute inset-0 border border-[#1b3fff]/0 group-hover:border-[#1b3fff]/30 transition-colors z-10 pointer-events-none"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none z-10"></div>
                <div className="absolute bottom-6 left-6 right-6 z-20 translate-y-2 group-hover:translate-y-0 transition-transform">
                  <h4 className="text-sm font-mono text-white tracking-widest font-bold mb-1">QUALIDADE EM MASSA</h4>
                  <p className="text-[10px] text-white/50 tracking-wider">Mapeamento de Defeitos e Engarrafamento</p>
                </div>
              </div>

              {/* Video 4 */}
              <div className="w-full aspect-video bg-[#050505] border border-white/10 relative overflow-hidden group cursor-pointer">
                <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:opacity-80 transition-opacity duration-700">
                  <source src="https://db.a5ecossistema.tech/api/files/pbc_1857547928/wmkwybahr26qj8r/smart_machines_and_ai_a_new_era_in_manufacturing_excellence_xis_ai_1080p_h264_youtube_1_mrh5qztnys.mp4" type="video/mp4" />
                </video>
                <div className="absolute inset-0 border border-[#1b3fff]/0 group-hover:border-[#1b3fff]/30 transition-colors z-10 pointer-events-none"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none z-10"></div>
                <div className="absolute bottom-6 left-6 right-6 z-20 translate-y-2 group-hover:translate-y-0 transition-transform">
                  <h4 className="text-sm font-mono text-white tracking-widest font-bold mb-1">MANUFATURA INTELIGENTE</h4>
                  <p className="text-[10px] text-white/50 tracking-wider">A Nova Era da Excelência na Manufatura</p>
                </div>
              </div>

              {/* Video 5 */}
              <div className="w-full aspect-video bg-[#050505] border border-white/10 relative overflow-hidden group cursor-pointer">
                <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:opacity-80 transition-opacity duration-700">
                  <source src="https://db.a5ecossistema.tech/api/files/pbc_1857547928/sub5ai8i87d5dzx/ai_based_vehicle_parking_management_system_using_computer_vision_deep_learning_ai_projects_hub_1080p_jehbqfkgpy.mp4" type="video/mp4" />
                </video>
                <div className="absolute inset-0 border border-[#1b3fff]/0 group-hover:border-[#1b3fff]/30 transition-colors z-10 pointer-events-none"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none z-10"></div>
                <div className="absolute bottom-6 left-6 right-6 z-20 translate-y-2 group-hover:translate-y-0 transition-transform">
                  <h4 className="text-sm font-mono text-white tracking-widest font-bold mb-1">CONTROLE DE ESTACIONAMENTO</h4>
                  <p className="text-[10px] text-white/50 tracking-wider">Gestão Automatizada com Visão Computacional</p>
                </div>
              </div>

              {/* Video 6 */}
              <div className="w-full aspect-video bg-[#050505] border border-white/10 relative overflow-hidden group cursor-pointer">
                <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:opacity-80 transition-opacity duration-700">
                  <source src="https://db.a5ecossistema.tech/api/files/pbc_1857547928/ncned71xjyj4sxz/presence_absence_inspection_system_for_bottle_labels_animation_precision_cutting_systems_1080p_h264__g94ruitgpn.mp4" type="video/mp4" />
                </video>
                <div className="absolute inset-0 border border-[#1b3fff]/0 group-hover:border-[#1b3fff]/30 transition-colors z-10 pointer-events-none"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none z-10"></div>
                <div className="absolute bottom-6 left-6 right-6 z-20 translate-y-2 group-hover:translate-y-0 transition-transform">
                  <h4 className="text-sm font-mono text-white tracking-widest font-bold mb-1">INSPEÇÃO DE RÓTULOS</h4>
                  <p className="text-[10px] text-white/50 tracking-wider">Controle de Presença e Ausência em Garrafas</p>
                </div>
              </div>

              {/* Video 7 */}
              <div className="w-full aspect-video bg-[#050505] border border-white/10 relative overflow-hidden group cursor-pointer">
                <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:opacity-80 transition-opacity duration-700">
                  <source src="https://db.a5ecossistema.tech/api/files/pbc_1857547928/6t0eu7rxmypro4n/bottle_detection_on_production_line_computervision_objectdetection_deeplearning_opencv_axiom_monolit_x7hchnf29h.mp4" type="video/mp4" />
                </video>
                <div className="absolute inset-0 border border-[#1b3fff]/0 group-hover:border-[#1b3fff]/30 transition-colors z-10 pointer-events-none"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none z-10"></div>
                <div className="absolute bottom-6 left-6 right-6 z-20 translate-y-2 group-hover:translate-y-0 transition-transform">
                  <h4 className="text-sm font-mono text-white tracking-widest font-bold mb-1">DETECÇÃO EM LINHA</h4>
                  <p className="text-[10px] text-white/50 tracking-wider">Identificação de Garrafas na Produção</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="relative w-full border-t border-white/10 bg-[#08080a] z-20 px-8 md:px-16 lg:px-24 py-12 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="text-lg font-display font-bold tracking-[0.2em] text-[#1b3fff]">
          N.JEY
        </div>
        
        <div className="flex gap-8 text-[9px] tracking-[0.2em] font-medium text-white/50">
          <a href="#" className="hover:text-white transition-colors">Termos</a>
          <a href="#" className="hover:text-white transition-colors">Privacidade</a>
          <a href="#" className="hover:text-white transition-colors">Contato</a>
        </div>
        
        <div className="text-[9px] tracking-widest font-mono text-white/30">
          © {new Date().getFullYear()} N.JEY AUTOMATION. ALL RIGHTS RESERVED.
        </div>
      </footer>
      
      {/* Required for the scanning animation */}
      <style>{`
        @keyframes scan {
          0% { top: 0; opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { top: 100%; opacity: 0; }
        }
      `}</style>
    </div>
  );
}
