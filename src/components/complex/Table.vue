<template>

</template>
    
<script>
  export default {
    name: "Table"
  }
</script>

<style lang="scss" scoped>
  table {
    --table-border-collapse: collapse;
    --table-margin: auto;
    --table-text-align: center;
    --table-vertical-align: middle;

    margin: var(--table-margin);
    border-collapse: var(--table-border-collapse);
    text-align: var(--table-text-align);
    vertical-align: var(--table-vertical-align);
    font-family: var(--monospace);
  }
  
  .table {
    --table-border-spacing: 10px;
    --table-margin: 50px auto;
    --table-width: auto;
    --table-max-width: 100%;
    --table-font-size: calc(var(--body-font-size) * 110 / 100);
    --table-box-shadow: 5px 5px 10px 5px var(--grey);
    --table-caption-side: top;
    --table-caption-margin: 10px;
    --table-caption-font-size: 3rem;
    --table-caption-font-weight: bold;
    --table-caption-color: var(--black);
    --table-caption-text-shadow: 1px 1px 2px;
    --table-title-font-size: calc(var(--body-font-size) * 120 / 100);
    --table-title-font-style: italic;
    --table-title-background-color: var(--primary);
    --table-title-color: var(--white);
    --table-cell-border-style: solid;
    --table-cell-border-width: thin;
    --table-cell-border-radius: 0;
    --table-cell-border-color: var(--black);
    --table-cell-padding: 2px;
    --table-cell-text-align: center;
    --table-cell-vertical-align: middle;
    --table-cell-word-break: normal;
    --table-cell-cursor: cell;
    --table-odd-background-color: var(--white);
    --table-odd-color: var(--gray);
    --table-even-background-color: var(--grey);
    --table-even-color: var(--black);
    --table-row-hover-background-color: var(--secondary);
    --table-row-hover-color: var(--black);

    display: table;
    border-collapse: var(--table-border-collapse);
    border-spacing: var(--table-border-spacing);
    margin: var(--table-margin);
    width: var(--table-width);
    max-width: var(--table-max-width);
    font-size: var(--table-font-size);
    box-shadow: var(--table-box-shadow);

    &-inline {
      display: inline-table;
    }

    &-caption {
      display: table-caption;
    }

    &-row {
      display: table-row;
    }

    &-col {
      display: table-column;
    }

    &-cell {
      display: table-cell;
    }

    &-collapse {
      border-collapse: collapse;
    }

    &-separate {
      border-collapse: separate;
    }

    & > caption {
      caption-side: var(--table-caption-side);
      margin: var(--table-caption-margin);
      font-size: var(--table-caption-font-size);
      font-weight: var(--table-caption-font-weight);
      color: var(--table-caption-color);
      text-shadow: var(--table-caption-text-shadow);
    }

    th {
      font-size: var(--table-title-font-size);
      font-style: var(--table-title-font-style);
      background-color: var(--table-title-background-color);
      color: var(--table-title-color);
    }

    th,
    td {
      border-style: var(--table-cell-border-style);
      border-width: var(--table-cell-border-width);
      border-radius: var(--table-cell-border-radius);
      border-color: var(--table-cell-border-color);
      padding: var(--table-cell-padding);
      text-align: var(--table-cell-text-align);
      vertical-align: var(--table-cell-vertical-align);
    }

    td {
      word-break: var(--table-cell-word-break);
      cursor: var(--table-cell-cursor);
    }

    tbody tr {
      &:nth-child(even) {
        background-color: var(--table-even-background-color);
        color: var(--table-even-color);
      }

      &:nth-child(odd) {
        background-color: var(--table-odd-background-color);
        color: var(--table-odd-color);
      }

      &:hover,
      &:focus {
        background-color: var(--table-row-hover-background-color);
        color: var(--table-row-hover-color);
      }
    }
  }

  @media (min-width: $breakpoint-sm) {
    .table {
      --table-cell-padding: 6px;
    }
  }

  @media (min-width: $breakpoint-md) {
    .table {
      --table-max-width: 95%;
      --table-cell-padding: 7px;
    }
  }

  @media (min-width: $breakpoint-lg) {
    .table {
      --table-max-width: 90%;
      --table-cell-padding: 8px;
    }
  }

  @media (min-width: $breakpoint-xl) {
    .table {
      --table-max-width: 85%;
      --table-cell-padding: 9px;
    }
  }

  @media (min-width: $breakpoint-wd) {
    .table {
      --table-max-width: 70%;
      --table-cell-padding: 10px;
    }
  }
</style>
