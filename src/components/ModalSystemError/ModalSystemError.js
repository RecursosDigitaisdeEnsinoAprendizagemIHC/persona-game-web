import React, { useState } from "react";

import Button from '../Button/Button';
import { Container, Card, Title, SubTitle, Body, CardContent, AlertImg} from "./ModalSystemError.style";

const ModalSystemError = ({ openModal, error, message }) => {
    const [isOpen, setIsOpen] = useState(openModal)
     return (
        <>
            {
                isOpen && 
                <Container>
                <Card>
                    <CardContent>
                    <AlertImg src="/error.svg" />
                    <Body>
                        <Title>Erro no sistema</Title>
                        <SubTitle>{`Erro: ${error}`}</SubTitle>
                        <SubTitle>{`Mensagem: ${message}`}</SubTitle>
                    </Body>
                    </CardContent>
    
                    <Button
                        onClick={() => setIsOpen(false)}
                        color="secondary"
                    >
                        Fechar
                    </Button>
                </Card>
            </Container>
            }
        </>
        
  );
};

export default ModalSystemError;