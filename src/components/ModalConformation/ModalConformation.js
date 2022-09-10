import React, { useState } from "react";

import Button from '../Button/Button';
import { Container, Card, Title, CardContent, AlertImg, ButtonGroup} from "./ModalConfirmation.style";

const ModalConfirmation = ({ openModal, handleConfirm}) => {
    const [isOpen, setIsOpen] = useState(openModal)
     return (
        <>
            {
                isOpen && 
                <Container>
                    <Card>
                        <CardContent>
                            <AlertImg src="/alert.svg" />
                            <Title>Realmente deseja confirmar essa ação?</Title>
                        </CardContent>
                        <ButtonGroup>
                            <Button
                                onClick={() => setIsOpen(false)}
                                color="secondary"
                                TooltipText="voltar para tela anterior"
                            >
                                Voltar
                            </Button>
                            <Button
                                onClick={() => {
                                    setIsOpen(false)
                                    handleConfirm()
                                }}
                                color="primary"
                                TooltipText="confirmar ação"
                            >
                                Confirmar
                            </Button>
                        </ButtonGroup>
                    </Card>
            </Container>
            }
        </>
        
  );
};

export default ModalConfirmation;