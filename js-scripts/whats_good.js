import { WriteFile } from 'fs'
import { path } from 'path'

let string = "console.log('whats mcfuckin good cunts');";

WriteFile(path.normalize("./logging.js"), string, (err) => {
    if (err) throw err;
})