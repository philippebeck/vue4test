<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </div>
  <router-view/>
</template>

<style lang="scss">
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }

  #nav {
    padding: 30px;

    a {
      font-weight: bold;
      color: #2c3e50;

      &.router-link-exact-active {
        color: #42b983;
      }
    }
  }

  @import url('https://fonts.googleapis.com/css2?family=Combo&family=GFS+Neohellenic&family=Inika&family=Nova+Mono&display=swap');

  // Breakpoints
  $breakpoint-sm: 576px   !default;
  $breakpoint-md: 768px   !default;
  $breakpoint-lg: 992px   !default;
  $breakpoint-xl: 1200px  !default;
  $breakpoint-wd: 1600px  !default;
  $breakpoints: (
    'sm': $breakpoint-sm,
    'md': $breakpoint-md,
    'lg': $breakpoint-lg,
    'xl': $breakpoint-xl,
    'wd': $breakpoint-wd
  ) !default;

  // Container
  $containers: (
    '50': 50%,
    '60': 60%,
    '70': 70%,
    '80': 80%,
    '90': 90%
  ) !default;

  // Font Family
  $font-family: 'sans-serif', 'serif', 'monospace', 'cursive', 'fantasy';
  @each $key in $font-family {
    .font-#{$key} {
      font-family: var(--#{$key}-font-family);
    }
  }

  // Primary Colors
  $primary:   65, 105, 225  !default; // RoyalBlue
  $secondary: 220, 220, 220 !default; // Gainsboro
  $pink:      255, 0, 255   !default; // Magenta
  $red:       250, 128, 114 !default; // Salmon
  $orange:    255, 140, 0   !default; // DarkOrange
  $yellow:    255, 215, 0   !default; // Gold
  $brown:     139, 69, 19   !default; // SaddleBrown
  $green:     50, 205, 50   !default; // LimeGreen
  $cyan:      0, 128, 128   !default; // Teal
  $blue:      30, 144, 255  !default; // DodgerBlue
  $violet:    106, 90, 205  !default; // SlateBlue

  $primary-colors: (
    "primary":    $primary,
    "secondary":  $secondary,
    "pink":       $pink,
    "red":        $red,
    "orange":     $orange,
    "yellow":     $yellow,
    "brown":      $brown,
    "green":      $green,
    "cyan":       $cyan,
    "blue":       $blue,
    "violet":     $violet
  ) !default;

  // Grayscale
  $black: 15, 15, 15    !default; // Black
  $gray:  105, 105, 105 !default; // DimGray
  $grey:  192, 192, 192 !default; // Silver
  $white: 255, 255, 240 !default; // Ivory

  $grayscale: (
    "black":  $black,
    "gray":   $gray,
    "grey":   $grey
  ) !default;

  $grayscales: (
    "black":  $black,
    "gray":   $gray,
    "grey":   $grey,
    "white":  $white
  ) !default;

  // Brand Colors
  $facebook:  66, 103, 178  !default;
  $github:    36, 41, 46    !default;
  $linkedin:  0, 119, 181   !default;
  $paypal:    39, 52, 106   !default;
  $twitter:   29, 161, 242  !default;

  $brand-colors: (
    "fb": $facebook,
    "gh": $github,
    "in": $linkedin,
    "pp": $paypal,
    "tw": $twitter
  ) !default;

  // Composite Colors
  $base-colors: $primary-colors, $grayscales;
  $main-colors: $primary-colors, $brand-colors;
  $all-colors:  $primary-colors, $grayscales, $brand-colors;

  :root {
    --container-max-width: 100%;
    --opacity-dark: 0.8;
    --opacity-light: 0.2;
    --decoration-line: underline;

    @each $key in $font-family {
      --#{$key}: #{$key};
    }

    --sans-serif: 'GFS Neohellenic', sans-serif;
    --serif: 'Inika', serif;
    --monospace: 'Nova Mono', monospace;
    --cursive: 'Combo', cursive;

    // Opaque Colors
    @each $colors in $all-colors {
      @each $key, $value in $colors {
        --#{$key}: rgb(#{$value});
      }
    }

    // Transparent Colors
    @each $colors in $base-colors {
      @each $key, $value in $colors {
        --#{$key}-dark: rgba(#{$value}, var(--opacity-dark));
        --#{$key}-light: rgba(#{$value}, var(--opacity-light));
      }
    }
  }

  * {
    --all-box-sizing: border-box;
    box-sizing: var(--all-box-sizing);
  }

  *:target {
    --target-margins: 7rem;
    padding-top: var(--target-margins);
    margin-top: -var(--target-margins);
  }

  html {
    --html-font-size: 62.5%;
    --html-scroll-behavior: smooth;
    font-size: var(--html-font-size);
    scroll-behavior: var(--html-scroll-behavior);
  }

  @media (prefers-reduced-motion: reduce) {
    html {
      scroll-behavior: auto;
    }
  }
  
  body {
    --body-text-align: center;
    --body-line-height: 1.6;
    --body-font-size: 2rem;
    --body-color: var(--black);
    --body-background-color: var(--grey-light);
    margin: 0;
    padding: 0;
    text-align: var(--body-text-align);
    line-height: var(--body-line-height);
    font-size: var(--body-font-size);
    font-family: var(--sans-serif);
    color: var(--body-color);
    background-color: var(--body-background-color);
  }
</style>
