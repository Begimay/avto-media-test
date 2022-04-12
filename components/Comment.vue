<template>
  <div class="comment">
    <div class="comment__image">
      <img src="@/assets/img/avatar.svg" alt="">
    </div>
    <div class="comment__about">
      <p class="comment__about__name">{{ comment.name }}</p>
      <p class="comment__about__description">{{ comment.body }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Comment",
  props: {
    comment: {
      type: Object,
      default: null,
    }
  },
}
</script>

<style lang="scss">
.comment {
  display: flex;
  align-items: flex-start;
  &__image {
    margin: 0 12px;
    img {
      width: 36px;
      height: 100%;
    }
  }
  &__about {
    &__name {
      font-family: 'Manrop-SemiBold', serif;
      font-size: 18px;
      line-height: 24px;
      letter-spacing: 0.5px;
      margin: 0 0 10px 0;
      color: #000
    }
    &__description {
      font-family: 'Manrop-Regular', serif;
      font-size: 18px;
      line-height: 22px;
    }
  }
}
</style>
