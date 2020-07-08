import styled from 'styled-components';

export const Container = styled.div`
    background-color:#136713;
    border-radius:5px;
    width:100%;
    display:flex;
    justify-content:space-between;
    align-items:center;
`;

export const Logo = styled.img`
    width:auto;
    height:70px;
    margin: 10px;
`;

export const SearchInput = styled.input`
    height:40px;
    border-radius:50px;
    width:${props => props.active ? '200':'0'}px;
    outline:0;
    background-color:#FFF;
    background-image:url('/assets/images/search.png');
    background-size:30px;
    background-repeat:no-repeat;
    background-position: 10px center;
    margin-right:10px;
    padding-left:50px;
    transition: all ease .3s;
    border:0;
    cursor:pointer;
    font-size:15px;
    &:focus{
        cursor:text;
    }
`;