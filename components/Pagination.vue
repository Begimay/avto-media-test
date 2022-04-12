<template>
  <ul class="pagination">
    <li
      v-if="pagination.init"
      @click="pagination.init--"
    >
      <span>
        <img src="@/assets/img/arrow.svg" alt="">
      </span>
    </li>
    <li
      v-for="(item, index) in pages"
      :key="index"
      :class="{ 'active': pagination.current === item }"
      @click="changePage(item, index)"
    >
      <span>{{ item }}</span>
    </li>
    <li v-if="pagination.total - pagination.init > 2">
      <span class="not-hover">...</span>
    </li>
    <li
      :class="{ 'active': pagination.current === pagination.total - 1 }"
      @click="changePage(pagination.total - 1)"
    >
      <span>{{ pagination.total - 1}}</span>
    </li><li
      :class="{ 'active': pagination.current === pagination.total }"
      @click="changePage(pagination.total)"
    >
      <span>{{ pagination.total }}</span>
    </li>
    <li
      v-if="isShowNext"
      @click="pagination.init++"
    >
      <span>
        <img src="@/assets/img/arrow.svg" alt="" style="transform: rotate(180deg)">
      </span>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'Pagination',

  props: {
    pagination: {
      type: Object,
      default: null
    },
    pages: {
      type: Array,
      default: null
    },
    isShowNext: {
      type: Boolean,
      default: false
    }
  },

  methods: {
    changePage(item, index) {
      this.$emit('changePage', {item: item, index: index});
    },
  },
}
</script>

<style lang="scss" scoped>
.pagination{
  font-size: 0;
  margin-top: 40px;
  text-align: right;
}
li{
  display: inline-block;
  margin: 8px;
  width: 32px;
  height: 32px;
  border: 1px solid #E2E2E2;
  border-radius: 4px;
  position: relative;
  &.active{
    span{
      cursor: default;
      color: #FF008A;
      &:hover{
        background: none;
        box-shadow: none;
      }
    }
  }
  &.disabled{
    display: none;
  }
  span{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    font-size: 14px;
    cursor: pointer;
    font-family: 'Manrop-Medium', serif;
  }
}

@media (max-width: 770px){
  .pagination{
    text-align: center;
    padding: 0;
  }
}
</style>
