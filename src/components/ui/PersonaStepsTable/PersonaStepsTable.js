import React from "react";

// components
import {
  Container,
  Header,
  Row,
  ListItem,
  AuthorReference,
} from "./PersonaStepsTable.styles";

const Table = () => {
  return (
    <Container>
      <Header>
        <span>Objetivo</span>
        <span>Questões</span>
      </Header>

      <Row>
        <div>Defina a finalidade/visão do local</div>
        <div>
          <ListItem>
            <li>Qual é o objetivo do site?</li>
            <li>Quais são os objetivos do site?</li>
          </ListItem>
        </div>
      </Row>

      <Row>
        <div>Descreva o usuário</div>
        <div>
          Pessoal
          <ListItem>
            <li>Qual é a idade da sua pessoa?</li>
            <li>Qual é o gênero da sua pessoa?</li>
            <li>Qual é o nível de educação da sua pessoa?</li>
          </ListItem>
          Profissional
          <ListItem>
            <li>Quanta experiência de trabalho sua pessoa tem?</li>
            <li>Qual é a formação profissional da sua pessoa?</li>
            <li>
              Por que eles virão ao site? (necessidades, interesses e objetivos
              do usuário)
            </li>
            <li>
              Onde (ou de quem) mais essa pessoa está obtendo informações sobre
              o seu problema ou programas ou serviços semelhantes?
            </li>
            <li>
              Quando e onde os usuários acessarão o site? (Ambiente e contexto
              do usuário)
            </li>
          </ListItem>
          Técnico
          <ListItem>
            <li>
              Quais dispositivos tecnológicos sua pessoa usa regularmente?
            </li>
            <li>Que software e/ou aplicativos sua pessoa usa regularmente?</li>
            <li>
              Por meio de qual dispositivo tecnológico seu usuário acessa
              principalmente a web para obter informações?
            </li>
            <li>
              Quanto tempo sua pessoa gasta navegando na web todos os dias?
            </li>
          </ListItem>
        </div>
      </Row>

      <Row>
        <div>Motivação do usuário</div>
        <div>
          <ListItem>
            <li>Qual é a motivação da sua pessoa?</li>
            <li>O que eles estão procurando?</li>
            <li>O que sua pessoa está procurando fazer?</li>
            <li>Quais são suas necessidades?</li>
          </ListItem>
        </div>
      </Row>

      <AuthorReference>Fonte: Usability gov {`[1]`}</AuthorReference>
    </Container>
  );
};

export default Table;
