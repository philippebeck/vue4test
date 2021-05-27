<!--------------------------->
<!-- Btn : basic component -->
<!--------------------------->

<template>
  <a :class="btn"
    :href="url"
    :title="info">
    <slot></slot>
    {{ content }}
  </a>
</template>
    
<script>
  export default {
    name: "Btn",
    props: {
      btn: {
        type: String,
        default: "btn"
      },
      url: {
        type: String,
        required: true
      },
      info: {
        type: String
      },
      content: {
        type: String
      }
    }
  }
</script>

<style lang="scss" scoped>

  [class*="btn"],
  [class*="button"] {
    display: inline-block;
    margin: 10px;
    padding: 10px;
    font-size: 2rem;
    font-weight: bold;
    text-align: center;

    & > * {
      display: block;
      margin: auto;
    }
  }

  [class*="btn"] {
    border-style: solid;
    border-width: medium;
    border-radius: 10px;
    border-color: var(--white);
    background-color: var(--black);
    color: var(--white);
  }

  [class*="button"] {
    border-style: outset;
    border-width: medium;
    border-radius: 5px;
    border-color: var(--black);
    background-color: var(--white);
    color: var(--black);
  }

  [class*="btn"]:hover,
  [class*="button"]:hover,
  [class*="btn"]:focus,
  [class*="button"]:focus,
  [class*="btn-check"]:checked + [class*="btn"],
  [class*="button-check"]:checked + [class*="button"] {
    border-radius: 5px;
    transition: all 300ms linear;
    animation: none;
  }

  [class*="btn"]:hover,
  [class*="btn"]:focus,
  [class*="btn-check"]:checked + [class*="btn"] {
    border-style: solid;
    border-width: medium;
    box-shadow: inset 0 0 5px 5px;
    border-color: var(--black);
    background-color: var(--white);
    color: var(--black);
  }

  [class*="button"]:hover,
  [class*="button"]:focus,
  [class*="button-check"]:checked + [class*="button"] {
    border-style: solid;
    border-width: medium;
    box-shadow: inset 0 0 5px 5px;
    border-color: var(--white);
    background-color: var(--black);
    color: var(--white);
  }

  [class*="check"]:checked + [class*="btn"],
  [class*="check"]:checked + [class*="button"] {
    transform: scale(0.9);
  }

  @mixin btn-color($key, $value) {
    .btn-#{$key},
    .button-#{$key}:hover,
    .button-#{$key}:focus,
    .button-#{$key}-check:checked + .button-#{$key} {
      border-color: var(--white);
      background-color: var(--#{$key});
      color: var(--white);
    }

    .button-#{$key},
    .btn-#{$key}:hover,
    .btn-#{$key}:focus,
    .btn-#{$key}-check:checked + .btn-#{$key} {
      border-color: var(--#{$key});
      background-color: var(--white);
      color: var(--#{$key});
    }
  }

  @each $colors in $main-colors {
    @each $key, $value in $colors {
      @include btn-color($key, $value);
    }
  }

    $btn-size: 'tn', 'sm', 'lg', 'xl', 'wd';

  $btn-sizes: (
  'tn-padding':   3px 6px,
  'tn-font-size': 60%,
  'sm-padding':   4px 8px,
  'sm-font-size': 80%,
  'lg-padding':   6px 12px,
  'lg-font-size': 120%,
  'xl-padding':   7px 14px,
  'xl-font-size': 140%,
  'wd-padding':   8px 16px,
  'wd-font-size': 160%
  ) !default;

  $btn-shape: 'square', 'round', 'circle';

  $btn-shapes: (
  'square-border-radius': unset,
  'square-padding-top':   25px,
  'square-sizes':         100px,
  'curve-border-radius':  10px,
  'curve-padding-top':    25px,
  'curve-sizes':          100px,
  'round-border-radius':  20px,
  'round-padding-top':    25px,
  'round-sizes':          100px,
  'circle-border-radius': 50%,
  'circle-padding-top':   25px,
  'circle-sizes':         100px,
  ) !default;

  [class*="btn"],
  [class*="button"] {
    @each $key, $value in $btn-sizes {
      --btn-#{$key}: #{$value};
    }

    @each $key, $value in $btn-shapes {
      --btn-#{$key}: #{$value};
    }
  }

  @each $size in $btn-size {
    .btn-#{$size},
    .button-#{$size} {
      padding: var(--btn-#{$size}-padding);
      font-size: var(--btn-#{$size}-font-size);
    }
  }

  @each $shape in $btn-shape {
    .btn-#{$shape},
    .button-#{$shape} {
      border-radius: var(--btn-#{$shape}-border-radius);
      padding-top: var(--btn-#{$shape}-padding-top);
      min-width: var(--btn-#{$shape}-sizes);
      min-height: var(--btn-#{$shape}-sizes);
    }

    .btn-#{$shape}:hover,
    .button-#{$shape}:hover,
    .btn-#{$shape}:focus,
    .button-#{$shape}:focus {
      border-radius: var(--btn-#{$shape}-border-radius);
    }
  }
</style>
