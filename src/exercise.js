
/** 
 * @content new
 * 
*/

function Xxx (name , age) {
    this.strength = 60
    this.name = name
    this.age = age
    // this.habit = 'Game'
    
    // return {
    //     name: name,
    //     habit: 'Game'
    // }
    return 'handsome boy'
}
// Xxx.prototype.strength = 60
Xxx.prototype.sayYourName = function () {
    console.log( 'I am ' + this.name )
}

function createObject () {

    var o = new Object()

    Constructor = [].shift.call(arguments)

    o.__proto__ = Constructor.prototype

    var ret =  Constructor.apply(o, arguments)

    return typeof ret === 'object' ?  ret : o
}

var person = createObject(Xxx,'zs', 18)

// console.log(person.name)
// console.log(person.age)
// console.log(person.habit)
// console.log(person.strength)
// person.sayYourName()


/**
 *  @content 继承
 */

// 原型继承
function Person () {
    this.name = 'jczs'
}

Person.prototype.getName = function () {
    console.log(this.name)
}

function Child () {

}

// 将 构造函数 Person的实例 person 指向 构造函数 Child 的原型 那样 构造函数 Child 的实例 child可以访问 Person和Person原型上的属性和方法
Child.prototype = new Person()

let child = new Child()

// console.log(child.getName())

// 问题  引用类型的属性被所有实例所共享


function Parent1 () {
    this.name = ['jcls', 'jcww']
}

function Child1 () {

}

Child1.prototype = new Parent1()

let child1 = new Child1()

child1.name.push('jcmz')

console.log(child1.name)

let child2 = new Child1()

console.log(child2.name)