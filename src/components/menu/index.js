import React from 'react';
import Logo from '../../assets/imgs/brflix.png';
import { Link } from 'react-router-dom';
import * as S from './styled';
import Button from '../../components/button/index'

function Menu(){
    return (
        <S.Nav>
            <Link to="/">
                <S.Logo src={Logo} className="Logo" alt="Brflix Logo" />
            </Link>

            <Button className="Button" href="/cadastro/video">
                Novo vídeo
            </Button>
        </S.Nav>
    );
}

export default Menu;