<template>

</template>
    
<script>
  export default {
    name: "Slider"
  }

  class Slider {
    /**
     * @param {number} timeout
     * @param {Boolean} auto
     * @param {Boolean} random
     */
    constructor(timeout = 2000, 
                auto = true, 
                random = false) {

      this.sliderElt      = null;
      this.slidesTriggers = null;
      this.slidesCount    = 0;

      this.index    = -1;
      this.timer    = null;
      this.timeout  = timeout;

      this.previousElt = null;
      this.nextElt     = null;

      this.autoElt    = null;
      this.autoIcon   = null;
      this.autoState  = auto;

      this.randomElt    = null;
      this.randomIcon   = null;
      this.randomState  = random;

      this.setSlider();
      this.setSlidesTriggers();
      this.setOptions();
      this.setIcons();
      this.setListeners();

      this.runSlider();
    }

    /**********************************/
    /********** INIT METHODS **********/
    /**********************************/

    setSlider() {
      if (document.getElementById("slider")) {
        this.sliderElt = document.getElementById("slider");

      } else {
        alert("No <tag id=\"slider\"> element is present!");
      } 
    }

    setSlidesTriggers() {
      if (this.sliderElt.querySelectorAll("input")) {
        this.slidesTriggers = this.sliderElt.querySelectorAll("input");
        this.slidesCount    = this.slidesTriggers.length;
      } 
    }

    setOptions() {
      if (document.getElementById("slider-previous")) {
        this.previousElt = document.getElementById("slider-previous");
      }
      
      if (document.getElementById("slider-next")) {
        this.nextElt = document.getElementById("slider-next");
      }

      if (document.getElementById("slider-auto")) {
        this.autoElt = document.getElementById("slider-auto");
      }
    
      if (document.getElementById("slider-random")) {
        this.randomElt = document.getElementById("slider-random");
      }
    }

    setIcons() {
      if (this.autoElt.querySelector("i")) {
        this.autoIcon = this.autoElt.querySelector("i");
      }

      if (this.randomElt.querySelector("i")) {
        this.randomIcon = this.randomElt.querySelector("i");
      }
    }

    setListeners() {
      document.addEventListener("keydown", this.setKeyboard.bind(this));

      if (this.previousElt) {
        this.previousElt.addEventListener("click", this.goPrevious.bind(this));
      }

      if (this.nextElt) {
        this.nextElt.addEventListener("click", this.goNext.bind(this));
      }

      if (this.autoElt) {
        this.autoElt.addEventListener("click", this.checkAuto.bind(this));
      }

      if (this.randomElt) {
        this.randomElt.addEventListener("click", this.checkRandom.bind(this));
      }
    }

    runSlider() {
      if (this.autoState) {
        this.timer = window.setInterval(this.goNext.bind(this), this.timeout);

      } else {
        this.goNext();
      }
    }

    /************************************/
    /********** EVENTS METHODS **********/
    /************************************/

    /**
     * @param {Object} event
     */
    setKeyboard(event) {
      switch (event.code) {

        case "ArrowLeft":
          this.goPrevious();
          break;

        case "ArrowUp":
          this.checkAuto();
          break;

        case "ArrowDown":
          this.checkRandom();
          break;

        case "ArrowRight":
          this.goNext();
          break;
      }
    }

    goPrevious() {
      if (this.randomState) {
        this.index = this.getRandomInteger(0, this.slidesCount - 1);

      } else {
        this.index--;

        if (this.index < 0) {
          this.index = this.slidesCount - 1;
        }
      }

      this.refreshSlide();
    }

    goNext() {
      if (this.randomState) {
        this.index = this.getRandomInteger(0, this.slidesCount - 1);

      } else {
        this.index++;

        if (this.index >= this.slidesCount) {
          this.index = 0;
        }
      }

      this.refreshSlide();
    }

    checkAuto() {
      if (this.autoState) {
        this.setAuto(false, "Play", "fa-play", "fa-pause");
        window.clearInterval(this.timer);

      } else {
        this.setAuto(true, "Pause", "fa-pause", "fa-play");
        this.timer = window.setInterval(this.goNext.bind(this), this.timeout);
      }

      this.refreshSlide();
    }

    checkRandom() {
      if (this.randomState) {
        this.setRandom(false, "Random", "fa-random", "fa-long-arrow-alt-right");

      } else {
        this.setRandom(true, "Normal", "fa-long-arrow-alt-right", "fa-random");
      }

      this.refreshSlide();
    }

    refreshSlide() {
      for (let i = 0; i < this.slidesCount; i++) {

        if (this.slidesTriggers[i].hasAttribute("checked")) {
          this.slidesTriggers[i].removeAttribute("checked");
        }
      }

      this.slidesTriggers[this.index].setAttribute("checked", true);
    }

    /****************************/
    /********** GETTER **********/
    /****************************/

    /**
     * @param {number} min
     * @param {number} max
     * @return
     */
    getRandomInteger(min, max) {

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
    setAuto(state, title, add, remove) {
      this.autoState      = state;
      this.autoElt.title  = title;

      this.setIcon(this.autoIcon, add, remove);
    }

    /**
     * @param {boolean} state
     * @param {string} title
     * @param {string} add
     * @param {string} remove
     */
    setRandom(state, title, add, remove) {
      this.randomState      = state;
      this.randomElt.title  = title;

      this.setIcon(this.randomIcon, add, remove);
    }

    /**
     * @param {object} icon
     * @param {string} add
     * @param {string} remove
     */
    setIcon(icon, add, remove) {
      icon.classList.add(add);
      icon.classList.remove(remove);
    }
  }
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
