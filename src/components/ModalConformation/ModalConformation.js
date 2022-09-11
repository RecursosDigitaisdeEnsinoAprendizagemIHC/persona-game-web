import React from "react";

import Button from '../Button/Button';
import { Container, Card, Title, CardContent, AlertImg, ButtonGroup} from "./ModalConfirmation.style";

const ModalConfirmation = ({ openModal, setIsOpenModal, handleConfirm}) => {
     return (
        <>
            {
                openModal && 
                <Container>
                    <Card>
                        <CardContent>
                            <AlertImg src="/alert.svg" />
                            <Title>Realmente deseja confirmar essa ação?</Title>
                        </CardContent>
                        <ButtonGroup>
                            <Button
                                onClick={() => setIsOpenModal(false)}
                                color="secondary"
                                TooltipText="voltar para tela anterior"
                            >
                                Voltar
                            </Button>
                            <Button
                                onClick={() => {
                                    setIsOpenModal(false)
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