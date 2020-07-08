import React,{useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {
    CartArea,
    CartBody,
    CartHeader,
    CartText,
    CartIcon,
    ProductItem,
    ProductInfoArea,
    ProductsArea,
    ProductPhoto,
    ProductQuantityArea,
    ProductName,
    ProductPrice,
    ProductsQtText,
    ProductQtIcon
} from './styled';

export default () => {
    const dispatch = useDispatch();
    const products = useSelector(state => state.cart.products);

    const [show,setShow] = useState(false);

    const handleChange = (key,type) => {
        dispatch({
            type: 'CHANGE_PRODUCT',
            payload:{key,type}
        })
    }
    return(
        <CartArea >
            <CartHeader onClick={()=>setShow(!show)}>
                <CartIcon src="/assets/images/cart.png"/>
                <CartText>Meu carrinho({products.length})</CartText>
                {show &&
                    <CartIcon style={{justifySelf:'flex-end'}} src="/assets/images/down.png"/>
                }
            </CartHeader>
            <CartBody show = {show}>
                <ProductsArea>
                    {products.map((item,index)=>(
                        <ProductItem key={index}>
                            <ProductPhoto src={item.image}/>
                            <ProductInfoArea>
                                <ProductName>{item.name}</ProductName>
                                <ProductPrice>R$ {(item.price * item.qt).toFixed(2)}</ProductPrice>
                            </ProductInfoArea>
                            <ProductQuantityArea>
                                <ProductQtIcon src="/assets/images/minus.png" onClick={()=>handleChange(index,'-')}/>
                                    <ProductsQtText>{item.qt}</ProductsQtText>
                                <ProductQtIcon src="/assets/images/plus.png" onClick={()=>handleChange(index,'+')}/>
                            </ProductQuantityArea>
                        </ProductItem>
                    ))}
                </ProductsArea>
            </CartBody>
        </CartArea>
    );
}