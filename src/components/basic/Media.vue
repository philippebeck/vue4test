<!----------------------------->
<!-- Media : basic component -->
<!----------------------------->

<template>
  <figure>
    <Video v-if="category === 'video'"
      :src="src"
      :type="type"
      :width="width" />

    <Audio v-else-if="category === 'audio'"
      :src="src"
      :type="type" />

    <Picture v-else
      :src="src"
      :alt="alt" />

    <figcaption>
      <slot></slot>
      {{ legend }}
    </figcaption>
  </figure>
  
</template>

<script>
  import Audio from "@/components/basic/Audio.vue"
  import Picture from "@/components/basic/Picture.vue"
  import Video from "@/components/basic/Video.vue"

  export default {
    name: "Media",
    components: {
      Audio,
      Picture,
      Video
    },
    props: {
      category: {
        type: String
      },
      legend: {
        type: String
      },
      src: {
        type: String,
        required: true
      },
      type: {
        type: String
      },
      width: {
        type: String
      },
      alt: {
        type: String
      },
      srcset: {
        type: String
      },
      media: {
        type: String
      }
    }
  }
</script>

<style lang="scss" scoped>
  figure {
    margin: 0;
  }
</style>
