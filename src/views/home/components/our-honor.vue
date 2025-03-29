<template>
  <div class="honor">
    <div class="honor-title">
      我们的荣誉
    </div>
    <div class="honor-list">
      <div class="honor-list-item" v-for="item in list" :key="item">
        <img src="../../../assets/images/red-star.png">
        <span>{{ item }}</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const list = ref([
  '2023年8月获得第十五届人民企业社会责任奖',
  '2023年8月31日，荣获第十二届“中华慈善奖”（捐赠企业）',
  '2021年6月9日,中国建筑与中建民筑签署战略合作框架协议，双方将围绕工程设计与施工、智能建筑、智能制造、信息技术应用创新、环保以及建筑领域科技创新等方面开展合作。',
  '2020年1月4日，获得2020《财经》长青奖“可持续发展贡献奖”',
  '2016年5月6日，获得建筑行业“项目管理优秀奖”',
  '2013年，获得建筑行业“绿色建筑创新二等奖”'
])


</script>

<style scoped lang="scss">
.honor {
  width: 100%;
  height: 211px;
  background: url('../../../assets/images/background3.png') center no-repeat;
  background-size: 100% 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  .honor-title {
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #ffecd7;
    font-size: 9px;
    padding-top: 13px;
  }
  .honor-list {
    padding: 5px 30px 0 30px;
    align-self: flex-start;
    margin-top: 10px;
    &-item {
      border-radius: 3px;
      border: 1px solid #f25561;
      padding: 2px 7px;
      line-height: 11px;
      position: relative;
      display: flex;
      align-items: center;
      margin-bottom: 5px;
      img {
        width: 10px;
        height: 10px;
        position: absolute;
        left: -5px;
      }
      span {
        font-size: 10px;
        color: #c90909;
      }
    }
  }
}
</style>
