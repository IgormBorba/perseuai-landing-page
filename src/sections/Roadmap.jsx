import Button from "../components/Button";
import Heading from "../components/Heading";
import Section from "../components/Section";
import Tagline from "../components/Tagline";
import { check2, grid, loading1, gradient, roadmap1, roadmap2, roadmap3, roadmap4 } from "../assets";

const roadmap = [
    {
        id: "0",
        title: "Processamento de Linguagem Natural",
        text: "Implementação de IA avançada para compreensão e resposta natural em conversas, melhorando a experiência do usuário.",
        date: "Concluído",
        status: "done",
        imageUrl: roadmap1,
        colorful: true,
    },
    {
        id: "1",
        title: "Integração Multicanal",
        text: "Integração completa com WhatsApp, e-mail e redes sociais para um atendimento unificado e sem fricções.",
        date: "Concluído",
        status: "done",
        imageUrl: roadmap2,
    },
    {
        id: "2",
        title: "Dashboard Analítico",
        text: "Painel de controle completo com métricas e insights para otimização contínua do atendimento.",
        date: "Em Desenvolvimento",
        status: "progress",
        imageUrl: roadmap3,
    },
    {
        id: "3",
        title: "Personalização Avançada",
        text: "Ferramentas de customização profunda do chatbot para adequação perfeita à identidade da sua empresa.",
        date: "Próximo",
        status: "progress",
        imageUrl: roadmap4,
    }
];

const Roadmap = () => (
    <Section className="overflow-hidden" id="roadmap">
        <div className="container md:pb-10">
            <Heading tag="Nossa Evolução" title="O que estamos desenvolvendo" />

            <div className="relative grid gap-6 md:grid-cols-2 md:gap-4 md:pb-[7rem]">
                {roadmap.map((item) => {
                    const status = item.status === "done" ? "Concluído" : "Em Desenvolvimento";

                    return (
                        <div className={`md:flex even:md:translate-y-[7rem] p-0.25 rounded-[2.5rem] ${item.colorful ? "bg-conic-gradient" : "bg-n-6"}`} key={item.id}>
                            <div className="relative p-8 bg-n-8 rounded-[2.4375rem] overflow-hidden xl:p-15">
                                <div className="absolute top-0 left-0 max-w-full">
                                    <img className="w-full" src={grid} width={550} height={550} alt="" />
                                </div>
                                <div className="relative z-1">
                                    <div className="flex items-center justify-between max-w-[27rem] mb-8 md:mb-20">
                                        <Tagline>{item.date}</Tagline>

                                        <div className="flex items-center px-4 py-1 bg-white rounded text-n-8">
                                            <img className="mr-2.5" src={item.status === "done" ? check2 : loading1} width={16} height={16} alt={status} />
                                            <div className="tagline">{status}</div>
                                        </div>
                                    </div>

                                    <div className="mb-10 -my-10 -mx-15">
                                        <img className="w-full" src={item.imageUrl} width={628} height={426} alt={item.title} />
                                    </div>
                                    <h4 className="h4 mb-4">{item.title}</h4>
                                    <p className="body-2 text-n-4">{item.text}</p>
                                </div>
                            </div>
                        </div>
                    );
                })}

                <div className="absolute top-[18.25rem] -left-[30.375rem] w-[56.625rem] opacity-60 mix-blend-color-dodge pointer-events-none">
                    <div className="absolute top-1/2 left-1/2 w-[58.85rem] h-[58.85rem] -translate-x-3/4 -translate-y-1/2">
                        <img className="w-full" src={gradient} width={942} height={942} alt="" />
                    </div>
                </div>
            </div>

            <div className="flex justify-center mt-12 md:mt-15 xl:mt-20">
                <Button href="#roadmap">Nossa evolução</Button>
            </div>
        </div>
    </Section>
);

export default Roadmap;
