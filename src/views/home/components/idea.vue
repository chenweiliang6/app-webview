<template>
  <div class="idea">
    <div class="idea-title">企业理念</div>
    <div class="idea-container">
      <div class="idea-container-left">
        <div class="idea-container-left__title">坚持科学发展观</div>
        <div class="idea-container-left__text">构建和谐企业，坚持实现党执政为民为第一要务，坚持以人民为中心的发展思想，坚持新发展理念，按照高质量发展要求，坚持以依法办企业为方向，坚持以股东、公司和人民“多赢”为目标，坚持以营造人民幸福之家为根本，坚持以抓好企业稳定、安全生产和高质量住房为关键</div>
      </div>
      <div class="idea-container-center">
        <div class="idea-container-center__item">
          <img src="../../../assets/images/diannao.png">
        </div>
        <div class="idea-container-center__item">
          <img src="../../../assets/images/tongxunlu.png">
        </div>
      </div>
      <div class="idea-container-right">
        <div class="idea-container-right__title">企业愿景</div>
        <div class="idea-container-right__text">实现建国之初我党所定下的“居者有其屋”以福利分房为基础衍生到如今的吸引民间资本共同参与共同盈利的发展政策.让民众不止可以拿到福利房还能从中获得经济利益也是为了实现我国城镇化的全面建设而砥砺前行</div>
      </div>
    </div>
  </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.idea {
  width: 100%;
  height: 211px;
  padding: 0 20px 0 20px;
  &-title {
    font-size: 12px;
    font-weight: 600;
    color: #9b1b00;
    padding-bottom: 40px;
  }
  &-container {
    display: flex;
    align-items: center;
    &-left {
      flex: 1;
      padding-right: 10px;
      &__title {
        color: #df1501;
        font-size: 8px;
        font-weight: 600;
        text-align: right;
      }
      &__text {
        padding-top: 5px;
        font-size: 6px;
        color: #272320;
        text-align: right;
      }
    }
    &-center {
      display: flex;
      &__item {
        width: 60px;
        height: 60px;
        border-radius: 50%;
        background: rgba(218,66,63,1);
        display: flex;
        align-items: center;
        justify-content: center;
        img {
          width: 17px;
          height: 17px;
        }
        &:last-child{
          margin-left: -10px;
        }
      }
    }
    &-right {
      flex: 1;
      padding-left: 10px;
      &__title {
        color: #df1501;
        font-size: 8px;
        font-weight: 600;
      }
      &__text {
        padding-top: 5px;
        font-size: 6px;
        color: #272320;
      }
    }
  }
}
</style>
