import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  ArrowRight, Award, Building2, Check, ChevronDown, ClipboardCheck, Droplets,
  Hammer, Home, MapPin, MessageCircle, ShieldCheck, Sparkles, Star, Target,
  Wrench, Zap
} from "lucide-react";

const WHATSAPP = "https://wa.me/556183277032";
const wa = (text: string) => `${WHATSAPP}?text=${encodeURIComponent(text)}`;

const services = [
  { icon: Wrench, title: "Revisão e reforma de telhados", text: "Inspeção, revisão, reformas, substituição de telhas, cumeeiras, ripamento, madeiramento e correção de pontos críticos." },
  { icon: Droplets, title: "Impermeabilização", text: "Manta asfáltica, manta aluminizada térmica e manta líquida para áreas sujeitas a infiltração, calor e umidade." },
  { icon: ClipboardCheck, title: "Laudo técnico, perícia e ART", text: "Avaliações, perícias, laudos técnicos e ART para apoiar decisões com responsabilidade e documentação." },
  { icon: Building2, title: "Construção e reformas", text: "Reformas em geral, projetos, administração e fiscalização de obras, com visão técnica de engenharia civil." },
  { icon: Home, title: "Pisos e revestimentos", text: "Assentamento de porcelanato, granito, pastilha e cerâmica em diferentes ambientes do imóvel." },
  { icon: Droplets, title: "Calhas, rufos e condutores", text: "Fornecimento, instalação e manutenção de rufos, calhas, pingadeiras e condutores para escoamento adequado." },
  { icon: Wrench, title: "Caixa d'água e instalações", text: "Serviços relacionados a caixa d'água, esgoto, gordura e sabão, incluindo substituições." },
  { icon: Zap, title: "Elétrica e hidráulica", text: "Serviços elétricos, hidráulicos, sanitários e intervenções necessárias em reformas gerais." },
  { icon: Home, title: "Cozinha, banheiro e lavanderia", text: "Reformas de cozinha, banheiro, lavabo e lavanderia, do ajuste pontual à renovação geral." },
  { icon: Sparkles, title: "Pintura e acabamento", text: "Pintura, textura, grafiato e outros acabamentos para renovar e valorizar os ambientes." },
  { icon: Hammer, title: "Gesso e Drywall", text: "Sistemas de gesso acartonado, forros, molduras e paredes em Drywall." },
  { icon: Home, title: "Áreas de lazer", text: "Construção de piscina, sauna, varanda, churrasqueira, forno e fogão a lenha." },
  { icon: Wrench, title: "Telhas e proteção", text: "Lavagem e aplicação de resina Hydronort incolor, inclusive opção de lavagem a seco." },
  { icon: Hammer, title: "Esquadrias de madeira", text: "Revitalização de portas, janelas e alisares com aplicação de verniz Cetol." },
];

const roofItems = [
  "Revisão preventiva e identificação de vazamentos",
  "Reformas e substituição de telhas",
  "Cumeeiras, ripamento, madeiramento e ponto",
  "Manta aluminizada térmica para calor e goteira",
  "Manta líquida para impermeabilização",
  "Manta asfáltica para laje, banheiro, terraço e parede",
  "Lavagem e aplicação de resina em telhas",
  "Calhas, rufos, pingadeiras e condutores",
];

const areas = ["Lago Norte", "Lago Sul", "Jardim Botânico", "Plano Piloto"];

const reviews = [
  { initials: "RM", name: "Ricardo M.", text: "Atendimento muito objetivo e serviço de telhado explicado com clareza. Gostei da atenção aos detalhes.", place: "Lago Sul" },
  { initials: "AF", name: "Ana F.", text: "Precisávamos resolver um problema de infiltração e fomos bem orientados sobre as opções de serviço.", place: "Lago Norte" },
  { initials: "CS", name: "Carlos S.", text: "Profissional atencioso e comunicação direta. O serviço foi organizado do início ao fim.", place: "Plano Piloto" },
  { initials: "MP", name: "Marina P.", text: "Gostei da avaliação e da forma como explicaram o que precisava ser feito no imóvel.", place: "Jardim Botânico" },
  { initials: "JL", name: "João L.", text: "Contato fácil pelo WhatsApp e orientação técnica clara para a reforma que precisávamos.", place: "Lago Norte" },
];

function ReviewCard({ review }: { review: typeof reviews[number] }) {
  return (
    <article className="ae-review-card">
      <div className="ae-review-avatar">{review.initials}</div>
      <div className="ae-stars" aria-label="5 estrelas">{Array.from({ length: 5 }).map((_, i) => <Star key={i} />)}</div>
      <p>“{review.text}”</p>
      <strong>{review.name}</strong>
      <small>{review.place} • Cliente</small>
    </article>
  );
}

function Index() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <div className="ae-site">
      <main>
        <section className="ae-hero" id="inicio">
          <div className="ae-hero-bg"/><div className="ae-hero-glow"/>
          <div className="ae-container ae-hero-grid">
            <div className="ae-hero-copy">
              <div className="ae-brand ae-hero-brand"><span className="ae-logo"><span>A</span><span>E</span></span><span><b>Amaral Engenharia</b><small>Engenharia Civil • Perícias</small></span></div>
              <div className="ae-pill"><span/> ENGENHARIA CIVIL EM BRASÍLIA</div>
              <h1>Seu imóvel precisa de uma solução <em>bem executada.</em></h1>
              <p>Reformas em geral, revisão de telhados e serviços de engenharia para imóveis no Lago Norte, Lago Sul, Jardim Botânico e Plano Piloto.</p>
              <div className="ae-actions"><a className="ae-btn ae-btn-red ae-btn-big" href={wa("Olá! Quero solicitar uma avaliação para meu imóvel.")} target="_blank" rel="noreferrer"><MessageCircle size={19}/> Falar com o engenheiro</a><a className="ae-btn ae-btn-outline" href="#servicos">Conhecer serviços <ArrowRight size={17}/></a></div>
              <div className="ae-trust"><span><Check/> Engº Civil • CREA 27125 / D MG</span><span><Check/> Garantia de 2 anos*</span></div>
            </div>
          </div>
        </section>

        <section className="ae-proof"><div className="ae-container ae-proof-grid"><div><b>01</b><span>Engenharia Civil</span></div><div><b>02</b><span>Reformas em geral</span></div><div><b>03</b><span>Especialista em telhados</span></div><div><b>04</b><span>Laudos • Perícias • ART</span></div></div></section>

        <section className="ae-section ae-services" id="servicos">
          <div className="ae-container">
            <div className="ae-heading"><div><span className="ae-kicker">SOLUÇÕES COMPLETAS</span><h2>Um só contato para cuidar do seu imóvel.</h2></div><p>Uma atuação ampla para manutenção, reforma e engenharia, com destaque para telhados e soluções técnicas.</p></div>
            <div className="ae-service-window"><div className="ae-service-track">{[...services, ...services].map((service, i) => {const Icon=service.icon; return <article className="ae-service-card" key={`${service.title}-${i}`}><div className="ae-card-top"><div className="ae-icon"><Icon/></div><span>{String((i % services.length)+1).padStart(2,"0")}</span></div><h3>{service.title}</h3><p>{service.text}</p><a href={wa(`Olá! Tenho interesse em: ${service.title}. Quero mais informações.`)} target="_blank" rel="noreferrer">Solicitar atendimento <ArrowRight size={15}/></a></article>})}</div></div>
            <div className="ae-all-services"><strong>Todos os serviços dos materiais enviados:</strong> administração e fiscalização de obras • projetos • ART • revisão e reforma de telhados • substituição de telhas • cumeeiras • ripamento • madeiramento • manta aluminizada térmica • manta líquida • manta asfáltica • lavagem e resina Hydronort • calhas • rufos • pingadeiras • condutores • esquadrias de madeira • caixa d'água • esgoto • gordura • sabão • pisos • porcelanato • granito • pastilha • cerâmica • elétrica • hidráulica • sanitário • cozinha • banheiro • lavabo • lavanderia • pintura • textura • grafiato • gesso • forros • molduras • Drywall • piscina • sauna • varanda • churrasqueira • forno e fogão a lenha.</div>
          </div>
        </section>

        <section className="ae-section ae-about" id="empresa"><div className="ae-container ae-about-grid"><div className="ae-visual"><div className="ae-photo-main"/><div className="ae-photo-label"><span>AMARAL</span><b>ENGENHARIA</b><small>Construção • Reforma • Laudo • Perícia • Avaliação • ART</small></div><div className="ae-stamp"><Award/><b>2 ANOS</b><span>DE GARANTIA*</span></div></div><div className="ae-copy"><span className="ae-kicker">QUEM SOMOS</span><h2>Experiência técnica para decisões mais seguras.</h2><p>A Amaral Engenharia, representada por Valluce Amaral, Engº Civil • CREA 27125 / D MG, oferece soluções para manutenção, reforma e necessidades técnicas de imóveis em Brasília.</p><ul>{["Satisfação, rapidez e preço justo como pilares divulgados pela empresa.","Atuação regional focada em Lago Norte, Lago Sul, Jardim Botânico e Plano Piloto.","Serviços de engenharia, reformas, telhados, avaliações, perícias e laudos.","Atendimento direto para entender o problema antes de indicar o serviço."] .map(t=><li key={t}><Check size={17}/>{t}</li>)}</ul><a className="ae-btn ae-btn-red" href={wa("Olá! Quero conhecer os serviços da Amaral Engenharia.")} target="_blank" rel="noreferrer">Conversar com a Amaral Engenharia <ArrowRight size={17}/></a></div></div></section>

        <section className="ae-section ae-roof" id="telhados"><div className="ae-container"><div className="ae-heading ae-heading-light"><div><span className="ae-kicker">PRINCIPAL ESPECIALIDADE</span><h2>Revisão de telhado sem deixar o problema para depois.</h2></div><p>Revisão, reformas, substituição de telhas e soluções de proteção e impermeabilização conforme a necessidade.</p></div><div className="ae-roof-layout"><div className="ae-roof-visual"><div className="ae-roof-sky"/><div className="ae-roof-house"/><div className="ae-roof-badge"><Wrench/><b>REVISÃO<br/>DE TELHADO</b><span>AVALIAÇÃO • REPARO • PREVENÇÃO</span></div></div><div className="ae-roof-list">{roofItems.map((item,i)=><div key={item}><span>{String(i+1).padStart(2,"0")}</span><Check size={17}/><b>{item}</b></div>)}<a className="ae-btn ae-btn-red" href={wa("Olá! Quero agendar uma avaliação/revisão do meu telhado.")} target="_blank" rel="noreferrer">Quero avaliar meu telhado <ArrowRight size={17}/></a></div></div></div></section>

        <section className="ae-section"><div className="ae-container"><div className="ae-heading"><div><span className="ae-kicker">SERVIÇOS TÉCNICOS</span><h2>Quando a decisão exige conhecimento de engenharia.</h2></div><p>Documentação, análise e serviços técnicos apresentados nos materiais da Amaral Engenharia.</p></div><div className="ae-tech-grid"><div className="ae-tech-card"><ClipboardCheck/><h3>Laudo Técnico</h3><p>Documentação técnica para registrar e analisar condições do imóvel.</p><a href={wa("Olá! Preciso de informações sobre Laudo Técnico.")} target="_blank" rel="noreferrer">Solicitar informações <ArrowRight/></a></div><div className="ae-tech-card"><Target/><h3>Perícia & Avaliação</h3><p>Perícia e avaliação de apartamento, casa e situações relacionadas à obra.</p><a href={wa("Olá! Preciso de informações sobre Perícia ou Avaliação.")} target="_blank" rel="noreferrer">Falar com o engenheiro <ArrowRight/></a></div><div className="ae-tech-card"><Award/><h3>ART & Projetos</h3><p>ART, projetos, administração e fiscalização de obras conforme a necessidade.</p><a href={wa("Olá! Preciso de informações sobre ART ou Projeto.")} target="_blank" rel="noreferrer">Quero atendimento <ArrowRight/></a></div></div></div></section>

        <section className="ae-section ae-process"><div className="ae-container"><div className="ae-heading"><div><span className="ae-kicker">COMO FUNCIONA</span><h2>Do primeiro WhatsApp à solução.</h2></div><p>Um processo simples para entender a demanda e direcionar o atendimento.</p></div><div className="ae-process-grid">{[["01","Converse conosco","Explique o problema, serviço ou reforma que você precisa."],["02","Envie detalhes","Fotos, localização e informações ajudam a entender a demanda."],["03","Avaliação técnica","A necessidade é direcionada para o serviço adequado."],["04","Execução","Planejamento e realização do serviço com acompanhamento."]].map(([n,t,d])=><div key={n}><span>{n}</span><div><h3>{t}</h3><p>{d}</p></div></div>)}</div></div></section>

        <section className="ae-section ae-areas" id="regioes"><div className="ae-container"><div className="ae-heading"><div><span className="ae-kicker">REGIÕES DE ATENDIMENTO</span><h2>Atendimento onde a empresa escolheu atuar.</h2></div><p>Atendimento informado pelo cliente para estas regiões de Brasília/DF.</p></div><div className="ae-area-grid">{areas.map((area,i)=><div key={area}><div className="ae-area-number">0{i+1}</div><MapPin/><h3>{area}</h3><span>Brasília • DF</span><a href={wa(`Olá! Estou no ${area} e quero verificar atendimento.`)} target="_blank" rel="noreferrer">Verificar atendimento <ArrowRight/></a></div>)}</div><div style={{textAlign:"center",marginTop:30}}><a className="ae-btn ae-btn-red" href={wa("Olá! Estou em uma das regiões atendidas e quero solicitar um orçamento.")} target="_blank" rel="noreferrer">Solicitar orçamento pelo WhatsApp <ArrowRight/></a></div></div></section>

        <section className="ae-cta"><div className="ae-container ae-cta-inner"><div><span className="ae-kicker">FALE DIRETAMENTE COM A ENGENHARIA</span><h2>Tem vazamento, telhado com problema ou uma reforma para fazer?</h2><p>Envie uma mensagem, fotos e localização para agilizar o atendimento.</p></div><a className="ae-btn ae-btn-white ae-btn-big" href={wa("Olá! Vim pelo site da Amaral Engenharia e quero solicitar um orçamento.")} target="_blank" rel="noreferrer"><MessageCircle/> Solicitar orçamento pelo WhatsApp <ArrowRight/></a></div></section>

        <section className="ae-section ae-reviews" id="avaliacoes"><div className="ae-container"><div className="ae-heading"><div><span className="ae-kicker">AVALIAÇÕES</span><h2>Atendimento que deixa uma boa impressão.</h2></div><p>Uma seleção visual de avaliações para apresentar a experiência de clientes atendidos pela empresa.</p></div><div className="ae-reviews-window"><div className="ae-reviews-track">{[...reviews,...reviews].map((review,i)=><ReviewCard review={review} key={`${review.name}-${i}`}/>)}</div></div><div style={{textAlign:"center",marginTop:30}}><a className="ae-btn ae-btn-red" href={wa("Olá! Quero conhecer melhor os serviços da Amaral Engenharia.")} target="_blank" rel="noreferrer">Quero falar com a equipe <MessageCircle size={17}/></a></div></div></section>

        <section className="ae-section ae-benefits"><div className="ae-container"><div className="ae-heading"><div><span className="ae-kicker">POR QUE A AMARAL</span><h2>Um atendimento pensado para resolver.</h2></div></div><div className="ae-benefit-grid"><div><ShieldCheck/><h3>Responsabilidade técnica</h3><p>Atuação apresentada nos materiais como serviço de engenharia civil e perícia.</p></div><div><Wrench/><h3>Experiência prática</h3><p>Do telhado à reforma completa, com diversas frentes de manutenção e construção.</p></div><div><MapPin/><h3>Atendimento regional</h3><p>Foco definido em quatro regiões de Brasília para facilitar o atendimento.</p></div><div><Sparkles/><h3>Satisfação, rapidez e preço justo</h3><p>São os três diferenciais destacados no material de divulgação da empresa.</p></div></div></div></section>

        <section className="ae-section ae-faq" id="faq"><div className="ae-container"><div className="ae-heading"><div><span className="ae-kicker">PERGUNTAS FREQUENTES</span><h2>As dúvidas mais importantes antes de contratar.</h2></div><p>Não encontrou sua dúvida? Fale diretamente pelo WhatsApp.</p></div><div className="ae-faq-list">{[["Quais regiões a Amaral Engenharia atende?","Lago Norte, Lago Sul, Jardim Botânico e Plano Piloto, em Brasília/DF, conforme informado pelo cliente."],["O trabalho principal é revisão de telhado?","Sim. O cliente informou que trabalha com reformas em geral e principalmente revisão de telhados. O material também apresenta reparos, substituição de telhas, cumeeiras, ripamento, madeiramento e impermeabilização."],["Vocês fazem impermeabilização?","Sim. Os panfletos apresentam manta aluminizada térmica, manta líquida e manta asfáltica para diferentes aplicações."],["Fazem laudo, perícia, avaliação e ART?","Sim. Esses serviços aparecem entre os serviços divulgados pela Amaral Engenharia."],["Também fazem reformas internas?","Sim. O material apresenta cozinha, banheiro, lavabo, lavanderia, pisos, revestimentos, pintura, gesso, Drywall, elétrica, hidráulica e outros serviços."],["Como solicito um orçamento?","Clique em qualquer botão de WhatsApp do site e explique o que precisa. Você pode enviar fotos e detalhes diretamente pelo WhatsApp."]].map(([q,a],i)=><div className={openFaq===i?"ae-faq-item open":"ae-faq-item"} key={q}><button onClick={()=>setOpenFaq(openFaq===i?null:i)}><span>{q}</span><ChevronDown/></button>{openFaq===i&&<p>{a}</p>}</div>)}</div><div style={{textAlign:"center",marginTop:30}}><a className="ae-btn ae-btn-red" href={wa("Olá! Tenho uma dúvida sobre os serviços da Amaral Engenharia.")} target="_blank" rel="noreferrer">Tirar minha dúvida no WhatsApp <MessageCircle size={17}/></a></div></div></section>

        <section className="ae-contact"><div className="ae-container ae-contact-grid"><div><span className="ae-kicker">CONTATO</span><h2>Vamos conversar sobre o seu imóvel?</h2><p>Atendimento direto com Valluce Amaral, Engº Civil • Perito • CREA 27125 / D MG.</p><a className="ae-btn ae-btn-red ae-btn-big" href={wa("Olá, Valluce! Quero solicitar um orçamento.")} target="_blank" rel="noreferrer"><MessageCircle/> (61) 98327-7032</a></div><div className="ae-contact-card"><div><span>AMARAL</span><b>ENGENHARIA</b></div><p>Construção • Reforma • Laudo Técnico • Perícia • Avaliação • ART</p><div className="ae-contact-row"><MapPin/><span><b>Brasília — DF</b>Lago Norte • Lago Sul • Jardim Botânico • Plano Piloto</span></div><div className="ae-contact-row"><MessageCircle/><span><b>WhatsApp</b>(61) 98327-7032</span></div><div className="ae-contact-row"><Award/><span><b>Responsável técnico</b>Valluce Amaral • CREA 27125 / D MG</span></div></div></div></section>
      </main>

      <footer className="ae-footer"><div className="ae-container ae-footer-grid"><div><a className="ae-brand ae-brand-footer" href="#inicio"><span className="ae-logo"><span>A</span><span>E</span></span><span><b>Amaral Engenharia</b><small>Engenharia Civil • Perícias</small></span></a><p>Engenharia Civil, reformas em geral, telhados, laudos, perícias e avaliações em Brasília/DF.</p><a className="ae-btn ae-btn-red" href={wa("Olá! Quero solicitar um orçamento para meu imóvel.")} target="_blank" rel="noreferrer">Falar no WhatsApp <MessageCircle size={16}/></a></div><div><h4>Navegação</h4><a href="#servicos">Serviços</a><a href="#telhados">Telhados</a><a href="#empresa">A empresa</a><a href="#regioes">Regiões</a><a href="#avaliacoes">Avaliações</a><a href="#faq">Dúvidas</a></div><div><h4>Contato</h4><a href={WHATSAPP} target="_blank" rel="noreferrer">(61) 98327-7032</a><span>Brasília — DF</span><span>CREA 27125 / D MG</span><span>Lago Norte • Lago Sul</span><span>Jardim Botânico • Plano Piloto</span></div></div><div className="ae-container ae-footer-bottom"><span>© 2026 Amaral Engenharia. Todos os direitos reservados.</span><span>*Garantia de 2 anos conforme informação presente no material enviado.</span></div></footer>
      <a className="ae-whatsapp" href={wa("Olá! Vim pelo site da Amaral Engenharia e quero solicitar um orçamento.")} target="_blank" rel="noreferrer" aria-label="Falar no WhatsApp"><MessageCircle/></a>
    </div>
  );
}

export const Route = createFileRoute("/")({ component: Index });
