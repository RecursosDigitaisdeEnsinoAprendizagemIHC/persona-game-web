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
                            >
                                Voltar
                            </Button>
                            <Button
                                onClick={() => {
                                    setIsOpen(false)
                                    handleConfirm()
                                }}
                                color="primary"
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