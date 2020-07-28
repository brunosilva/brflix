import React from 'react';
import Logo from '../../assets/imgs/brflix.png';
import * as S from './styled';
import Button from '../../components/button/index'

function Menu(){
    return (
        <S.Nav>
            <a href="/">
                <S.Logo src={Logo} className="Logo" alt="Brflix Logo" />
            </a>

            <Button href="/">
                Novo vídeo
            </Button>
        </S.Nav>
    );
}

export default Menu;