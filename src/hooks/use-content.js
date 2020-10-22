import {useEffect, useState, useContext} from 'react';
import {FirebaseContext} from '../context/firebase.context';

export default function useContent(target){
    const [Content, setContent] = useState([]);
    const {firebase} = useContext(FirebaseContext);

    useEffect(() =>{
        firebase
        .firestore()
        .collection(target)
        .get()
        .then((snapshot)=>{
            const allContent = snapshot.docs.map((contentObj) =>({
                ...contentObj.data(),
                docId:contentObj.id,
            }))
            setContent(allContent)
        })
        .catch((error)=> console.log(error.message))
    }, [firebase, target ])

    return {[target] : Content}
}