import { writeFile } from 'node:fs'
const path = require('node:path');

let string = "console.log('whats mcfuckin good cunts');";
const data = new Uint8Array(Buffer.from(string));

writeFile(path.normalize("./logging.js"), data, (err) => {
    if (err) throw err;
})