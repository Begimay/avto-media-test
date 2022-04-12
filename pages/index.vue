<template>
  <div class="main container">
    <h1 class="main__title">Посты</h1>
    <div
      class="main__search"
    >
     <div class="main__search__bar">
       <button />
       <input
         v-model="search"
         type="text"
         placeholder="Поиск"
         @input="searchingPosts"
       >
     </div>
    </div>
    <div v-if="posts.length">
      <div class="main__posts">
        <Post
          v-for="(item, key) in posts"
          :key="key"
          :post="item"
        />
      </div>
      <Pagination
        v-if="pagination.total > 1"
        :pagination="pagination"
        :pages="pages"
        :is-show-next="true"
        @changePage="selectPage"
      />
    </div>
    <div class="main__count" v-else>
      <p>По вашему запросу данных нет</p>
    </div>
  </div>
</template>

<script>
import Post from "~/components/Post";
import Pagination from "~/components/Pagination";
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'IndexPage',
  components: {
    Post,
    Pagination,
  },
  data: () => ({
    search: '',
    pagination: {
      init: 0,
      current: 1,
      total: 10
    }
  }),
  computed: {
    ...mapGetters('posts', {
      posts: 'getPosts'
    }),
    pages() {
      let counter = 1;
      let temp = [];
      let max = 2
      while (counter <= max) {
        temp.push(this.pagination.init + counter)
        counter++
      }
      return temp
    },
  },
  created() {
    this.getAllPosts()
  },
  methods: {
    ...mapActions('posts', {
      getPosts: 'getPosts'
    }),
    getAllPosts() {
      this.getPosts({
        _embed: 'comments',
        q: this.search,
        _page: this.pagination.current
      })
    },
    selectPage(obj) {
      this.pagination.current = obj.item
      this.getAllPosts();
      window.scrollTo(0,0)
      if (this.pagination.total === obj.item) this.pagination.init = this.pagination.total - 4
      else if (obj.index === 0 && obj.item > 1) this.pagination.init--
      else if (obj.index === 10 && obj.item < this.pagination.total - 1) this.pagination.init++
    },
    searchingPosts() {
      this.pagination = {
        init: 0,
        current: 1,
        total: undefined
      }
      this.getPosts()
    },
  }
}
</script>

<style lang="scss">
.main {
  &__title {
    display: none;
  }
  &__posts {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-column-gap: 23px;
    grid-row-gap: 40px;
  }
  &__count {
    font-family: 'Manrop-Regular', serif;
    font-size: 17px;
    line-height: 22px;
    color: rgba(60, 60, 67, 0.6);
  }
  &__search {
    display: none;
    padding: 10px 16px;
    margin-bottom: 32px;

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
        width: 87%;
        height: 36px;
        padding: 8px 14px 8px 34px;
        background: rgba(60, 60, 67, 0.1);
        font-size: 17px;
        font-weight: 400;
        line-height: 22px;
        color: rgba(60, 60, 67, 0.6);
      }
    }
  }
}

@media (max-width: 1400px) {
  .main {
    &__posts {
      grid-column-gap: 10px;
      grid-template-columns: repeat(2, 1fr);
    }
  }
}

@media (max-width: 770px) {
  .main {
    margin-top: 8px;
    &__title {
      margin-top: 20px;
      display: block;
      font-family: 'Manrop-Bold', serif;
      font-size: 32px;
      line-height: 36px;
    }
    &__posts {
      display: grid;
      grid-template-columns: repeat(1, 1fr);
      grid-row-gap: 32px;
    }
    &__search {
      display: block;
      margin-top: 20px;
      &__bar {
        input {
          width: 100%;
        }
      }
    }
  }
}
</style>
