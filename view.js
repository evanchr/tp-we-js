// Implémenter ici les fonctions paint à ajouter dans chacune des classes du modèle.

Drawing.prototype.paint = function (ctx) {
    ctx.fillStyle = '#F0F0F0'; // set canvas' background color
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    this.formes.forEach(function (eltDuTableau) {
        // now fill the canvas
        eltDuTableau.paint(ctx);
    });
};

//Les prototypes permettent d'ajouter des fonctions (ici paint) à toutes les instances d'une classe

Forme.prototype.paint = function (ctx) {
    ctx.strokeStyle = this.couleur; // Define color
    ctx.lineWidth = this.epaisseur; // Define epaisseur
};

Rectangle.prototype.paint = function (ctx) {
    Forme.prototype.paint.call(this, ctx)
    ctx.beginPath(); // Commence à dessiner
    ctx.rect(this.posx, this.posy, this.largeur, this.hauteur); // Dessine un rectangle
    ctx.stroke(); // Fin du dessin
};

Line.prototype.paint = function (ctx) {
    Forme.prototype.paint.call(this, ctx)
    ctx.beginPath(); // Commence à dessiner
    ctx.moveTo(this.posx, this.posy); // Va aux coordonnées de départ
    ctx.lineTo(this.posxfinal, this.posyfinal); // Dessine jusqu'aux coordonnées finales
    ctx.stroke(); // Fin du dessin
};

Circle.prototype.paint = function (ctx) {
    Forme.prototype.paint.call(this, ctx);
    ctx.beginPath(); // Commence à dessiner
    ctx.arc(this.posx, this.posy, this.rayon, 0, 2 * Math.PI);  // Dessine un cercle
    ctx.stroke();  // Fin du dessin
};

function updateFormes(index, forme) {
    document.getElementById('formesList').insertAdjacentHTML('beforeend', toDom(index, forme))
}

function toDom(index, forme) {
    if (forme && typeof forme === 'object') {
        let innerHtml = `<li = id="liRemove${index}">`
        innerHtml += `<button type="button" class="btn btn-default remove" id="remove${index}">
                      <span class ="glyphicon glyphicon-remove-sign"></span></button>`
        if (forme instanceof Rectangle) {
            innerHtml += `<span style="color:${forme.couleur}">Rectangle</span>`;
        } else if (forme instanceof Line) {
            innerHtml += `<span style="color:${forme.couleur}">Line</span>`;
        } else if (forme instanceof Circle) {
            innerHtml += `<span style="color:${forme.couleur}">Circle</span>`;
        }
        return innerHtml + '</li>';
    }
}

