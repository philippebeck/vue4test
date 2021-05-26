<!----------------------------->
<!-- Title : basic component -->
<!----------------------------->

<template>
  <h1 v-if="lvl == 1"> 
    <slot></slot>
    {{ title }}
  </h1>

  <h2 v-else-if="lvl == 2">
    <slot></slot>
    {{ title }}
  </h2>

  <h3 v-else-if="lvl == 3">
    <slot></slot>
    {{ title }}
  </h3>

  <h4 v-else-if="lvl == 4">
    <slot></slot>
    {{ title }}
  </h4>

  <h5 v-else-if="lvl == 5">
    <slot></slot>
    {{ title }}
  </h5>
  
  <h6 v-else>
    <slot></slot>
    {{ title }}
  </h6>
</template>

<script>
  export default {
    name: "Title",
    props: {
      title: {
        type: String,
        required: true
      },
      lvl: {
        type: Number,
        default: 1
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
