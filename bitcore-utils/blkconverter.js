'use strict';

// execution
// enable rest in btx.conf 'rest=1' (be sure to disable after)
// node ./bitcore-utils/blkconverter.js

// convert block json from bitcored format to btxcore format

// get ./bitcore-utils/inputs/blk220909.dat by:
// curl 127.0.0.1:8766/rest/block/000000000001a87be937e85123bf209af485cf94b6cae8125dce2f5a9914ecfb.hex | xxd -r -p > ./bitcore-utils/inputs/blk220909.dat

// get ./bitcore-utils/inputs/blk220909.json by
// curl 127.0.0.1:8766/rest/block/000000000001a87be937e85123bf209af485cf94b6cae8125dce2f5a9914ecfb.json > ./bitcore-utils/inputs/blk220909.json

// get ./bitcore-utils/inputs/blk220909.js by manually edit the file

// Manually check if blk220909-btxcore.json match with blk220909.json

var btxcore = require('..');
var Block = btxcore.Block;
var fs = require('fs');

var first8Bytes = new Buffer ([0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF]); // won't be used in block allocation, just fill with some inane values

var blockBuffer = fs.readFileSync('bitcore-utils/inputs/blk220909.dat');

var btxcoreFormatBlockBuffer = Buffer.concat([first8Bytes, blockBuffer]);

var blk = Block.fromRawBlock(btxcoreFormatBlockBuffer);

var blkJSON = blk.toJSON();
var blkJSONStr = JSON.stringify(blkJSON, null, 2);

fs.writeFileSync('bitcore-utils/outputs/blk220909-btxcore.dat', btxcoreFormatBlockBuffer);
fs.writeFileSync('bitcore-utils/outputs/blk220909-btxcore.json', blkJSONStr);
