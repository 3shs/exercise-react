
// /** 
//  * @content new
//  * 
// */

// function Xxx (name , age) {
//     this.strength = 60
//     this.name = name
//     this.age = age
//     // this.habit = 'Game'
    
//     // return {
//     //     name: name,
//     //     habit: 'Game'
//     // }
//     return 'handsome boy'
// }
// // Xxx.prototype.strength = 60
// Xxx.prototype.sayYourName = function () {
//     console.log( 'I am ' + this.name )
// }

// function createObject () {

//     var o = new Object()

//     Constructor = [].shift.call(arguments)

//     o.__proto__ = Constructor.prototype

//     var ret =  Constructor.apply(o, arguments)

//     return typeof ret === 'object' ?  ret : o
// }

// var person = createObject(Xxx,'zs', 18)

// // console.log(person.name)
// // console.log(person.age)
// // console.log(person.habit)
// // console.log(person.strength)
// // person.sayYourName()


// /**
//  *  @content 继承
//  */

// // 原型继承
// function Person () {
//     this.name = 'jczs'
// }

// Person.prototype.getName = function () {
//     console.log(this.name)
// }

// function Child () {

// }

// // 将 构造函数 Person的实例 person 指向 构造函数 Child 的原型 那样 构造函数 Child 的实例 child可以访问 Person和Person原型上的属性和方法
// Child.prototype = new Person()

// let child = new Child()

// // console.log(child.getName())

// // 问题  引用类型的属性被所有实例所共享


// function Parent1 () {
//     this.name = ['jcls', 'jcww']
// }

// function Child1 () {

// }

// Child1.prototype = new Parent1()

// let child1 = new Child1()

// child1.name.push('jcmz')

// // console.log(child1.name)

// let child2 = new Child1()

// // console.log(child2.name)

// function Parent2 (name) {
//     this.name = name
//     // this.name = ['jcls', 'jcww']
// }

// function Child2 (name) {
//     Parent2.call(this, name)   // 缺点：每次创建实例都会创建一遍方法
// }

// let child3 = new Child2('zs')

// // child3.name.push('jcmz')

// // console.log(child3.name)

// let child4 = new Child2('ls')

// // console.log(child4.name)


// //组合继承
// //原型链继承和经典继承双剑合璧


// function Parent3 (name) {
//     this.name = name
//     this.colors = ['red', 'green', 'blue']
// }

// Parent3.prototype.getName = function () {
//     console.log(this.name)
// }

// function Child3 (name, age) {
//     Parent3.call(this, name)
//     this.age = age
// }

// Child3.prototype = new Parent3()

// Child3.prototype.Constructor = Child3

// let child5 = new Child3('zs', 18)

// child5.colors.push('yellow')

// // console.log(child5, child5.getName())

// let child6 = new Child3('ls', 19)

// // console.log(child6, child5.getName())

// // 原型式继承

// function Func () {

//     function Parent  (name) {
//         this.name = name
//         this.colors = ['red', 'blue', 'green']
//     }

//     Parent .prototype.getName = function ( ) {
//         console.log(this.name)
//     }

//     function Child (name, age) {
//         Parent.call(this, name)
//         this.age = age
//     }

//     Child.prototype = new Parent()

//     Child.Constructor = Child

//     let child1 = new Child('zs', 18)
//     child1.colors.push('yellow')

//     let child2 = new Child('zs', 20)

//     console.log(child1, child2)

// }

// // Func()



// function Func1 () {

//     function Parent (name) {
//         this.name = name;
//         this.colors = ['red', 'blue', 'green'];
//     }

//     Parent.prototype.getName = function () {
//         console.log(this.name)
//     }

//     function Child (name, age) {
//         Parent.call(this, name)
//         this.age = age
//     }


//     let F =  function () {}

//     F.prototype = Parent.prototype


//     Child.prototype = new F()

//     let child1 = new Child('kevin', '18');

//     console.log(child1)

// }

// // Func1()

// function Func2 () {

//     function createObj (o) {
//         function F() {}

//         F.prototype = o

//         return new F()
//     }

//     // 实例

//     function prototype (child, parent) {
//         let definePrototype =  createObj(parent.prototype)
//         definePrototype.constructor = child
//         child.prototype = definePrototype
//     }
// }

// let c = 56
// function foo() {
//     console.log(c)
//     let a = 1
//     function bar() { 
//         console.log(a)
//     }

//     bar()
// }

// console.log(foo())

// var scope = "global scope";
// function checkscope(){
//     var scope2 = 'local scope';
//     return scope2;
// }
// checkscope();


// var foo = {
//     value: 1
// }

// function bar() {
//     console.log(this.value)
// }

// // bar.call(foo)
// // 将函数设为对象的属性
// foo.fn = bar
// //执行该函数
// foo.fn()
// // 删除该函数
// delete foo.fn

// Function.prototype.call2 = function (context) {
//     // 处理null 指向 window
//     // context = context || window
//     context.fn = this
//     // 处理参数问题
//     let args = []
//     for (let i = 1, len = arguments.length; i < len; i++) {
//         args.push( 'arguments['+ i +']' )
//     }
//     // eval('context.fn(' + args +')')
//     // 处理函数有返回值的
//     let result = eval('context.fn(' + args +')')
//     // context.fn()
//     delete context.fn
//     return result
// }
// let value = 6

// let foo = {
//     value: 5
// }

// function bar(name, age) {
//     // console.log(name)
//     // console.log(age)
//     console.log(this.value)
//     return {
//         value: this.value,
//         name,
//         age
//     }
// }

// bar.call2(foo, 'zs', 11)
// bar.call2(null)
// console.log(bar.call2(foo, 'kevin', 18))

// let foo = {
//     value: 1
// }

// let bar = function (name, age) {
//     console.log(name)
//     console.log(age)
//     console.log(this.value)
// }

// 直接乞丐版

// foo.fn = bar
// foo.fn()
// delete foo.fn

// 封装成方法的乞丐版

// Function.prototype.call2 = function (context) {
//     context.fn = this
//     context.fn()
//     delete context.fn
// }

// bar.call2(foo)


// 使其可以接收参数

// Function.prototype.call2 = function (context) {
//     // context = context || window
    
//     context.fn = this

//     let args = []
//     for(let i = 1, len = arguments.length; i < len; i++) {
//         args.push('arguments[' + i + ']')
//     }
//     // eval('context.fn(' + args + ')')

//     // 假如有返回值
//     let result = eval('context.fn(' + args + ')')

//     delete context.fn

//     return result
// }

// bar.call2(foo, 'zs', 13)

// apply 实现

// Function.prototype.fakeApply = function (context, arr) {
//     // context = context || window
//     context.fn = this
//     let result
//     if (!arr) {
//         result = context.fn()
//     } else {
//         let args = []
//         for (let i = 0, len = arr.length; i < len; i++) {
//             args.push('arr[ '+ i +' ]')
//         }
//         result = eval('context.fn('+ args +')')
//     }

//     delete context.fn

//     return result
// }

// bar.fakeApply(foo, ['zs', 18])

//call 方法在使用一个指定的this值和若干指定参数值的前提下调用某个函数或方法

// fake bind