<!-------------------------->
<!-- Link Basic Component -->
<!-------------------------->

<template>
  <a :href="href" 
    :title="title">
    <slot></slot>
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
      }
    }
  }
</script>

<style lang="scss" scoped>
  a {
    --link-color: var(--primary);
    --link-text-decoration: none;

    color: var(--link-color);
    text-decoration: var(--link-text-decoration);    
  }

  a:hover,
  a:focus {
    --link-color-hover: var(--violet);
    
    color: var(--link-color-hover);
  }
</style>
