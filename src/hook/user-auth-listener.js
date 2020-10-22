import {useState, useEffect, useContext} from 'react';
import {FirebaseContext} from '../context/firebase.context';


export default function useAuthListener(){
    const [User, setUser] = useState(
        JSON.parse(localStorage.getItem('currentUser'))
    )

    const {firebase} = useContext(FirebaseContext)

    useEffect(() => {
        const listener = firebase.auth().onAuthStateChanged((authUser)=>{
            if(authUser){
                localStorage.setItem('currentUser', JSON.stringify(authUser));
                setUser(authUser)
            }else{
                localStorage.removeItem('currentUser');
                setUser(null)
            }
        })
        return () => listener; 
    }, [firebase]);


    return {User};
}