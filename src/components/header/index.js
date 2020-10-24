import React, { useState } from 'react';

import { Link as ReachRouterLink } from 'react-router-dom';

import { Background, Container, Logo, ButtonLink, Feature, Text, FeatureCallOut, Link, Group, Picture, Dropdown, Profile, Search, SearchIcon, SearchInput } from './styles/header'

export default function Header({ bg = true, children, ...restProps }) {
    return bg ? (
        <Background data-testid="header-bg" {...restProps}>
            {children}
        </Background>
    ) : (
            <Container>
                {children}
            </Container>
        );
}

Header.Feature = function HeaderFeature({ children, ...restProps }) {
    return <Feature>{children}</Feature>;
};

Header.Frame = function HeaderFrame({ children, ...restProps }) {
    return <Container {...restProps}>{children}</Container>;
};

Header.ButtonLink = function HeaderButtonLink({ children, ...restProps }) {
    return <ButtonLink {...restProps}>{children}</ButtonLink>;
};

Header.Logo = function HeaderLogo({ to, ...restProps }) {
    return (
        <ReachRouterLink to={to}>
            <Logo {...restProps} />
        </ReachRouterLink>
    );
};


Header.Text = function HeaderText({ children, ...restProps }) {
    return <Text {...restProps}>{children}</Text>;
};

Header.FeatureCallOut = function HeaderFeatureCallOut({ children, ...restProps }) {
    return <FeatureCallOut {...restProps}>{children}</FeatureCallOut>;
};

Header.TextLink = function headerTextLink({ children, ...restProps }) {
    return <Link {...restProps}>{children}</Link>
}

Header.Group = function headerGroup({ children, ...restProps }) {
    return <Group {...restProps}>{children}</Group>
}

Header.Picture = function headerPicture({ src, ...restProps }) {
    return <Picture {...restProps} src={`/images/users/${src}.png`} />
}

Header.Dropdown = function headerDropdown({ children, ...restProps }) {
    return <Dropdown {...restProps}>{children}</Dropdown>
}

Header.Profile = function headerProfile({ children, ...restProps }) {
    return <Profile {...restProps}>{children}</Profile>
}

Header.Search = function HeaderSearch({ searchTerm, setSearchTerm, ...restProps }) {
    const [SearchActive, setSearchActive] = useState(false);

    return (
        <Search {...restProps} >
            <SearchIcon onClick={() => setSearchActive(SearchActive => !SearchActive)} >
                <img src='images/icons/search.png' alt="search" />
            </SearchIcon>
            <SearchInput
                value={searchTerm}
                onChange={({ target }) => setSearchTerm(target.value)}
                placeholder="Search films and series"
                active={SearchActive}
            />
        </Search>
    )
}