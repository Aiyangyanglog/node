// 引用系统内置模块fs读取文件
const fs = require("fs");
const result = fs.readFile("./6.fs.js", (err, data) => {
  if (err) {
    console.log(err);
  } else {
    console.log(data.toString());
  }
});
