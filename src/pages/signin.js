import React, { useState } from 'react';

import { HeaderContainer } from '../containers/header'
import { FooterContainer } from '../containers/footer'

import { Form } from '../components';

export default function SignIn() {
    const [Email, setEmail] = useState("");
    const [Password, setPassword] = useState("");
    const [Error, setError] = useState("");

    const isEmpty = Password === "" || Email === "";

    const handleSignIn = (event) => {
        event.preventDefault();
        setError();
    }

    return (
        <>
            <HeaderContainer>
                <Form>
                    <Form.Title>Sign In</Form.Title>
                    {Error && <Form.Error >{Error}</Form.Error>}

                    <Form.Base onSubmit={handleSignIn} method="POST">
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
                            Sign In
                </Form.Submit>
                    </Form.Base>

                    <Form.Text>
                        New to Netflix? <Form.Link to="/signup">Sign up now.</Form.Link>
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