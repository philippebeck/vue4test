<template>

</template>
    
<script>
  export default {
    name: "Form"
  }
</script>

<style lang="scss" scoped>
  .form {
    --form-margin: 20px auto;
    --form-border: thick outset var(--secondary);
    --form-border-radius: 5px;
    --form-padding: 20px;
    --form-width: 90%;
    --form-background-color: var(--white);
    --form-box-shadow: unset;
    --form-legend-margin: auto;
    --form-legend-font-size: 2.5rem;
    --form-legend-font-weight: bold;

    margin: var(--form-margin);
    border: var(--form-border);
    border-radius: var(--form-border-radius);
    padding: var(--form-padding);
    width: var(--form-width);
    background-color: var(--form-background-color);
    box-shadow: var(--form-box-shadow);

    legend {
      margin: var(--form-legend-margin);
      font-size: var(--form-legend-font-size);
      font-weight: var(--form-legend-font-weight);
    }
  }

  @media (min-width: $breakpoint-sm) {
    .form {
      --form-width: 80%;
    }
  }

  @media (min-width: $breakpoint-md) {
    .form {
      --form-width: 75%;
    }
  }

  @media (min-width: $breakpoint-lg) {
    .form {
      --form-width: 70%;
    }
  }

  @media (min-width: $breakpoint-xl) {
    .form {
      --form-width: 65%;
    }
  }

  @media (min-width: $breakpoint-wd) {
    .form {
      --form-width: 60%;
    }
  }
</style>
