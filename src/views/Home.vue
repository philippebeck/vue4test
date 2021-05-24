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

    <Button content="Clic on Me!">

    </Button>

    <Code content="$php !== js">
      <i class="fas fa-code"></i>
    </Code>

    <List :list="[
      'tomato', 
      'apple', 
      'banana', 
      'strawberry',
      'pear',
      'blueberry',
      'orange',
      'lemon'
    ]">
    </List>

    <!-- <Canvas/> -->
  </section>
</template>

<script>
// @ is an alias to /src
import Code from "@/components/basic/Code.vue"
import Head from "@/components/basic/Head.vue"
import Button from "@/components/basic/Button.vue"
import Img from "@/components/basic/Img.vue"
import Link from "@/components/basic/Link.vue"
import Title from "@/components/basic/Title.vue"
import List from "@/components/basic/List.vue"
//import Canvas from "@/components/special/Canvas.vue"

export default {
  name: "Home",
  components: {
    Code,
    Head,
    Img,
    Link,
    List,
    Button,
    Title
    //Canvas
  }
}
</script>
