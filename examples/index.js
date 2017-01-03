const olpays = require('../');

const PUBLIC_KEY = "YOUR-PUBLIC_KEY";
const PRIVATE_KEY = "YOUR-PRIVATE-KEY";

olpays.init({pubKey:PUBLIC_KEY, privKey: PRIVATE_KEY, sandbox: true});

olpays.getCreditCardTypes()
    .then(res => console.log(res));