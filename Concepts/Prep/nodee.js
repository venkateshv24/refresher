import { promisify } from 'util';

const nefn = () => {
    return 'hello'
}

const prmf = promisify(nefn);

console.log(prmf)