import React from 'react';

import { Inner, Item, Container, Pane, Title, Subtitle, Image } from './styles/jumbotron';

export default function Jumbotron({ children, direction = 'row', ...restProps }) {
    return (
        <Item {...restProps}>
            <Inner direction={direction} >
                {children}
            </Inner>
        </Item>
    )
}

Jumbotron.Container = function JumbotronConainer({ children, ...restProps }) {
    return <Container {...restProps}>{children}</Container>
}

Jumbotron.Pane = function JumbotronConainer({ children, ...restProps }) {
    return <Pane {...restProps}>{children}</Pane>
}


Jumbotron.Title = function JumbotronConainer({ children, ...restProps }) {
    return <Title {...restProps}>{children}</Title>
}

Jumbotron.Subtitle = function JumbotronConainer({ children, ...restProps }) {
    return <Subtitle {...restProps}>{children}</Subtitle>
}

Jumbotron.Image = function JumbotronConainer({ ...restProps }) {
    return <Image  {...restProps} />
}

