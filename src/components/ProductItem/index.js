import React from 'react';
import {
    Container,
    ProductAreaPhoto,
    ProductPhoto,
    ProductButton,
    ProductInfoArea,
    ProductName,
    ProductIngredients,
    ProductPrice,
    ProductButtonArea
} from './styled';

export default ({data, onClick}) => {
    const handleClick = () =>{
        onClick(data);
    }
    return(
        <Container onClick={handleClick}>
            <ProductAreaPhoto>
                <ProductPhoto src={data.image}/>
            </ProductAreaPhoto>
            <ProductInfoArea>
                <ProductName>{data.name}</ProductName>
                <ProductPrice>R$:{data.price}</ProductPrice>
                <ProductIngredients>{data.ingredients}</ProductIngredients>
            </ProductInfoArea>
            <ProductButtonArea>
                <ProductButton src="/assets/images/next.png"/>
            </ProductButtonArea>
        </Container>
    );
}  