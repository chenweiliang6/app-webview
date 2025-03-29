<template>
  <div class="gateway">
    <div class="gateway-title">
      改革的关口
    </div>
    <div class="gateway-content">
      <div class="gateway-content-left">
        <span>
          中国式房地产现代化
        </span>
      </div>
      <div class="gateway-content-right">
        房地产发展是国家体恤民情的表现，也是社会发展改革的必经之路。随着国家从计划经济向市场经济的转型，房地产行业的蓬勃发展已成为必然。这不仅带动了地方经济的增长，还提升了民众的经济收入。
      </div>
    </div>
    <div class="gateway-feature">
      <div class="gateway-feature-left">
        四大特征
      </div>
      <div class="gateway-feature-mid">
        中国式地产现代化
      </div>
      <div class="gateway-feature-right">
        <div class="gateway-feature-right__item" v-for="item in list" :key="item">
          <div>是</div>
          <div>{{ item }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const list = ref([
  '房地产发展与国家民生关怀',
  '房地产改革的必然及必要性',
  '房地产对地方经济的带动作用',
  '房地产对民众经济收入的提升作用'
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
  .gateway-content {
    padding: 0 30px;
    display: flex;
    align-items: center;
    position: relative;
    padding-left: 80px;
    margin-top: 10px;
    &-left {
      padding: 8px 1px;
      border-radius: 5px;
      background: #ee2d3e;
      position: absolute;
      left: 30px;
      span {
        color: transparent;
        background-image: linear-gradient(to bottom, #ffecd7, #fecd97);
        background-clip: text;
        font-size: 11px;
      }
    }
    &-right {
      border: 1px solid #c90909;
      padding: 5px 5px 5px 60px;
      color: #595959;
      font-size: 8px;
    }
  }

  .gateway-feature {
    padding: 10px 20px 0 20px;
    align-self: flex-start;
    display: flex;
    align-items: center;
    &-left {
      background: #ee2d3e;
      padding: 10px;
      border-radius: 5px;
      font-size: 14px;
      color: #ffecd7;
      width: 50px;
      height: 50px;
      text-align: center;
      display: flex;
      align-items: center;
    }
    &-mid {
      background: url('../../../assets/images/daoxiang-jiantou.png') center
        no-repeat;
      background-size: 100% 100%;
      width: 100px;
      height: 33px;
      font-size: 11px;
      line-height: 33px;
      padding-left: 2px;
      color: #c90909;
      margin-left: 10px;
    }
    &-right {
      &__item {
        display: flex;
        align-items: center;
        margin-bottom: 5px;
        div:first-child {
          border-radius: 50%;
          width: 20px;
          height: 20px;
          font-size: 12px;
          color: #fecd97;
          background: #ee2d3e;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        div:last-child {
          color: #595959;
          font-size: 10px;
          padding-left: 5px;
        }
      }
    }
  }
}
</style>
