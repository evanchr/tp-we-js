
// La création d'un Dnd requière un canvas et un interacteur.
// L'interacteur viendra dans un second temps donc ne vous en souciez pas au départ.
function DnD(canvas, interactor) {
  // Définir ici les attributs de la 'classe'
  posInitX = 0;
  posInitY = 0;
  posFinalX = 0;
  posFinalY = 0;
  this.interactor = interactor;
  moveActiv = false;

  // Developper les 3 fonctions gérant les événements
  this.pression = function (evt) {
    this.posInitX = getMousePosition(canvas, evt).x;
    this.posInitY = getMousePosition(canvas, evt).y;
    this.moveActiv = true;
    this.interactor.onInteractionStart(this);
  }.bind(this)

  this.move = function (evt) {
    if (this.moveActiv) {
      this.posFinalX = getMousePosition(canvas, evt).x;
      this.posFinalY = getMousePosition(canvas, evt).y;
      this.interactor.onInteractionUpdate(this);
    }
  }.bind(this)

  this.relachement = function (evt) {
    this.posFinalX = getMousePosition(canvas, evt).x;
    this.posFinalY = getMousePosition(canvas, evt).y;
    this.moveActiv = false;
    this.interactor.onInteractionEnd(this);
  }.bind(this)

  // Associer les fonctions précédentes aux évènements du canvas.
  canvas.addEventListener('mousedown', this.pression, false);
  canvas.addEventListener('mousemove', this.move, false);
  canvas.addEventListener('mouseup', this.relachement, false);
};

// Place le point de l'événement evt relativement à la position du canvas.
function getMousePosition(canvas, evt) {
  var rect = canvas.getBoundingClientRect();
  return {
    x: evt.clientX - rect.left,
    y: evt.clientY - rect.top
  };
};



