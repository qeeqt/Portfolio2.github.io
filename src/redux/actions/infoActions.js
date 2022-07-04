import db from "../../firebase/firebase";
import { doc, onSnapshot } from "firebase/firestore"

export const getMyInfo = (dispatch) => {
    const docRef = doc(db, "info", "sxgzdh1ag9Hu3Ulrxl6K")
    const setData = (info) => ({ type: "SET_DATA", info })
    onSnapshot(docRef, (doc) => {
        return dispatch(setData(doc.data()))
    })
};

export const getInfo = () => async (dispatch) => {
    getMyInfo(dispatch);
}