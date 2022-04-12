<template>
  <div class="one-post">
    <div class="container">
      <div class="one-post__mobile-head">
        <nuxt-link to="/">
          <img src="@/assets/img/rose-arrow.svg" alt="">
          Назад
        </nuxt-link>
        <span>Пост</span>
      </div>
    </div>
    <div class="one-post__mobile-image">
      <img src="@/assets/img/big_image.svg" alt="">
    </div>
    <div class="container">
      <div class="one-post__image">
        <img src="@/assets/img/big_image.svg" alt="">
      </div>
      <div class="one-post__text" v-if="post">
        <p class="one-post__text__head">{{ post.title }}</p>
        <div v-if="!editing">
          <p class="one-post__text__description" v-html="post.body" />
          <div class="one-post__text__update" @click="editing = !editing">
        <span>
          <img src="@/assets/img/rose_pencil.svg" alt="">
          Редактировать текст
        </span>
          </div>
        </div>
        <div class="one-post__text__edit" v-else>
          <vue-editor v-model="post.body" />
          <div class="one-post__text__edit__buttons">
            <BaseButton full @clickButton="updateTextPost">Сохранить изменения</BaseButton>
            <BaseButton transparent @clickButton="editing = !editing">Отменить</BaseButton>
          </div>
        </div>
      </div>
      <div class="one-post__comments">
        <p class="one-post__comments__head">Комментарии</p>
        <Comment
          v-if="comments"
          v-for="(item, key) in comments"
          :key="key"
          :comment="item"
          class="one-post__comments__item"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Comment from "~/components/Comment";
import {mapActions, mapGetters} from "vuex";
export default {
  name: "Post",
  filters: {
    bgrImageCover: url => `background-image: url(${url});`
  },
  data: () => ({
    editing: false
  }),
  components: {
    Comment
  },
  computed: {
    ...mapGetters('posts', {
      post: 'getPost',
      comments: 'getComments'
    })
  },
  created() {
    this.getPost(this.$route.params.id)
    this.getComments(this.$route.params.id)
  },
  methods: {
    ...mapActions('posts', {
      getPost: 'getPost',
      getComments: 'getComments',
      updateText: 'updateText'
    }),
    updateTextPost () {
      this.updateText({id: this.$route.params.id, data: this.post}).then(result => {
        this.editing = false
      })
    }
  }
}
</script>

<style lang="scss">
.one-post {
  &__mobile-head {
    display: none
  }
  &__mobile-image {
    display: none
  }
  &__image {
    display: block;
    background: #9897f4;
    margin-bottom: 25px;
    img {
      width: 100%;
      height: 285px;
    }
  }
  &__text {
    &__head {
      margin: 0;
      font-family: 'Manrop-Bold', serif;
      font-size: 34px;
      line-height: 46px;
      padding: 0 0 30px 0;
      border-bottom: 1px solid #D1D1D6;
    }
    &__description {
      margin: 0;
      padding: 36px 0 30px 0;
      font-family: 'Manrop-Regular', serif;
      font-size: 18px;
      line-height: 30px;
      color: rgba(60, 60, 67, 0.6);
    }
    &__update {
      margin: 0;
      cursor: pointer;
      display: inline-block;
      img {
        width: 20px;
        height: 20px;
        position: absolute;
        left: 0;
      }
      span {
        padding-left: 42px;
        position: relative;
        color: #FF008A;
        font-family: 'Manrop-Medium', serif;
        font-size: 14px;
        line-height: 12px;
        text-decoration: none;
        letter-spacing: 0.5px;
      }
    }
    &__edit {
      &__buttons {
        margin-top: 30px;
      }
    }
  }
  &__comments {
    margin-top: 36px;
    &__head {
      margin-bottom: 30px;
      font-family: 'Manrop-Medium', serif;
      font-size: 24px;
      line-height: 33px;
    }
    &__item {
      margin-bottom: 20px;
    }
  }
}

@media (max-width: 770px) {
  .one-post {
    &__mobile-image {
      display: block;
      background: #9897f4;
      margin-bottom: 25px;
      img {
        width: 100%;
        height: 285px;
      }
    }
    &__image {
      display: none
    }
    &__mobile-head {
      margin: 20px 0;
      display: block;
      a {
        z-index: 100;
        display: block;
        position: absolute;
        color: #FF008A;
        font-size: 18px;
        line-height: 24px;
        padding-left: 25px;
        font-family: 'Manrop-SemiBold', serif;
        &:hover {
          text-decoration: none;
        }
        img {
          position: absolute;
          width: 20px;
          height: 20px;
          top: 3px;
          left: 0;
        }
      }
      span {
        position: relative;
        display: flex;
        justify-content: center;
        font-family: 'Manrop-SemiBold', serif;
        font-size: 18px;
        line-height: 24px;
        color: #000
      }
    }
    &__text {
      &__head {
        font-size: 32px;
        line-height: 36px
      }
      &__description {
        font-size: 17px;
      }
    }
    &__comments {
      &__head {
        font-size: 20px;
        margin-top: 0;
      }
    }
  }
}
</style>
