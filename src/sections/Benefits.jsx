import Heading from "../components/Heading";
import Section from "../components/Section";
import Arrow from "../assets/svg/Arrow";
import ClipPath from "../assets/svg/ClipPath";
import { benefitIcon1, benefitIcon2, benefitIcon3, benefitIcon4, benefitImage2 } from "../assets";

const benefits = [
    {
        title: "Interação Autêntica",
        text: "Nossos chatbots são movidos por uma IA que aprende e se adapta à voz do seu negócio. Respostas mais humanas, conversas mais significativas.",
        backgroundUrl: "./src/assets/benefits/card-1.svg",
        iconUrl: benefitIcon1,
        imageUrl: benefitImage2,
    },
    {
        title: "Agilidade Multicanal",
        text: "Esteja onde seu cliente está. WhatsApp, e-mail, redes sociais ou site tudo integrado, sem fricções.",
        backgroundUrl: "./src/assets/benefits/card-2.svg",
        iconUrl: benefitIcon2,
        imageUrl: benefitImage2,
        light: true,
    },
    {
        title: "Insights Poderosos",
        text: "Transforme dados em decisões com análises detalhadas de cada interação, ajudando você a aprimorar continuamente sua estratégia.",
        backgroundUrl: "./src/assets/benefits/card-3.svg",
        iconUrl: benefitIcon3,
        imageUrl: benefitImage2,
    },
    {
        title: "Escalabilidade Elegante",
        text: "Cresça com confiança. Nossa plataforma suporta desde startups até grandes corporações, sempre com desempenho impecável.",
        backgroundUrl: "./src/assets/benefits/card-4.svg",
        iconUrl: benefitIcon4,
        imageUrl: benefitImage2,
        light: true,
    },
    {
        title: "Conversões Estratégicas",
        text: "A IA da Perseu.AI guia seus clientes pelo funil de vendas, otimizando cada etapa da jornada para aumentar sua taxa de conversão.",
        backgroundUrl: "./src/assets/benefits/card-5.svg",
        iconUrl: benefitIcon1,
        imageUrl: benefitImage2,
    },
    {
        title: "Atendimento que Vende:",
        text: "Da captação ao pós-venda, nossos chatbots qualificam leads, respondem dúvidas e impulsionam decisões de compra em tempo real.",
        backgroundUrl: "./src/assets/benefits/card-6.svg",
        iconUrl: benefitIcon2,
        imageUrl: benefitImage2,
    },
];

const Benefits = () => {
    return (
        <Section id="features">
            <div className="container relative z-2">
                <Heading className="md:max-w-md lg:max-w-2xl" title="O Futuro do Atendimento Começa Aqui!" />

                <div className="flex flex-wrap gap-10 mb-10">
                    {benefits.map((item, i) => (
                        <div
                            className="block relative p-0.5 bg-no-repeat bg-[length:100%_100%] md:max-w-[24rem] group"
                            style={{
                                backgroundImage: `url(${item.backgroundUrl})`,
                            }}
                            key={i}
                        >
                            <div className="relative z-2 flex flex-col min-h-[22rem] p-[2.4rem]">
                                <h5 className="h5 mb-5">{item.title}</h5>
                                <p className="body-2 mb-6 text-n-3">{item.text}</p>
                                <div className="flex items-center mt-auto">
                                    <img src={item.iconUrl} width={48} height={48} alt={item.title} />
                                    <p className="ml-auto font-code text-xs font-bold text-white uppercase tracking-wider">Explore more</p>
                                    <Arrow />
                                </div>
                            </div>

                            {item.light && <div className="absolute top-0 left-1/4 w-full aspect-square bg-radial-gradient from-[#28206C] to-[#28206C]/0 to-70% pointer-events-none" />}

                            <div className="absolute inset-0.5 bg-n-8" style={{ clipPath: "url(#benefits)" }}>
                                <div className="absolute inset-0 opacity-0 transition-opacity group-hover:opacity-10">{item.imageUrl && <img src={item.imageUrl} width={380} height={362} alt={item.title} className="w-full h-full object-cover" />}</div>
                            </div>

                            <ClipPath />
                        </div>
                    ))}
                </div>
            </div>
        </Section>
    );
};

export default Benefits;
