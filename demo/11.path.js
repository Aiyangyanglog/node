// 1.normalize路径处理,join路径拼接,resolve将相对路径解析成绝对路径
const { normalize, join, resolve } = require("path");

console.log(normalize("/usr//local/bin"));
console.log(normalize("/usr//local/../bin"));

console.log(join("/usr", "local", "bin/"));
console.log(join("/usr", "../local", "bin/"));

console.log(resolve("./"));

// 2.basename文件名称,dirname所在文件夹路径,extname拓展名
const { basename, dirname, extname } = require("path");

const filePath = "/usr/local/bin/no.txt";
console.log(basename(filePath));
console.log(dirname(filePath));
console.log(extname(filePath));

// 3.parse()将一个路径字符串返回成一个对象，format()将一个对象返回成一个路径字符串
// parse()和format()正好相反
const { parse, format } = require("path");
const ret = parse(filePath);
console.log(ret);
console.log(format(ret));

// 4.sep路径的分隔符，delimiter是PATH的分隔符，win32是window系统，posix是posix系统
const { sep, delimiter, win32, posix } = require("path");
console.log("sep", sep);
console.log("win sep", win32.sep);

console.log("PATH", process.env.PATH);

console.log("delimiter", delimiter);
console.log("win delimiter", win32.delimiter);

// __dirname和__filename总是返回文件的绝对路径
// process.cwd()总是返回执行node命令所在的文件夹
