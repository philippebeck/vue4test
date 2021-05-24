<!----------------------------->
<!-- Title : basic component -->
<!----------------------------->

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
    font-family: var(--serif);
  }

  h1,
  h2,
  h3 {
    text-align: center;
    color: var(--primary);
  }

  h4,
  h5,
  h6 {
    color: var(--blue);
  }

  h1 {
    font-size: calc(var(--body-font-size) * 2.5);
    text-transform: capitalize;
  }

  h2 {
    font-size: calc(var(--body-font-size) * 2);
  }

  h3 {
    font-size: calc(var(--body-font-size) * 1.6);
  }

  h4 {
    font-size: calc(var(--body-font-size) * 1.3);
  }

  h5 {
    font-size: calc(var(--body-font-size) * 1.1);
  }

  h6 {
    font-size: var(--body-font-size);
  }
</style>
