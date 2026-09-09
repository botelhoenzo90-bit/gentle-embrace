import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Award, Bath, Building2, Check, ClipboardCheck, Droplets, HardHat, Home, MapPin, MessageCircle, Ruler, ShieldCheck, Star, Wrench } from "lucide-react";
import roofImage from "@/assets/service-roof.jpg";
import waterproofingImage from "@/assets/service-waterproofing.jpg";
import engineeringImage from "@/assets/service-engineering.jpg";
import renovationImage from "@/assets/service-renovation.jpg";
import guttersImage from "@/assets/service-gutters.jpg";
import leisureImage from "@/assets/service-leisure.jpg";

const WHATSAPP = "https://wa.me/556183277032";
const wa = (text: string) => `${WHATSAPP}?text=${encodeURIComponent(text)}`;

const services = [
  ["Telhados", "Revisão, reformas, substituição de telhas, cumeeiras, ripamento, madeiramento e ponto.", roofImage, Wrench],
  ["Impermeabilização", "Manta aluminizada térmica, manta líquida Rhodopas e manta asfáltica para diferentes superfícies.", waterproofingImage, Droplets],
  ["ART, Laudos e Perícias", "ART, laudo técnico, perícia e avaliação de apartamento e casa.", engineeringImage, ClipboardCheck],
  ["Construção e Reformas", "Construção, reformas em geral, administração, fiscalização de obras e projetos.", renovationImage, HardHat],
  ["Calhas, Rufos e Condutores", "Fornecimento, instalação e manutenção de rufos, calhas, pingadeiras e condutores.", guttersImage, Home],
  ["Pisos e Revestimentos", "Porcelanato, granito, pastilha e cerâmica com assentamento.", renovationImage, Ruler],
  ["Instalações", "Elétrica, hidráulica, sanitário, caixa d’água, esgoto, gordura e sabão.", engineeringImage, Building2],
  ["Cozinha, Banheiro e Lavanderia", "Reformas e intervenções em ambientes internos do imóvel.", renovationImage, Bath],
  ["Pintura e Acabamentos", "Pintura, textura, grafiato e outras soluções de acabamento.", renovationImage, Ruler],
  ["Gesso e Drywall", "Gesso acartonado, forros, molduras e paredes em Drywall.", renovationImage, Building2],
  ["Áreas de Lazer", "Piscina, sauna, varanda, churrasqueira, forno e fogão a lenha.", leisureImage, Home],
  ["Lavagem e Resina de Telhas", "Lavagem de telhas, inclusive a seco, e aplicação de resina Hydronort incolor.", roofImage, Droplets],
  ["Esquadrias de Madeira", "Revitalização de portas, janelas e alisares com verniz Cetol.", leisureImage, Home],
] as const;
const marqueeServices = [...services, ...services];
const roofItems = ["Revisão preventiva e identificação de vazamentos", "Reforma e substituição de telhas", "Cumeeiras, ripamento, madeiramento e ponto", "Manta aluminizada térmica para isolamento, calor e goteira", "Manta líquida Rhodopas em 3 demãos", "Manta asfáltica para banheiro, laje, terraço, parede e varanda", "Lavagem de telhas e aplicação de resina Hydronort incolor", "Rufos, calhas, pingadeiras e condutores"];
const reviews = [
  ["Carlos M.", "Excelente atendimento e serviço explicado com clareza."],
  ["Mariana R.", "Gostei da atenção aos detalhes e da orientação profissional."],
  ["Roberto A.", "Atendimento objetivo para resolver uma necessidade do imóvel."],
  ["Fernanda S.", "Precisava de ajuda com o telhado e fui bem orientada."],
  ["Paulo C.", "Uma experiência profissional e comunicação muito clara."],
  ["Juliana F.", "Gostei de ter diferentes soluções de engenharia no mesmo contato."],
] as const;
const marqueeReviews = [...reviews, ...reviews];

function ContactButton({ label, message }: { label: string; message: string }) {
  return <a className="ae-btn ae-btn-green" href={wa(message)} target="_blank" rel="noreferrer"><MessageCircle size={18}/>{label}<ArrowRight size={16}/></a>;
}
function ServiceCard({ item }: { item: typeof services[number] }) {
  const [title,text,image,Icon] = item;
  const ServiceIcon = Icon as typeof Wrench;
  return <article className="ae-service-card"><div className="ae-service-image"><img src={image} alt={String(title)} loading="lazy"/><span className="ae-service-icon"><ServiceIcon/></span></div><div className="ae-service-body"><h3>{String(title)}</h3><p>{String(text)}</p></div></article>;
}
function ReviewCard({ item }: { item: typeof reviews[number] }) {
  return <article className="ae-review-card"><div className="ae-avatar">{item[0][0]}</div><div className="ae-review-head"><div><strong>{item[0]}</strong><small>Cliente</small></div><div className="ae-stars">★★★★★</div></div><p>“{item[1]}”</p></article>;
}

function Index() {
  return <div className="ae-site">
    <main>
      <section className="ae-hero" id="inicio">
        <img className="ae-hero-image" src={engineeringImage} alt="Engenharia civil em obra"/>
        <div className="ae-hero-overlay"/>
        <div className="ae-container ae-hero-content">
          <div className="ae-hero-brand"><span className="ae-logo-symbol">AE</span><div><strong>AMARAL ENGENHARIA</strong><small>ENGENHARIA CIVIL • PERÍCIAS</small></div></div>
          <div className="ae-eyebrow"><span/> Brasília • DF</div>
          <h1>Engenharia para <em>reformar, proteger</em> e valorizar seu imóvel.</h1>
          <p>Reformas em geral, revisão de telhados, impermeabilização, laudos, perícias, avaliações e serviços técnicos com atendimento em regiões selecionadas de Brasília.</p>
          <div className="ae-actions"><ContactButton label="Falar com o engenheiro" message="Olá! Vim pelo site da Amaral Engenharia e quero solicitar uma avaliação."/><a className="ae-btn ae-btn-white" href="#servicos">Conhecer os serviços <ArrowRight size={17}/></a></div>
          <div className="ae-credentials"><span><ShieldCheck/> Engº Civil • CREA 27125 / D MG</span><span><Award/> Garantia de 2 anos*</span></div>
        </div>
      </section>

      <section className="ae-intro"><div className="ae-container ae-intro-grid">
        {[[HardHat,"Engenharia Civil","Responsabilidade técnica"],[Wrench,"Reformas em geral","Do reparo ao acabamento"],[Home,"Especialidade em telhados","Revisão e manutenção"],[ClipboardCheck,"Laudos • Perícias • ART","Serviços técnicos"]].map(([Icon,title,text])=>{const I=Icon as typeof Wrench;return <div className="ae-intro-card" key={String(title)}><span className="ae-round-icon"><I/></span><strong>{String(title)}</strong><small>{String(text)}</small></div>})}
      </div></section>

      <section className="ae-section ae-services" id="servicos"><div className="ae-container">
        <div className="ae-section-heading"><div><span className="ae-kicker">SOLUÇÕES COMPLETAS</span><h2>Tudo para o seu imóvel em um só lugar.</h2></div><p>Serviços de engenharia, reformas, manutenção e acabamento com foco em qualidade e atendimento direto.</p></div>
        <div className="ae-marquee-wrap"><div className="ae-marquee ae-services-marquee">{marqueeServices.map((item,i)=><ServiceCard item={item} key={`${String(item[0])}-${i}`}/>)}</div></div>
        <div className="ae-centered-cta"><ContactButton label="Solicitar orçamento pelo WhatsApp" message="Olá! Quero solicitar um orçamento para meu imóvel."/></div>
      </div></section>

      <section className="ae-section ae-roof" id="telhados"><div className="ae-container ae-feature-layout"><div className="ae-feature-image"><img src={roofImage} alt="Revisão profissional de telhado" loading="lazy"/><div className="ae-feature-tag"><Wrench/><span>Especialidade<small>Revisão • reparo • prevenção</small></span></div></div><div className="ae-feature-copy"><span className="ae-kicker">PRINCIPAL ESPECIALIDADE</span><h2>Seu telhado merece uma avaliação antes que o problema aumente.</h2><p>Goteiras, telhas danificadas e falhas de impermeabilização podem comprometer o imóvel. A avaliação ajuda a identificar os pontos que precisam de atenção.</p><div className="ae-check-list">{roofItems.map(x=><div key={x}><Check/><span>{x}</span></div>)}</div><ContactButton label="Avaliar meu telhado" message="Olá! Quero solicitar uma avaliação do meu telhado."/></div></div></section>

      <section className="ae-section ae-technical" id="engenharia"><div className="ae-container"><div className="ae-section-heading ae-heading-light"><div><span className="ae-kicker">ENGENHARIA TÉCNICA</span><h2>Análise, documentação e responsabilidade técnica.</h2></div><p>Serviços para compreender uma situação, documentar condições do imóvel ou acompanhar uma obra.</p></div><div className="ae-tech-grid">{[[ClipboardCheck,"ART & Laudo Técnico","Documentação e análise técnica."],[Ruler,"Perícia & Avaliação","Perícia e avaliação de apartamento e casa."],[HardHat,"Obras & Fiscalização","Construção, projetos, administração e fiscalização."]].map(([Icon,title,text])=>{const I=Icon as typeof Wrench;return <article className="ae-tech-card" key={String(title)}><span className="ae-tech-icon"><I/></span><h3>{String(title)}</h3><p>{String(text)}</p></article>})}</div><div className="ae-centered-cta"><ContactButton label="Consultar o engenheiro" message="Olá! Preciso de um serviço técnico de engenharia."/></div></div></section>

      <section className="ae-section ae-about" id="empresa"><div className="ae-container ae-about-layout"><div className="ae-about-copy"><span className="ae-kicker">QUEM SOMOS</span><h2>Responsabilidade técnica com atenção a cada detalhe.</h2><p>A Amaral Engenharia atua em Brasília com engenharia civil, reformas em geral, manutenção de telhados e serviços técnicos.</p><div className="ae-about-points">{["Engº Civil • Perito","CREA 27125 / D MG","Foco em regiões selecionadas de Brasília","Satisfação, rapidez e preço justo"].map(x=><div key={x}><Check/><span>{x}</span></div>)}</div><ContactButton label="Falar com Valluce Amaral" message="Olá, Valluce! Quero conversar sobre um serviço para meu imóvel."/></div><div className="ae-about-image"><img src={engineeringImage} alt="Engenheiro civil em obra" loading="lazy"/><div className="ae-person-card"><span>Responsável técnico</span><b>Valluce Amaral</b><small>Engº Civil • Perito</small></div></div></div></section>

      <section className="ae-section ae-regions" id="regioes"><div className="ae-container"><div className="ae-section-heading"><div><span className="ae-kicker">ÁREA DE ATENDIMENTO</span><h2>Atendimento em regiões selecionadas de Brasília.</h2></div><p>Lago Norte, Lago Sul, Jardim Botânico e Plano Piloto.</p></div><div className="ae-region-grid">{["Lago Norte","Lago Sul","Jardim Botânico","Plano Piloto"].map((name,i)=><article key={name}><span className="ae-region-number">0{i+1}</span><span className="ae-round-icon"><MapPin/></span><h3>{name}</h3><p>Brasília • DF</p></article>)}</div><div className="ae-centered-cta"><ContactButton label="Verificar atendimento na minha região" message="Olá! Quero verificar atendimento na minha região."/></div></div></section>

      <section className="ae-section ae-reviews" id="avaliacoes"><div className="ae-container"><div className="ae-section-heading"><div><span className="ae-kicker">AVALIAÇÕES</span><h2>Confiança construída no atendimento.</h2></div><p>Área preparada para avaliações de clientes.</p></div><div className="ae-marquee-wrap"><div className="ae-marquee ae-reviews-marquee">{marqueeReviews.map((item,i)=><ReviewCard item={item} key={`${item[0]}-${i}`}/>)}</div></div><p className="ae-disclaimer">*Nomes e textos desta área são demonstrações visuais e devem ser substituídos pelas avaliações reais dos clientes antes da publicação.</p></div></section>

      <section className="ae-section ae-process"><div className="ae-container"><div className="ae-section-heading"><div><span className="ae-kicker">COMO FUNCIONA</span><h2>Um atendimento simples para começar.</h2></div><p>Explique sua necessidade e receba orientação sobre o próximo passo.</p></div><div className="ae-process-grid">{[["01","Contato","Envie uma mensagem e explique o que precisa."],["02","Entendimento","A necessidade do imóvel é compreendida."],["03","Avaliação","O serviço adequado é definido conforme o caso."],["04","Execução","A solução é planejada e executada."]].map(([n,t,d])=><article key={n}><span>{n}</span><div className="ae-process-icon"><Check/></div><h3>{t}</h3><p>{d}</p></article>)}</div></div></section>

      <section className="ae-cta"><div className="ae-container ae-cta-inner"><div><span>FALE DIRETAMENTE</span><h2>Tem uma reforma, telhado ou problema no imóvel?</h2><p>Envie fotos, localização e os detalhes pelo WhatsApp.</p></div><ContactButton label="Chamar no WhatsApp" message="Olá! Vim pelo site da Amaral Engenharia e quero solicitar atendimento."/></div></section>

      <section className="ae-section ae-faq" id="duvidas"><div className="ae-container"><div className="ae-section-heading"><div><span className="ae-kicker">DÚVIDAS FREQUENTES</span><h2>Informações antes de contratar.</h2></div><p>Se ainda ficou alguma dúvida, fale diretamente com a equipe.</p></div><div className="ae-faq-grid">{[["Vocês trabalham principalmente com telhados?","Sim. Revisão, manutenção e recuperação de telhados são uma das principais frentes informadas pela empresa."],["Quais regiões são atendidas?","Lago Norte, Lago Sul, Jardim Botânico e Plano Piloto, em Brasília/DF."],["Fazem laudo, perícia e ART?","Sim. Esses serviços aparecem entre os serviços divulgados nos materiais enviados."],["Fazem impermeabilização?","Sim. O material apresenta manta aluminizada térmica, manta líquida Rhodopas e manta asfáltica."],["Fazem calhas, rufos e condutores?","Sim. O material informa serviços envolvendo esses componentes."],["Como solicito orçamento?","Clique em qualquer botão verde e fale diretamente pelo WhatsApp."]].map(([q,a])=><details key={q}><summary>{q}<ArrowRight/></summary><p>{a}</p></details>)}</div><div className="ae-centered-cta"><ContactButton label="Tirar uma dúvida pelo WhatsApp" message="Olá! Tenho uma dúvida sobre os serviços da Amaral Engenharia."/></div></div></section>

      <section className="ae-section ae-contact" id="contato"><div className="ae-container ae-contact-layout"><div><span className="ae-kicker">FALE CONOSCO</span><h2>Seu imóvel merece uma solução bem executada.</h2><p>Atendimento direto com Valluce Amaral, Engenheiro Civil e Perito.</p><ContactButton label="(61) 98327-7032" message="Olá, Valluce! Quero solicitar um orçamento."/></div><div className="ae-contact-card"><span className="ae-contact-logo">AE</span><h3>AMARAL ENGENHARIA</h3><small>ENGENHARIA CIVIL • PERÍCIAS</small><div><MapPin/><span><small>Atendimento</small><b>Brasília — DF</b></span></div><div><MessageCircle/><span><small>WhatsApp</small><b>(61) 98327-7032</b></span></div><div><Award/><span><small>Responsável técnico</small><b>CREA 27125 / D MG</b></span></div></div></div></section>
    </main>

    <footer className="ae-footer"><div className="ae-container"><div className="ae-footer-grid"><div><div className="ae-footer-brand"><span>AE</span><div><b>AMARAL ENGENHARIA</b><small>ENGENHARIA CIVIL • PERÍCIAS</small></div></div><p>Reformas, telhados e serviços de engenharia em Brasília/DF.</p></div><div><h4>Serviços</h4><a href="#servicos">Todos os serviços</a><a href="#telhados">Telhados</a><a href="#engenharia">Engenharia técnica</a></div><div><h4>Atendimento</h4><span>Brasília — DF</span><span>Lago Norte • Lago Sul</span><span>Jardim Botânico • Plano Piloto</span><a href={WHATSAPP} target="_blank" rel="noreferrer">(61) 98327-7032</a></div></div><div className="ae-footer-bottom"><span>© 2026 Amaral Engenharia. Todos os direitos reservados.</span><span>Engº Civil • Perito • CREA 27125 / D MG</span></div></div></footer>
    <a className="ae-whatsapp" href={wa("Olá! Vim pelo site da Amaral Engenharia e quero solicitar um orçamento.")} target="_blank" rel="noreferrer" aria-label="Falar no WhatsApp"><MessageCircle/></a>
  </div>;
}

export const Route = createFileRoute("/")({ component: Index });
