const util = require('util')


const nefn = () => {
    return 'hello'
}

const prmf = util.promisify(nefn);

console.log(prmf())