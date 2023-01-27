import { atom } from 'jotai';

const filterAtom = atom<string>('all');
filterAtom.debugLabel = 'filterAtom';
export default filterAtom;