<template>
  <div class="container footer">
    <div class="footer__copyright">2021 copyright all rights reserved</div>
  </div>
</template>

<script>
export default {
  name: "Footer"
}
</script>

<style lang="scss">
.footer {
  margin-top: 136px;
  border-top: 1px solid #E8E8E8;
  &__copyright {
    font-family: 'Inter-Regular', serif;
    font-size: 16px;
    line-height: 19px;
    padding: 30px 0;
  }
}

@media (max-width: 770px) {
  .footer {
    padding: 30px 16px;
    span {
      font-size: 12px;
    }
  }
}
</style>
