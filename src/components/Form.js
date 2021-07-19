import React, { useState } from 'react';
import styled from '@emotion/styled';
import { useForm } from '../hooks/useForm';
import { calculateBrand, getPlan, yearDiference } from './helpers/helpers';

//Style components
const Field = styled.div`
    display:flex;
    margin-bottom: 1rem;
    align-items: center;
`;

const Label = styled.label`
    flex: 0 0 100px;
`;

const Select = styled.select`
    display: block;
    width: 100%;
    padding: 1rem;
    border: 1px solid #e1e1e1;
    -webkit-appearance: none;
`;

const InputRadio = styled.input`
    margin: 0 1rem;
`;

const Button = styled.button`
    background-color: #00838f;
    font-size: 16px;
    width: 100%;
    padding: 1rem;
    color: #fff;
    text-transform: uppercase;
    font-weight: bold;
    border: none;
    transition: background-color .3s ease;
    margin-top: 2rem;
    &:hover{ 
        background: #26c6da;
        cursor: pointer;
    }
`;

const Error = styled.div`
    background-color: #ff0000;
    color: #fff;
    padding: 1rem;
    width: 100%;
    text-align: center;
    margin-bottom: 2rem;
`;

export const Form = ({ setResume, setLoading }) => {

    //State de los datos del form
    const [ data, handleInputChange] = useForm({
        brand:'',
        year:'',
        plan:''
    });
    const { brand, year, plan } = data;

    //State del error
    const [error, setError] = useState(false);

    //Submit del form
    const handleSubmit = e => {
        e.preventDefault();

        //Validar
        if( !brand.trim() || !year.trim() || !plan.trim() ){
            setError(true);
            return;
        }
        setError(false);

        //Base de $2000
        let result = 2000;

        //Obtener la diferencia de años
        const diference = yearDiference( year );

        //Por cada año restar el 3% del valor
        result -= (( diference * 3 ) * result) / 100;

        // Americano 15%
        // Asiatico 5%
        // Europeo 30%
        result = calculateBrand( brand ) * result;

        //Básico aumenta 20%
        //Completo aumenta 50%
        const planIncrement = getPlan( plan );
        result = parseFloat( planIncrement * result ).toFixed( 2 );

        //Mostramos el Spinner
        setLoading( true );

        setTimeout(() => {

            //Elimina el spinner
            setLoading( false );
            //Guardar total
            setResume({
                quotation: Number(result),
                data
            });
        }, 3000);

    }


    return (
        <form
            onSubmit={ handleSubmit }
        >

            { error && <Error>Todos los campos son obligatorios</Error> }

            <Field>
                <Label>Marca</Label>
                <Select
                    name="brand"
                    value={ brand }
                    onChange={ handleInputChange }
                >
                    <option value="">-- Seleccione --</option>
                    <option value="americano">Americano</option>
                    <option value="europeo">Europeo</option>
                    <option value="asiatico">Asiatico</option>
                </Select>
            </Field>

            <Field>
                <Label>Año</Label>
                <Select
                    name="year"
                    value={ year }
                    onChange={ handleInputChange }
                    >
                    <option value="">-- Seleccione --</option>
                    <option value="2021">2021</option>
                    <option value="2020">2020</option>
                    <option value="2019">2019</option>
                    <option value="2018">2018</option>
                    <option value="2017">2017</option>
                    <option value="2016">2016</option>
                    <option value="2015">2015</option>
                    <option value="2014">2014</option>
                    <option value="2013">2013</option>
                    <option value="2012">2012</option>
                </Select>

            </Field>

            <Field>
                <Label>Plan</Label>
                <InputRadio 
                    type="radio"
                    name="plan"
                    value="basico"
                    checked={ plan === "basico" }
                    onChange={ handleInputChange }
                    /> Básico
                <InputRadio 
                    type="radio"
                    name="plan"
                    value="completo"
                    checked={ plan === "completo" }
                    onChange={ handleInputChange }
                /> Completo
            </Field>
                <Button type="submit">Cotizar</Button>
        </form>
    )
}
