<!--------------------------->
<!-- Img : basic component -->
<!--------------------------->

<template>
  <img :src="src" 
    :alt="alt">
</template>

<script>
  export default {
    name: "Img",
    props: {
      src: {
        type: String,
        required: true
      },
      alt: {
        type: String,
        required: true
      }
    }
  }
</script>

<style lang="scss" scoped>
  img {
    max-width: 100%;
    height: auto;
    object-fit: contain;
  }
</style>
