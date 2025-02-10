import Section from "../components/Section";
import { smallSphere, stars, lines, check } from "../assets";
import Heading from "../components/Heading";
import Button from "../components/Button";

const pricing = [
    {
        title: "Starter",
        description: "Automatize suas vendas e multiplique seus resultados com IA",
        price: "526",
        features: [
            "Integração com WhatsApp, Instagram e Messenger",
            "Sistema de vendas automatizado com geração de PIX",
            "Prospecção automática de leads",
            "Atendimento ao cliente 24/7",
            "Integração com email e SMS",
            "Aumento comprovado nas vendas",
        ],
    },
    {
        title: "Profissional",
        description: "Potencialize seu negócio com automação completa e IA avançada",
        price: "1270",
        features: [
            "Call center de vendas 100% automatizado",
            "Sistema de autoaprimoramento em vendas",
            "Integração com telefonia e múltiplos canais",
            "Cobranças automáticas (PIX, Cartão, Boleto)",
            "Gestão completa de leads e clientes",
            "Aumento superior a 1250% nas vendas",
        ],
    },
    {
        title: "Enterprise",
        description: "Solução personalizada para grandes operações com resultados extraordinários",
        price: null,
        features: [
            "Sistema completo de vendas automatizadas",
            "IA treinada especificamente para seu negócio",
            "Integração com todos os canais de comunicação",
            "Dashboard analítico avançado",
            "Gerente de conta dedicado 24/7",
            "ROI garantido com métricas personalizadas",
        ],
    },
];

const Pricing = () => {
    return (
        <Section className="overflow-hidden" id="pricing">
            <div className="container relative z-2">
                <div className="hidden relative justify-center mb-[6.5rem] lg:flex">
                    <img src={smallSphere} className="relative z-1" width={255} height={255} alt="" />
                    <div className="absolute top-1/2 left-1/2 w-[60rem] -translate-x-1/2 -translate-y-1/2 pointer-events-none">
                        <img src={stars} className="w-full" width={950} height={400} alt="" />
                    </div>
                </div>

                <Heading 
                    tag="Multiplique suas vendas com a Perseu.AI" 
                    title="Escolha o plano ideal para revolucionar seu negócio" 
                />

                <div className="relative">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[1rem] lg:gap-[2rem]">
                        {pricing.map((item, i) => (
                            <div 
                                key={i} 
                                className={`
                                    w-full px-6 bg-n-8 border border-n-6 rounded-[2rem] 
                                    ${i === 1 ? 'md:col-span-2 lg:col-span-1 py-14' : 'py-8'} 
                                    lg:even:py-14 lg:odd:py-8 lg:odd:my-4
                                    [&>h4]:first:text-color-2 [&>h4]:even:text-color-1 [&>h4]:last:text-color-3
                                    transform transition-transform duration-300 hover:scale-105
                                `}
                            >
                                <h4 className="h4 mb-4">{item.title}</h4>

                                <p className="body-2 min-h-[4rem] mb-3 text-n-4">{item.description}</p>

                                <div className="flex items-center h-[5.5rem] mb-6">
                                    {item.price ? (
                                        <>
                                            <div className="body-2 text-n-4 whitespace-nowrap">A partir de</div>
                                            <div className="h3 ml-2">R$</div>
                                            <div className="text-[3rem] md:text-[4rem] lg:text-[5.5rem] leading-none font-bold">{item.price}</div>
                                            <div className="body-2 text-n-4 ml-2 whitespace-nowrap">/mês</div>
                                        </>
                                    ) : (
                                        <div className="body-2 text-n-4">Personalizado para sua empresa</div>
                                    )}
                                </div>

                                <Button 
                                    className="w-full mb-6" 
                                    href={item.price 
                                        ? `https://wa.me/5533984669979?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20o%20plano%20${item.title}%20da%20Perseu.AI` 
                                        : "https://wa.me/5533984669979?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20os%20planos%20empresariais%20da%20Perseu.AI"}
                                    white={item.price}
                                >
                                    {item.price ? "Começar agora" : "Fale conosco"}
                                </Button>

                                <ul className="space-y-2">
                                    {item.features.map((feature, index) => (
                                        <li key={index} className="flex items-start py-5 border-t border-n-6">
                                            <img src={check} width={24} height={24} alt="" className="flex-shrink-0 mt-1" />
                                            <p className="body-2 ml-4">{feature}</p>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>

                    <div className="hidden lg:block absolute top-1/2 right-full w-[92.5rem] h-[11.0625rem] -translate-y-1/2 pointer-events-none">
                        <img className="w-full" src={lines} width={1480} height={177} alt="" />
                    </div>
                    <div className="hidden lg:block absolute top-1/2 left-full w-[92.5rem] h-[11.0625rem] -translate-y-1/2 -scale-x-100 pointer-events-none">
                        <img className="w-full" src={lines} width={1480} height={177} alt="" />
                    </div>
                </div>

                <div className="flex justify-center mt-10">
                    <a className="text-xs font-code font-bold tracking-wider uppercase border-b hover:text-color-1 transition-colors" href="#pricing">
                        Ver detalhes completos
                    </a>
                </div>
            </div>
        </Section>
    );
};

export default Pricing;
