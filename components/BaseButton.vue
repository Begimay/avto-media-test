<template>
  <button
    class="base_button"
    :class="className"
    @click="$emit('clickButton')"
  >
    <slot />
  </button>
</template>

<script>
export default {
  props: {
    full: {
      type: Boolean,
      default: false
    },
    transparent: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    className() {
      return {
        'button_full': this.full,
        'button_transparent': this.transparent
      };
    }
  }
};
</script>

<style lang="scss">
.base_button {
  box-shadow: none;
  cursor: pointer;
  font-family: 'Manrop-Regular', serif;
  font-size: 18px;
  line-height: 22px;
  padding: 14px 30px;
  border-radius: 5px;
  margin-right: 30px;
  border: 1px solid #FF008A;
  transition: 1s;
}
.button_full {
  background: #FF008A;
  color: #fff;
  &:hover {
    color: #FF008A;
    background: #fff;
  }
}
.button_transparent {
  color: #FF008A;
  background: #fff;
  &:hover {
    background: #FF008A;
    color: #fff;
  }
}

@media (max-width: 770px) {
  .base_button {
    width: 100%;
    margin-bottom: 20px;
  }
}
</style>
