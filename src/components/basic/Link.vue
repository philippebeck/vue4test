<!---------------------------->
<!-- Link : basic component -->
<!---------------------------->

<template>
  <a :href="href" 
    :title="title">
    <slot></slot>
    {{ content }}
  </a>
</template>

<script>
  export default {
    name: "Link",
    props: {
      href: {
        type: String,
        required: true
      },
      title: {
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
