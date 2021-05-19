<template>
  <section class="home">
    <h1>This is the home page</h1>

    <Head text="This is a Head Example of a Vue Component !"/>

    <figure>
      <img alt="Vue logo" src="../assets/logo.png">
      <figcaption>
        <Link url="https://vuejs.org"
          title="Go to Vue Website"
          text="Vue"/>

        <p>The Progressive JavaScript Framework</p>
      </figcaption>
    </figure>

    <!-- <Canvas/> -->
  </section>
</template>

<script>
// @ is an alias to /src
import Head from '@/components/Head.vue'
import Link from '@/components/Link.vue'
//import Canvas from '@/components/Canvas.vue'

export default {
  name: 'Home',
  components: {
    Head,
    Link//,
    //Canvas
  }
}
</script>
