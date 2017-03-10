var svg=document.getElementById("vimage");
var button=document.getElementById("clear");
var reqId = 0;
var moveButton=document.getElementById("move");

var change = function(e) {
    console.log("CIRCLE");
    if(this.getAttribute("fill")=="green"){
	svg.removeChild(this);
	addRandomCircle();
    }
    else{
	this.setAttribute("fill","green");
    };
    e.stopPropagation();
};

var addCircle = function(e) {
    document.getElementById("vimage").appendChild(makeCircle(e));
    console.log("SVG");
};

var makeCircle = function(e){
    var c = document.createElementNS("http://www.w3.org/2000/svg","circle");
    c.setAttribute("cx",e.offsetX);
    c.setAttribute("cy",e.offsetY);
    c.setAttribute("r", "20");
    c.setAttribute("fill","red");  
    c.setAttribute("data-mx","1");
    c.setAttribute("data-my","1");
    c.addEventListener("click", change);
    return c;
};

var addRandomCircle = function() {
    svg.appendChild(makeRandomCircle());
    console.log("SVG");
};

var makeRandomCircle = function(){
    var c = document.createElementNS("http://www.w3.org/2000/svg","circle");
    c.setAttribute("cx",Math.round(Math.random()*499));
    c.setAttribute("cy",Math.round(Math.random()*499));
    c.setAttribute("r", "20");
    c.setAttribute("fill","red");
    c.addEventListener("click", change);
    return c;
};

var clear = function(e){
    while(svg.lastChild){
	svg.removeChild(svg.lastChild);
    };
};

var move = function(e){
    window.cancelAnimationFrame(reqId);
    var moveCircles = function(){
	var circles=document.getElementsByTagName("circle");
	for(var i = 0, max=circles.length;i<max;i++){
	    var x=circles[i].getAttribute("cx");
	    var y=circles[i].getAttribute("cy");
	    var dx = parseInt(circles[i].getAttribute("data-mx"));
	    var dy = parseInt(circles[i].getAttribute("data-my"));
	    if(x  == 480 || x == 0){
		circles[i].setAttribute("data-mx", (parseInt(circles[i].getAttribute("data-mx"),10) *-1).toString());
	    };
	    if(y  == 480 ||  y == 0){
		circles[i].setAttribute("data-my", (parseInt(circles[i].getAttribute("data-my"),10) *-1).toString());
	    };
	    var newx = parseInt(circles[i].getAttribute("data-mx"),10);
	    console.log(newx);
	    circles[i].setAttribute("cx",(parseInt(circles[i].getAttribute("data-mx"),10)+parseInt(circles[i].getAttribute("cx"))).toString());
	    circles[i].setAttribute("cy",(parseInt(circles[i].getAttribute("data-my"),10)+parseInt(circles[i].getAttribute("cy"))).toString());	
	};
	reqId = window.requestAnimationFrame(moveCircles);
    };
    moveCircles();
};

svg.addEventListener("click", addCircle);
button.addEventListener("click", clear);
moveButton.addEventListener("click", move);
