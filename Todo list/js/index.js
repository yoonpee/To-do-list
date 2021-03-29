// const name = "Shin yoon";
// const age = 17;
// const weight = 70.2;
// const isFemale = false;
// const money = null;
// const girlFriend = undefined;
// const hobbies = "baseball, basketball, soccer , ruckby"

// console.log(name.substring(0, 5) . toLowerCase());
// console.log(hobbies.split(","));
// const animals = ["bear","monkey","dog"];

//
// animals[3] = "deer";
// console.log(animals)
// animals.push("deer");
//
// console.log(animals);
//
// animals.unshift("hippo");
//
// console.log(animals);
// console.log(animals . indexOf("deer"));
//
// animals.splice(0, 3);
//
// console.log(animals);

// const poppy = {
//   name: "yoon",
//   age: 12,
//   face: "good",
//   food: ["banana","apple","pear"],
//   tail:false,
//   location: {
//     country: "Pohang",
//     place: "palace",
//     isKorea:true,
//   }
// }

//
// console.log(poppy.location.isKorea);
// alert(poppy);

// const poppyJSON = JSON.stringify(poppy);

// console.log(poppyJSON);

// const animals = [
  
//   { name: "deer" , size: 'big', isAggresive: true, weight : 100},
//   { name: "monkey", size: 'medium', isAggresive: false, weight: 30},
//   { name: "puppy", size: 'small', isAggresive: false, weight: 20},
//   { name: "car", size:'small', isAggresive: true, weight: 88},
// ];

// for ( let i = 0; i < animals.length; i++) {
//   console.log(animals[i]);
// }

// for (let animal of animals){
//   console.log(animal);
// }
// let i = 0;
// while (i < 10){
//   console.log(i);
//   i++;
// }

// animals.forEach(function(animal, index){
//   console.log(index);   
// })

// const animalsNames = animals.map(function(animal){
//    return `Animals name is ${animal.name} and Size is ${animal.size}`; 
// })

// console.log(animalsNames);

// const smallAnimals = animals.filter(function(item){
//    return item.size === 'big';
// })

// console.log(smallAnimals);
// const numbers = [1, 10, 20, 44 ,55 ,102];

// const total = numbers.reduce(function(acc, cur){
//   console.log(acc, cur);
//   return acc + cur;
// })
// console.log(total);

// const totalWeight = animals.reduce(function(acc, cur){
//    return acc + cur.weight;
// }, 0)
// console.log(totalWeight);

// const x = 30;
// // if (x == 10){
// //    console.log(`x is 10`);
// // }
// if (x === 10){
//   console.log(`x is 10`);
// } else if(x === 20){
//    console.log(`x is 20`);
// }
// else{
//   console.log (`x is not 10 and 20`)
// }

// const animal = "liona";

// const food = animal === 'lion' ? 'meat' : 'apple';

// console.log(food);

// const animal = 'dog';

// switch(animal){
//    case "lion":
//       console.log('animal is lion');
//       break;
//    case 'monkey':
//      console.log("animal is monkey"); 
//      break; 
//    default:
//      console.log('animal is unknown');
//      break;
// }

// function add(a, b){
//   return a + b;
// }
// console.log(add);

// const sum = add(10, 20);

// console.log(sum);

// const add = (a, b) => {
//    return a + b;
// }

// console.log(add(100, 38));

// function Song(title, writer, singer, released){
//   this.title = title;
//   this.writer = writer;
//   this.singer = singer;
//   this.released = new Date(released);
//   // this.getReleasedDay = function() {
//   //   return this.released.getDay();
//   // }
//   // this.getSongInfo = function(){
//   //   return `제목: ${title}, 작곡: ${writer}, 가수: ${singer}, 발매: ${released}`;
//   // }
// }
//  class Song{
//    constructor(title, writer, singer, released){
//     this.title = title;
//     this.writer = writer;
//     this.singer = singer;
//     this.released = new Date(released);
//    }
//    getReasedDay(){
//     return this.released.getDay();
//    }
//    getSongInfo(){
//     return `제목: ${this.title}, 작곡: ${this.writer}, 가수: ${this.singer}, 발매: ${this.released}`; 
//    }
//  }

// Song.prototype.getReleasedDay = funtion(){
//     return this.released.getDay();
// } 

// Song.prototype.getSongInfo = funtion(){
//   return `제목: ${title}, 작곡: ${writer}, 가수: ${singer}, 발매: ${released}`;
// }


// const song1 = new Song('love yourself', 'yoon shin', 'yoon shin', '1993-04=21');
// const song2 = new Song('love lkeja', 'sew shin', 'yon shin', '1993-04=21');

// // // console.log(song1, song2);
// // console.log(song1.released.getDay());
// // console.log(song1.getSongInfo());
// // console.log(song2.getSongInfo());
// console.log(song1.getSongInfo(), song2.getSongInfo())

// console.log(window);

// // console.log(document.getElementById('todo-form'));
// // const form = document.getElementById('todo-form')

// // console.log(form);
// const form = document.querySelector('#todo-form');

// console.log(form);
// /**/ 
// console.log(document.querySelectorAll('.item '));
// const items = document.querySelectorAll('.item');
// items.forEach((item)=>{
//   console.log(item);
// })
// //
// console.log(document.getElementsByClassName('item'));
// console.log(document.getElementsByTagName('li')); 

// const todos = document.querySelector('.todo-list');
// console.log(todos);
// // todos.remove();
// todos.lastElementChild.remove();
// todos.firstElementChild.textContent = 'hellow world';
// todos.lastElementChild.innerHTML = '<h1>Hellow world</h1>';

// const button = document.querySelector('.submit');
// console.log(button);

// button.addEventListener('click', function(e){
//    e.preventDefault();
//    console.log(e);
//    e.target.style.color = 'red';
// })
// const form = document.querySelector("#todo-form");
// console.log(form);


// const todos = document.querySelector(".todo-list");
// todos.style.color = "peachpuff";

// const btn = document.querySelector('.submit');

// // btn.addEventListener('click', function(a){
// //   a.preventDefault();
// //   a.target.style.background = 'peru';
// // })




// const msg = document.querySelector("#msg");

// const todoInput = document.querySelector('#todo-input');
// console.log(todoInput);
// btn.addEventListener('click', onSubmit)
// function onSubmit(e){
//   e.preventDefault();

//   if(todoInput.value ===''){
//     msg.style.display = 'block';
//     setTimeout(()=>msg.style.display = 'none', 1000);
//     return;
//   }
//   const li = document.createElement('li');
//   li.appendChild(document.createTextNode(todoInput.value));
//   li.classList.add('item');
//   todos.appendChild(li);
//   todoInput.value = '';
// }

// const btn = document.querySelector('.submit');
// const todoInput = document.querySelector('#todo-input');
// const todoList = document.querySelector('.todo-list');
// const msg = document.querySelector('#msg');

// btn.addEventListener('click', function(e){
//    e.preventDefault();
//    if(todoInput.value ===''){
//      msg.style.display = 'block';
//      setTimeout(()=>msg.style.display = 'none', 2000);
//      return;
//    }
//    const li = document.createElement('li');
//    li.appendChild(document.createTextNode(todoInput.value));
//    todoList.appendChild(li);
//    li.classList.add('item');
//    todoInput.value = '';
// })


// 일단은 지정은 하기위해 변수를 주고 그클래스입력후
//이벤트입력 기능을 주고싶으면 preventDefault//

//todo input이 필요하기 때문에 지정해주자
//지정후 클릭후에 투부인풋이 입력되어야되기에 콘솔로그로 입력
//투두인풋에 입력되는걸 띄어야 돼기때문에 벨류로
//입력하는게 나와야되기에 엘아이를 없애고 createElement(로 li를 생성)
//변수 l로 li를 만들었기때문에 그 자식요소에 크리에이트 텍스트노트를만들어 
//투두인풋 밸류값이 li가 되도록 만듬
// 마지막으로 스타일 더하기위해서 변수에 class list 로 스타일추가.
//투두인풋에 빈칸으로남기면 공백이 되니 마무리까지.
//그리고 빈칸으로 입력안되게 하기위해 if
//그리고 빈칸이면 경고장을 놔두기위해서 p태그로입력하고 css로 논처리하고 msg를 선택후 블록 하기.if에서.
//그리고 시간이 지나면 없애기위해서 setTimeOut (()=>애로우니깐 중갈로생략 msg.~~~ = none , 2000)

const btn = document.querySelector('.submit');
const todoInput = document.querySelector('#todo-input');
const todos = document.querySelector('#todo-list');
const put = document.querySelector('#put');

btn.addEventListener('click', function(e){
  e.preventDefault();
  if(todoInput.value === ''){
    put.style.display = 'block';
    setTimeout(()=>put.style.display = 'none', 2000);
    return;
  }
  const li = document.createElement('li');
  li.appendChild(document.createTextNode(todoInput.value));
  todos.appendChild(li);
  li.classList.add('item');
  todoInput.value = '';
  
})