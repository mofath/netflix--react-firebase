import React from 'react';

import {Footer} from '../components';


export function FooterContainer(){
    return(
        <Footer>
            <Footer.Title>Questions? Contact us.</Footer.Title>
            <Footer.Break />
            <Footer.Row>
                <Footer.Column>
                    <Footer.Link href="#">FAQ</Footer.Link>
                    <Footer.Link href="#">Investors Relations</Footer.Link>
                    <Footer.Link href="#">Ways To Watch</Footer.Link>
                    <Footer.Link href="#">Coporate Information</Footer.Link>
                    <Footer.Link href="#">Netflix Originals</Footer.Link>
                </Footer.Column>

                <Footer.Column>
                    <Footer.Link href="#">Help Center</Footer.Link>
                    <Footer.Link href="#">Jobs</Footer.Link>
                    <Footer.Link href="#">Terms of Use</Footer.Link>
                    <Footer.Link href="#">Contact Us</Footer.Link>
                </Footer.Column>

                <Footer.Column>
                    <Footer.Link href="#">Account</Footer.Link>
                    <Footer.Link href="#">Redeem Gift Cards</Footer.Link>
                    <Footer.Link href="#">Privacy</Footer.Link>
                    <Footer.Link href="#">Speed Test</Footer.Link>
                </Footer.Column>

                <Footer.Column>
                    <Footer.Link href="#">Media Center</Footer.Link>
                    <Footer.Link href="#">Redeem Gift Cards</Footer.Link>
                    <Footer.Link href="#">Privacy</Footer.Link>
                    <Footer.Link href="#">Help Center</Footer.Link>
                </Footer.Column>


                <Footer.Text>Netflix Cairo, Egypt</Footer.Text>
            </Footer.Row>
        </Footer>
    )
}
