'use strict';

var btxcore = module.exports;

// module information
btxcore.version = 'v' + require('./package.json').version;
btxcore.versionGuard = function(version) {
  if (version !== undefined) {
    var message = 'More than one instance of btxcore-lib found. ' +
      'Please make sure to require btxcore-lib and check that submodules do' +
      ' not also include their own btxcore-lib dependency.';
    throw new Error(message);
  }
};
btxcore.versionGuard(global._btxcore);
global._btxcore = btxcore.version;

// crypto
btxcore.crypto = {};
btxcore.crypto.BN = require('./lib/crypto/bn');
btxcore.crypto.ECDSA = require('./lib/crypto/ecdsa');
btxcore.crypto.Hash = require('./lib/crypto/hash');
btxcore.crypto.Random = require('./lib/crypto/random');
btxcore.crypto.Point = require('./lib/crypto/point');
btxcore.crypto.Signature = require('./lib/crypto/signature');

// encoding
btxcore.encoding = {};
btxcore.encoding.Base58 = require('./lib/encoding/base58');
btxcore.encoding.Base58Check = require('./lib/encoding/base58check');
btxcore.encoding.BufferReader = require('./lib/encoding/bufferreader');
btxcore.encoding.BufferWriter = require('./lib/encoding/bufferwriter');
btxcore.encoding.Varint = require('./lib/encoding/varint');

// utilities
btxcore.util = {};
btxcore.util.buffer = require('./lib/util/buffer');
btxcore.util.js = require('./lib/util/js');
btxcore.util.preconditions = require('./lib/util/preconditions');

// errors thrown by the library
btxcore.errors = require('./lib/errors');

// main bitcore library
btxcore.Address = require('./lib/address');
btxcore.Block = require('./lib/block');
btxcore.MerkleBlock = require('./lib/block/merkleblock');
btxcore.BlockHeader = require('./lib/block/blockheader');
btxcore.HDPrivateKey = require('./lib/hdprivatekey.js');
btxcore.HDPublicKey = require('./lib/hdpublickey.js');
btxcore.Networks = require('./lib/networks');
btxcore.Opcode = require('./lib/opcode');
btxcore.PrivateKey = require('./lib/privatekey');
btxcore.PublicKey = require('./lib/publickey');
btxcore.Script = require('./lib/script');
btxcore.Transaction = require('./lib/transaction');
btxcore.URI = require('./lib/uri');
btxcore.Unit = require('./lib/unit');

// dependencies, subject to change
btxcore.deps = {};
btxcore.deps.bnjs = require('bn.js');
btxcore.deps.bs58 = require('bs58');
btxcore.deps.Buffer = Buffer;
btxcore.deps.elliptic = require('elliptic');
btxcore.deps.nodeX16r = require('node-x16r');
btxcore.deps._ = require('lodash');

// Internal usage, exposed for testing/advanced tweaking
btxcore.Transaction.sighash = require('./lib/transaction/sighash');
