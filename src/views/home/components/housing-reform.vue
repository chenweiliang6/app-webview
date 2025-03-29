<template>
  <div class="house">
    <div class="house-title">
      做好房改和利民安居工作
    </div>
    <div class="house-title2">
      <span>
        房地产调控与利民安居工程的完善
      </span>
    </div>
    <div class="house-list">
      <div class="house-list-item" v-for="(item,index) in listData" :key="item">
        <span>{{ (index+1)+'.' }}</span><span>{{ item }}</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const listData = ref([
  '自党的十八大以来，我国在房地产领域的调控和利民安居工程体系不断完善，旨在更好地适应国家实际情况，让民众获得更多福利。',
  '尽管房地产市场经历了波动，但每次出现波动时，国家都会出台相应政策以维护市场稳定，并进行部门间的资源整合。',
  '在十四五规划期间，我国房地产进入了新的发展阶段。国家通过长达二十年的积累，已经具备充足的资金、资源和成熟的执行机构，以实现全国性的房地产大改革。',
  '国家通过专项资金、多部门协同以及专业机构共同执行的多轨并进政策，来推动房地产利民安居工程的实施。'
])

</script>

<style scoped lang="scss">
.house {
  width: 100%;
  height: 211px;
  background: url('../../../assets/images/background3.png') center no-repeat;
  background-size: 100% 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  .house-title {
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #ffecd7;
    font-size: 9px;
    padding-top: 13px;
  }
  .house-title2 {
    margin-top: 10px;
    margin-left: 20px;
    display: flex;
    align-self: flex-start;
    align-items: center;
    color: #c90909;
    background: url('../../../assets/images/red-jiantou.png') center no-repeat;
    background-size: 100% 100%;
    padding: 2px 15px 2px 20px;
    span {
      color: transparent;
      background-image: linear-gradient(to bottom, #ffecd7, #fecd97);
      background-clip: text;
      font-size: 11px;
    }
  }

  .house-list {
    padding: 10px 20px 0 20px;
    &-item {
      margin-bottom: 10px;
      padding-left: 15px;
      display: flex;
      align-items: flex-start;
      span {
        color: #595959;
        font-size: 8px;
        &:first-child {
          font-style: italic;
          color: transparent;
          background-image: linear-gradient(to bottom, #cb1010, #eca9a2);
          background-clip: text;
          font-size: 11px;
        }
        &:last-child{
          padding-left: 5px;
        }
      }
    }
  }
}
</style>
