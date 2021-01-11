<template>
  <button type="button" :class="classes" @click="onClick" :style="style">
    {{ label }}
  </button>
</template>

<script>
export default {
  name: "dl-button",

  props: {
    label: {
      type: String,
      required: true
    },

    primary: {
      type: Boolean,
      dafault: false
    }
  },
  computed: {
    classes() {
      return {
        "dl-button": true,
        "dl-button-primary": true,
        "dl-button-secondary": true
      };
    },
    style() {
      return {
        backgroundColor: this.backgroundColor
      };
    }
  },

  methods: {
    // onClick
    onClick() {
      this.$emit("onClick");
    }
  }
};
</script>
