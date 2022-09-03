// exports和module.exports的区别： exports默认等于module.exports，但是不能修改它的指向,修改了就不相等了

// exports === module.exports
exports.test = 100;

// exports !== module.exports
exports = {
  a: 1,
};
