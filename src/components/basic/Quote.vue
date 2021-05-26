<!-- ----------------------- -->
<!-- Quote : basic component -->
<!-- ----------------------- -->

<template>
  <figure v-if="isBlock === true">
    
    <blockquote :cite="url">
      <slot></slot>
      {{ quote }}
    </blockquote>

    <figcaption v-if="info">

      <Link :url="url"
        :info="info">
        <cite>
          {{ info }}
        </cite>
      </Link>

    </figcaption>
  </figure>

  <q v-else
    :cite="url">
    <slot></slot>
    {{ quote }}
  </q>
</template>

<script>
  import Link from "@/components/basic/Link.vue"

  export default {
    name: "Quote",
    components: {
      Link
    },
    props: {
      quote: {
        type: String,
        required: true
      },
      url: {
        type: String
      },
      info: {
        type: String
      },
      content: {
        type: String
      },
      isBlock: {
        type: Boolean
      }
    }
  }
</script>

<style lang="scss" scoped>
  figure {
    margin: 0;
  }

  blockquote {
    display: inline-block;
  }

  q,
  blockquote {
    padding: 10px 20px;
    background-color: var(--secondary);
  }
</style>
