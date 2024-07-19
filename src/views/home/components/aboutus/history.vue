<template>
  <div class="history">
    <div class="history-title">公司历史</div>
    <div class="history-container">
      <div class="history-container-left">
        <div class="history-container-left__red">
          <div class="red-border">
            <img src="../../../../assets/images/4.png">
          </div>
          <div class="red-arrow"></div>
        </div>
        <div class="history-container-left__orange">
          <div class="orange-border"> </div>
          <div class="orange-arrow"></div>
        </div>
      </div>
      <div class="history-container-right">
        <div class="history-container-right__item" v-for="item in list" :key="item.title">
          <div class="history-container-right__item-title">{{ item.title }}</div>
          <div class="history-container-right__item-text">{{ item.text }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';


const list = ref([
  { title: '成立背景', text: '中建民筑集团有限公司的前身为原国家建工总局' },
  { title: '发展历程', text: '1980年成立中建民筑工程总公司，1992年接收六家与建设部脱钩的企业，2006年改制为国有独资公司，2007年被授予业绩优秀企业称号' },
])

</script>

<style lang="scss" scoped>
.history {
  width: 100%;
  height: 211px;
  padding: 20px 0 0 20px;
  display: flex;
  flex-direction: column;
  &-title {
    color: #992305;
    font-weight: 600;
    font-size: 13px;
  }
  &-container {
    display: flex;
    align-items: center;
    flex: 1;
    &-left {
      position: relative;
      &__red {
        position: relative;
        z-index: 1;
        .red-border {
          width: 150px;
          height: 110px;
          border-radius: 10px;
          background: #da3400;
          padding: 4px;
          img {
            width: 100%;
            height: 100%;
          }
        }
        .red-arrow {
          position: absolute;
          left: 10px;
          width: 0;
          height: 0;
          border-bottom: 10px solid transparent;
          border-left: 10px solid #da3400;
        }
      }
      &__orange {
        position: absolute;
        bottom: -10px;
        right: -10px;
        z-index: 0;
        .orange-border {
          width: 120px;
          height: 88px;
          border-radius: 10px;
          background: #ff9774;
          padding: 4px;
          img {
            width: 100%;
            height: 100%;
          }
        }
        .orange-arrow {
          position: absolute;
          right: 10px;
          width: 0;
          height: 0;
          border-bottom: 10px solid transparent;
          border-right: 10px solid #ff9774;
        }
      }
    }
    &-right{
      margin-left: 30px;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      height: 100%;
      &__item{
        &-title{
          padding: 3px 15px;
          border-radius: 3px;
          background: #fe0000;
          color: #fff;
          font-size: 8px;
          font-weight: 600;
          display: inline-block;
        }
        &-text{
          font-size: 8px;
          color: #272320;
          padding-top: 5px;
        }
      }
    }
  }
}
</style>
