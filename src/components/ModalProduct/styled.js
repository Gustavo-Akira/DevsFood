import styled from 'styled-components';

export const Container = styled.div`
    width:50vw;
    padding:10px;
    min-width:510px;
`;

export const ProductArea = styled.div`
    height:100px;
    display:flex;
`;

export const ProductButtons = styled.div`
    margin-top: 10px;
    height:50px;
    display:flex;
    justify-content:flex-end;
`;

export const ProductPhoto = styled.img`
    border-radius:10px;
    width:50%;
    height:20vh;
    margin-right:10px;
`;

export const ProductInfoArea = styled.div`
    flex:1;
    display:flex;
    flex-direction:column;
    justify-content:space-between;
`;

export const ProductDetails = styled.div`
    height:50px;
`;

export const ProductQuantityArea = styled.div`
    height: 50px;
    display:flex;
    justify-content:space-between;
`;

export const ProductName = styled.div`
    font-size:1.5rem;
    font-weight: bold;
`;

export const ProductIngredientes = styled.div`
    font-size:.9em
`;

export const ProductButton = styled.button`
    border:0;
    background-color: #073C07;
    box-shadow: 4px 5px 0px rgba(0,0,0,.15);
    color:#FFF;
    font-size:${props=> props.small ? '9px': '15px'};
    font-weight:bold;
    padding: ${props=> props.small ? '1px 2px': '5px 10px'};
    margin-left: 10px;
`;

export const ProductQuantity = styled.div`
    display:flex;
    align-items:center;
    background:#073C07;
`;

export const ProductQtImage = styled.img`
    width:14px;
    height:auto;
    margin-left:10px;
    margin-right:10px;
    cursor:pointer;
`;

export const ProductQtText = styled.div`
    font-size:20px;
    color:white;
`;

export const ProductPrice = styled.div`
    font-size:20px;
    font-weight:bold;
    display:flex;
    align-items:center;
`;