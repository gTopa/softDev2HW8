var svg=document.getElementById("vimage");
var button=document.getElementById("clear");

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
    c.addEventListener("click", change);
    return c;
};

var addRandomCircle = function() {
    svg.appendChild(makeRandomCircle());
    console.log("SVG");
};

var makeRandomCircle = function(){
    var c = document.createElementNS("http://www.w3.org/2000/svg","circle");
    c.setAttribute("cx",Math.round(Math.random()*500));
    c.setAttribute("cy",Math.round(Math.random()*500));
    c.setAttribute("r", "20");
    c.setAttribute("fill","yellow");
    c.addEventListener("click", change);
    return c;
};

var clear = function(e){
    while(svg.lastChild){
	svg.removeChild(svg.lastChild);
    };
    x=-1;
};

svg.addEventListener("click", addCircle);
button.addEventListener("click", clear);
