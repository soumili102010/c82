var mouseevents="empty";
canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
color="black";
width=1;

var lastmousex,lastmousey;
canvas.addEventListener("mousedown",mymousedown);
function mymousedown(e)
{
    color=document.getElementById("color").value;
    width=document.getElementById("width").value;
    mouseevents="mousedown";
}

canvas.addEventListener("mouseup",mymouseup);
function mymouseup(e)
{
    mouseevents="mouseup";
}

canvas.addEventListener("mouseleave",mymouseleave);
function mymouseleave(e)
{
    mouseevents="mouseleave";
}

canvas.addEventListener("mousemove",mymousemove);
function mymousemove(e)
{
    currentmousex=e.clientX - canvas.offsetLeft;
    currentmousey=e.clientY - canvas.offsetTop;
    if(mouseevents=="mousedown"){
        ctx.beginPath();
        ctx.storkeStyle=color;
        ctx.lineWidth=width;
        ctx.moveTo(lastmousex,lastmousey);
        ctx.lineTo(currentmousex,currentmousey);
        ctx.stroke();
    }
    lastmousex=currentmousex;
    lastmousey=currentmousey
}