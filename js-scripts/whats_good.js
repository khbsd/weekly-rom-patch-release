import { writeFile } from 'node:fs'
import path from 'path'

let string = "console.log('whats mcfuckin good cunts');";
const data = new Uint8Array(Buffer.from(string));

writeFile(path.normalize("./logging.js"), data, (err) => {
    if (err) throw err;
})