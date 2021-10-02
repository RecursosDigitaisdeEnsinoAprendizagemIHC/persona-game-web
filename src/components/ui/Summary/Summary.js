import React from "react";

// components
import {
  Container,
  ContentItem,
  ItemDot,
  Content,
  ContentTitle,
  ContentDescription,
} from "./Summary.styles";
import PersonaStepsTable from "../PersonaStepsTable/PersonaStepsTable";

const content = {
  firstSection: {
    title: "O que é uma persona?",
    description:
      "Uma persona é um personagem fictício, arquétipo hipotético de um grupo de usuários reais, criada para descrever um usuário típico (Cooper et al., 2007; Pruitt e Adlin, 2006; Cooper, 1999)[2]",
  },
  secondSection: {
    title: "Para que serve uma persona?",
    description:
      "É utilizada principalmente para representar um grupo de usuários finais durante discussões de design, mantendo todos focados no mesmo alvo. As personas são definidas principalmente por seus objetivos, que são determinados num processo de refinamentos sucessivos durante a investigação inicial do domínio de atividade do usuário. Em geral, começamos com uma aproximação razoável e convergimos numa população plausível de personas.[2]",
  },
  thirdSection: {
    title: "Qual o motivo para se usar personas?",
    description:
      "Cooper afirma que, em vez de ampliarmos a funcionalidade do produto para acomodar a maior parte das pessoas, devemos tentar projetar especificamente para uma única persona. Ele argumenta que, a cada vez que estendemos a funcionalidade para incluir mais um grupo de usuários, colocamos mais um obstáculo no caminho de todos os outros usuários. Em outras palavras, os recursos que agradam alguns usuários interferem na satisfação e no desempenho de outros. Segundo ele, tentar agradar muitos pontos de vista diferentes pode arruinar um bom produto.[2]",
  },
  fourthSection: {
    title: "O que é a técnica de personas?",
    description:
      "É uma técnica para criar uma representação confiável e realista do principal segmento do público-alvo. Ela é baseada em estudos quantitativos. [1]",
  },
  fifthSection: {
    title: "Onde usar?",
    description:
      "Uma persona pode ser utilizada em reuniões como uma ferramenta de discussão, em avaliações por inspeção, storyboarding, encenações (role-playing) e outras atividades voltadas à qualidade de uso do sistema.",
  },
  sixthSection: {
    title: "Como construir?",
    description:
      "Para a definição de uma persona, existem várias etapas a serem seguidas para conhecer o perfil do seu usuário final. Para isso, podemos usar como base as etapas apresentadas na tabela abaixo:",
  },
};

const ContentSection = ({ item }) => {
  const { title, description } = item;

  return (
    <ContentItem>
      <ItemDot />
      <Content>
        <ContentTitle>{title}</ContentTitle>
        <ContentDescription>{description}</ContentDescription>
        {title === "Como construir?" && <PersonaStepsTable />}
      </Content>
    </ContentItem>
  );
};

const Summary = () => {
  return (
    <Container>
      {Object.keys(content).map((item, index) => (
        <ContentSection key={index} item={content[item]} />
      ))}

      <ContentItem>
        <Content>
          <ContentTitle>Referências</ContentTitle>
          <ContentDescription>
            <div>
              1. Usability gov {`<`}
              <a href="https://www.usability.gov/how-to-and-tools/methods/personas.html#main-content">
                https://www.usability.gov/how-to-and-tools/methods/personas.html#main-content
              </a>
              {`>`}
            </div>
            <div>2. Barbosa e Silva, Interação Humano-Computador.</div>
          </ContentDescription>
        </Content>
      </ContentItem>
    </Container>
  );
};

export default Summary;
