
var canvas = document.getElementById('myCanvas');
var ctx = canvas.getContext('2d');

canvas.width = 800
canvas.height = 600

// Code temporaire pour tester le DnD
//new DnD(canvas);
ctx.fillStyle = '#F0F0F0'; // set canvas' background color
ctx.fillRect(0, 0, canvas.width, canvas.height);  // now fill the canvas

// Code temporaire pour tester l'affiche de la vue
// var rec = new Rectangle(10, 20, 50, 100, '#FE4500', 5);
// rec.paint(ctx);
// var ligne = new Line(10, 20, '#FF0000', 5, 50, 100);
// ligne.paint(ctx);

// Code final à utiliser pour manipuler Pencil.
var drawing = new Drawing();
var pencil = new Pencil(ctx, drawing, canvas);
drawing.paint(ctx, canvas);

