// Buffer用于处理二进制数据流
// 实例类似整数数组，大小固定
// C++ 代码在V8堆外分配物理内存
const { alloc, allocUnsafe, from } = Buffer;

console.log(alloc(10));
console.log(alloc(5, 1));
console.log(allocUnsafe(5, 1));
console.log(from([1, 2, 3]));
console.log(from("test"));
console.log(from("test", "base64"));

const { byteLength, isBuffer, concat } = Buffer;
console.log(byteLength("test"));
console.log(isBuffer({}));
console.log(isBuffer(from([1, 2, 3])));
const buf1 = from("This ");
const buf2 = from("is ");
const buf3 = from("a ");
const buf4 = from("test");
const buf = concat([buf1, buf2, buf3, buf4]);
console.log(buf.toString());

// 二进制的属性和方法length，toString(),fill(),equals(),indexOf(),
const buf5 = from("This is a test!");
console.log(buf5.length);

const buf6 = alloc(10);
buf6[0] = 2;
console.log(buf6.length);

console.log(buf6.toString("base64"));

const buf7 = allocUnsafe(10);
console.log(buf7);
console.log(buf7.fill(10, 2, 6));

const buf8 = from("test");
const buf9 = from("test!");
console.log(buf8.equals(buf9));
console.log(buf8.indexOf("es"));
