<template>

</template>
    
<script>
  export default {
    name: "Sidebar"
  }
</script>

<style lang="scss" scoped>
  .sidebar {
    --sidebar-flex-direction: column;
    --sidebar-position: fixed;
    --sidebar-top: calc(var(--navbar-height) + 10px);
    --sidebar-left: 2px;
    --sidebar-z-index: 10;
    --sidebar-width: auto;
    --sidebar-child-place-content: center;
    --sidebar-child-place-items: center;
    --sidebar-child-margin: 5px;
    --sidebar-child-border-radius: 20px;
    --sidebar-child-padding: 10px;
    --sidebar-child-width: 100%;
    --sidebar-child-background-color: var(--white-dark);
    --sidebar-child-color: var(--primary-dark);
    --sidebar-child-cursor: crosshair;
    --sidebar-child-hover-border-radius: 10px;
    --sidebar-child-hover-background-color: var(--primary-dark);
    --sidebar-child-hover-color: var(--white-dark);
    --sidebar-child-hover-transform: scale(1.1);
    --sidebar-child-hover-transition: all 1s;
    --sidebar-checked-child-font-weight: bold;
    --sidebar-checked-child-background-color: var(--primary);
    --sidebar-checked-child-color: var(--white);

    display: flex;
    flex-direction: var(--sidebar-flex-direction);
    position: var(--sidebar-position);
    top: var(--sidebar-top);
    left: var(--sidebar-left);
    z-index: var(--sidebar-z-index);
    width: var(--sidebar-width);

    & > * {
      display: flex;
      place-content: var(--sidebar-child-place-content);
      place-items: var(--sidebar-child-place-items);
      margin: var(--sidebar-child-margin);
      border-radius: var(--sidebar-child-border-radius);
      padding: var(--sidebar-child-padding);
      width: var(--sidebar-child-width);
      background-color: var(--sidebar-child-background-color);
      color: var(--sidebar-child-color);
      cursor: var(--sidebar-child-cursor);

      &:hover,
      &:focus {
        border-radius: var(--sidebar-child-hover-border-radius);
        color: var(--sidebar-child-hover-color);
        background-color: var(--sidebar-child-hover-background-color);
        transform: var(--sidebar-child-hover-transform);
        transition: var(--sidebar-child-hover-transition);
      }
    }
  }

  .sidebar-open,
  .sidebar-check:checked ~ * {
    display: none;
  }

  .sidebar-check:checked ~ .sidebar-open {
    display: flex;
  }

  .sidebar-relay {
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

  .sidebar-radio1:checked ~ .sidebar [for*="sidebar-"][for*="-radio1"],
  .sidebar-radio2:checked ~ .sidebar [for*="sidebar-"][for*="-radio2"],
  .sidebar-radio3:checked ~ .sidebar [for*="sidebar-"][for*="-radio3"],
  .sidebar-radio4:checked ~ .sidebar [for*="sidebar-"][for*="-radio4"],
  .sidebar-radio5:checked ~ .sidebar [for*="sidebar-"][for*="-radio5"],
  .sidebar-radio6:checked ~ .sidebar [for*="sidebar-"][for*="-radio6"],
  .sidebar-radio7:checked ~ .sidebar [for*="sidebar-"][for*="-radio7"],
  .sidebar-radio8:checked ~ .sidebar [for*="sidebar-"][for*="-radio8"],
  .sidebar-radio9:checked ~ .sidebar [for*="sidebar-"][for*="-radio9"] {
    font-weight: var(--sidebar-checked-child-font-weight);
    background-color: var(--sidebar-checked-child-background-color);
    color: var(--sidebar-checked-child-color);

    &:hover {
      background-color: var(--sidebar-child-hover-background-color);
    }
  }

  .sidebar-radio1:checked ~ .sidebar-relay .sidebar-target1,
  .sidebar-radio2:checked ~ .sidebar-relay .sidebar-target2,
  .sidebar-radio3:checked ~ .sidebar-relay .sidebar-target3,
  .sidebar-radio4:checked ~ .sidebar-relay .sidebar-target4,
  .sidebar-radio5:checked ~ .sidebar-relay .sidebar-target5,
  .sidebar-radio6:checked ~ .sidebar-relay .sidebar-target6,
  .sidebar-radio7:checked ~ .sidebar-relay .sidebar-target7,
  .sidebar-radio8:checked ~ .sidebar-relay .sidebar-target8,
  .sidebar-radio9:checked ~ .sidebar-relay .sidebar-target9 {
    display: block;
  }
</style>
