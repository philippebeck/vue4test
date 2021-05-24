<template>
  <section class="home">
    <Title content="This is the home page">
      <i class="fas fa-home"></i>
    </Title>

    <Head text="This is a Head Example of a Vue Component !"/>

    <figure>
      <Img src="img/logo.png"
        alt="Animadio logo"/>
        
      <figcaption>
        <Link href="https://vuejs.org"
          title="Go to Vue Website">
          <i class="fas fa-home"></i>
          Vue
        </Link>

        <p>The Progressive JavaScript Framework</p>
      </figcaption>
    </figure>

    <!-- <Canvas/> -->
  </section>
</template>

<script>
// @ is an alias to /src
import Head from "@/components/Head.vue"
import Img from "@/components/Img.vue"
import Link from "@/components/Link.vue"
import Title from "@/components/Title.vue"
//import Canvas from "@/components/Canvas.vue"

export default {
  name: "Home",
  components: {
    Head,
    Img,
    Link,
    Title
    //Canvas
  }
}
</script>
