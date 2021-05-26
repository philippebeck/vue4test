<!---------------------------->
<!-- Code : basic component -->
<!---------------------------->

<template>
  <pre v-if="isBlock === true">
    <slot></slot>
    {{ content }}
  </pre>

  <code v-else>
    <slot></slot>
    {{ content }}
  </code>
</template>

<script>
  export default {
    name: "Code",
    props: {
      content: {
        type: String,
        required: true
      },
      isBlock: {
        type: Boolean
      }
    }
  }
</script>

<style lang="scss" scoped>
  code,
  pre {
    overflow: scroll;
    margin: auto;
    padding: 10px;
    width: 100%;
    font-family: var(--monospace);
    text-align: initial;
    background-color: var(--black);
    color: var(--green);

    & > *::selection {
      background-color: var(--green);
      color: var(--black);
    }
  }

  @media (min-width: 576px) {
    code,
    pre {
      width: 95%;
    }
  }

  @media (min-width: 768px) {
    code,
    pre {
      width: 90%;
    }
  }

  @media (min-width: 992px) {
    code,
    pre {
      width: 85%;
    }
  }

  @media (min-width: 1200px) {
    code,
    pre {
      width: 80%;
    }
  }

  @media (min-width: 1600px) {
    code,
    pre {
      width: 75%;
    }
  }
</style>
