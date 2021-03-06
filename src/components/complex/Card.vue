<template>
  <section class="card-violet">
      <figure>
        <Img :src="src" 
          :alt="alt"/>
      </figure>

      <Title :content="titleContent">
      </Title>

      <p>
        {{ content }}
      </p>

      <Link class="btn" 
        :href="href"
        :title="title"
        :content="linkContent">
      </Link>
    </section>
</template>
    
<script>
  export default {
    name: "Card",
    props: {

    }
  }
</script>

<style lang="scss" scoped>
  [class*="card"] {
    --card-flex-direction: column;
    --card-place-content: space-evenly;
    --card-place-items: center;
    --card-position: relative;
    --card-overflow: hidden;
    --card-margin: 50px;
    --card-border: solid medium;
    --card-border-radius: 10px;
    --card-padding: 10px;
    --card-height: initial;
    --card-max-width: 400px;
    --card-box-shadow: 3px 5px 10px 5px var(--black);
    --card-background-color: var(--gray-dark);
    --card-color: var(--black);
    --card-hover-transform: rotate(1deg);
    --card-hover-transition: transform 200ms;
    --card-child-margin: 10px;
    --card-child-border: solid thin;
    --card-child-border-radius: 20px;
    --card-child-padding: 5px 10px;
    --card-child-max-width: calc(var(--card-max-width) * 0.9);
    --card-child-background-color: var(--white);
    --card-child-text-align: center;
    --card-selection-background-color: var(--black);
    --card-selection-color: var(--green);
    --card-title-font-size: 3rem;
    --card-title-box-shadow: inset 0 0 5px 2px;
    --card-title-text-shadow: 2px 2px 5px;
    --card-btn-width: calc(var(--card-child-max-width) * 0.5);
    --card-btn-color: var(--white);
    --card-btn-font-weight: bold;
    --card-btn-text-align: center;
    --card-btn-hover-border-color: initial;
    --card-btn-hover-background-color: var(--white);
    --card-btn-hover-color: initial;

    display: inline-flex;
    flex-direction: var(--card-flex-direction);
    place-content: var(--card-place-content);
    place-items: var(--card-place-items);
    position: var(--card-position);
    overflow: var(--card-overflow);
    margin: var(--card-margin);
    border: var(--card-border);
    border-radius: var(--card-border-radius);
    padding: var(--card-padding);
    height: var(--card-height);
    max-width: var(--card-max-width);
    box-shadow: var(--card-box-shadow);
    background-color: var(--card-background-color);
    color: var(--card-color);

    &:hover,
    &:focus {
      transform: var(--card-hover-transform);
      transition: var(--card-hover-transition);
    }

    & > * {
      margin: var(--card-child-margin);
      border: var(--card-child-border);
      border-radius: var(--card-child-border-radius);
      padding: var(--card-child-padding);
      max-width: var(--card-child-max-width);
      background-color: var(--card-child-background-color);
      text-align: var(--card-child-text-align);

      &::selection {
        background-color: var(--card-selection-background-color);
        color: var(--card-selection-color);
      }
    }

    & > *:first-child {
      font-size: var(--card-title-font-size);
      text-shadow: var(--card-title-text-shadow);
    }

    & > [class*="btn"],
    & > [class*="button"] {
      width: var(--card-btn-width);
      background-color: inherit;
      color: var(--card-btn-color);
      font-weight: var(--card-btn-font-weight);
      text-align: var(--card-btn-text-align);

      &:hover,
      &:focus {
        border-color: var(--card-btn-hover-border-color);
        background-color: var(--card-btn-hover-background-color);
        color: var(--card-btn-hover-color);
      }
    }
  }

  @each $key, $value in $primary-colors {
    .card-#{$key} {
      background-color: var(--#{$key}-dark);
      color: var(--#{$key});

      & > h1,
      & > h2,
      & > h3,
      & > h4,
      & > h5,
      & > h6 {
        color: var(--#{$key});
      }
    }
  }
</style>
