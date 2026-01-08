const fs = require('fs');
const buf = Buffer.alloc(24);
const fd = fs.openSync('icons/cat_cursoricon.png', 'r');
fs.readSync(fd, buf, 0, 24, 0);
fs.closeSync(fd);

const width = buf.readInt32BE(16);
const height = buf.readInt32BE(20);

console.log(`DIMENSIONS:${width}x${height}`);
console.log(`FILESIZE:${fs.statSync('icons/cat_cursoricon.png').size} bytes`);
