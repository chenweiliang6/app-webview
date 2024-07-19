<template>
  <div class="aboutus">
    <div class="aboutus-left">
      <div class="aboutus-left-title">
        <img src="../../../../assets/images/1.png">
        <div class="aboutus-left-title__text">
          <span>中建民筑</span>
          <span>ZHONG JIAN MIN ZHU</span>
        </div>
      </div>
      <div class="aboutus-left-content">
        <div class="aboutus-left-content__top">关于我们</div>
        <div class="aboutus-left-content__bottom">
          <div class="line"></div>
          <div class="xie-line">//////////////////</div>
        </div>
      </div>
    </div>
    <div class="aboutus-right">
      <img src="../../../../assets/images/2.png">
    </div>
  </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.aboutus {
  width: 100%;
  height: 211px;
  display: flex;
  &-left {
    padding: 50px 0 0 20px;
    &-title {
      display: flex;
      align-items: center;
      img {
        width: 25px;
        height: 25px;
      }
      &__text {
        padding-left: 2px;
        display: flex;
        flex-direction: column;
        align-items: center;
        span {
          font-family: fzyt;
          color: #ab0200;
          font-size: 15px;
          font-weight: 600;
          &:last-child {
            font-size: 6px;
          }
        }
      }
    }
    &-content {
      padding-top: 20px;
      &__top {
        color: #da3402;
        font-weight: 600;
        font-size: 22px;
      }
      &__bottom {
        display: flex;
        align-items: center;
        .line {
          width: 110px;
          height: 0.5px;
          background: #ff773d;
        }
        .xie-line {
          color: #ff773d;
          font-size: 4px;
          padding-left: 2px;
        }
      }
    }
  }
  &-right {
    flex: 1;
    height: 100%;
    padding-left: 35px;
    height: 155px;
    align-self: flex-end;
    img{
      width: 100%;
      height: 100%;
    }
  }
}
</style>
