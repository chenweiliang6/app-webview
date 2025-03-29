<template>
  <div class="gateway">
    <div class="gateway-title">
      持续关注房地产发展动态
    </div>
    <div class="gateway-list">
      <div class="gateway-list-item" v-for="item in list1" :key="item">
        <div class="gateway-list-item__circle"></div>
        <div class="gateway-list-item__text">{{ item }}</div>
      </div>
    </div>
    <div class="gateway-bottom">
      <img src="../../../assets/images/shanghai.png" class="gateway-bottom-left">
      <div class="gateway-bottom-right">
        <div class="gateway-bottom-right__item" v-for="item in list2" :key="item">
          <div>{{ item.title }}</div>
          <div>{{ item.text }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const list1 = ref([
  '以发放福利为方法的房改新政，是促进房地产市场健康发展和社会公平的重要手段',
  '市场需求与供给分析：定期进行市场调研和数据分析，了解房地产市场的需求变化和供给状况，为政策制定和市场参与者提供科学依据。',
  '经济形势与政策导向：关注宏观经济形势和政策导向的变化，及时调整房地产市场的投资策略和经营方针。',
  '国际市场比较与学习：借鉴和学习国际上先进的房地产发展经验和管理模式，为我国的房地产市场创新和改进提供参考。'
])
const list2 = ref([
  { title: '租购并举政策', text: '推动租购并举，通过租赁市场的健康发展，提供多样化的住房选择，满足不同群体的居住需求。' },
  { title: '保障性住房建设', text: '加大对保障性住房建设的投入力度，优先保障低收入群体的基本居住权益。' },
])

</script>

<style scoped lang="scss">
.gateway {
  width: 100%;
  height: 211px;
  background: url('../../../assets/images/background3.png') center no-repeat;
  background-size: 100% 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  .gateway-title {
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #ffecd7;
    font-size: 9px;
    padding-top: 13px;
  }
  .gateway-list {
    padding: 0 30px;
    margin-top: 10px;
    &-item {
      display: flex;
      // align-items: center;
      &__circle {
        flex: 0 0 5px;
        height: 5px;
        border-radius: 50%;
        background: #c90909;
        margin-top: 1px;
      }
      &__text {
        color: #595959;
        font-size: 7px;
        padding-left: 5px;
      }
    }
  }

  .gateway-bottom {
    padding: 10px 30px 0 30px;
    display: flex;
    align-items: center;
    align-self: flex-start;
    &-left {
      width: 120px;
      height: 69px;
    }
    &-right {
      margin-left: 5px;
      &__item {
        display: flex;
        align-items: center;
        margin-bottom: 5px;
        padding: 10px 0;
        div:first-child {
          padding: 2px 0;
          font-size: 8px;
          color: #fff;
          background: #ee2d3e;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 5px;
          flex: 0 0 60px;
        }
        div:last-child {
          color: #595959;
          font-size: 6px;
          padding-left: 5px;
        }
        &:first-child {
          border-bottom: 1px dotted #f6858b;
        }
      }
    }
  }
}
</style>
