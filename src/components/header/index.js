import React from 'react';

import { Link as ReactRouterLink } from 'react-router-dom';

import { Background, Container, Logo, ButtonLink } from './styles/header'

export default function Header({ bg = true, children, ...restProps }) {
    return bg ? <Background {...restProps} >{children}</Background> : { children }
};

Header.Frame = function headerFrame({ children, ...restProps }) {
    return <Container {...restProps}>{children}</Container>
}

Header.ButtonLink = function headerButtonLink({ children, ...restProps }) {
    return <ButtonLink {...restProps}>{children}</ButtonLink>
}

Header.Logo = function headerLogo({ to, ...restProps }) {
    return (
        <ReactRouterLink to={to}>
            <Logo {...restProps} />
        </ReactRouterLink>
    )
}