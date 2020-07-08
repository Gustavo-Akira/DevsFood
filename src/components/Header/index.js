import React,{useState} from 'react';
import {Container, Logo, SearchInput} from './styled';

export default ({search,onSearch}) => {
    const [inputActive, setInputActive] = useState(search === '' ? false:true);
    const handleInputFocus = () =>{
        setInputActive(true);
    };
    const handleInputBlur = () =>{
        if(search === '')
        setInputActive(false);
    };
    const handleChange = (e) =>{
        onSearch(e.target.value);
    }
    return(
        <Container>
            <Logo src="/assets/images/logo.png"/>
            <SearchInput 
                type="text" 
                placeholder="Pesquisa"
                onFocus={handleInputFocus}
                onBlur={handleInputBlur}
                active={inputActive}
                onChange={handleChange}
                value={search}
            />
        </Container>
    );
}