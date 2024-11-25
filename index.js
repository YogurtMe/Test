var test = document.getElementById("test");

function loop(){
    var sbx = Math.floor(Math.random() * (250+1)) + 23;
    var sby = Math.floor(Math.random() * (250+1)) + 23;
    
    sbx = sbx.toString();
    sby = sby.toString();
    
    test.style.left = sbx+"px";
    test.style.top = sby+"px";
    
    setTimeout(loop, 1000);
}

var A = 0.5;

function move(){
    A = A + 0.5;
    A = A.toString();
    test.style.left = A + "px";
    A = parseFloat(A);
    setTimeout(move, 1);
}
move();