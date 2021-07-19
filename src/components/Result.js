import React from 'react';
import styled from '@emotion/styled';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

const Message = styled.p`
    background-color: rgb(127, 224, 237);
    margin-top: 2rem;
    padding: 1rem;
    text-align: center;
`;

const QuotationResult = styled.div`
    text-align: center;
    padding: .5rem;
    border: 1px solid #26c6da;
    background-color: rgb(127, 224, 237);
    margin-top: 1rem;
    position: relative;
`;

const QuotationText = styled.p`
    color: #00838f;
    padding: 1rem;
    text-transform: uppercase;
    font-weight: bold;
    margin: 0;
    text-align: center;
`;

export const Result = ({ quotation }) => {

    return (
        ( !quotation ) 
            ? <Message>Elige marca, año y tipo de seguro</Message> 
            : (
                <QuotationResult>
                    <TransitionGroup
                        component="span"
                        className="resultado"
                    >
                        <CSSTransition
                            classNames="resultado"
                            key={ quotation }
                            timeout={{ enter:500, exit:500 }}
                        >
                            <QuotationText>El total es: $ <span>{ quotation }</span>  </QuotationText>
                        </CSSTransition>
                    </TransitionGroup>
                </QuotationResult>
            )
    )
}
