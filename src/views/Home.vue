<template>
  <section class="home">
    <h1>This is the home page</h1>

    <figure>
      <img alt="Vue logo" src="../assets/logo.png">
      <figcaption>
        <Link url="https://vuejs.org"
          title="Go to Vue Website"
          text="Vue"/>

        <p>The Progressive JavaScript Framework</p>
      </figcaption>
    </figure>   

  </section>
</template>

<script>
// @ is an alias to /src
import Link from '@/components/Link.vue'

export default {
  name: 'Home',
  components: {
    Link
  }
}
</script>
