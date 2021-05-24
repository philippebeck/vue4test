<!--------------------------->
<!-- Title Basic Component -->
<!--------------------------->

<template>
  <h1 v-if="level == 1"> 
    <slot></slot>
    {{ content }}
  </h1>

  <h2 v-else-if="level == 2">
    <slot></slot>
    {{ content }}
  </h2>

  <h3 v-else-if="level == 3">
    <slot></slot>
    {{ content }}
  </h3>

  <h4 v-else-if="level == 4">
    <slot></slot>
    {{ content }}
  </h4>

  <h5 v-else-if="level == 5">
    <slot></slot>
    {{ content }}
  </h5>
  
  <h6 v-else>
    <slot></slot>
    {{ content }}
  </h6>
</template>

<script>
  export default {
    name: "Title",
    props: {
      level: {
        type: [Number, String],
        default: 1
      },
      content: {
        type: String
      }
    }
  }
</script>

<style lang="scss" scoped>
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    --title-font-family: var(--serif);
  }

  h1,
  h2,
  h3 {
    --title-text-align: center;
    --title-text-transform: capitalize;
    --title-color: var(--primary);
  }

  h4,
  h5,
  h6 {
    --title-color: var(--blue);
  }

  h1 {
    --title-font-size: calc(var(--body-font-size) * 2.5);
  }

  h2 {
    --title-font-size: calc(var(--body-font-size) * 2);
  }

  h3 {
    --title-font-size: calc(var(--body-font-size) * 1.6);
  }

  h4 {
    --title-font-size: calc(var(--body-font-size) * 1.3);
  }

  h5 {
    --title-font-size: calc(var(--body-font-size) * 1.1);
  }

  h6 {
    --title-font-size: var(--body-font-size);
  }

  h1,
  h2,
  h3 {
    text-align: var(--title-text-align);
    text-transform: var(--title-text-transform);
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: var(--title-font-family);
    font-size: var(--title-font-size);
    color: var(--title-color);
  }
</style>
