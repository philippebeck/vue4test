<template>
  <section class="home">
    <Title title="This is the home page">
      <i class="fas fa-home"></i>
    </Title>

    <Head text="This is a Head Example of a Vue Component !"/>

    <Media legend="The Progressive JavaScript Framework"
      src="img/logo.png"
      alt="Vue logo">
        <Link href="https://vuejs.org"
          title="Go to Vue Website">
          <i class="fas fa-home"></i>
          Vue
        </Link>      
    </Media>

    <Button content="Clic on Me!">
    </Button>

    <Container :contents="['blablabla', 'bliblibli', 'blobloblo']"
      title="test du container"
      container="container-70sm">

    </Container>

    <Video src="https://dl8.webmfiles.org/big-buck-bunny_trailer.webm"/>

    <Audio />

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
import Media from "@/components/basic/Media.vue"
import Video from "@/components/basic/Video.vue"
import Audio from "@/components/basic/Audio.vue"
import Link from "@/components/basic/Link.vue"
import Container from "@/components/basic/Container.vue"
import Title from "@/components/basic/Title.vue"
import List from "@/components/basic/List.vue"
//import Canvas from "@/components/special/Canvas.vue"

export default {
  name: "Home",
  components: {
    Code,
    Head,
    Link,
    List,
    Media,
    Container,
    Audio,
    Button,
    Video,
    Title
    //Canvas
  }
}
</script>
