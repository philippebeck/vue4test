<template>
  <canvas id="canvas"></canvas>

  <ul class="canvas-controls">
    <li>
      <label for="canvas-line" 
          title="Choose Thickness">
        <i class="fas fa-paint-brush fa-lg"></i>
      </label>
      <input id="canvas-line" 
        type="range" 
        name="canvas-line" 
        min="1" 
        max="10" 
        step="1" 
        value="2" 
        title="Choose Thickness">
    </li>

    <li>
      <label for="canvas-color" 
          title="Choose Color">
        <i class="fas fa-palette fa-lg"></i>
      </label>
      <input id="canvas-color" 
        type="color" 
        name="canvas-color" 
        title="Choose Color">
    </li>

    <li>
      <button class="btn-green btn-lg" 
          type="button" 
          id="canvas-cleaner" 
          title="Erase Canvas">
        <i class="fas fa-eraser fa-lg"></i>
      </button>
    </li>
  </ul>
</template>

<script>
  export default {
    name: "Canvas"
  }

  let canvasElt  = null;
  let lineElt    = null;
  let colorElt   = null;
  let cleanerElt = null;

  let context     = null;
  let startState  = false;

  let mouseX = 0;
  let mouseY = 0;
  let touchX = 0;
  let touchY = 0; 

  /*****************************/
  /********** GETTERS **********/
  /*****************************/

  function getCanvasElt() {
    if (document.getElementById("canvas")) {
      canvasElt = document.getElementById("canvas");

    } else {
      alert("No <canvas id=\"canvas\"> element is present!");
    }
  }

  function getLineElt() {
    if (document.getElementById("canvas-line")) {
      lineElt = document.getElementById("canvas-line");

    } else {
      alert("No <input id=\"canvas-line\"> element is present!");
    }
  }

  function getColorElt() {
    if (document.getElementById("canvas-color")) {
      colorElt = document.getElementById("canvas-color");

    } else {
      alert("No <input id=\"canvas-color\"> element is present!");
    }
  }

  function getCleanerElt() {
    if (document.getElementById("canvas-cleaner")) {
      cleanerElt = document.getElementById("canvas-cleaner");

    } else {
      alert("No <button id=\"canvas-cleaner\"> element is present!");
    }
  }

  /*****************************/
  /********** SETTERS **********/
  /*****************************/

  /**
   * @param {number} width
   * @param {number} height
   */
  function setCanvas(width, height) {
    if (canvasElt) {
      canvasElt.width   = width;
      canvasElt.height  = height;
    } 
  }

  /**
   * @param {number} line
   * @param {string} color
   */
  function setContext(line, color) {
    if (canvasElt.getContext) {
      context = canvasElt.getContext("2d");

      context.lineWidth    = line;
      context.strokeStyle  = color;
      context.lineCap      = "round";
      context.lineJoin     = "round";

    } else {
      alert("Your browser doesn't support <canvas> element!");
    }
  }

  function setPanelListeners() {
    if (lineElt) {
      lineElt.addEventListener("input", setLine.bind(this));
    }

    if (colorElt) {
      colorElt.addEventListener("input", setColor.bind(this));
    }

    if (cleanerElt) {
      cleanerElt.addEventListener("click", cleanCanvas.bind(this));
    }
  }

function setCanvasListeners() {
  if (canvasElt) {

    canvasElt.addEventListener("mousedown", moveInCanvas.bind(this, "mouse"));
    canvasElt.addEventListener("mousemove", drawInCanvas.bind(this, "mouse"));
    canvasElt.addEventListener("mouseup", stopDrawing.bind(this));
    canvasElt.addEventListener("mouseout", stopDrawing.bind(this));

    canvasElt.addEventListener("touchstart", moveInCanvas.bind(this, "touch"));
    canvasElt.addEventListener("touchmove", drawInCanvas.bind(this, "touch"));
    canvasElt.addEventListener("touchend", stopDrawing.bind(this));
    canvasElt.addEventListener("touchcancel", stopDrawing.bind(this));
  }
  }

  /*******************************/
  /********** LISTENERS **********/
  /*******************************/


  function setLine() {
    context.lineWidth = lineElt.value;
  }

  function setColor() {
    context.strokeStyle = colorElt.value;
  }

  function cleanCanvas() {
    context.clearRect(0, 0, canvasElt.width, canvasElt.height);
  }

  /**
   * @param {string} type
   * @param {object} event
   */
  function moveInCanvas(type, event) {
    startDrawing();
    switch (type) {

      case "mouse":
        getMouseLocation(event);
        moveTo(event, mouseX, mouseY);
        break;

      case "touch":
        getTouchLocation(event);
        moveTo(event, touchX, touchY);
        break;

      default:
        alert("Event type must be \"mouse\" or \"touch\"!");
    }
  }

  /**
   * @param {string} type
   * @param {object} event
   */
  function drawInCanvas(type, event) {
    if (startState) {
      switch (type) {

        case "mouse":
          getMouseLocation(event);
          lineTo(mouseX, mouseY);
          break;

        case "touch":
          getTouchLocation(event);
          lineTo(touchX, touchY);
          break;

        default:
          alert("Event type must be \"mouse\" or \"touch\"!");
      }
    }
  }

  function stopDrawing() {
    startState = false;
  }

  /***********************************/
  /********** GET LOCATIONS **********/
  /***********************************/

  /**
   * @param {object} event
   */
  function getMouseLocation(event) {
    mouseX = event.offsetX;
    mouseY = event.offsetY;
  }

  /**
   * @param {object} event
   */
  function getTouchLocation(event) {
    let position  = event.target.getBoundingClientRect();
    touchX   = event.targetTouches[0].clientX - position.left;
    touchY   = event.targetTouches[0].clientY - position.top;
  }

  /*************************************/
  /********** CONTEXT METHODS **********/
  /*************************************/

  function startDrawing() {
    startState = true;
    context.beginPath();
  }

  /**
   * @param {object} event
   * @param {number} x
   * @param {number} y
   */
  function moveTo(event, x, y) {
    context.moveTo(x, y);
    event.preventDefault();
  }

  /**
   * @param {number} x
   * @param {number} y
   */
  function lineTo(x, y) {
    context.lineTo(x, y);
    context.stroke();
  }

  getCanvasElt();
  getLineElt();
  getColorElt();
  getCleanerElt();

  setCanvas(500, 500);
  setContext(2, "black");
  setPanelListeners();
  setCanvasListeners();
</script>

<style lang="scss" scoped>
  .canvas {
    --canvas-border: medium dashed var(--secondary);
    --canvas-border-radius: 20px;
    --canvas-cursor: crosshair;

    --canvas-hover-controls-opacity: 1;
    --canvas-hover-controls-transition: opacity 2s;

    & > canvas {
      border: var(--canvas-border);
      border-radius: var(--canvas-border-radius);
      cursor: var(--canvas-cursor);
    }

    &:hover > .canvas-controls,
    &:focus > .canvas-controls {
      opacity: var(--canvas-hover-controls-opacity);
      transition: var(--canvas-hover-controls-transition);
    }
  }

  .canvas-controls {
    --canvas-controls-margin: auto;
    --canvas-controls-border: thin solid var(--primary);
    --canvas-controls-border-radius: 10px;
    --canvas-controls-width: 300px;
    --canvas-controls-background-color: var(--primary-dark);
    --canvas-controls-opacity: 1;
    --canvas-controls-transition: opacity 1s;

    --canvas-controls-list-flex-direction: column;
    --canvas-controls-list-place-items: center;
    --canvas-controls-list-margin: 5px;

    --canvas-controls-label-padding: 5px;
    --canvas-controls-label-color: var(--white);

    margin: var(--canvas-controls-margin);
    border: var(--canvas-controls-border);
    border-radius: var(--canvas-controls-border-radius);
    width: var(--canvas-controls-width);
    background-color: var(--canvas-controls-background-color);
    opacity: var(--canvas-controls-opacity);
    transition: var(--canvas-controls-transition);

    & li {
      display: flex;
      flex-direction: var(--canvas-controls-list-flex-direction);
      place-items: var(--canvas-controls-list-place-items);
      margin: var(--canvas-controls-list-margin);
    }

    & label {
      padding: var(--canvas-controls-label-padding);
      color: var(--canvas-controls-label-color);
    }

    @media (min-width: 1200px) {
      .canvas {
        --canvas-controls-opacity: 0;
      }
    }
  }
</style>
