import React, { useState, useEffect } from 'react';
import {
    User,
    GraduationCap,
    Code,
    Briefcase,
    Rocket,
    Cpu,
    Users,
    MessageSquare,
    ChevronRight,
    ChevronLeft,
    Brain,
    Lightbulb,
    Terminal,
    Zap,
    Globe,
    Settings,
    Sparkles,
    Leaf
} from 'lucide-react';

const App = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        setIsLoaded(true);
        const handleKeyDown = (e) => {
            if (e.key === 'ArrowRight') nextSlide();
            if (e.key === 'ArrowLeft') prevSlide();
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [currentSlide]);

    const nextSlide = () => {
        if (currentSlide < slides.length - 1) {
            setCurrentSlide(s => s + 1);
        }
    };

    const prevSlide = () => {
        if (currentSlide > 0) {
            setCurrentSlide(s => s - 1);
        }
    };

    const slides = [
        {
            id: 0,
            title: "Bienvenue",
            icon: <User className="w-12 h-12 text-[#4B6F44]" />,
            content: (
                <div className="flex flex-col items-center gap-6 max-w-3xl text-center animate-in fade-in slide-in-from-bottom-8 duration-1000">
                    <div className="mb-2">
                        <Leaf className="w-16 h-16 text-[#A7D7C5] animate-bounce-slow" />
                    </div>
                    <div className="space-y-4">
                        <h2 className="text-6xl md:text-7xl font-bold tracking-tight text-[#2D3E2F]">
                            Samuel Galiere
                        </h2>
                        <p className="text-2xl text-[#4B6F44] font-medium max-w-xl mx-auto">
                            Consultant Transformation Digitale & IA
                        </p>
                        <div className="flex flex-wrap gap-3 justify-center mt-8">
                            {['Alumni 2023', 'TNP Consultants', 'Indépendant'].map((tag, i) => (
                                <span key={tag}
                                    className="px-5 py-2 bg-white border border-[#E8E4D9] rounded-full text-[#4B6F44] text-sm font-semibold shadow-sm"
                                    style={{ animationDelay: `${i * 150}ms` }}
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            )
        },
        {
            id: 1,
            title: "Parcours Académique",
            icon: <GraduationCap className="w-12 h-12 text-[#4B6F44]" />,
            content: (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-5xl items-center">
                    <div className="bg-white p-8 rounded-[2rem] border border-[#E8E4D9] shadow-sm animate-in slide-in-from-left-8 duration-700">
                        <div className="text-[#A7D7C5] mb-2 font-mono flex items-center gap-2 font-bold uppercase tracking-wider text-xs">
                            <Sparkles size={14} /> Promo 2023
                        </div>
                        <h3 className="text-3xl font-bold mb-6 text-[#2D3E2F]">EPITECH Technology</h3>
                        <div className="space-y-5">
                            {[
                                { icon: <Settings size={20} className="text-[#4B6F44]" />, title: "Expertise technique", desc: "Maîtrise de la logique bas niveau et résolution de problèmes complexes." },
                                { icon: <Globe size={20} className="text-[#4B6F44]" />, title: "Adaptabilité", desc: "Vision globale des enjeux IT et agilité face au changement." }
                            ].map((item, i) => (
                                <div key={i} className="flex gap-4 p-4 rounded-xl hover:bg-[#FDFBF7] transition-colors">
                                    <div className="mt-1">{item.icon}</div>
                                    <div>
                                        <h4 className="text-[#2D3E2F] font-bold">{item.title}</h4>
                                        <p className="text-[#6B7C6E] text-sm">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="p-10 bg-[#A7D7C5]/10 rounded-[2.5rem] border border-[#A7D7C5]/30 animate-in slide-in-from-right-8 duration-700">
                        <p className="text-2xl text-[#2D3E2F] leading-relaxed italic font-serif">
                            "Epitech m'a appris à structurer ma pensée et à ne jamais reculer devant une stack inconnue."
                        </p>
                    </div>
                </div>
            )
        },
        {
            id: 2,
            title: "Le virage pro",
            icon: <Terminal className="w-12 h-12 text-[#4B6F44]" />,
            content: (
                <div className="space-y-8 max-w-4xl w-full">
                    <div className="bg-[#4B6F44] text-white p-8 rounded-[2rem] shadow-xl animate-in zoom-in-95 duration-700">
                        <h3 className="text-2xl font-bold mb-3">L'idée reçue : "Je suis dev, je dois coder."</h3>
                        <p className="text-lg opacity-90 leading-relaxed">
                            À la sortie d'Epitech, on croit souvent que le développement pur est la seule suite logique. J'ai foncé dans cette voie par automatisme avant de réaliser l'étendue des possibles.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="p-8 bg-white border border-[#E8E4D9] rounded-[2rem] shadow-sm">
                            <h4 className="text-[#2D3E2F] font-bold mb-3 flex items-center gap-2"><Settings size={18} /> Le constat</h4>
                            <p className="text-[#6B7C6E] text-sm leading-relaxed">Maîtriser la technique est un outil incroyable, mais mon épanouissement résidait dans l'impact business et la stratégie.</p>
                        </div>
                        <div className="p-8 bg-[#A7D7C5]/20 border border-[#A7D7C5]/30 rounded-[2rem]">
                            <h4 className="text-[#2D3E2F] font-bold mb-3 flex items-center gap-2"><Zap size={18} /> La réalité</h4>
                            <p className="text-[#2D3E2F] text-sm leading-relaxed">Consultant, Business Analyst, Product Owner... Vos bases techniques font de vous des profils hybrides extrêmement recherchés.</p>
                        </div>
                    </div>
                </div>
            )
        },
        {
            id: 3,
            title: "TNP + CEVA",
            icon: <Briefcase className="w-12 h-12 text-[#4B6F44]" />,
            content: (
                <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
                    <div className="bg-white p-10 rounded-[2rem] border border-[#E8E4D9] shadow-sm flex flex-col justify-center">
                        <h3 className="text-3xl font-bold mb-2 text-[#2D3E2F]">TNP Consultants</h3>
                        <p className="text-[#4B6F44] font-bold text-xs mb-8 tracking-widest uppercase">Hybrid IT Advisory</p>
                        <ul className="space-y-4">
                            {['Audit de SI complexes', 'Cadrage de projets IA', 'Accompagnement de CDO'].map((item) => (
                                <li key={item} className="flex items-center gap-3 text-[#6B7C6E] font-medium">
                                    <div className="w-2 h-2 rounded-full bg-[#A7D7C5]" /> {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="bg-[#2D3E2F] p-10 rounded-[2rem] text-white flex flex-col justify-center relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-8 opacity-10">
                            <Globe size={120} />
                        </div>
                        <h4 className="text-2xl font-bold mb-4 relative z-10">Mission CEVA</h4>
                        <p className="text-slate-300 leading-relaxed relative z-10">
                            Pilotage technique sur des enjeux de supply chain internationale. Je fais le pont entre les besoins métiers complexes et les architectures techniques.
                        </p>
                    </div>
                </div>
            )
        },
        {
            id: 4,
            title: "Indépendance",
            icon: <Rocket className="w-12 h-12 text-[#4B6F44]" />,
            content: (
                <div className="flex flex-col md:flex-row gap-10 items-center max-w-5xl w-full">
                    <div className="flex-1 space-y-6">
                        <h3 className="text-4xl font-bold text-[#2D3E2F]">L'entreprenariat comme boussole</h3>
                        <p className="text-[#6B7C6E] text-lg leading-relaxed">
                            Mon statut d'indépendant me permet d'équilibrer ma carrière entre conseil stratégique et immersion technique.
                        </p>
                        <div className="grid grid-cols-1 gap-4">
                            <div className="p-6 bg-white border border-[#E8E4D9] rounded-2xl flex items-center gap-5 shadow-sm">
                                <div className="p-3 bg-[#FDFBF7] rounded-xl text-[#4B6F44]"><Brain /></div>
                                <span className="text-[#2D3E2F] font-bold">Enseigner l'IA & la Data à Epitech</span>
                            </div>
                            <div className="p-6 bg-white border border-[#E8E4D9] rounded-2xl flex items-center gap-5 shadow-sm">
                                <div className="p-3 bg-[#FDFBF7] rounded-xl text-[#4B6F44]"><Cpu /></div>
                                <span className="text-[#2D3E2F] font-bold">Veille active & R&D continue</span>
                            </div>
                        </div>
                    </div>
                    <div className="w-full md:w-80 p-12 bg-[#A7D7C5] rounded-[3rem] text-center shadow-lg transform rotate-2">
                        <p className="text-white font-serif text-2xl italic">
                            "Transmettre mon savoir est la meilleure façon de le consolider."
                        </p>
                    </div>
                </div>
            )
        },
        {
            id: 5,
            title: "IA & Data",
            icon: <Brain className="w-12 h-12 text-[#4B6F44]" />,
            content: (
                <div className="max-w-4xl text-center space-y-10">
                    <div className="relative inline-flex items-center justify-center">
                        <div className="absolute inset-0 bg-[#A7D7C5]/40 rounded-full blur-3xl animate-pulse"></div>
                        <Brain className="w-24 h-24 text-[#4B6F44] relative z-10" />
                    </div>
                    <div className="space-y-4">
                        <h3 className="text-4xl font-bold text-[#2D3E2F]">La donnée comme pilier</h3>
                        <p className="text-xl text-[#6B7C6E] max-w-2xl mx-auto">
                            L'Intelligence Artificielle n'est pas une tendance, c'est une transformation structurelle de la valeur en entreprise.
                        </p>
                    </div>
                    <div className="flex flex-wrap justify-center gap-4">
                        {['Gouvernance', 'IA Générative', 'Architecture', 'Éthique', 'Mise à l\'échelle'].map((word) => (
                            <span key={word} className="px-6 py-3 bg-white border border-[#E8E4D9] rounded-2xl text-[#2D3E2F] font-bold shadow-sm">
                                {word}
                            </span>
                        ))}
                    </div>
                </div>
            )
        },
        {
            id: 6,
            title: "Héritage Epitech",
            icon: <Users className="w-12 h-12 text-[#4B6F44]" />,
            content: (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl w-full">
                    <div className="space-y-6">
                        <div className="p-8 bg-white border border-[#E8E4D9] rounded-[2rem] shadow-sm">
                            <h4 className="text-xl font-bold text-[#2D3E2F] mb-3 flex items-center gap-3">
                                <Users size={24} className="text-[#A7D7C5]" /> Collaboration
                            </h4>
                            <p className="text-[#6B7C6E] leading-relaxed">
                                Découvrez votre profil psycho en groupe : leader, expert, médiateur ? C'est ici que se forge votre identité pro.
                            </p>
                        </div>
                        <div className="p-8 bg-white border border-[#E8E4D9] rounded-[2rem] shadow-sm">
                            <h4 className="text-xl font-bold text-[#2D3E2F] mb-3 flex items-center gap-3">
                                <Lightbulb size={24} className="text-[#A7D7C5]" /> Auto-formation
                            </h4>
                            <p className="text-[#6B7C6E] leading-relaxed">
                                Apprendre à apprendre seul est votre seul actif réellement durable. Ne cessez jamais d'être curieux.
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-col justify-center p-12 bg-[#4B6F44] rounded-[3rem] text-white shadow-xl">
                        <div className="mb-6 bg-white/10 w-fit p-3 rounded-2xl"><Zap size={28} /></div>
                        <h4 className="text-2xl font-bold mb-4 italic">Le dernier conseil</h4>
                        <p className="text-lg opacity-90 leading-relaxed">
                            Vos mentors vous guident, mais vous êtes l'unique maître de votre progression. Le marché ne valorise que ceux qui continuent de grandir par eux-mêmes.
                        </p>
                    </div>
                </div>
            )
        },
        {
            id: 7,
            title: "Questions ?",
            icon: <MessageSquare className="w-12 h-12 text-[#4B6F44]" />,
            content: (
                <div className="text-center space-y-12 animate-in fade-in scale-95 duration-700">
                    <div className="space-y-4">
                        <h3 className="text-8xl font-black text-[#2D3E2F] tracking-tight">Questions ?</h3>
                        <p className="text-2xl text-[#4B6F44] font-medium">C'est le moment d'échanger.</p>
                    </div>
                    <div className="pt-10 border-t border-[#E8E4D9] max-w-md mx-auto">
                        <div className="flex flex-col gap-3 text-[#6B7C6E] font-mono text-sm">
                            <p className="flex items-center justify-center gap-2 italic">LinkedIn : Samuel Galiere</p>
                            <p className="font-bold">#EpitechAlumni #ITConsulting</p>
                        </div>
                    </div>
                </div>
            )
        }
    ];

    return (
        <div className="min-h-screen bg-[#FDFBF7] text-[#2D3E2F] font-sans overflow-hidden flex flex-col relative selection:bg-[#A7D7C5] selection:text-[#2D3E2F]">

            {/* Texture Background */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: `url("https://www.transparenttextures.com/patterns/felt.png")` }} />

            {/* Header */}
            <header className="p-8 flex justify-between items-center z-40">
                <div className="flex items-center gap-4">
                    <div className="flex flex-col">
                        <h1 className="font-bold text-sm tracking-widest uppercase text-[#4B6F44]">Samuel Galiere</h1>
                        <p className="text-[10px] text-[#A7D7C5] uppercase tracking-[0.3em] font-bold">Conférence Alumni Epitech</p>
                    </div>
                </div>
                <div className="hidden md:flex items-center gap-3">
                    {slides.map((_, idx) => (
                        <button
                            key={idx}
                            onClick={() => setCurrentSlide(idx)}
                            className={`h-1.5 transition-all duration-500 rounded-full ${idx === currentSlide ? 'bg-[#4B6F44] w-10' : 'bg-[#E8E4D9] w-3 hover:bg-[#A7D7C5]'}`}
                        />
                    ))}
                </div>
            </header>

            {/* Main Content */}
            <main className="flex-1 relative flex flex-col items-center justify-center p-6 md:p-12 z-10">
                <div
                    key={currentSlide}
                    className="w-full max-w-7xl flex flex-col items-center justify-center animate-in fade-in slide-in-from-bottom-4 duration-700"
                >
                    <div className="mb-12 flex flex-col items-center">
                        <div className="p-4 bg-white border border-[#E8E4D9] rounded-[1.5rem] shadow-sm mb-4 text-[#4B6F44]">
                            {slides[currentSlide].icon}
                        </div>
                        <h2 className="text-[10px] font-mono text-[#A7D7C5] uppercase tracking-[0.6em] font-bold">
                            {slides[currentSlide].title}
                        </h2>
                    </div>

                    <div className="w-full flex items-center justify-center min-h-[480px]">
                        {slides[currentSlide].content}
                    </div>
                </div>
            </main>

            {/* Navigation Footer */}
            <footer className="p-10 flex items-center justify-between z-40">
                <div className="text-[10px] font-mono text-[#A7D7C5] uppercase tracking-[0.4em] font-bold">
                    Page {currentSlide + 1} / {slides.length}
                </div>

                <div className="flex gap-4">
                    <button
                        onClick={prevSlide}
                        disabled={currentSlide === 0}
                        className={`px-6 py-4 rounded-2xl transition-all flex items-center gap-2 border font-bold text-sm ${currentSlide === 0 ? 'opacity-20 cursor-not-allowed border-transparent' : 'bg-white hover:bg-[#FDFBF7] text-[#4B6F44] border-[#E8E4D9] shadow-sm active:scale-95'}`}
                    >
                        <ChevronLeft size={18} /> Précédent
                    </button>
                    <button
                        onClick={nextSlide}
                        disabled={currentSlide === slides.length - 1}
                        className={`px-8 py-4 rounded-2xl transition-all font-bold flex items-center gap-2 text-sm active:scale-95 group ${currentSlide === slides.length - 1 ? 'bg-[#E8E4D9] text-[#A7D7C5]' : 'bg-[#4B6F44] hover:bg-[#3A5A35] text-white shadow-md'}`}
                    >
                        {currentSlide === slides.length - 1 ? 'Terminer' : 'Suivant'}
                        <ChevronRight size={18} className={`${currentSlide !== slides.length - 1 ? 'group-hover:translate-x-1 transition-transform' : ''}`} />
                    </button>
                </div>
            </footer>

            {/* Progress Line */}
            <div className="h-1.5 w-full bg-[#E8E4D9]/30 z-50">
                <div
                    className="h-full bg-[#4B6F44] transition-all duration-700 ease-out"
                    style={{ width: `${((currentSlide + 1) / slides.length) * 100}%` }}
                />
            </div>

            <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;1,700&family=Inter:wght@400;600;800&family=JetBrains+Mono:wght@700&display=swap');
        
        body { 
          background-color: #FDFBF7; 
          margin: 0; 
          font-family: 'Inter', sans-serif;
        }

        .font-serif { font-family: 'Playfair Display', serif; }
        .font-mono { font-family: 'JetBrains Mono', monospace; }

        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        .animate-bounce-slow { animation: bounce-slow 3s ease-in-out infinite; }

        @keyframes fade-in { from { opacity: 0; } to { opacity: 1; } }
        @keyframes slide-in-from-bottom-8 { from { transform: translateY(2rem); opacity: 0; } to { transform: translateY(0); opacity: 1; } }
        @keyframes slide-in-from-bottom-4 { from { transform: translateY(1rem); opacity: 0; } to { transform: translateY(0); opacity: 1; } }
        @keyframes slide-in-from-left-8 { from { transform: translateX(-2rem); opacity: 0; } to { transform: translateX(0); opacity: 1; } }
        @keyframes slide-in-from-right-8 { from { transform: translateX(2rem); opacity: 0; } to { transform: translateX(0); opacity: 1; } }
        @keyframes zoom-in-95 { from { transform: scale(0.95); opacity: 0; } to { transform: scale(1); opacity: 1; } }

        .animate-in { animation: fade-in 0.5s ease-out forwards; }
        .fade-in { animation-name: fade-in; }
        .slide-in-from-bottom-8 { animation-name: slide-in-from-bottom-8; }
        .slide-in-from-bottom-4 { animation-name: slide-in-from-bottom-4; }
        .slide-in-from-left-8 { animation-name: slide-in-from-left-8; }
        .slide-in-from-right-8 { animation-name: slide-in-from-right-8; }
        .zoom-in-95 { animation-name: zoom-in-95; }
      `}</style>
        </div>
    );
};

export default App;