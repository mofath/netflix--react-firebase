import React from "react";

import { firebase } from '../lib/firebase.prod';
import { FirebaseContext } from './firebase.context';


const FirebaseProvider = (props) =>

    <FirebaseContext.Provider value={{ firebase }}>
        {props.children}
    </FirebaseContext.Provider>



export default FirebaseProvider;