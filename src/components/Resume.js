import React from 'react';
import styled from '@emotion/styled';
import { firtsLetter } from './helpers/helpers';

const ResumeContainer = styled.div`
    padding: 1rem;
    text-align: center;
    background-color: #00838f;
    color: #fff;
    margin-top: 1rem;
`;

export const Resume = ({ data }) => {

    const { brand, year, plan } = data;

    return (
        <ResumeContainer>
            <h2>Resumen de cotización</h2>     
            <ul>
                <li>Marca: { firtsLetter(brand) } </li>
                <li>Plan: { firtsLetter(plan) } </li>
                <li>Año del auto: { year } </li>
            </ul>       
        </ResumeContainer>
    )
}
