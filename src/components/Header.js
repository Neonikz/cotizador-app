import React from 'react';
import styled from '@emotion/styled';

//Style components
const HeaderContainer = styled.header`
    background-color: #26C6DA;
    padding: 10px;
    font-weight: bold;
    color: #FFF;
`;

const HeaderText = styled.h1`
    font-size: 2rem;
    margin: 0;
    font-family:'Slabo 27px', serif;
    text-align: center;
`;


export const Header = ({ tittle }) => {
    return (
        <HeaderContainer>
            <HeaderText>{ tittle }</HeaderText>
        </HeaderContainer>
    )
}
