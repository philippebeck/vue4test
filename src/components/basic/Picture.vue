<!------------------------------->
<!-- Picture : basic component -->
<!------------------------------->

<template>
  <picture>
    <source :srcset="srcset" 
      :media="media">
    <img :src="src"
      :alt="alt">
  </picture>
</template>

<script>
  export default {
    name: "Picture",
    props: {
      src: {
        type: String,
        required: true
      },
      alt: {
        type: String,
        required: true
      },
      srcset: {
        type: String
      },
      media: {
        type: String,
        default: "(min-width: 992px)"
      }
    }
  }
</script>

<style lang="scss" scoped>
  picture {
    max-width: 100%;
    height: auto;
    object-fit: contain;
  }
</style>
