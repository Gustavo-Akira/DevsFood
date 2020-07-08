import React,{useState, useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {
    Container,
    ProductArea,
    ProductPhoto,
    ProductInfoArea,
    ProductDetails,
    ProductQuantityArea,
    ProductButtons,
    ProductIngredientes,
    ProductName,
    ProductButton,
    ProductQtImage,
    ProductQtText,
    ProductPrice,
    ProductQuantity
} from './styled';

export default ({data, setStatus}) => {
    const dispatch = useDispatch();
    const [qt, setQt] = useState(0);
    const handleQt = (number) => {
        if(qt === 0 && number === -1){
            setQt(0);
        }else{
            number = qt + number; 
            setQt(number);
        }
    }
    const handleToCart = () =>{
        dispatch({
            type:'ADD_PRODUCT',
            payload:{data,qt}
        })
        setStatus(false);
    }
    useEffect(()=>{
        setQt(0);
    },[data])
    return(
        <Container>
            <ProductArea>
                    <ProductPhoto src={data.image}/>
                    <ProductInfoArea>
                        <ProductDetails>
                            <ProductName>{data.name}</ProductName>
                            <ProductIngredientes>
                                {data.ingredients}
                            </ProductIngredientes>
                        </ProductDetails>
                        <ProductQuantityArea>
                            <ProductQuantity>
                                <ProductQtImage onClick={()=>handleQt(-1)} src="/assets/images/minus.png"/>
                                    <ProductQtText>{qt}</ProductQtText>
                                <ProductQtImage onClick={()=>handleQt(1)} src="/assets/images/plus.png"/>
                            </ProductQuantity>
                            <ProductPrice>
                                R$ {(data.price * qt).toFixed(2)}
                            </ProductPrice>
                        </ProductQuantityArea>
                    </ProductInfoArea>
            </ProductArea>
            <ProductButtons>
                <ProductButton small={true} onClick={()=>setStatus(false)}>Cancelar</ProductButton>
                <ProductButton onClick={handleToCart}>Adicionar ao Carrinho</ProductButton>
            </ProductButtons>
        </Container>
    );
}