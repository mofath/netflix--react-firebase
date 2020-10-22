import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { FirebaseContext } from '../context/firebase.context';
import { HeaderContainer } from '../containers/header';
import { FooterContainer } from '../containers/footer';
import { Form } from '../components';
import * as ROUTES from '../constants/routes';

export default function SignUp() {
    const history = useHistory();
    const { firebase } = useContext(FirebaseContext);
    const [Username, setUsername] = useState("");
    const [Email, setEmail] = useState("");
    const [Password, setPassword] = useState("");
    const [Error, setError] = useState("");

    const isEmpty = Password === "" || Email === "" || Username === "";

    const handleSignUp = async (event) => {
        event.preventDefault();

        try {
            const userCreated = await firebase.auth().createUserWithEmailAndPassword(Email, Password);
            await userCreated.user.updateProfile({
                displayName: Username,
                photoURL: Math.floor(Math.random() * 5) + 1,
            });
            history.push(ROUTES.BROWSE)
        } catch (error) {
            setEmail('');
            setPassword('');
            setUsername('');
            setError(error.message)
        }
    }

    return (
        <>
            <HeaderContainer>
                <Form>
                    <Form.Title>Sign Up</Form.Title>
                    {Error && <Form.Error >{Error}</Form.Error>}

                    <Form.Base onSubmit={handleSignUp} method="POST">
                        <Form.Input
                            placeholder="Username"
                            value={Username}
                            onChange={({ target }) => setUsername(target.value)}
                        />

                        <Form.Input
                            placeholder="Email address"
                            value={Email}
                            onChange={({ target }) => setEmail(target.value)}
                        />
                        <Form.Input
                            type="password"
                            value={Password}
                            autoComplete="off"
                            placeholder="Password"
                            onChange={({ target }) => setPassword(target.value)}
                        />
                        <Form.Submit disabled={isEmpty} type="submit" >
                            Sign Up
                        </Form.Submit>
                    </Form.Base>

                    <Form.Text>
                        Already a user? <Form.Link to={ROUTES.SIGN_IN}>Sign in  now.</Form.Link>
                    </Form.Text>
                    <Form.SubText>
                        This page is protected by Google reCAPTCHA to ensure you're not a bot. Learn more.
              </Form.SubText>
                </Form>
            </HeaderContainer>
            <FooterContainer />
        </>
    );
}