import React from 'react';
import Logo from '../images/logo copy 1.png';

function Header() {
    const menu_list = ['О нас', 'Услуги', 'Аренда'];

    return (
        <header className="header">
            <img className="header__logo" src={Logo} alt="Logo"></img>
            <ul className="header__menu-list">
                {menu_list.map((el, ind) => <li key={ind}>{el}</li>)}
            </ul>
            <button className="header__button">Связаться</button>
        </header>
    );
}

export default Header;
