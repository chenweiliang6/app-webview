<template>
  <div class="development">
    <div class="development-title">
      必须按照既定路线发展
    </div>
    <div class="development-title2">
      房地产政策演变及其背后的动机和影响
    </div>
    <div class="development-introduce">
      <img src="../../../assets/images/arrow-right-red.png">
      <div class="development-introduce-text">
        最初国家对房地产的政策是以福利分房,来满足民众对房产的需求。然而随着社会在不断的发展中所出现了比较突出的问题。一是国家在那个时期无法完全满足所有民众对房产的需求的。所以不得不做出改革允许外资、民间财团参与其中。但这只是个过度期，国家一直在积蓄资源和资金来对房地产行业进行整合整改，使其能重新回到建国之初所制定的全民持有房产的发展方针中。这个过程就需要一个强有力的执行机构，中建民筑就是在此背景下应运而生的。
      </div>
    </div>
    <div class="development-list">
      <div class="development-list-item" v-for="item in listData" :key="item">
        <span>{{ item }}</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const listData = ref(['福利分房阶段', '资源整合与政策调整', '改革开放和问题的出现', '执行机构的重要性'])

</script>

<style scoped lang="scss">
.development {
  width: 100%;
  height: 211px;
  background: url('../../../assets/images/background3.png') center no-repeat;
  background-size: 100% 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  .development-title {
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #ffecd7;
    font-size: 10px;
    padding-top: 13px;
  }
  .development-title2 {
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #c90909;
    font-size: 14px;
    padding-top: 10px;
  }

  .development-introduce {
    width: 100%;
    padding: 0 30px;
    padding-top: 5px;
    display: flex;
    img {
      width: 15px;
      height: 13px;
    }
    &-text {
      color: #595959;
      font-size: 8px;
      padding-left: 5px;
    }
  }
  .development-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 10px 20px 0 20px;
    &-item {
      flex: 0 0 calc(50% - 20px);
      background: url('../../../assets/images/red-jiantou.png') center no-repeat;
      background-size: 100% 100%;
      margin-bottom: 20px;
      padding-left: 15px;
      height: 19px;
      display: flex;
      align-items: center;
      span {
        color: transparent;
        background-image: linear-gradient(to bottom, #ffecd7, #fecd97);
        background-clip: text;
        font-size: 11px;
      }
    }
  }
}
</style>
