<template>
  <a :href="url"
    :title="title">
    {{ text }}
  </a>
</template>

<script>
  export default {
    name: "Link",
    props: ["url", "title", "text"]
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
