<template>
    <img :src="src" :alt="alt">
</template>

<script>
  export default {
    name: "Img",
    props: ["src", "alt"]
  }
</script>

<style lang="scss" scoped>
    img {
        --img-max-width: 100%;
        --img-height: auto;
        --img-object-fit: contain;

        max-width: var(--img-max-width);
        height: var(--img-height);
        object-fit: var(--img-object-fit);
    }
</style>
