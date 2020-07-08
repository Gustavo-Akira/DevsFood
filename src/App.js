import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";

import HomeScreen from './pages/HomeScreen';
import Tela2Screen from './pages/Tela2Screen';
import { Container, Menu, PageBody } from './AppStyled';
import MenuItem from './components/MenuItem';
import PrivateRoute from './components/PrivateRoute';
import Cart from './components/Cart';
import ReactTooltip from 'react-tooltip';


export default () => {

    return (
        <BrowserRouter>
            <Container>
                <Menu>
                    <MenuItem title="loja" icon="/assets/images/store.png" link="/"/>
                    <MenuItem title="pedidos" icon="/assets/images/order.png" link="/order"/>
                    <MenuItem title="perfil" icon="/assets/images/profile.png" link="/profile"/>
                </Menu>
                <PageBody>
                    <Switch>
                        <Route exact path="/">
                            <HomeScreen />
                        </Route>
                        <PrivateRoute exact path="/order">
                            <div>Tela de pedidos</div>
                        </PrivateRoute>
                        <PrivateRoute exact path="/profile">
                            <div>Tela de perfil</div>
                        </PrivateRoute>
                        <Route path="/tela2/:nome">
                            <Tela2Screen />
                        </Route>
                    </Switch>
                </PageBody>
                <Cart/>
            </Container>
            <ReactTooltip id="tip-top" place="top" effect="solid"/>
            <ReactTooltip id="tip-right" place="right" effect="solid"/>
        </BrowserRouter>
    );
}