import styled from 'styled-components';

export const Container = styled.div`
    background-color: #FFF;
    border-radius: 5px;
    box-shadow: 0px 3px 6px rgba(0,0,0,0.16);
    padding:10px;
    display:flex;
    align-items:center;
    color:#136713;
    @media( max-width:600px){
        max-width: 250px;
    }
`;

export const ProductAreaPhoto =styled.div`
    width:100px;
`;
export const ProductInfoArea =styled.div`
    flex:1;
    margin-left:10px;
`;
export const ProductButtonArea =styled.div``;

export const ProductPhoto = styled.img`
    width:100%;
`;

export const ProductName = styled.div`
    font-size:20px;
    font-weight:bold;
`;
export const ProductPrice = styled.div`
    font-size:14px;
`;
export const ProductIngredients = styled.div`
    font-size:11px;
`;

export const ProductButton = styled.img`
    width:15px;
`;