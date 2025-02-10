import { check, curve1, curve2, discord, whatsapp, framer, notion, photoshop, protopie, raindrop, slack, justlogo } from "../assets";
import Button from "../components/Button";
import Section from "../components/Section";

const collabContent = [
    {
        title: "Integração Perfeita",
        text: "Os chatbots da Perseu.ai utilizam inteligência artificial com processamento de linguagem natural para interpretar mensagens, responder perguntas, e realizar tarefas automatizadas.",
    },
    { 
        title: "Multicanal",
        text: "Integração com WhatsApp, e-mail e sites para oferecer suporte rápido e personalizado."
    },
    { 
        title: "Gestão Inteligente",
        text: "Otimize suas operações empresariais com gestão de pedidos e personalização de interações."
    },
];

const collabApps = [
    {
        title: "WhatsApp",
        icon: whatsapp,
        width: 26,
        height: 36,
    },
    {
        title: "Notion",
        icon: notion,
        width: 34,
        height: 36,
    },
    {
        title: "Discord",
        icon: discord,
        width: 36,
        height: 28,
    },
    {
        title: "Slack",
        icon: slack,
        width: 34,
        height: 35,
    },
    {
        title: "Photoshop",
        icon: photoshop,
        width: 34,
        height: 34,
    },
    {
        title: "Protopie",
        icon: protopie,
        width: 34,
        height: 34,
    },
    {
        title: "Framer",
        icon: framer,
        width: 26,
        height: 34,
    },
    {
        title: "Raindrop",
        icon: raindrop,
        width: 38,
        height: 32,
    },
];

const Collaboration = () => {
    return (
        <Section crosses>
            <div className="container lg:flex">
                <div className="max-w-[25rem] mx-auto lg:mx-0">
                    <h2 className="h2 mb-4 text-[2rem] leading-tight md:text-[2.5rem] lg:text-[3rem] md:mb-8">Revolucione seu Atendimento com IA</h2>

                    <ul className="max-w-[22rem] mb-10 md:mb-14">
                        {collabContent.map((item, i) => (
                            <li className="mb-3 py-3" key={i}>
                                <div className="flex items-center">
                                    <img src={check} width={24} height={24} alt="" className="w-5 h-5 md:w-6 md:h-6" />
                                    <h6 className="body-2 ml-5 text-base md:text-lg">{item.title}</h6>
                                </div>
                                {item.text && <p className="body-2 mt-3 text-n-4 text-sm md:text-base">{item.text}</p>}
                            </li>
                        ))}
                    </ul>

                    <Button href="https://wa.me/5533984669979?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20a%20Perseu.AI" className="w-full max-w-[15rem] md:w-auto">
                        Comece Agora
                    </Button>

                </div>

                <div className="lg:ml-auto xl:w-[38rem] mt-4">
                    <p className="body-2 mb-8 text-n-4 text-sm md:text-base md:mb-16 lg:mb-32 lg:w-[22rem] lg:mx-auto">Por isso, desenvolvemos soluções de automação que combinam tecnologia de ponta com a personalização que seus clientes merecem.</p>

                    <div className="relative left-1/2 flex w-[18rem] md:w-[22rem] aspect-square border border-n-6 rounded-full -translate-x-1/2 scale:75 md:scale-100">
                        <div className="flex w-[15rem] md:w-60 aspect-square m-auto border border-n-6 rounded-full">
                            <div className="w-[5rem] md:w-[6rem] aspect-square m-auto p-[0.2rem] bg-conic-gradient rounded-full">
                                <div className="flex items-center justify-center w-full h-full bg-n-8 rounded-full">
                                    <img 
                                        src={justlogo} 
                                        width={48} 
                                        height={48} 
                                        alt="PerseuAI" 
                                        className="w-8 h-8 md:w-10 md:h-10 object-contain"
                                    />
                                </div>
                            </div>
                        </div>

                        <ul>
                            {collabApps.map((app, index) => (
                                <li key={index} className={`absolute top-0 left-1/2 h-1/2 -ml-[1.3rem] md:-ml-[1.6rem] origin-bottom rotate-${index * 45}`}>
                                    <div className={`relative -top-[1.3rem] md:-top-[1.6rem] flex w-[2.6rem] h-[2.6rem] md:w-[3.2rem] md:h-[3.2rem] bg-[#15131D] border border-white/15 rounded-xl -rotate-${index * 45}`}>
                                        <img className="m-auto w-[60%] h-[60%] md:w-auto md:h-auto" width={app.width} height={app.height} alt={app.title} src={app.icon} />
                                    </div>
                                </li>
                            ))}
                        </ul>

                        <div className="hidden absolute top-1/2 right-full w-[32.625rem] -mt-1 mr-10 pointer-events-none xl:block">
                            <img src={curve1} width={522} height={182} alt="" />
                        </div>
                        <div className="hidden absolute top-1/2 left-full w-[10.125rem] -mt-1 ml-10 pointer-events-none xl:block">
                            <img src={curve2} width={162} height={76} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </Section>
    );
};

export default Collaboration;
