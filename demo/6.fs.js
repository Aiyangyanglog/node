// 引用系统内置模块fs读取文件
const fs = require("fs");
fs.readFile("./6.fs.js", "utf8", (err, data) => {
  if (err) throw err;
  console.log(data);
});

fs.writeFile("./text", "This is a test", "utf8", (err) => {});

fs.stat("./6.fs.js", (err, status) => {});

fs.rename("./text", "test.text", (err) => {});

fs.unlink("./test.text", (err) => {});

fs.readdir("./", (err) => {});

fs.mkdir("test", (err) => {});

fs.rmdir("test", (err) => {});

fs.watch(
  "./",
  {
    recursive: true,
  },
  (err) => {}
);

const rs = fs.createReadStream("./6.fs.js");
rs.pipe(process.stdout);

const ws = fs.createWriteStream("./test.txt");
const tid = setInterval(() => {
  const num = parseInt(Math.random() * 10);
  console.log(num);
  if (num < 8) {
    ws.write(num + "");
  } else {
    clearInterval(tid);
    ws.end();
  }
}, 200);

ws.on("finish", () => {
  console.log("done!");
});
