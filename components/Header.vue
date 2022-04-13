<template>
  <div class="header container">
    <div class="header__logo">
      <nuxt-link to="/">Logo</nuxt-link>
    </div>
    <div class="header__right">
      <div class="header__right__search">
        <div
          class="header__right__search__bar"
        >
          <button />
          <input
            v-model="search"
            type="text"
            placeholder="Поиск"
            @input="searchingPosts"
          >
        </div>
      </div>
      <div class="header__right__menu">
        <nuxt-link to="/"><img src="@/assets/img/menu_icon.svg" alt="">Посты</nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
import {mapActions} from "vuex";

export default {
  name: "Header",
  data: () => ({
    search: ''
  }),
  methods: {
    ...mapActions('posts', ["getPosts"]),
    searchingPosts() {
      this.$router.push('/')
      this.getPosts({
        _embed: 'comments',
        q: this.search,
        _page: 1
      })
    },
  }
}
</script>

<style lang="scss">
.header {
  margin: 37px 0;
  display: flex;
  align-items: baseline;
  &__logo {
    justify-content: flex-start;
    width: 50%;
    a {
      font-family: 'Inter', serif;
      font-size: 20px;
      line-height: 24px;
      text-decoration: none;
      color: #000
    }
  }
  &__right {
    display: flex;
    width: 50%;
    justify-content: flex-end;
    align-items: baseline;
    &__search {
      margin-right: 92px;
      &__bar {
        position: relative;
        button {
          position: absolute;
          top: 0;
          left: 9px;
          width: 20px;
          height: 100%;
          background: url(../assets/img/search.svg) 0 no-repeat;
          transition: all .2s ease-in-out;
          box-shadow: none;
          border: none;
          cursor: pointer;
        }
        input {
          display: block;
          border-radius: 10px;
          border: none;
          width: 309px;
          height: 50px;
          padding: 8px 14px 8px 34px;
          background: rgba(60, 60, 67, 0.1);
          font-size: 17px;
          font-weight: 400;
          line-height: 22px;
          color: rgba(60, 60, 67, 0.6);
        }
      }
    }
    &__menu {
      img {
        width: 20px;
        height: 20px;
        position: absolute;
        left: 0;
      }
      a {
        padding-left: 29px;
        position: relative;
        color: #FF008A;
        font-family: 'Manrop-Medium', serif;
        font-size: 14px;
        line-height: 12px;
        text-decoration: none;
      }
    }
  }
}

@media (max-width: 1025px) {
  .header {
    &__right {
      &__search {
        margin-right: 50px;
      }
    }
  }
}

@media (max-width: 770px){
  .header{
    display: none;
  }
}
</style>
