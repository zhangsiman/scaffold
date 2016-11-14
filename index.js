// for(let i=0;i<3;i++){
//   console.log("out"+i);
//   for(let i=0;i<2;i++){
//     console.log("in"+i)
//   }
// }

let [name,age]=['newm',8]
console.log(name,age);

let [x,y]=getVal();
function getVal(){
  return[3,4];
}
console.log('x:'+x+', y:'+y);


[name,age]=['ze','vevdv'];
console.log('name:'+name+',age:'+age);

let [foo,[bar,[baz]]]=[1,[2,[3]]];
console.log(foo);
console.log(bar);
console.log(baz);


var numbers = [1, 2, 3, 4];
numbers.forEach(function(item, index, array) {
  console.log(item + "\t" + index + "\t" + array);
});


var array = [1, 2, 3];
array.forEach(function(v, i, a) {
    console.log(v,i);
});//常规用法

array.forEach((v,i)=> console.log(v));//Es6



class Block{
  constructor(width,height){
    this.width=width;
    this.height=height
  }
  area(){
    let num=this.width*this.height;
    let add=this.width+this.height;
    console.log(num)
    alert(add)
  }
}

let block1=new Block(6,2);
let block2=new Block(3,4);
block1.area();
block2.area()

//类的继承中方法的继承　extends
class Father{
  sayhello(){
    console.log('say hello')
  }
}

class Son extends Father {
  sayhello1(){
    console.log('say hello 1')
  }
}

let lucy=new Son;
lucy.sayhello();


//类的继承中的属性继承 super()
class Fathers{
  constructor(height,width){
    this.height=1.8
    this.width=1.6
  }
}

class Sons extends Fathers{
  constructor(gender){
    super()
    this.gender='Male'
  }
}

let peter=new Sons;
console.log(peter.width)
