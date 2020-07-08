import React from 'react';
import { Container, CategoryImage } from './styled.js';
export default ({data, active,setActive}) => {
    const handleClick = () => {
        setActive(data.id);
    };
    return(
        <Container data-tip={data.name} data-for="tip-top" active={active} id={data.id} onClick={handleClick}>
            <CategoryImage src={data.image}/>
        </Container>
    );
}