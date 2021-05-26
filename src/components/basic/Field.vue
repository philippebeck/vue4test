<!-- ----------------------- -->
<!-- Field : basic component -->
<!-- ----------------------- -->

<template>
  <fieldset>
    <label v-if="label"
      :for="name">
      <slot></slot>
      {{ label }}
    </label>

    <textarea v-if="type === 'textarea'"
      v-model="value"
      :id="name"
      :name="name"
      :placeholder="info"
      :rows="rows"></textarea>

    <input v-else
      :value="value"
      :id="name"
      :name="name"
      :placeholder="info"
      :type="type">

  </fieldset>
</template>

<script>
  export default {
    name: "Field",
    props: {
      name: {
        type: String,
        required: true
      },
      value: {
        type: String
      },
      info: {
        type: String
      },
      label: {
        type: String
      },
      type: {
        type: String,
        default: "text"
      },
      rows: {
        type: Number,
        default: 5
      }
    }
  }
</script>

<style lang="scss" scoped>
  fieldset {
    display: flex;
    flex-direction: column;
    place-content: center;
    place-items: baseline;
    border: 0;

    label {
      margin: auto;
      padding: 5px;
      font-size: 150%;
      color: var(--gray);
      text-decoration: none;
    }

    input,
    select,
    textarea {
      margin: 10px 0 20px;
      border: medium outset var(--secondary);
      border-radius: 10px;
      outline: 0;
      padding: 5px;
      width: 100%;
      line-height: 1.8;
      background-color: var(--grey-light);
      box-shadow: unset;

      &:hover,
      &:focus {
        border: medium inset var(--green);
        box-shadow: inset 0 0 5px 2px var(--gray);
      }

      &::placeholder {
        font-style: italic;
        color: var(--primary);
      }
    }

    [type="reset"],
    [type="submit"] {
      --field-shadow: inset 0 0 5px 2px;
      --field-hover-shadow: inset 0 0 10px 10px;

      margin: 10px auto;
      width: 80%;
      font-size: 110%;
      font-weight: bold;
      line-height: 2;
      cursor: pointer;

      &:hover,
      &:focus {
        transform: scale(1.1);
        transition: all 1s;
      }
    }

    [type="reset"] {
      border: medium inset var(--red);
      box-shadow: var(--field-shadow) var(--red);
      background-color: var(--white);
      color: var(--red);

      &:hover,
      &:focus {
        border: medium outset var(--red);
        box-shadow: var(--field-hover-shadow) var(--white);
        background-color: var(--red);
        color: var(--white);
      }
    }

    [type="submit"] {
      border: medium inset var(--green);
      box-shadow: var(--field-shadow) var(--green);
      background-color: var(--white);
      color: var(--green);

      &:hover,
      &:focus {
        border: medium outset var(--green);
        box-shadow: var(--field-hover-shadow) var(--white);
        background-color: var(--green);
        color: var(--white);
      }
    }
  }

  @media (min-width: 576px) {
    fieldset {
      [type="reset"],
      [type="submit"] {
        width: 30%;
      }
    }
  }

  @media (min-width: 768px) {
    fieldset {
      flex-direction: row;
      place-content: space-around;
      place-items: center;

      input,
      select,
      textarea {
        width: 50%;
      }

      [type="reset"],
      [type="submit"] {
        width: 30%;
      }
    }
  }
</style>
