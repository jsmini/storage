var pkg = require('../package.json');

// 兼容 storage 和 @jsmini/storage，@jsmini/storage 替换为 jsmini_storage
var name = pkg.name.replace('@', '').replace(/\//g, '_');
var version = pkg.version;

var banner = 
`/*!
 * storage ${version} (https://github.com/jsmini/storage)
 * API https://github.com/jsmini/storage/blob/master/doc/api.md
 * Copyright 2017-${(new Date).getFullYear()} jsmini. All Rights Reserved
 * Licensed under MIT (https://github.com/jsmini/storage/blob/master/LICENSE)
 */
`;

exports.name = name;
exports.banner = banner;
