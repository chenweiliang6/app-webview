<template>
  <div class="contents">
    <div class="contents-title">
      <span class="title">目录</span>
      <span class="name">CONTENTS</span>
    </div>
    <div class="contents-introduce">
      <div class="contents-introduce-item" v-for="item in dataArr" :key="item.index">
        <div class="contents-introduce-item__index">{{ item.index }}</div>
        <div class="contents-introduce-item__content">{{ item.content }}</div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';


const dataArr = ref([
  { index: '壹', content: '推动房地产的持续发展' },
  { index: '贰', content: '维护房地产发展秩序' },
  { index: '叁', content: '持续关注房地产发展动态' },
  { index: '肆', content: '持续推动以发放福利为方法的房改新政' },
])

</script>

<style scoped lang="scss">
.contents {
  width: 100%;
  height: 211px;
  background: url('../../../assets/images/background2.png') center no-repeat;
  background-size: 100% 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  .contents-title {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 20px;

    .title {
      font-size: 44px;
      color: transparent;
      background-image: linear-gradient(to bottom, #fff2cc, #ffdd77);
      background-clip: text;
      font-family: hwxk;
    }

    .name {
      font-size: 13px;
      color: transparent;
      background-image: linear-gradient(to bottom, #fff2cc, #ffdd77);
      background-clip: text;
      letter-spacing: 20px;
    }
  }

  .contents-introduce {
    font-size: 6px;
    color: #f1d1b2;
    width: 100%;
    padding: 0 40px;
    padding-top: 5px;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    &-item {
      display: flex;
      align-items: center;
      flex: 0 0 calc(50% - 8px);
      margin-bottom: 12px;
      &__index {
        background: #f64a4e;
        width: 20px;
        height: 20px;
        border-radius: 5px;
        font-size: 14px;
        line-height: 20px;
        text-align: center;
      }
      &__content {
        padding-left: 5px;
        flex: 1;
        display: flex;
        align-items: center;
        background: linear-gradient(to right, #ffecd7, #fecc94);
        height: 20px;
        border-radius: 5px;
        color: #c90909;
        font-size: 10px;
        margin-left: 3px;

      }
      &:nth-child(3){
        .contents-introduce-item__content{
          font-size: 9px;
          line-height: 9px;
        }
      }
      &:last-child{
        .contents-introduce-item__content{
          font-size: 9px;
          line-height: 9px;
        }
      }
    }
  }
}
</style>
