<template>

</template>
    
<script>
  export default {
    name: "Slider"
  }

  let sliderElt      = null;
  let slidesTriggers = null;
  let slidesCount    = 0;

  let index    = -1;
  let timer    = null;
  let timeout  = 2000;

  let previousElt = null;
  let nextElt     = null;

  let autoElt    = null;
  let autoIcon   = null;
  let autoState  = true;

  let randomElt    = null;
  let randomIcon   = null;
  let randomState  = false; 

  /**********************************/
  /********** INIT METHODS **********/
  /**********************************/

  function setSlider() {
    if (document.getElementById("slider")) {
      sliderElt = document.getElementById("slider");

    } else {
      alert("No <tag id=\"slider\"> element is present!");
    } 
  }

  function setSlidesTriggers() {
    if (sliderElt.querySelectorAll("input")) {
      slidesTriggers = sliderElt.querySelectorAll("input");
      slidesCount    = slidesTriggers.length;
    } 
  }

  function setOptions() {
    if (document.getElementById("slider-previous")) {
      previousElt = document.getElementById("slider-previous");
    }
    
    if (document.getElementById("slider-next")) {
      nextElt = document.getElementById("slider-next");
    }

    if (document.getElementById("slider-auto")) {
      autoElt = document.getElementById("slider-auto");
    }
  
    if (document.getElementById("slider-random")) {
      randomElt = document.getElementById("slider-random");
    }
  }

  function setIcons() {
    if (autoElt.querySelector("i")) {
      autoIcon = autoElt.querySelector("i");
    }

    if (randomElt.querySelector("i")) {
      randomIcon = randomElt.querySelector("i");
    }
  }

  function setListeners() {
    document.addEventListener("keydown", setKeyboard);

    if (previousElt) {
      previousElt.addEventListener("click", goPrevious);
    }

    if (nextElt) {
      nextElt.addEventListener("click", goNext);
    }

    if (autoElt) {
      autoElt.addEventListener("click", checkAuto);
    }

    if (randomElt) {
      randomElt.addEventListener("click", checkRandom);
    }
  }

  function runSlider() {
    if (autoState) {
      timer = window.setInterval(goNext, timeout);

    } else {
      goNext();
    }
  }

  /************************************/
  /********** EVENTS METHODS **********/
  /************************************/

  /**
   * @param {Object} event
   */
  function setKeyboard(event) {
    switch (event.code) {

      case "ArrowLeft":
        goPrevious();
        break;

      case "ArrowUp":
        checkAuto();
        break;

      case "ArrowDown":
        checkRandom();
        break;

      case "ArrowRight":
        goNext();
        break;
    }
  }

  function goPrevious() {
    if (randomState) {
      index = getRandomInteger(0, slidesCount - 1);

    } else {
      index--;

      if (index < 0) {
        index = slidesCount - 1;
      }
    }

    refreshSlide();
  }

  function goNext() {
    if (randomState) {
      index = getRandomInteger(0, slidesCount - 1);

    } else {
      index++;

      if (index >= slidesCount) {
        index = 0;
      }
    }

    refreshSlide();
  }

  function checkAuto() {
    if (autoState) {
      setAuto(false, "Play", "fa-play", "fa-pause");
      window.clearInterval(timer);

    } else {
      setAuto(true, "Pause", "fa-pause", "fa-play");
      timer = window.setInterval(goNext, timeout);
    }

    refreshSlide();
  }

  function checkRandom() {
    if (randomState) {
      setRandom(false, "Random", "fa-random", "fa-long-arrow-alt-right");

    } else {
      setRandom(true, "Normal", "fa-long-arrow-alt-right", "fa-random");
    }

    refreshSlide();
  }

  function refreshSlide() {
    for (let i = 0; i < slidesCount; i++) {

      if (slidesTriggers[i].hasAttribute("checked")) {
        slidesTriggers[i].removeAttribute("checked");
      }
    }

    slidesTriggers[index].setAttribute("checked", true);
  }

  /****************************/
  /********** GETTER **********/
  /****************************/

  /**
   * @param {number} min
   * @param {number} max
   * @return
   */
  function getRandomInteger(min, max) {

    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  /*************************************/
  /********** OPTIONS SETTERS **********/
  /*************************************/

  /**
   * @param {boolean} state
   * @param {string} title
   * @param {string} add
   * @param {string} remove
   */
  function setAuto(state, title, add, remove) {
    autoState      = state;
    autoElt.title  = title;

    setIcon(autoIcon, add, remove);
  }

  /**
   * @param {boolean} state
   * @param {string} title
   * @param {string} add
   * @param {string} remove
   */
  function setRandom(state, title, add, remove) {
    randomState      = state;
    randomElt.title  = title;

    setIcon(randomIcon, add, remove);
  }

  /**
   * @param {object} icon
   * @param {string} add
   * @param {string} remove
   */
  function setIcon(icon, add, remove) {
    icon.classList.add(add);
    icon.classList.remove(remove);
  }

  setSlider();
  setSlidesTriggers();
  setOptions();
  setIcons();
  setListeners();
  runSlider();
</script>

<style lang="scss" scoped>
  .slider {
    --slider-margin: var(--slider-figcaption-height) auto -20px;
    --slider-width: 100%;
    --slider-relay-text-align: center;
    --slider-figcaption-top: -45%;
    --slider-figcaption-left: 0;
    --slider-figcaption-padding: 5px 20px;
    --slider-figcaption-width: 100%;
    --slider-figcaption-height: 20%;
    --slider-figcaption-font-weight: bold;
    --slider-button-border: none;
    --slider-button-font-size: 60%;
    --slider-button-background: none;
    --slider-button-color: var(--grey-dark);
    --slider-previous-top: 42%;
    --slider-previous-left: -1%;
    --slider-auto-bottom: 5%;
    --slider-auto-left: 45%;
    --slider-auto-opacity: 1;
    --slider-auto-hover-opacity: 1;
    --slider-random-top: 42%;
    --slider-random-left: 45%;
    --slider-random-opacity: 0;
    --slider-random-hover-opacity: 1;
    --slider-next-top: 42%;
    --slider-next-right: -1%;
    --slider-progress-place-content: center;
    --slider-progress-top: -5%;
    --slider-progress-margin-left: calc((100% - var(--slider-progress-width)) / 2);
    --slider-progress-width: 90%;
    --slider-progress-label-padding: 5px;
    --slider-progress-label-font-size: var(--slider-button-font-size);
    --slider-progress-label-color: var(--grey-dark);
    --slider-checked-content: "\f058";

    position: relative;
    margin: var(--slider-margin);
    width: var(--slider-width);

    & > .slider-relay {
      text-align: var(--slider-relay-text-align);
    }

    & [class*="target"] {
      display: none;
    }

    & figcaption {
      position: absolute;
      top: var(--slider-figcaption-top);
      left: var(--slider-figcaption-left);
      padding: var(--slider-figcaption-padding);
      width: var(--slider-figcaption-width);
      height: var(--slider-figcaption-height);
      font-weight: var(--slider-figcaption-font-weight);
    }

    & button {
      position: absolute;
      border: var(--slider-button-border);
      font-size: var(--slider-button-font-size);
      background: var(--slider-button-background);
      color: var(--slider-button-color);
    }

    &-previous {
      top: var(--slider-previous-top);
      left: var(--slider-previous-left);
    }

    &-auto {
      bottom: var(--slider-auto-bottom);
      left: var(--slider-auto-left);
      opacity: var(--slider-auto-opacity);
    }

    &:hover &-auto,
    &:focus &-auto {
      opacity: var(--slider-auto-hover-opacity);
    }

    &-random {
      top: var(--slider-random-top);
      left: var(--slider-random-left);
      opacity: var(--slider-random-opacity);
    }

    &:hover &-random,
    &:focus &-random {
      opacity: var(--slider-random-hover-opacity);
    }

    &-next {
      top: var(--slider-next-top);
      right: var(--slider-next-right);
    }

    &-progress {
      display: flex;
      position: absolute;
      place-content: var(--slider-progress-place-content);
      top: var(--slider-progress-top);
      margin-left: var(--slider-progress-margin-left);
      width: var(--slider-progress-width);

      & label {
        padding: var(--slider-progress-label-padding);
        font-size: var(--slider-progress-label-font-size);
        color: var(--slider-progress-label-color);
      }
    }
  }

  .slider-radio1:checked ~ .slider-relay .slider-target1,
  .slider-radio2:checked ~ .slider-relay .slider-target2,
  .slider-radio3:checked ~ .slider-relay .slider-target3,
  .slider-radio4:checked ~ .slider-relay .slider-target4,
  .slider-radio5:checked ~ .slider-relay .slider-target5,
  .slider-radio6:checked ~ .slider-relay .slider-target6,
  .slider-radio7:checked ~ .slider-relay .slider-target7,
  .slider-radio8:checked ~ .slider-relay .slider-target8,
  .slider-radio9:checked ~ .slider-relay .slider-target9 {
    display: inline-block;
  }

  .slider-radio1:checked ~ .slider-progress [for="slider-radio1"] *::before,
  .slider-radio2:checked ~ .slider-progress [for="slider-radio2"] *::before,
  .slider-radio3:checked ~ .slider-progress [for="slider-radio3"] *::before,
  .slider-radio4:checked ~ .slider-progress [for="slider-radio4"] *::before,
  .slider-radio5:checked ~ .slider-progress [for="slider-radio5"] *::before,
  .slider-radio6:checked ~ .slider-progress [for="slider-radio6"] *::before,
  .slider-radio7:checked ~ .slider-progress [for="slider-radio7"] *::before,
  .slider-radio8:checked ~ .slider-progress [for="slider-radio8"] *::before,
  .slider-radio9:checked ~ .slider-progress [for="slider-radio9"] *::before {
  content: var(--slider-checked-content);
  }

  @media (min-width: $breakpoint-sm) {
    .slider {
      --slider-figcaption-top: -35%;
      --slider-figcaption-height: 15%;
      --slider-button-font-size: 70%;
      --slider-previous-top: 44%;
      --slider-previous-left: 0;
      --slider-random-top: 44%;
      --slider-next-top: 44%;
      --slider-next-right: 0;
      --slider-auto-bottom: 6%;
      --slider-auto-left: 46%;
      --slider-random-left: 46%;
      --slider-progress-top: -2%;
      --slider-progress-width: 80%;
    }
  }

  @media (min-width: $breakpoint-md) {
    .slider {
      --slider-figcaption-top: -20%;
      --slider-figcaption-height: 10%;
      --slider-button-font-size: 80%;
      --slider-previous-top: 45%;
      --slider-random-top: 45%;
      --slider-next-top: 45%;
      --slider-auto-left: 47%;
      --slider-random-left: 47%;
      --slider-progress-top: 0;
      --slider-progress-width: 70%;
    }
  }

  @media (min-width: $breakpoint-lg) {
    .slider {
      --slider-figcaption-top: -15%;
      --slider-figcaption-height: 8%;
      --slider-button-font-size: 90%;
      --slider-previous-top: 46%;
      --slider-random-top: 46%;
      --slider-next-top: 46%;
      --slider-auto-left: 48%;
      --slider-random-left: 48%;
      --slider-progress-width: 60%;
    }
  }

  @media (min-width: $breakpoint-xl) {
    .slider {
      --slider-figcaption-top: -12%;
      --slider-figcaption-height: 6%;
      --slider-button-font-size: 100%;
      --slider-previous-top: 48%;
      --slider-random-top: 48%;
      --slider-next-top: 48%;
      --slider-auto-left: 49%;
      --slider-auto-opacity: 0;
      --slider-random-left: 49%;
      --slider-progress-width: 50%;
    }
  }

  @media (min-width: $breakpoint-wd) {
    .slider {
      --slider-figcaption-top: -10%;
      --slider-figcaption-height: 5%;
      --slider-button-font-size: 100%;
      --slider-previous-top: 48%;
      --slider-random-top: 48%;
      --slider-next-top: 48%;
      --slider-auto-left: 49%;
      --slider-auto-opacity: 0;
      --slider-random-left: 49%;
      --slider-progress-width: 50%;
    }
  }
</style>
