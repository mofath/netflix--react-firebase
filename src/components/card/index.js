import React, { useState, useContext, createContext } from 'react';

import { Container, Group, Title, SubTitle, Text, Item, Image, Enteties, Maturity, Content, FeatureClose, FeatureText, Feature, Meta, FeatureTitle } from './styles/card'

export const FeatureContext = createContext();

export default function Card({ children, ...restProps }) {
    const [ShowFeature, setShowFeature] = useState(false);
    const [ItemFeature, setItemFeature] = useState({});

    return (
        <FeatureContext.Provider value={{ ShowFeature, setShowFeature, ItemFeature, setItemFeature }}>
            <Container {...restProps}>{children}</Container>
        </FeatureContext.Provider>
    )
};

Card.Group = function cardGroup({ children, ...restProps }) {
    return <Group {...restProps}>{children}</Group>
};

Card.Title = function cardTitle({ children, ...restProps }) {
    return <Title {...restProps}>{children}</Title>
};

Card.SubTitle = function cardSubTitle({ children, ...restProps }) {
    return <SubTitle {...restProps}>{children}</SubTitle>
};

Card.Text = function cardText({ children, ...restProps }) {
    return <Text {...restProps}>{children}</Text>
};

Card.Meta = function cardMeta({ children, ...restProps }) {
    return <Meta {...restProps}>{children}</Meta>
};


Card.Item = function CardItem({ item, children, ...restProps }) {
    const { setShowFeature, setItemFeature } = useContext(FeatureContext);

    return (
        <Item
            onClick={() => {
                setItemFeature(item);
                setShowFeature(true);
            }}
            {...restProps}
        >
            {children}
        </Item>
    );
};

Card.Enteties = function cardEnteties({ children, ...restProps }) {
    return <Enteties {...restProps} >{children}</Enteties>
}

Card.Image = function cardImage({ src, ...restProps }) {
    return <Image src={src} {...restProps} />
}

Card.Maturity = function cardMaturity({ children, ...restProps }) {
    return <Maturity {...restProps} >{children}</Maturity>
}

Card.Content = function cardContent({ children, ...restProps }) {
    return <Content {...restProps} >{children}</Content>
}

Card.Feature = function CardFeature({ children, category, ...restProps }) {
    const { ShowFeature, setShowFeature, ItemFeature } = useContext(FeatureContext);

    return ShowFeature ? (
        <Feature {...restProps} src={`images/${category}/${ItemFeature.genre}/${ItemFeature.slug}/large.jpg`} >
            <Content>
                <FeatureTitle>{ItemFeature.title}</FeatureTitle>
                <FeatureText>{ItemFeature.description}</FeatureText>
                <FeatureClose onClick={() => setShowFeature(false)}>
                    <img src='/images/icons/close.png' alt="Close" />
                </FeatureClose>
                <Group margin="30px 0" flexDirection="row" alignItems="center">
                    <Maturity rating={ItemFeature.maturity}>
                        {ItemFeature.maturity < 12 ? 'PG' : ItemFeature.maturity}
                    </Maturity>
                    <FeatureText fontWeight="bold">
                        {ItemFeature.genre.charAt(0).toUpperCase() + ItemFeature.genre.slice(1)}
                    </FeatureText>
                </Group>
                {children}
            </Content>
        </Feature >
    ) :
        null
}