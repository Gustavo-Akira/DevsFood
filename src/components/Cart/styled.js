import styled from 'styled-components';

export const CartArea = styled.div`
    background-color:#136713;
    position:fixed;
    bottom:0;
    right: 30px;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
`;

export const CartIcon = styled.img`
    width:23px;
    height:auto;
    margin-right:10px;
`;

export const CartBody = styled.div`
    display: ${props=>props.show ? 'block' : 'none'};
    color:#FFF;
`;

export const CartText = styled.div`
    color:#FFF;
    font-size:17px;
`;

export const CartHeader = styled.div`
    width:100%;
    height:50px;
    display:flex;
    align-items:center;
    justify-content:space-around;
`;

export const ProductsArea = styled.div``;

export const ProductItem = styled.div`
    display:flex;
    align-items:center;
    margin: 10px;
`;

export const ProductPhoto = styled.img`
    width: 64px;
    height: auto;
    border-radius:10px;
`;

export const ProductInfoArea = styled.div`
    flex:1;
`;

export const ProductName = styled.div`
    font-size: 19px;
    font-weight:bold;
`;

export const ProductPrice = styled.div`
    font-size:13px;
`;

export const ProductQuantityArea = styled.div`
    display:flex;
    justify-content:space-between;
`;

export const ProductQtIcon = styled.img`
    width:13px;
    height:13px;
    margin-left:10px;
    margin-right:10px;
    cursor:pointer;
`;

export const ProductsQtText = styled.div`
    font-size:13px;
    font-weight:bold;
`;