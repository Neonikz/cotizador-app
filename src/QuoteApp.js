import React, { useState } from 'react';
import { Header } from './components/Header';
import styled from '@emotion/styled';
import { Form } from './components/Form';
import { Resume } from './components/Resume';
import { Result } from './components/Result';
import { Spinner } from './components/Spinner';

//Style components
const Container = styled.div`
    max-width: 600px;
    margin: 0 auto;
     
`;

const FormContainer = styled.div`
    background-color: #fff;
    padding: 3rem;
`;

export const QuoteApp = () => {

    //State del resumen total
    const [resume, setResume] = useState({});
    const { quotation, data } = resume;

    //State del spinner 
    const [loading, setLoading] = useState(false);

    return (
        <Container>
            <Header 
                tittle="Cotizador de Seguros"    
            />

            <FormContainer>
                <Form
                    setResume={ setResume }
                    setLoading={ setLoading }
                />
                { loading && <Spinner /> }
                
                { data && <Resume data={ data } /> }
                
                { !loading && <Result quotation={ quotation } /> }
                
            </FormContainer>
        </Container>
    )
}
