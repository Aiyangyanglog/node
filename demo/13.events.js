const EventEmitter = require("events");

class CustomEvent extends EventEmitter {}

const ce = new CustomEvent();

//on用来绑定一个事件，emit执行事件，removeListener移除某个事件，removeAllListeners移除所有事件
//1
ce.on("test", () => {
  console.log("this is a test!");
});

setInterval(() => {
  ce.emit("test");
}, 500);

//2
ce.on("error", (err) => {
  console.log(err);
});

ce.emit("error", new Error("oops!"));

//3
function fn1() {
  console.log("fn1");
}
function fn2() {
  console.log("fn2");
}
ce.on("fn", fn1);
ce.on("fn", fn2);

setInterval(() => {
  ce.emit("fn");
}, 500);

setTimeout(() => {
  //   ce.removeListener("fn", fn2);
  ce.removeAllListeners("fn");
}, 1500);
