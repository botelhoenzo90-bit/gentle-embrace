import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  ArrowRight,
  Award,
  Building2,
  Check,
  ChevronDown,
  ClipboardCheck,
  HardHat,
  MapPin,
  MessageCircle,
  ShieldCheck,
  Star,
  Wrench,
} from "lucide-react";
import whatsappAsset from "@/assets/whatsapp-logo.png.asset.json";
import roofImage from "@/assets/service-roof.jpg";
import waterproofingImage from "@/assets/service-waterproofing.jpg";
import engineeringImage from "@/assets/service-engineering.jpg";
import renovationImage from "@/assets/service-renovation.jpg";
import guttersImage from "@/assets/service-gutters.jpg";
import leisureImage from "@/assets/service-leisure.jpg";

const WHATSAPP = "https://wa.me/556183277032";
const wa = (text: string) => `${WHATSAPP}?text=${encodeURIComponent(text)}`;

const services = [
  { title: "Telhados completos", text: "Revisão, reformas, substituição de telhas, cumeeiras, ripamento, madeiramento e ponto.", image: roofImage, alt: "Equipe realizando revisão e reforma em telhado" },
  { title: "Impermeabilização", text: "Manta aluminizada térmica para isolamento térmico, calor e goteira; manta líquida Rhodopas em 3 demãos; e manta asfáltica para banheiro, laje, terraço, parede e varanda.", image: waterproofingImage, alt: "Aplicação profissional de impermeabilização em laje" },
  { title: "ART, laudos e perícias", text: "ART, laudo técnico, perícia e avaliação de apartamento e casa, com responsabilidade técnica.", image: engineeringImage, alt: "Engenheiro civil analisando projeto técnico em obra" },
  { title: "Construção e reformas", text: "Construção, reformas em geral, administração e fiscalização de obras e projetos.", image: renovationImage, alt: "Ambiente residencial em reforma com acabamento novo" },
  { title: "Calhas e escoamento", text: "Rufos, calhas, pingadeiras e condutores, com fornecimento e instalação.", image: guttersImage, alt: "Calha e condutor metálico instalados em telhado" },
  { title: "Pisos e revestimentos", text: "Assentamento de porcelanato, granito, pastilha e cerâmica para diferentes ambientes.", image: renovationImage, alt: "Instalação de piso e revestimento em reforma residencial" },
  { title: "Instalações do imóvel", text: "Elétrica, hidráulica e sanitário; caixa d'água, esgoto, gordura e sabão, incluindo substituição.", image: engineeringImage, alt: "Profissional acompanhando instalações de uma obra" },
  { title: "Ambientes internos", text: "Reforma em geral de cozinha, banheiro, lavabo e lavanderia, do reparo ao acabamento.", image: renovationImage, alt: "Reforma completa de ambiente interno residencial" },
  { title: "Pintura e acabamento", text: "Pintura, textura, grafiato e outras soluções de acabamento para renovar o imóvel.", image: renovationImage, alt: "Acabamentos de pintura em reforma residencial" },
  { title: "Gesso e Drywall", text: "Sistema de gesso acartonado, forros, molduras e paredes em Drywall.", image: renovationImage, alt: "Parede de gesso acartonado em fase de acabamento" },
  { title: "Áreas de lazer", text: "Construção de piscina, sauna, varanda, churrasqueira, forno e fogão a lenha.", image: leisureImage, alt: "Área de lazer pronta com piscina e churrasqueira" },
  { title: "Telhas e proteção", text: "Lavagem de telhas, inclusive a seco, e aplicação de resina Hydronort incolor.", image: roofImage, alt: "Telhas cerâmicas durante trabalho de limpeza e proteção" },
  { title: "Esquadrias de madeira", text: "Revitalização de portas, janelas e alisares com aplicação de verniz Cetol.", image: leisureImage, alt: "Esquadrias e estrutura de madeira revitalizadas" },
];

const roofItems = [
  "Revisão preventiva e identificação de vazamentos",
  "Reforma e substituição de telhas",
  "Cumeeiras, ripamento, madeiramento e ponto",
  "Manta aluminizada térmica para calor e goteira",
  "Manta líquida Rhodopas em 3 demãos para telhas de fibrocimento, Brasilit e Eternit",
  "Manta asfáltica para banheiro, laje, terraço, parede e varanda",
  "Lavagem de telhas, inclusive a seco, e resina Hydronort incolor",
  "Rufos, calhas, pingadeiras e condutores",
];

const faq = [
  ["Quais regiões têm referências de obras?", "A empresa informa referências de obras executadas ou em andamento no Lago Norte e Lago Sul, em Brasília/DF."],
  ["Quais serviços são feitos em telhados?", "Revisão, reforma, substituição de telhas, cumeeiras, ripamento, madeiramento, ponto, lavagem, resina e impermeabilização."],
  ["Quais impermeabilizações estão disponíveis?", "Manta aluminizada térmica, manta líquida Rhodopas em 3 demãos e manta asfáltica, conforme a superfície e o problema."],
  ["A empresa emite ART e laudos?", "Sim. ART, laudo técnico, perícia e avaliação de apartamentos e casas fazem parte dos serviços divulgados."],
  ["Também fazem uma reforma completa?", "Sim. A atuação inclui construção, reformas, projetos, administração, fiscalização, instalações, revestimentos, pintura, gesso e áreas de lazer."],
];

function ContactButton({ label, message, secondary = false }: { label: string; message: string; secondary?: boolean }) {
  return <a className={`ae-btn ${secondary ? "ae-btn-outline" : "ae-btn-green"}`} href={wa(message)} target="_blank" rel="noreferrer"><MessageCircle size={18}/>{label}<ArrowRight size={16}/></a>;
}

function Index() {
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <div className="ae-site">
      <header className="ae-header">
        <div className="ae-container ae-header-inner">
          <a className="ae-brand" href="#inicio" aria-label="Amaral Engenharia — início"><span className="ae-brand-mark">AE</span><span><b>AMARAL</b><small>ENGENHARIA CIVIL</small></span></a>
          <nav aria-label="Navegação principal"><a href="#servicos">Serviços</a><a href="#telhados">Telhados</a><a href="#empresa">Empresa</a><a href="#contato">Contato</a></nav>
          <ContactButton label="Solicitar orçamento" message="Olá! Quero solicitar um orçamento." />
        </div>
      </header>

      <main>
        <section className="ae-hero" id="inicio">
          <img className="ae-hero-image" src={roofImage} alt="Equipe da construção civil trabalhando na revisão de um telhado" width={1200} height={800}/>
          <div className="ae-hero-overlay"/>
          <div className="ae-container ae-hero-content">
            <div className="ae-eyebrow"><span/> Engenharia civil em Brasília</div>
            <h1><strong>Amaral</strong><br/>Engenharia Civil</h1>
            <p>Reformas, telhados, impermeabilização e serviços técnicos para proteger, recuperar e valorizar seu imóvel.</p>
            <div className="ae-actions"><ContactButton label="Falar com o engenheiro" message="Olá! Quero uma avaliação para meu imóvel."/><a className="ae-btn ae-btn-outline" href="#servicos">Ver todos os serviços <ArrowRight size={17}/></a></div>
            <div className="ae-credentials"><span><ShieldCheck/> Engº Civil • CREA 27125 / D MG</span><span><Award/> Garantia de 2 anos*</span></div>
          </div>
        </section>

        <section className="ae-proof"><div className="ae-container ae-proof-grid"><div><b>01</b><span>Engenharia Civil</span></div><div><b>02</b><span>Reformas em geral</span></div><div><b>03</b><span>Especialistas em telhados</span></div><div><b>04</b><span>Laudos • Perícias • ART</span></div></div></section>

        <section className="ae-section ae-services" id="servicos">
          <div className="ae-container">
            <div className="ae-heading"><div><span className="ae-kicker">SERVIÇOS COMPLETOS</span><h2>Especialistas para cada necessidade do seu imóvel.</h2></div><div><p>Da análise técnica ao acabamento, você encontra soluções integradas em um único contato.</p><ContactButton label="Pedir uma avaliação" message="Olá! Quero uma avaliação dos serviços para meu imóvel."/></div></div>
            <div className="ae-service-grid">{services.map((service, i) => <article className="ae-service-card" key={service.title}><div className="ae-service-image"><img src={service.image} alt={service.alt} loading="lazy" width={1200} height={800}/><span>{String(i + 1).padStart(2, "0")}</span></div><div className="ae-service-body"><h3>{service.title}</h3><p>{service.text}</p><a href={wa(`Olá! Quero informações sobre ${service.title}.`)} target="_blank" rel="noreferrer">Solicitar atendimento <ArrowRight size={15}/></a></div></article>)}</div>
          </div>
        </section>

        <section className="ae-section ae-roof" id="telhados">
          <div className="ae-container ae-feature-layout"><div className="ae-feature-image"><img src={roofImage} alt="Reforma e revisão técnica de telhado" loading="lazy" width={1200} height={800}/><div className="ae-feature-label"><Wrench/><span><b>Telhados</b>Revisão • reparo • prevenção</span></div></div><div className="ae-feature-copy"><span className="ae-kicker">PRINCIPAL ESPECIALIDADE</span><h2>Seu telhado protegido antes que o problema aumente.</h2><p>Uma avaliação cuidadosa identifica a origem da goteira e indica a solução adequada para cada cobertura.</p><div className="ae-check-list">{roofItems.map(item => <div key={item}><Check/><span>{item}</span></div>)}</div><ContactButton label="Avaliar meu telhado" message="Olá! Quero agendar uma avaliação do meu telhado."/></div></div>
        </section>

        <section className="ae-section ae-technical" id="engenharia"><div className="ae-container"><div className="ae-heading ae-heading-light"><div><span className="ae-kicker">SERVIÇOS TÉCNICOS</span><h2>Engenharia para decidir e executar com segurança.</h2></div><div><p>Documentação, análise e acompanhamento técnico para imóveis e obras.</p><ContactButton label="Consultar o engenheiro" message="Olá! Preciso de um serviço técnico de engenharia."/></div></div><div className="ae-tech-grid">{[
          [ClipboardCheck,"ART e Laudo Técnico","Documentação técnica e análise das condições do imóvel."],
          [Building2,"Perícia e Avaliação","Perícia e avaliação de apartamento, casa e situações relacionadas à obra."],
          [HardHat,"Gestão de Obras","Construção, projetos, administração e fiscalização de obras."],
        ].map(([Icon,title,text]) => { const TechIcon = Icon as typeof ClipboardCheck; return <article className="ae-tech-card" key={String(title)}><TechIcon/><h3>{String(title)}</h3><p>{String(text)}</p><a href={wa(`Olá! Quero informações sobre ${String(title)}.`)} target="_blank" rel="noreferrer">Falar sobre este serviço <ArrowRight size={15}/></a></article>})}</div></div></section>

        <section className="ae-section ae-about" id="empresa"><div className="ae-container ae-about-layout"><div className="ae-about-copy"><span className="ae-kicker">AMARAL ENGENHARIA CIVIL</span><h2>Responsabilidade técnica com atenção a cada detalhe.</h2><p>Atendimento direto com Valluce Amaral, Engenheiro Civil e Perito, para entender o problema antes de indicar o serviço.</p><ul><li><Check/> Soluções para manutenção, reforma e engenharia</li><li><Check/> Satisfação, rapidez e preço justo</li><li><Check/> Referências no Lago Norte e Lago Sul</li><li><Check/> CREA 27125 / D MG</li></ul><ContactButton label="Conhecer o atendimento" message="Olá! Quero conhecer os serviços da Amaral Engenharia."/></div><div className="ae-about-image"><img src={engineeringImage} alt="Engenheiro civil analisando projeto em campo" loading="lazy" width={1200} height={800}/><div><span>Responsável técnico</span><b>Valluce Amaral</b><small>Engenheiro Civil • Perito</small></div></div></div></section>

        <section className="ae-section ae-regions"><div className="ae-container"><div className="ae-heading"><div><span className="ae-kicker">REFERÊNCIAS DE OBRAS</span><h2>Obras executadas ou em andamento em Brasília.</h2></div><div><p>Referências informadas para duas das principais regiões residenciais da cidade.</p><ContactButton label="Verificar atendimento" message="Olá! Quero verificar atendimento na minha região."/></div></div><div className="ae-region-grid"><article><MapPin/><span>01</span><h3>Lago Norte</h3><p>Referências de obras executadas ou em andamento.</p><a href={wa("Olá! Estou no Lago Norte e quero solicitar uma avaliação.")} target="_blank" rel="noreferrer">Solicitar atendimento <ArrowRight/></a></article><article><MapPin/><span>02</span><h3>Lago Sul</h3><p>Referências de obras executadas ou em andamento.</p><a href={wa("Olá! Estou no Lago Sul e quero solicitar uma avaliação.")} target="_blank" rel="noreferrer">Solicitar atendimento <ArrowRight/></a></article></div></div></section>

        <section className="ae-cta"><div className="ae-container ae-cta-inner"><div><span>ATENDIMENTO DIRETO</span><h2>Conte o que seu imóvel precisa.</h2><p>Envie fotos, localização e os detalhes do serviço para agilizar a avaliação.</p></div><ContactButton label="Solicitar orçamento no WhatsApp" message="Olá! Vim pelo site e quero solicitar um orçamento."/></div></section>

        <section className="ae-section ae-process"><div className="ae-container"><div className="ae-heading"><div><span className="ae-kicker">COMO FUNCIONA</span><h2>Um caminho simples até a solução.</h2></div><div><p>Atendimento objetivo para compreender, avaliar e executar.</p><ContactButton label="Começar agora" message="Olá! Quero iniciar meu atendimento."/></div></div><div className="ae-process-grid">{[["01","Conte sua necessidade"],["02","Envie fotos e localização"],["03","Receba a avaliação técnica"],["04","Planeje a execução"]].map(([n,t])=><div key={n}><span>{n}</span><h3>{t}</h3></div>)}</div></div></section>

        <section className="ae-section ae-faq" id="faq"><div className="ae-container"><div className="ae-heading"><div><span className="ae-kicker">DÚVIDAS FREQUENTES</span><h2>Informações antes de contratar.</h2></div><ContactButton label="Tirar outra dúvida" message="Olá! Tenho uma dúvida sobre os serviços."/></div><div className="ae-faq-list">{faq.map(([question,answer],i)=><div className={`ae-faq-item ${openFaq===i?"open":""}`} key={question}><button onClick={()=>setOpenFaq(openFaq===i?-1:i)} aria-expanded={openFaq===i}><span>{question}</span><ChevronDown/></button>{openFaq===i&&<p>{answer}</p>}</div>)}</div></div></section>

        <section className="ae-contact" id="contato"><div className="ae-container ae-contact-layout"><div><span className="ae-kicker">FALE CONOSCO</span><h2>Seu imóvel merece uma solução bem executada.</h2><p>Atendimento direto com Valluce Amaral, Engenheiro Civil e Perito.</p><ContactButton label="(61) 98327-7032" message="Olá, Valluce! Quero solicitar um orçamento."/></div><div className="ae-contact-card"><div className="ae-brand ae-brand-dark"><span className="ae-brand-mark">AE</span><span><b>AMARAL</b><small>ENGENHARIA CIVIL</small></span></div><div><MapPin/><span><small>Atendimento</small><b>Brasília — DF</b></span></div><div><MessageCircle/><span><small>WhatsApp</small><b>(61) 98327-7032</b></span></div><div><Award/><span><small>Responsável técnico</small><b>CREA 27125 / D MG</b></span></div></div></div></section>
      </main>

      <footer className="ae-footer"><div className="ae-container"><div><a className="ae-brand ae-brand-dark" href="#inicio"><span className="ae-brand-mark">AE</span><span><b>AMARAL</b><small>ENGENHARIA CIVIL</small></span></a><p>Reformas, telhados e serviços de engenharia em Brasília/DF.</p></div><nav><a href="#servicos">Serviços</a><a href="#telhados">Telhados</a><a href="#engenharia">Engenharia</a><a href="#empresa">Empresa</a><a href="#contato">Contato</a></nav><ContactButton label="Falar no WhatsApp" message="Olá! Quero solicitar um orçamento."/></div><div className="ae-container ae-footer-bottom"><span>© 2026 Amaral Engenharia. Todos os direitos reservados.</span><span>*Garantia conforme condições informadas pela empresa.</span></div></footer>
      <a className="ae-whatsapp" href={wa("Olá! Vim pelo site da Amaral Engenharia e quero solicitar um orçamento.")} target="_blank" rel="noreferrer" aria-label="Falar no WhatsApp"><img src={whatsappAsset.url} alt="WhatsApp" width={64} height={64}/><span>Fale conosco</span></a>
    </div>
  );
}

export const Route = createFileRoute("/")({
  head: () => ({ meta: [
    { title: "Amaral Engenharia Civil | Brasília DF" },
    { name: "description", content: "Reformas, telhados, impermeabilização, ART, laudos, perícias e serviços de engenharia civil em Brasília." },
    { property: "og:title", content: "Amaral Engenharia Civil | Brasília DF" },
    { property: "og:description", content: "Soluções profissionais para telhados, reformas e engenharia civil em Brasília." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ]}),
  component: Index,
});