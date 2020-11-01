import React, { useContext, useState, useEffect } from 'react';
import { SelectProfileContainer } from './profiles';
import { FooterContainer } from './footer';

import * as ROUTES from '../constants/routes';
import { FirebaseContext } from '../context/firebase.context';
import { Loading, Header, Card, Player } from '../components';
import logo from '../logo.svg';


export function BrowseContainer({ slides }) {
    const [Profile, setProfile] = useState({});
    const [IsLoading, setIsLoading] = useState(true);
    const [SearchTerm, setSearchTerm] = useState("");
    const [Category, setCategory] = useState('series');
    const [SlideRows, setSlideRows] = useState([]);

    const { firebase } = useContext(FirebaseContext);
    const user = firebase.auth().currentUser || {};

    useEffect(() => {
        setTimeout(() => setIsLoading(false), 3000)
        console.log(user);
    }, [Profile.displayName, user]);

    useEffect(() => {
        setSlideRows(slides[Category])
    }, [slides, Category])

    return Profile.displayName ?
        (
            <>
                {IsLoading ? <Loading src={user.photoURL} /> : <Loading.ReleaseBody />}
                <Header src="joker1">
                    <Header.Frame>
                        <Header.Group>
                            <Header.Logo to={ROUTES.HOME} src={logo} alt="Netflix" />
                            <Header.TextLink
                                active={Category === 'series' ? true : false}
                                onClick={() => setCategory('series')}
                            >
                                Series
                                </Header.TextLink>
                            <Header.TextLink
                                active={Category === 'films' ? true : false}
                                onClick={() => setCategory('films')}
                            >
                                Films
                                </Header.TextLink>
                        </Header.Group>
                        <Header.Group>
                            <Header.Search searchTerm={SearchTerm} setSearchTerm={setSearchTerm}>

                            </Header.Search>
                            <Header.Profile>
                                <Header.Picture src={user.photoURL} />
                                <Header.Dropdown>
                                    <Header.Group>
                                        <Header.Picture src={user.photoURL} />
                                        <Header.TextLink>{user.displayName}</Header.TextLink>
                                    </Header.Group>
                                    <Header.Group>
                                        <Header.TextLink onClick={() => firebase.auth().signOut()}>
                                            Sign Out
                                        </Header.TextLink>
                                    </Header.Group>
                                </Header.Dropdown>
                            </Header.Profile>
                        </Header.Group>
                    </Header.Frame>
                    <Header.Feature>
                        <Header.FeatureCallOut>Watch Joker Now</Header.FeatureCallOut>
                        <Header.Text>
                            Forever alone in a crowd, failed comedian Arthur Fleck seeks connection
                            as he walks the streets of Gotham City. Arthur wears two masks —
                            the one he paints for his day job as a clown, and the guise he projects
                            in a futile attempt to feel like he's part of the world around him.
                        </Header.Text>
                        <Header.PlayButton>Play</Header.PlayButton>
                    </Header.Feature>
                </Header>

                <Card.Group>
                    {SlideRows.map((slideItem, index) => (
                        <Card key={index}>
                            <Card.Title>{slideItem.title}</Card.Title>
                            <Card.Entities>
                                {slideItem.data.map((item, index) => (
                                    <Card.Item key={item.docId} item={item}>
                                        <Card.Image src={`/images/${Category}/${item.genre}/${item.slug}/small.jpg`} />
                                        <Card.Meta>
                                            <Card.SubTitle>{item.title}</Card.SubTitle>
                                            <Card.Text>{item.description}</Card.Text>
                                        </Card.Meta>
                                    </Card.Item>
                                ))}
                            </Card.Entities>
                            <Card.Feature category={Category}>
                                <Player>
                                    <Player.Button />
                                    <Player.Video src="/videos/bunny.mp4" />
                                </Player>
                            </Card.Feature>
                        </Card>
                    ))}
                </Card.Group>
                <FooterContainer />
            </>
        ) :
        (
            <SelectProfileContainer user={user} setProfile={setProfile} />
        )
};