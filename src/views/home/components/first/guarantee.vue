<template>
  <div class="guarantee">
    <div class="guarantee-box">
      <div class="guarantee-box-title">
        <span>保障性安居工程建设</span>
        <span>保障性住房在北京市、江苏省、江西省、青海省建设 普及公共租赁住房，为解决公共租赁住房发展要求经验</span>
      </div>
      <div class="guarantee-box-img">
        <div class="guarantee-box-img__left">
          <img src="../../../../assets/images/a9b5aaabc758c27e95cf08aeb9fd7b60.png">
        </div>
        <div class="guarantee-box-img__right">
          <img src="../../../../assets/images/c64e932a22d9ca7895cc9eba2a5fc998.png">
          <img src="../../../../assets/images/f3bf66cc41365f76cdb8b2aac7ba2d84.png">
          <img src="../../../../assets/images/5f32f7a705468ec3de56acc808d2488c.png">
        </div>
      </div>
      <div class="guarantee-box-bottom">
        <span>旧城区改造</span>
        <span>累计完成改造13.8万亿元，建设改造安居住房，解决改造安居住房5800万平方米，1.4亿平方米保障国家需要</span>
      </div>
    </div>
  </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.guarantee {
  background: #fafbff;
  display: flex;
  justify-content: center;
  // position: relative;
  &-box {
    margin-top: -10px;
    padding: 15px;
    background: #fafbff;
    box-shadow: 0 4px 6px #5b73a01a;
    border-radius: 3px;
    width: 75%;
    // position: absolute;
    &-title {
      display: flex;
      flex-direction: column;
      span:first-child {
        color: #15335f;
        font-size: 9px;
        font-weight: 600;
      }
      span:last-child {
        padding-top: 2px;
        font-size: 5px;
        color: #5e6168;
      }
    }
    &-img {
      margin-top: 10px;
      display: flex;
      align-items: center;
      &__left {
        flex: 0 0 75%;
        height: 134px;
        img {
          width: 100%;
          height: 100%;
          border-radius: 2px;
        }
      }
      &__right {
        flex: 1;
        display: flex;
        flex-direction: column;
        margin-left: 5px;
        img {
          width: 100%;
          height: calc(124px / 3);
          margin-bottom: 5px;
          border-radius: 2px;
          &:last-child {
            margin-bottom: 0;
          }
        }
      }
    }
    &-bottom {
      display: flex;
      flex-direction: column;
      margin-top: 10px;
      span:first-child {
        color: #15335f;
        font-size: 9px;
        font-weight: 600;
      }
      span:last-child {
        padding-top: 2px;
        font-size: 5px;
        color: #5e6168;
      }
    }
  }
}
</style>
