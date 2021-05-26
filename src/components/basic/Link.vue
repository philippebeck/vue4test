<!---------------------------->
<!-- Link : basic component -->
<!---------------------------->

<template>
  <a :href="url" 
    :title="info">
    <slot></slot>
    {{ content }}
  </a>
</template>

<script>
  export default {
    name: "Link",
    props: {
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
  a {
    color: var(--primary);
    text-decoration: none;    
  }

  a:hover,
  a:focus {
    color: var(--violet);
  }
</style>
