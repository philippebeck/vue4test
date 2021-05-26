<!----------------------------->
<!-- Media : basic component -->
<!----------------------------->

<template>
  <figure>
    <Video v-if="cat === 'video'"
      :url="url"
      :type="type"
      :width="width" />

    <Audio v-else-if="cat === 'audio'"
      :url="url"
      :type="type" />

    <Picture v-else
      :url="url"
      :info="info"
      :src="src"
      :media="media" />

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
      cat: {
        type: String
      },
      legend: {
        type: String
      },
      url: {
        type: String,
        required: true
      },
      type: {
        type: String
      },
      width: {
        type: String
      },
      info: {
        type: String
      },
      src: {
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
