import React from "react";

import { FirebaseContext } from './firebase.context';
import {firebase} from '../lib/firebase.prod';


const FirebaseProvider = (props) => {
    return (
        <FirebaseContext.provider value={{firebase}}>
            {props.children}
        </FirebaseContext.provider>
    )
}

export default FirebaseProvider;