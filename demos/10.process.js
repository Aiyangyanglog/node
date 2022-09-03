const { argv, argv0, execArgv, execPath, env } = process;

console.log("argv", argv);
console.log("argv0", argv0);
console.log("execArgv", execArgv);
console.log("execPath", execPath);
console.log("env", env);

process.cwd(); // 执行路径

// setImmediate，setTimeout，nextTick的执行顺序

// (宏任务)
setImmediate(() => {
  console.log("setImmediate");
});

// (宏任务)
setTimeout(() => {
  console.log("setTimeout");
}, 0);

// (微任务)最快执行
process.nextTick(() => {
  console.log("nextTick");
});
