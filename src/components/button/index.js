import React from 'react';
import * as S from './styled';

function Button(props) {
    // props => { className: "o que alguém passar", href: "/" }

    return (
        <S.Button to={props.href} >
            {props.children}
        </S.Button>
    );
}

export default Button;