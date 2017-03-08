var svg=document.getElementById("vimage");
var button=document.getElementById("clear");

var change = function(e) {
    console.log("CIRCLE");
    this.setAttribute("fill","green");
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
    c.setAttribute("fill","yellow");
    c.addEventListener("click", change);
    return c;
}

var clear = function(e){
    while(svg.lastChild){
	svg.removeChild(svg.lastChild);
    };
    x=-1;
};

svg.addEventListener("click", addCircle);
button.addEventListener("click", clear);
