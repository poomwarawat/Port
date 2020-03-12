window.onload = pageLoad;

function pageLoad(){
	var startBtn = document.getElementById("start")
	startBtn.onclick = startGame
}
var Input_num
var Select
function startGame(){
	Input_num = document.getElementById("numbox").value
	Select = document.getElementById("color").value
	// alert(Input_num + Select)
	addBox();
	timeStart();
}

function timeStart(){
	var TIMER_TICK = 1000;
	var timer = null;
	var min = 0.5; // 0.5 minute
	var second = min*60; 
	var x = document.getElementById('clock');
	timer = setInterval(timeCount, TIMER_TICK);
	
	var count = 5 
	function timeCount(){
		var allbox = document.querySelectorAll("#squares-layer div");
		count--
		x.innerHTML = count
		if(count == 0){
			alert("Stop")
			clearInterval(timer)
			clearScreen()
		}
		if(allbox.length == 0){
			alert("You win")
			clearInterval(timer)
		}
		
	}
}


function addBox(){
	var numbox = Input_num;
	var colorDrop = Select;
	var squaresLayer = document.getElementById("squares-layer");
	
	for (var i =0; i<numbox;i++){
		var tempbox = document.createElement("div");
		tempbox.className = "square";
		tempbox.id = "box" + i;
		tempbox.style.backgroundColor = colorDrop
		tempbox.style.left = Math.random() * (500 - 25) + "px";
		tempbox.style.top = Math.random() * (500 - 25) + "px";
		
		squaresLayer.appendChild(tempbox)
		bindBox(tempbox);
	}
}
var currentNode
function bindBox(box){
	currentNode = document.getElementById("squares-layer")
	//เมื่อกดแล้ว กล่องจะหายไป
	box.onclick = function(){
		currentNode.removeChild(box)
	}
	
}

function clearScreen(){
	var allbox = document.querySelectorAll(".square");
	console.log(allbox)
	//delete all  squares
	for (var i=0;i<allbox.length;i++){
		currentNode.removeChild(allbox[i])
	}
}




