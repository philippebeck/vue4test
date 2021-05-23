<template>

</template>

<script>
  export default {
    name: "Foot"
  }
</script>

<style lang="scss" scoped>
  .foot {
    --foot-text-align: center;
    --foot-title-margin: 10px;
    --foot-title-font-size: 2rem;
    --foot-title-color: var(--secondary);

    --foot-list-flex-direction: column;
    --foot-list-place-content: space-evenly;
    --foot-list-margin: 0;
    --foot-list-background-color: var(--primary);
    --foot-list-cursor: pointer;
    --foot-list-color: var(--white);
    --foot-list-hover-color: var(--secondary);

    --foot-target-margin-left: 2px;
    --foot-label-cursor: pointer;
    --foot-label-hover-color: var(--white);
    --foot-label-hover-transform: scale(1.2);
    --foot-label-hover-transition: transform 1s;

    --foot-visual-place-content: center;
    --foot-visual-margin: 0;
    --foot-visual-padding: 10px 0;
    --foot-visual-background-color: var(--white);
    --foot-visual-link-cursor: crosshair;

    text-align: var(--foot-text-align);

    h3,
    h4,
    h5,
    h6 {
      margin: var(--foot-title-margin);
      font-size: var(--foot-title-font-size);
      color: var(--foot-title-color);
    }

    label {
      cursor: var(--foot-label-cursor);
    }
  }

  @media (min-width: $breakpoint-md) {
    .foot {
      --foot-list-flex-direction: row;
    }
  }

  .foot-list {
    display: flex;

    &:first-child {
      flex-direction: var(--foot-list-flex-direction);
      place-content: var(--foot-list-place-content);
      margin: var(--foot-list-margin);
      background-color: var(--foot-list-background-color);

      a {
        color: var(--foot-list-color);
        cursor: var(--foot-list-cursor);

        &:hover,
        &:focus {
          color: var(--foot-list-hover-color);
        }
      }
    }
  }

  [class*="foot-target"] [class*="up"],
  [class*="foot-target"] [class*="down"] {
    margin-left: var(--foot-target-margin-left);
  }

  [for*="foot"]:hover [class*="up"],
  [for*="foot"]:focus [class*="up"],
  [for*="foot"]:hover [class*="down"],
  [for*="foot"]:focus [class*="down"] {
    transform: var(--foot-label-hover-transform);
    transition: var(--foot-label-hover-transition);
    color: var(--foot-label-hover-color);
  }

  .foot-visual {
    display: flex;
    place-content: var(--foot-visual-place-content);
    margin: var(--foot-visual-margin);
    padding: var(--foot-visual-padding);
    background-color: var(--foot-visual-background-color);

    a {
      cursor: var(--foot-visual-link-cursor);
    }
  }

  [class*="foot-goal"],
  .foot [class*="up"],
  .foot-check1:checked ~ .foot .foot-target1 [class*="down"],
  .foot-check2:checked ~ .foot .foot-target2 [class*="down"],
  .foot-check3:checked ~ .foot .foot-target3 [class*="down"],
  .foot-check4:checked ~ .foot .foot-target4 [class*="down"],
  .foot-check5:checked ~ .foot .foot-target5 [class*="down"] {
    display: none;
  }

  .foot-check1:checked ~ .foot .foot-target1 [class*="up"],
  .foot-check2:checked ~ .foot .foot-target2 [class*="up"],
  .foot-check3:checked ~ .foot .foot-target3 [class*="up"],
  .foot-check4:checked ~ .foot .foot-target4 [class*="up"],
  .foot-check5:checked ~ .foot .foot-target5 [class*="up"] {
    display: inline-block;
  }

  .foot-check1:checked ~ .foot .foot-goal1,
  .foot-check2:checked ~ .foot .foot-goal2,
  .foot-check3:checked ~ .foot .foot-goal3,
  .foot-check4:checked ~ .foot .foot-goal4,
  .foot-check5:checked ~ .foot .foot-goal5 {
    display: block;
  }

  @media (min-width: $breakpoint-md) {
    [class*="foot-goal"] {
      display: block;
    }

    [class*="foot-target"] [class*="up"],
    [class*="foot-target"] [class*="down"] {
      display: none;
    }
  }
</style>
