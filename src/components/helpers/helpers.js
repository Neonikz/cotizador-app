
//Obtiene la diferencia de años
export const yearDiference = year => {
    return new Date().getFullYear() - year;
} 

//Calcula el total a pagar segun la marca
export const calculateBrand = brand => {
    let increment;

    switch( brand ){
        case 'europeo':
            increment = 1.30;
            break;

        case 'americano':
            increment = 1.15;
            break;

        case 'asiatico': 
            increment = 1.05;
            break;

        default:
            break;
    }

    return increment;
}

//Calcula el tipo de seguro
export const getPlan = plan => {
    return ( plan === 'basico' ) ? 1.20 : 1.50;
}

//Muestra la primer letra mayuscula
export const firtsLetter = text => {
    return text.charAt(0).toUpperCase() + text.slice(1); 
}