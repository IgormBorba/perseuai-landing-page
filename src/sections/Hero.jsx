import { curve, file02, heroBackground, homeSmile, loading, plusSquare, robot, searchMd, yourlogo, nexbotRobot, sunset, voxuy, mailchamp, leadlovers } from "../assets";
import { slide0, slide1, slide2, slide3, slide4 } from "../assets";
import Button from "../components/Button";
import Section from "../components/Section";
import { MouseParallax, ScrollParallax } from "react-just-parallax";
import { useEffect, useRef, useState } from "react";
import Notification from "../components/Notification";
import PlusSvg from "../assets/svg/PlusSvg";

const BackgroundCircles = ({ parallaxRef }) => {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    return (
        <div className="absolute -top-[42.375rem] left-1/2 w-[78rem] aspect-square border border-n-2/5 rounded-full -translate-x-1/2 md:-top-[38.5rem] xl:-top-[32rem]">
            <div className="absolute top-1/2 left-1/2 w-[65.875rem] aspect-square border border-n-2/10 rounded-full -translate-x-1/2 -translate-y-1/2" />
            <div className="absolute top-1/2 left-1/2 w-[51.375rem] aspect-square border border-n-2/10 rounded-full -translate-x-1/2 -translate-y-1/2" />
            <div className="absolute top-1/2 left-1/2 w-[36.125rem] aspect-square border border-n-2/10 rounded-full -translate-x-1/2 -translate-y-1/2" />
            <div className="absolute top-1/2 left-1/2 w-[23.125rem] aspect-square border border-n-2/10 rounded-full -translate-x-1/2 -translate-y-1/2" />

            <MouseParallax strength={0.07} parallaxContainerRef={parallaxRef}>
                <div className="absolute bottom-1/2 left-1/2 w-0.25 h-1/2 origin-bottom rotate-[46deg]">
                    <div className={`w-2 h-2 -ml-1 -mt-36 bg-gradient-to-b from-[#DD734F] to-[#1A1A32] rounded-full transition-transform duration-500 ease-out ${mounted ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`} />
                </div>

                <div className="absolute bottom-1/2 left-1/2 w-0.25 h-1/2 origin-bottom -rotate-[56deg]">
                    <div className={`w-4 h-4 -ml-1 -mt-32 bg-gradient-to-b from-[#DD734F] to-[#1A1A32] rounded-full transition-transform duration-500 ease-out ${mounted ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`} />
                </div>

                <div className="absolute bottom-1/2 left-1/2 w-0.25 h-1/2 origin-bottom rotate-[54deg]">
                    <div className={`hidden w-4 h-4 -ml-1 mt-[12.9rem] bg-gradient-to-b from-[#B9AEDF] to-[#1A1A32] rounded-full xl:block transit transition-transform duration-500 ease-out ${mounted ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`} />
                </div>

                <div className="absolute bottom-1/2 left-1/2 w-0.25 h-1/2 origin-bottom -rotate-[65deg]">
                    <div className={`w-3 h-3 -ml-1.5 mt-52 bg-gradient-to-b from-[#B9AEDF] to-[#1A1A32] rounded-full transition-transform duration-500 ease-out ${mounted ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`} />
                </div>

                <div className="absolute bottom-1/2 left-1/2 w-0.25 h-1/2 origin-bottom -rotate-[85deg]">
                    <div className={`w-6 h-6 -ml-3 -mt-3 bg-gradient-to-b from-[#88E5BE] to-[#1A1A32] rounded-full transition-transform duration-500 ease-out ${mounted ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`} />
                </div>

                <div className="absolute bottom-1/2 left-1/2 w-0.25 h-1/2 origin-bottom rotate-[70deg]">
                    <div className={`w-6 h-6 -ml-3 -mt-3 bg-gradient-to-b from-[#88E5BE] to-[#1A1A32] rounded-full transition-transform duration-500 ease-out ${mounted ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`} />
                </div>
            </MouseParallax>
        </div>
    );
};

// Adicionando o estilo da animação
const loadingIconStyle = {
    animation: 'spin 1s linear infinite',
    '@keyframes spin': {
        '0%': { transform: 'rotate(0deg)' },
        '100%': { transform: 'rotate(360deg)' }
    }
};

const slides = [
    { image: slide0, alt: "Slide 0" },
    { image: slide1, alt: "Slide 1" },
    { image: slide2, alt: "Slide 2" },
    { image: slide3, alt: "Slide 3" },
    { image: slide4, alt: "Slide 4" },
];

const Hero = () => {
    const parallaxRef = useRef(null);
    const [currentSlide, setCurrentSlide] = useState(0);
    const [progress, setProgress] = useState(0);
    const slideInterval = useRef(null);
    const progressInterval = useRef(null);

    useEffect(() => {
        // Adicionando a keyframe animation ao documento
        const style = document.createElement('style');
        style.textContent = `
            @keyframes spin {
                0% { transform: rotate(0deg); }
                100% { transform: rotate(360deg); }
            }
            .loading-spin {
                animation: spin 1s linear infinite;
            }
        `;
        document.head.appendChild(style);
        return () => document.head.removeChild(style);
    }, []);

    useEffect(() => {
        // Resetar e iniciar o progresso quando o slide muda
        setProgress(0);
        if (progressInterval.current) {
            clearInterval(progressInterval.current);
        }

        progressInterval.current = setInterval(() => {
            setProgress(prev => {
                if (prev >= 100) {
                    clearInterval(progressInterval.current);
                    return 0;
                }
                return prev + 2;
            });
        }, 100);

        // Iniciar o carrossel automático
        slideInterval.current = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 5000);

        return () => {
            if (slideInterval.current) {
                clearInterval(slideInterval.current);
            }
            if (progressInterval.current) {
                clearInterval(progressInterval.current);
            }
        };
    }, [currentSlide]);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
    };

    return (
        <Section className="pt-[12rem] -mt-[5.25rem]" crosses crossesOffset="lg:translate-y-[5.25rem]" customPaddings id="hero">
            <div className="container relative" ref={parallaxRef}>
                <div className="relative z-1 max-w-[62rem] mx-auto text-center mb-[3.875rem] md:mb-20 lg:mb-[6.25rem]">
                    <h1 className="h1 mb-6 text-[2.5rem] leading-tight md:text-[4rem] lg:text-[5.5rem]">
                        Venda Mais, Mais Rápido{` `}
                        <span className="inline-block relative">
                            a Baixo Custo <img src={curve} className="absolute top-full left-0 w-full xl:-mt-2 hidden md:block" width={624} height={28} alt="" />
                        </span>
                    </h1>
                    <p className="body-1 max-w-[20rem] mx-auto mb-6 text-n-2 text-sm md:text-base lg:text-lg md:max-w-3xl lg:mb-8">A Revolução da IA nas Vendas</p>
                    <Button href="https://wa.me/5533984669979?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20a%20Perseu.AI" white className="w-full max-w-[15rem] md:w-auto">
                        Comece Agora
                    </Button>
                </div>
                <div className="relative max-w-[23rem] mx-auto md:max-w-5xl xl:mb-24">
                    <div className="relative z-1 p-0.5 rounded-2xl bg-conic-gradient">
                        <div className="relative bg-n-8 rounded-[1rem]">
                            <div className="h-[1.4rem] bg-[#43435C] rounded-t-[0.9rem]" />

                            <div className="aspect-[33/40] rounded-b-[0.9rem] overflow-hidden md:aspect-[688/490] lg:aspect-[1024/490]">
                                <video 
                                    src={nexbotRobot} 
                                    className="w-full scale-[1.7] translate-y-[20%] md:scale-[1] md:translate-y-[10%] lg:translate-y-[0%]"
                                    autoPlay 
                                    loop 
                                    muted 
                                    playsInline
                                />

                                <div className="flex items-center justify-center h-[3.5rem] px-4 md:px-6 bg-n-8/80 rounded-[1.7rem] absolute left-1/2 -translate-x-1/2 right-auto bottom-3 md:bottom-8 text-sm md:text-base w-[90%] md:w-[31rem]">
                                    <img className="w-4 h-4 md:w-5 md:h-5 mr-3 md:mr-4 loading-spin" src={loading} alt="" />
                                    <span>Perseu atualmente integrado com 37 empresas e realizado 22.546 vendas até agora...</span>
                                </div>

                                <ScrollParallax isAbsolutelyPositioned>
                                    <ul className="hidden absolute -left-[5.5rem] bottom-[7.5rem] px-1 py-1 bg-[#474060]/40 backdrop-blur border border-white/10 rounded-2xl xl:flex">
                                        <li className="p-5">
                                            <img src={homeSmile} width={24} height={25} alt="" />
                                        </li>
                                        <li className="p-5">
                                            <img src={file02} width={24} height={25} alt="" />
                                        </li>                                        
                                        <li className="p-5">
                                            <img src={searchMd} width={24} height={25} alt="" />
                                        </li>                                        
                                        <li className="p-5">
                                            <img src={plusSquare} width={24} height={25} alt="" />
                                        </li>
                                    </ul>
                                </ScrollParallax>

                                <ScrollParallax isAbsolutelyPositioned>
                                    <Notification className="hidden absolute -right-[5.5rem] bottom-[11rem] w-[18rem] xl:flex" title="Perseu.AI está aprimorando seu atendimento..." />
                                </ScrollParallax>
                            </div>
                        </div>

                        <div className="relative z-1 h-4 md:h-6 mx-2 md:mx-2.5 bg-[#1B1B2E] shadow-xl rounded-b-[1.25rem] lg:mx-8" />
                        <div className="relative z-1 h-4 md:h-6 mx-4 md:mx-6 bg-[#1B1B2E]/70 shadow-xl rounded-b-[1.25rem] lg:mx-20" />
                    </div>
                    <div className="absolute -top-[54%] left-1/2 w-[234%] -translate-x-1/2 md:-top-[46%] md:w-[138%] lg:-top-[104%]">
                        <img src={heroBackground} className="w-full" width={1440} height={1800} alt="hero" />
                    </div>

                    <BackgroundCircles />
                </div>

                {/* Título da seção de carrossel */}
                <div className="relative z-10 mt-40 lg:mt-48">
                    <h2 className="h2 mb-6 text-center text-[2rem] leading-tight md:text-[2.5rem] lg:text-[3rem]">
                        Como funciona a <span className="text-gradient-1">PerseuAI</span> no seu negócio
                    </h2>
                    <p className="body-2 mb-16 text-n-3 text-center max-w-[55rem] mx-auto">
                        Descubra como nossa inteligência artificial pode impulsionar suas vendas, automatizando processos e aumentando suas conversões. Acompanhe cada etapa e veja como levar seu negócio a um novo nível com tecnologia inteligente única e mais sofisticada do mercado!
                    </p>
                </div>

                {/* Carrossel de Slides */}
                <div className="relative mt-20 mb-32 overflow-hidden rounded-2xl border border-white/10 bg-n-8/80">
                    <div className="relative w-full">
                        {/* Indicador de Progresso Circular */}
                        <div className="absolute top-4 right-4 z-10 w-8 h-8">
                            <svg className="transform -rotate-90 w-8 h-8">
                                <circle
                                    cx="16"
                                    cy="16"
                                    r="12"
                                    stroke="currentColor"
                                    strokeWidth="3"
                                    fill="none"
                                    className="text-n-6"
                                />
                                <circle
                                    cx="16"
                                    cy="16"
                                    r="12"
                                    stroke="currentColor"
                                    strokeWidth="3"
                                    fill="none"
                                    strokeDasharray={75.4}
                                    strokeDashoffset={75.4 - (75.4 * progress) / 100}
                                    className="text-[#B9AEDF]"
                                />
                            </svg>
                        </div>

                        <div 
                            className="flex transition-transform duration-500 ease-in-out" 
                            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                        >
                            {slides.map((slide, index) => (
                                <div key={index} className="w-full flex-shrink-0">
                                    <div className="relative bg-n-8 rounded-2xl overflow-hidden border border-white/10">
                                        <img 
                                            src={slide.image} 
                                            alt={slide.alt}
                                            className="w-full h-auto scale-105 transform origin-center"
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Botões de Navegação */}
                        <div className="absolute bottom-0 left-0 right-0 flex justify-between items-center p-4 bg-gradient-to-t from-black/50 to-transparent">
                            {/* Botão Previous */}
                            <button 
                                onClick={() => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)}
                                className="p-2 hover:bg-white/10 transition-colors"
                            >
                                <svg width="24" height="24" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" className="rotate-180">
                                    <path d="M1 7H13M13 7L7 1M13 7L7 13" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                            </button>

                            {/* Botão Next */}
                            <button 
                                onClick={nextSlide}
                                className="p-2 hover:bg-white/10 transition-colors"
                            >
                                <svg width="24" height="24" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1 7H13M13 7L7 1M13 7L7 13" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                            </button>
                        </div>

                        {/* Indicadores de Slide */}
                        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 p-2">
                            {slides.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => setCurrentSlide(index)}
                                    className={`w-2 h-2 rounded-full transition-colors ${
                                        currentSlide === index ? 'bg-white' : 'bg-white/50'
                                    }`}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <div className="hidden absolute top-[55.25rem] left-10 right-10 h-0.25 bg-n-6 pointer-events-none xl:block" />
            <PlusSvg className="hidden absolute top-[54.9375rem] left-[2.1875rem] z-2 pointer-events-none xl:block" />
            <PlusSvg className="hidden absolute top-[54.9375rem] right-[2.1875rem] z-2 pointer-events-none xl:block" />
        </Section>
    );
};

export default Hero;
