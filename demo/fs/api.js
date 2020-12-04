/*
 * @Author: YJ
 * @Date: 2020-12-04 17:44:40
 * @
# Description: 
 */

//  fs 文件系统
// 生成api对象

const fs = require('fs')

for (let i in fs) {
    console.log(i);
}

const keyList = JSON.stringify(fs)

console.log(keyList);

let apiList = {
    appendFile,
    appendFileSync,
    access,
    accessSync,
    chown,
    chownSync,
    chmod,
    chmodSync,
    close,
    closeSync,
    copyFile,
    copyFileSync,
    createReadStream,
    createWriteStream,
    exists,
    existsSync,
    fchown,
    fchownSync,
    fchmod,
    fchmodSync,
    fdatasync,
    fdatasyncSync,
    fstat,
    fstatSync,
    fsync,
    fsyncSync,
    ftruncate,
    ftruncateSync,
    futimes,
    futimesSync,
    lchown,
    lchownSync,
    lchmod,
    lchmodSync,
    link,
    linkSync,
    lstat,
    lstatSync,
    mkdir,
    mkdirSync,
    mkdtemp,
    mkdtempSync,
    open,
    openSync,
    opendir,
    opendirSync,
    readdir,
    readdirSync,
    read,
    readSync,
    readv,
    readvSync,
    readFile,
    readFileSync,
    readlink,
    readlinkSync,
    realpath,
    realpathSync,
    rename,
    renameSync,
    rmdir,
    rmdirSync,
    stat,
    statSync,
    symlink,
    symlinkSync,
    truncate,
    truncateSync,
    unwatchFile,
    unlink,
    unlinkSync,
    utimes,
    utimesSync,
    watch,
    watchFile,
    writeFile,
    writeFileSync,
    write,
    writeSync,
    writevSync,
    Dir,
    Dirent,
    Stats,
    ReadStream,
    WriteStream,
    FileReadStream,
    FileWriteStream,
    _toUnixTimestamp,
    F_OK,
    R_OK,
    W_OK,
    X_OK,
    constants,
    promises
}