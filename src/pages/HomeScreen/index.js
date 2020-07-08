import React, { useState, useEffect } from 'react';
import { Container, CategoryArea, CategoryList, ProductArea, ProductList, ProductPaginationArea, ProductPaginationItem } from './styled';
import Header from '../../components/Header';
import api from '../../api';
import CategoryItem from '../../components/CategoryItem';
import ReactTooltip from 'react-tooltip';
import ProductItem from "../../components/ProductItem";
import Modal from '../../components/Modal';
import ModalProduct from '../../components/ModalProduct';
let searchTimer = null;
export default () => {
    const [totalPages, setTotalPages] = useState(0);

    const [search,setSearch] = useState('');
    const [categories, setCategories] = useState([]);
    const [products, setProducts] = useState([]);
    
    const [modalStatus, setModalStatus] = useState(false);
    const [modalData, setModalData] = useState({});

    const [activeCategory, setActiveCategory] = useState(0);
    const [activePage, setActivePage] = useState(1);
    const [activeSearch, setActiveSearch] = useState('')
    const getProducts = async () => {
        const prods = await api.getProducts(activeCategory,activePage,activeSearch);
        if(prods.error === ''){
            setProducts(prods.result.data);
            setTotalPages(prods.result.pages);
            setActivePage(prods.result.page);
        }
    }
    const handleProduct = (data) => {
        setModalData(data);
        setModalStatus(true);
    }
    useEffect(()=>{
        const getCategories= async() =>{
            const cat = await api.getCategories();
            if(cat.error === ''){
                await setCategories(cat.result);
                console.log("aaaa");
            }
            console.log(cat.result);
            ReactTooltip.rebuild();
        }
        getCategories();
    },[]);
    useEffect(()=>{
        setProducts([]);
        getProducts();
    },[activeCategory, activePage, activeSearch]);
    useEffect(()=>{
        clearTimeout(searchTimer);
        searchTimer = setTimeout(()=>{
            setActiveSearch(search);
        },2000)
    },[search])
    return (
        <Container>
            <Header search={search} onSearch={setSearch}/>
            {categories.length > 0 &&
                <>
                    <CategoryArea>
                        Selecione uma categoria
                        <CategoryList>
                            <CategoryItem setActive={setActiveCategory} active={activeCategory} data={{id:0,name:'Todas as Categorias', image:'/assets/images/food-and-restaurant.png'}}/>
                            {categories.map((item, index) =>
                                <CategoryItem setActive={setActiveCategory} active={activeCategory} key={index} data={item}/>
                            )}
                        </CategoryList>
                    </CategoryArea>
                </>
            }
            {products.length > 0 &&
            <ProductArea>
                <ProductList>
                    {products.map((item, index)=>
                        <ProductItem key={index} data={item} onClick={handleProduct}/>
                    )}
                </ProductList>
            </ProductArea>
            }
            {totalPages > 0 &&
                <ProductPaginationArea>
                    {Array(totalPages).fill(0).map((item,index)=>
                        <ProductPaginationItem active={activePage} key={index} current={index+1} onClick={()=>setActivePage(index+1)}>
                            {index + 1}
                        </ProductPaginationItem>
                    )}
                </ProductPaginationArea>
            }
            <Modal  status = {modalStatus} setStatus={setModalStatus}>
                <ModalProduct data={modalData} setStatus={setModalStatus}/>
            </Modal>
        </Container>
    );
}