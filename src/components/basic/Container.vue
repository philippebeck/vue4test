<!--------------------------------->
<!-- Container : basic component -->
<!--------------------------------->

<template>
  <article v-if="isArticle === true"
    :class="container">

    <Title :lvl="lvl"
      :title="title">
    </Title>

    <slot></slot>

    <p v-for="content in contents"
      :key="content">
      {{ content }}
    </p>
  </article>

   <section v-else
    :class="container">

    <Title :lvl="lvl"
      :title="title">
    </Title>

    <slot></slot>

    <p v-for="content in contents"
      :key="content">
      {{ content }}
    </p>
  </section>
</template>

<script>
  import Title from "@/components/basic/Title.vue"

  export default {
    name: "Container",
    components: {
      Title
    },
    props: {
      contents: {
        type: Array,
        required: true
      },
      title: {
        type: String,
        required: true
      },
      container: {
        type: String,
        default: "container"
      },
      lvl: {
        type: Number,
        default: 1
      },
      isArticle: {
        type: Boolean,
        default: false
      }
    }
  }
</script>

<style lang="scss" scoped>
  article,
  section {
    margin-bottom: 20px;
  }

  $breakpoint-sm: 576px   !default;
  $breakpoint-md: 768px   !default;
  $breakpoint-lg: 992px   !default;
  $breakpoint-xl: 1200px  !default;
  $breakpoint-wd: 1600px  !default;

  $breakpoints: (
    'sm': $breakpoint-sm,
    'md': $breakpoint-md,
    'lg': $breakpoint-lg,
    'xl': $breakpoint-xl,
    'wd': $breakpoint-wd
  ) !default;

  $containers: (
    '50': 50%,
    '60': 60%,
    '70': 70%,
    '80': 80%,
    '90': 90%
  ) !default;

  [class*="container"] {
    margin: auto;
    max-width: 100%;
  }

  @mixin container($key, $type, $value) {
    [class*="container-"][class*="-#{$key}#{$type}"] {
      max-width: #{$value};
    }
  }

  @each $key, $value in $containers {
    @include container($key, 'tn', $value);
  }

  @each $type, $breakpoint in $breakpoints {
    @media (min-width: $breakpoint) {
      @each $key, $value in $containers {
        @include container($key, $type, $value);
      }
    }
  }
</style>
