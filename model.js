// Implémenter ici les 4 classes du modèle.
// N'oubliez pas l'héritage !

function Drawing() {
    this.formes = new Map();
}

function Forme(posx, posy, couleur, epaisseur) {
    this.posx = posx;
    this.posy = posy;
    this.couleur = couleur;
    this.epaisseur = epaisseur;
};

function Rectangle(posx, posy, largeur, hauteur, couleur, epaisseur) {
    Forme.call(this, posx, posy, couleur, epaisseur)
    this.largeur = largeur;
    this.hauteur = hauteur;
};
Rectangle.prototype = new Forme(); // Permet l'héritage

function Line(posx, posy, couleur, epaisseur, posxfinal, posyfinal) {
    Forme.call(this, posx, posy, couleur, epaisseur)
    this.posxfinal = posxfinal;
    this.posyfinal = posyfinal;
};
Line.prototype = new Forme(); // Permet l'héritage

function Circle(posx, posy, rayon, couleur, epaisseur) {
    Forme.call(this, posx, posy, couleur, epaisseur)
    this.rayon = rayon
};
Circle.prototype = new Forme(); // Permet l'héritage

