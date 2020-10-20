import React from 'react';

import { Container, Title, Text, SubText, Error, Link, Input, Submit, Base } from './styles/from';


export default function Form({ children, ...restProps }) {
    return <Container {...restProps}>{children}</Container>
};

Form.Input = function fromInput({ children, ...restProps }) {
    return <Input {...restProps}>{children}</Input>;
};

Form.Submit = function fromSubmit({ children, ...restProps }) {
    return <Submit {...restProps}>{children}</Submit>;
};

Form.Error = function fromError({ children, ...restProps }) {
    return <Error {...restProps}>{children}</Error>;
};

Form.Base = function fromBase({ children, ...restProps }) {
    return <Base {...restProps}>{children}</Base>;
};


Form.Title = function fromTitle({ children, ...restProps }) {
    return <Title {...restProps}>{children}</Title>;
};

Form.Text = function fromText({ children, ...restProps }) {
    return <Text {...restProps}>{children}</Text>;
};

Form.SubText = function fromSubText({ children, ...restProps }) {
    return <SubText {...restProps}>{children}</SubText>;
};

Form.Link = function fromLink({ children, ...restProps }) {
    return <Link {...restProps}>{children}</Link>;
};