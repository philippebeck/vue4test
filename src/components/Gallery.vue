<template>

</template>
    
<script>
  export default {
    name: "Gallery"
  }
</script>

<style lang="scss" scoped>
  @mixin gallery ($margin, $width) {
    .gallery {
      --gallery-figure-margin: #{$margin};
      --gallery-figure-width: #{$width};
    }
  }

  .gallery {
    --gallery-flex-wrap: wrap;
    --gallery-place-content: center;
    --gallery-place-items: center;
    --gallery-overflow: hidden;
    --gallery-margin: 20px auto 50px;
    --gallery-max-width: 90%;
    --gallery-all-cursor: crosshair;
    --gallery-figure-position: relative;
    --gallery-figure-overflow: hidden;
    --gallery-figure-margin: 5px;
    --gallery-figure-border: medium solid var(--primary);
    --gallery-figure-width: calc(100% - 10px);
    --gallery-figure-line-height: 0;
    --gallery-figure-box-shadow: 0 0 5px;
    --gallery-figure-hover-figcaption-animation: slideT 1s;
    --gallery-figure-hover-figcaption-bottom: 0;
    --gallery-figcaption-position: absolute;
    --gallery-figcaption-bottom: 0;
    --gallery-figcaption-padding: 10px;
    --gallery-figcaption-width: 100%;
    --gallery-figcaption-line-height: 0.8;
    --gallery-figcaption-background-color: var(--gray-dark);
    --gallery-figcaption-fa-position: absolute;
    --gallery-figcaption-fa-top: -20px;
    --gallery-figcaption-fa-right: 5px;
    --gallery-figcaption-fa-border: 2px solid var(--white);
    --gallery-figcaption-fa-radius: 50%;
    --gallery-figcaption-fa-padding: 10px;
    --gallery-figcaption-fa-background-color: var(--secondary);
    --gallery-link-color: var(--white);
    --gallery-link-all-margin: 0;
    --gallery-link-all-padding: 5px;
    --gallery-link-all-font-size: 80%;
    --gallery-link-all-cursor: pointer;

    display: flex;
    flex-wrap: var(--gallery-flex-wrap);
    place-content: var(--gallery-place-content);
    place-items: var(--gallery-place-items);
    overflow: var(--gallery-overflow);
    margin: var(--gallery-margin);
    max-width: var(--gallery-max-width);

    * {
      cursor: var(--gallery-all-cursor);
    }

    figure {
      display: flex;
      place-content: var(--gallery-place-content);
      place-items: var(--gallery-place-items);
      position: var(--gallery-figure-position);
      overflow: var(--gallery-figure-overflow);
      margin: var(--gallery-figure-margin);
      border: var(--gallery-figure-border);
      width: var(--gallery-figure-width);
      line-height: var(--gallery-figure-line-height);
      box-shadow: var(--gallery-figure-box-shadow);

      &:hover figcaption,
      &:focus figcaption {
        animation: var(--gallery-figure-hover-figcaption-animation);
        bottom: var(--gallery-figure-hover-figcaption-bottom);
      }
    }

    figcaption {
      position: var(--gallery-figcaption-position);
      bottom: var(--gallery-figcaption-bottom);
      padding: var(--gallery-figcaption-padding);
      width: var(--gallery-figcaption-width);
      line-height: var(--gallery-figcaption-line-height);
      background-color: var(--gallery-figcaption-background-color);

      [class*="fa-"] {
        position: var(--gallery-figcaption-fa-position);
        top: var(--gallery-figcaption-fa-top);
        right: var(--gallery-figcaption-fa-right);
        border: var(--gallery-figcaption-fa-border);
        border-radius: var(--gallery-figcaption-fa-radius);
        padding: var(--gallery-figcaption-fa-padding);
        background-color: var(--gallery-figcaption-fa-background-color);
      }
    }

    a {
      color: var(--gallery-link-color);

      * {
        margin: var(--gallery-link-all-margin);
        padding: var(--gallery-link-all-padding);
        font-size: var(--gallery-link-all-font-size);
        cursor: var(--gallery-link-all-cursor);
      }
    }
  }

  @media (min-width: $breakpoint-md) {
    @include gallery(10px, calc(100% / 2 - 20px));
  }

  @media (min-width: $breakpoint-lg) {
    .gallery {
      --gallery-figcaption-bottom: -60%;
    }
  }

  @media (min-width: $breakpoint-xl) {
    @include gallery(15px, calc(100% / 3 - 30px));
  }

  @media (min-width: $breakpoint-wd) {
    @include gallery(20px, calc(100% / 4 - 40px));
  }

</style>
