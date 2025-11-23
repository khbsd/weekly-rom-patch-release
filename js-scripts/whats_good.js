import { writeFile } from 'node:fs'
import path from 'path'

let string = "console.log('whats mcfuckin good cunts');";
const data = new Uint8Array(Buffer.from(string));

writeFile(path.normalize("./js-scripts/logging.js"), data, (err) => {
    if (err) throw err;
})