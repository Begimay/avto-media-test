<template>
  <div>
    <nuxt-link :to="`/${post.id}`">
      <div class="post desktop">
        <div class="post__image">
          <img src="@/assets/img/post.svg" alt="">
        </div>
        <div class="post__text">
          <p class="post__text__head">{{ postTitle }}</p>
          <p class="post__text__description">{{ postBody }}</p>
        </div>
        <div class="post__footer">
          <div class="post__footer__comment">
        <span>
          <img src="@/assets/img/comment.svg" alt="">
          {{ post.comments.length }}
        </span>
          </div>
          <div class="post__footer__update">
            <img src="@/assets/img/pencil.svg" alt="">
          </div>
        </div>
      </div>
      <div class="mobile__post">
        <div class="item">
          <div class="post__text">
            <p class="post__text__head">{{ postTitle }}</p>
            <p class="post__text__description">{{ postBody }}</p>
          </div>
          <div class="post__footer">
            <div class="post__footer__comment">
              <span>
                <img src="@/assets/img/comment.svg" alt="">
                {{ post.comments.length }}
              </span>
            </div>
            <div class="post__footer__update">
              <img src="@/assets/img/pencil.svg" alt="">
            </div>
          </div>
        </div>
        <div class="item">
          <div class="post__image">
            <img src="@/assets/img/post.svg" alt="">
          </div>
        </div>
      </div>
    </nuxt-link>
  </div>
</template>

<script>
export default {
  name: "Post",
  props: {
    post: {
      type: Object,
      default: null,
    }
  },
  computed: {
    postTitle() {
      if (this.post.title.length > 20) return this.post.title.slice(0, 20) + '...'
      return this.post.title
    },
    postBody() {
      if (this.post.body.length > 50) return this.post.body.slice(0, 50) + '...'
      return this.post.body
    }
  }
}
</script>

<style lang="scss">
a {
  text-decoration: none;
}
.mobile__post {
  display: none;
}
.post {
  position: relative;
  border-radius: 20px;
  border: 1px solid #E2E2E2;
  padding: 0 18px 50px 18px;
  &__image {
    text-align: center;
    img {
      width: 309px;
      height: 250px;
    }
  }
  &__text {
    margin-top: 16px;
    &__head {
      font-family: 'Manrop-Bold', serif;
      font-size: 24px;
      line-height: 28px;
      color: #000
    }
    &__description {
      margin-top: 8px;
      font-family: 'Manrop-Regular', serif;
      font-size: 17px;
      line-height: 22px;
      color: rgba(60, 60, 67, 0.6);
    }
  }
  &__footer {
    position: absolute;
    bottom: 16px;
    margin-top: 22px;
    display: flex;
    align-items: baseline;
    &__comment {
      img {
        width: 20px;
        height: 20px;
        position: absolute;
        left: 0;
      }
      span {
        padding-left: 32px;
        position: relative;
        color: rgba(60, 60, 67, 0.6);
        font-family: 'Manrop-Regular', serif;
        font-size: 17px;
        line-height: 24px;
        text-decoration: none;
      }
    }
    &__update {
      margin-left: 34px;
      img {
        width: 20px;
        height: 20px;
      }
    }
  }
}

@media (max-width: 770px) {
  .desktop {
    display: none
  }
  .mobile__post {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    border: none;
    border-bottom: 1px solid #D1D1D6;
    border-radius: 0;
    padding: 16px 0;
  }
  .post {
    &__image{
      img {
        width: 187px;
        height: 202px
      }
    }
    &__footer {
      padding-top: 22px;
      position: relative;
    }
  }
}
</style>
