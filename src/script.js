const canvas = document.querySelector(".myCanvas");
const width = (canvas.width = 610);
const height = (canvas.height = 610);
const ctx = canvas.getContext("2d");

//ctx.fillStyle = "rgb(0, 0, 0)";
//ctx.fillRect(0, 0, width, height);

for(let i = 5; i <= 605; i = i + 5) {
    // vertical lines
    ctx.moveTo(i, 5);
    ctx.lineTo(i, 605);

    // horizontal lines
    ctx.moveTo(5, i);
    ctx.lineTo(605, i);

    ctx.strokeStyle = "#f0f0f0";
    ctx.stroke();
}

ctx.beginPath();
for(let i = 5; i <= 605; i = i + 30) {
    // vertical lines
    ctx.moveTo(i, 5);
    ctx.lineTo(i, 605);

    // horizontal lines
    ctx.moveTo(5, i);
    ctx.lineTo(605, i);

    ctx.strokeStyle = "#c0c0c0";
    ctx.stroke();
}

ctx.fillStyle = "rgb(0, 0, 0)";
ctx.fillRect(125, 155, 30, 90);