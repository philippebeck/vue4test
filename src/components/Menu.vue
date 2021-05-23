<template>

</template>
    
<script>
  export default {
    name: "Menu"
  }
</script>

<style lang="scss" scoped>
  .menu {
    --menu-bottom: 0;
    --menu-z-index: 100;
    --menu-width: 100%;
    --menu-background-color: var(--grey-light);
    --menu-child-place-content: center;
    --menu-child-place-items: center;
    --menu-child-margin: 4px 2px;
    --menu-child-border-radius: 10px;
    --menu-child-padding: 0;
    --menu-child-width: 100%;
    --menu-child-background-color: var(--primary-dark);
    --menu-child-color: var(--white);
    --menu-child-cursor: cell;
    --menu-children-margin: 5px;
    --menu-child-hover-border-radius: 20px;
    --menu-child-hover-background-color: var(--white-dark);
    --menu-child-hover-color: var(--primary);
    --menu-children-hover-transform: scale(1.1);
    --menu-checked-child-font-weight: bold;
    --menu-checked-child-background-color: var(--white);
    --menu-checked-child-color: var(--primary);

    display: flex;
    position: fixed;
    bottom: var(--menu-bottom);
    z-index: var(--menu-z-index);
    width: var(--menu-width);
    background-color: var(--menu-background-color);

    & > * {
      display: flex;
      place-content: var(--menu-child-place-content);
      place-items: var(--menu-child-place-items);
      margin: var(--menu-child-margin);
      border-radius: var(--menu-child-border-radius);
      padding: var(--menu-child-padding);
      width: var(--menu-child-width);
      background-color: var(--menu-child-background-color);
      color: var(--menu-child-color);
      cursor: var(--menu-child-cursor);

      & > * {
        margin: var(--menu-children-margin);
      }

      &:hover,
      &:focus {
        border-radius: var(--menu-child-hover-border-radius);
        background-color: var(--menu-child-hover-background-color);
        color: var(--menu-child-hover-color);
        transition: background-color 1s;

        & > * {
          transform: var(--menu-children-hover-transform);
          transition: transform 1s;
        }
      }
    }

    & span {
      display: none;
    }

    & ~ footer {
      margin-bottom: var(--menu-footer-margin-bottom);
    }
  }

  .menu-relay {
    & > * {
      display: none;
    }

    & > h2,
    & > h3,
    & > h4,
    & > h5,
    & > h6 {
      display: block;
    }
  }

  .menu-radio1:checked ~ .menu [for*="menu-"][for*="-radio1"],
  .menu-radio2:checked ~ .menu [for*="menu-"][for*="-radio2"],
  .menu-radio3:checked ~ .menu [for*="menu-"][for*="-radio3"],
  .menu-radio4:checked ~ .menu [for*="menu-"][for*="-radio4"],
  .menu-radio5:checked ~ .menu [for*="menu-"][for*="-radio5"],
  .menu-radio6:checked ~ .menu [for*="menu-"][for*="-radio6"],
  .menu-radio7:checked ~ .menu [for*="menu-"][for*="-radio7"],
  .menu-radio8:checked ~ .menu [for*="menu-"][for*="-radio8"],
  .menu-radio9:checked ~ .menu [for*="menu-"][for*="-radio9"] {
    font-weight: var(--menu-checked-child-font-weight);
    background-color: var(--menu-checked-child-background-color);
    color: var(--menu-checked-child-color);

    &:hover {
      background-color: var(--menu-child-hover-background-color);
    }
  }

  .menu-radio1:checked ~ .menu-relay [class*="menu-"][class*="-target1"],
  .menu-radio2:checked ~ .menu-relay [class*="menu-"][class*="-target2"],
  .menu-radio3:checked ~ .menu-relay [class*="menu-"][class*="-target3"],
  .menu-radio4:checked ~ .menu-relay [class*="menu-"][class*="-target4"],
  .menu-radio5:checked ~ .menu-relay [class*="menu-"][class*="-target5"],
  .menu-radio6:checked ~ .menu-relay [class*="menu-"][class*="-target6"],
  .menu-radio7:checked ~ .menu-relay [class*="menu-"][class*="-target7"],
  .menu-radio8:checked ~ .menu-relay [class*="menu-"][class*="-target8"],
  .menu-radio9:checked ~ .menu-relay [class*="menu-"][class*="-target9"] {
    display: block;
  }

  @media (min-width: $breakpoint-lg) {
    .menu span {
      display: block;
    }
  }

  footer {
    --menu-footer-margin-bottom: 40px;
  }

  @media (min-width: $breakpoint-lg) {
    footer {
      --menu-footer-margin-bottom: 50px;
    }
  }
</style>
