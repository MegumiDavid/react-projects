import { atom } from 'jotai';


interface AuthType {
    logged: boolean;
    token: string;
    userId: string;
}

const auth: AuthType = {
    logged: false,
    token: '',
    userId: ''
}


const authAtom = atom(auth);
authAtom.debugLabel = 'authAtom';
export default authAtom;
