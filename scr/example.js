function init_test(ctx) {
   window.text = "Hello World!"
}

function draw_test(ctx) {
   ctx.fillStyle = "black"
   ctx.font = "60px Courier New"
   ctx.fillText(text, 100, 100);
}
