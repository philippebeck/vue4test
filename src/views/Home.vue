<template>
  <div class="home">

    <figure>
      <img alt="Vue logo" src="../assets/logo.png">
      <figcaption>
        <Link url="https://vuejs.org"
          title="Go to Vue Website"
          text="Vue"/>

        <p>The Progressive JavaScript Framework</p>
      </figcaption>
    </figure>   

  </div>
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
