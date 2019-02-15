1.
ES5: var
ES6: let		宣告的變數可以改變
	 const		宣告的變數不可改變(不能被reassigned的意思)

	 var 和 let 不同之處在於作用域
	 var 採取全域的作用方式
	 		for(var i=0; i<5; i++){...}
			console.log(i);
	 let 被限制了作用域
	 		for(let j=0; j<5; j++){...}
			console.log(j);

	#for的作用域(scope)
	#hosting 提升 (補宣告)
		補宣告:在尚未宣告之前就先使用了
		函數經常使用
		變數:
			d += 1;
			var d = 10;
			console.log(d);		//10

			e += 1;
			let e = 10;
			constonsole.log(e);	//let和const不行

	不能被reassigned?
		const a = 1;
		a = 2;		//X

	 	const f = { x: 0 };
		f.x = 10;		//10


2. Object shorthand 物件縮寫
  (1). 屬性縮寫
  		function makePoint(x,y){
  			return {
  				x: x,
  				y: y,
  			};
  		}

  		//呼叫 const point = makePoint(100,50);
  		若傳入的值，key和value同名，可省略部分程式
  		function makePoint(x,y){
  			return {
  				x,
  				y,
  			};
  		}

  		function createObj(key,value){
			const obj = {};
			obj[key] = value;
			
			return obj;
		}

		呼叫
		const person = createObj('name','Peter');
		const cat = createObj('legs',4);
		person		//{name: "Peter"}
		cat 		//{legs: 4}

  (2). 可計算屬性
  		function createObj(key,value){
			const obj = {};
			obj[key+1] = value;
			
			return obj;
		}

		呼叫
		const person = createObj('name','Peter');
		const cat = createObj('legs',4);
		person		//{name1: "Peter"}
		cat 		//{legs1: 4}


  (3). 函數縮寫

  		var options = {
  			name: 'Peter',
  			level: 10,
  			created: function(){},
  			mounted: function(){},
  		};

  		可改寫為:
  		var options = {
  			name: 'Peter',
  			level: 10,
  			//created: function(){},
  			created(){},
  			// mounted: function(){},
  			mounted(){},
  		};

3. Destructuring assignment 解構賦值
   目的: 便利的取出元素
   	var nums = [1,2,3];
	var first = nums[0];
	var second = nums[1];
	var third = nums[2];

  (1). 陣列解構
  	var [first,second,third] = nums;
  	
  	<1>.預設值
  		var nums = [10,20,30];
  		var [first,second,third,forth=0] = nums;

  	<2>.忽略
  		var nums = [1,2,3,4];
  		var [,second] = nums;		//只取第二個值

  	<3>.變數交換
  		let a = 1;
  		let b = 2;
  		[a,b] = [b,a];

  	<4>.剩餘部分
  		var nums = [1,2,3,4];
  		var [first,...others] = nums;

  		output:
  		first		//1
		others		//[2, 3, 4]

  (2). 物件解構
  	var point = {
  		x: 100,
  		y: 150,
  	};
  	var x = point.x;
  	var y = point.y;

  	var {x,y} = point;

  	<1>.預設值(和陣列相同詮釋)
  		var {x,y,z=100} = point;

  	<2>.指派新名稱
  		var px = point.x;
  		var py = point.y;
 		↓↓
 		↓↓↓↓↓↓
 		var {x:px, y:py} = point;
 		此時已不認得x, y

 	//物件可以改名，但陣列不行
 	var nums = [1,2,3];
 	var first = nums[0];
 		//請問可以改名嗎?  //不行
 	var [first:a] = nums[0];
 	var [a] = nums[0];

  (3). 解構函數的參數
 	//計算一個點和原點的距離 x平方 + y平方 開根號
 	function distance(point){
 		return Math.sqrt(point.x * point.x + point.y * point.y);
 	}

 	↓↓↓↓↓↓
 	function distance(point){
 		const {x,y} = point;
 		return Math.sqrt(x * x + y * y);
 	}

 	↓↓↓↓↓↓
 	function distance({x,y}){
 		return Math.sqrt(x * x + y * y);
 	}

 	↓↓↓↓↓↓
 	function distance({x=0,y=0}){
 		return Math.sqrt(x * x + y * y);
 	}

4. String template 字串模板
	目的: 方便製作字串以及多行字串
	function greeting(name){
		console.log('Hello, '+ name + '!');
	}
	//呼叫greeting('Peter');	//Hello, Peter!

	↓↓↓↓↓↓
	function greeting(name){
		console.log(`Hello, ${name}!`);
	}
	//呼叫greeting('Peter');	//Hello, Peter!

	↓↓↓↓↓↓
	function greeting(name,days){
		const hours = days * 24;
		console.log(`Hello, ${name}!
					It\'s been ${hours} hours.`);
	}
	//呼叫greeting('Peter',3);	
	/*Hello, Peter!
				Its been 72 hours.
	*/

  (1). 插入表達式(expression)
  	function greeting(name,days){
		console.log(`Hello, ${name}! It\'s been ${days*72} hours${(days<7)?'.':', 好久不見!'}`);
	}

  (2). 多行字串
   const words = '一個長字串';
   			或
   				'XXX \n' + 
   				'XXX \n' + 
   				'XXX \n' ;

   	可修改成
   	↓↓↓↓↓↓
   	const words = `xxxxxxx
   	xxxxxxxxxxxxxxxxxxxxxx
   	xxxxxxxxxxxxxxxxxxxxxx`;
   
   ex.	Lorem ipsum dolor sit amet, 
   	consectetur adipisicing elit. Sequi praesentium, 
   	ut deserunt consequuntur accusantium eum voluptates optio, 
   	culpa illo, architecto magnam nulla dolore ex odio voluptatem, 
   	voluptatum molestias at quidem. Perspiciatis accusamus aut 
   	laboriosam facilis soluta, temporibus iure. Iste omnis, 
   	quos est ratione suscipit natus dignissimos atque 
   	nostrum, corporis veniam, deserunt voluptatem saepe 
   	iusto cum modi sit labore quia nisi similique blanditiis 
   	quam ipsam. Eius sapiente eligendi nihil quia esse, 
   	unde iusto. Atque sunt, sequi maxime beatae illum eius 
   	asperiores.

5. Arrow function 箭頭函數
	目的: ES6更簡短宣告函數的方式

	ES5宣告函數(有傳回值)
	var ans = function(x){
		return x * 2;
	};

  (1). ES6宣告函數的方式
	var ans = (x) =>{
		return x * 2;
	}

	若傳入的參數只有一個，可以省略()，修改成
   	↓↓↓↓↓↓
	var ans = x =>{
		return x * 2;
	}

	↓↓↓↓↓↓
	var ans = x => x * 2;

	若傳入的參數不只一個或沒有參數，就不能省略()

	ex.
	arr.map(function(elem,index){
		return elem + index;
	});

	↓↓↓↓↓↓
	arr.map(elem,index) => {
		return elem + index;
	};

	↓↓↓↓↓↓
	arr.map(elem,index) =>  elem + index;

	tips: array的方法
		==> map(), reduce(), filter()

  (2).  語法簡短
	-- 參數只有一個，可以省略()
	-- 內容只有一行(或只有return一行)，可寫成一行
	
	ex.
	theButton.addEventListener('click',function(){alert(10);});
	theButton.addEventListener('click',()=>alert(10););


  (3).  自動綁定
  	-- 箭頭函數內部與外部的this相同

  	const a = () => {console.log(this);}
	console.log(this);

	↓↓↓↓↓↓
	是否相同，看情境決定
	const b = function(){
		console.log(this);
	}
	console.log(this);

  (4).  this
  	--Q: 函數的this代表甚麼意思?
  	--A: context情境(你是如何執行這個函數的)
	ex1.
  	var name = 'Peter';
  	var sayMyName = function(){console.log(this.name);};
  			//呼叫sayMyName()  //Peter

  	var teacher = {
  		name : 'Steve',
  	};

  	teacher.sayMyName = sayMyName;
			//呼叫sayMyName()  			//Peter
			//呼叫teacher.sayMyName()   //Steve

	ex2.
	html
	<button id="responseButton" name="Silvia">Response</button>
	JS 
	var responseButton = document.getElementById('responseButton'); 
	responseButton.addEventListener('click',sayMyName);			//Silvia

	ex3.
	var sayMyName = () => {console.log(this.name);}
		
