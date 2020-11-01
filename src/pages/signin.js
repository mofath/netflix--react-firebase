import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { FirebaseContext } from '../context/firebase.context';
import { HeaderContainer } from '../containers/header';
import { FooterContainer } from '../containers/footer';
import { Form } from '../components';
import * as ROUTES from '../constants/routes';

export default function SignIn() {
    const history = useHistory();
    const { firebase } = useContext(FirebaseContext);
    const [Email, setEmail] = useState("");
    const [Password, setPassword] = useState("");
    const [Error, setError] = useState("");

    const isEmpty = Password === "" || Email === "";

    const handleSignIn = async (event) => {
        event.preventDefault();

        try {
            await firebase.auth().signInWithEmailAndPassword(Email, Password);
            history.push(ROUTES.BROWSE)
        } catch (error) {
            setEmail('');
            setPassword('');
            setError(error.message)
        }
    }

    return (
        <>
            <HeaderContainer>
                <Form>
                    <Form.Title>Sign In Now</Form.Title>
                    {Error && <Form.Error >{Error}</Form.Error>}

                    <Form.Base onSubmit={handleSignIn} method="POST">
                        <Form.Input
                            placeholder="Email address"
                            autoComplete="off"
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
                            Sign In
                </Form.Submit>
                    </Form.Base>

                    <Form.Text>
                        New to Netflix? <Form.Link to={ROUTES.SIGN_UP}>Sign up now.</Form.Link>
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