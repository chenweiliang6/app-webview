<template>
  <div class="introduce">
    <div class="introduce-img">
      <div class="introduce-img-text">
        <span>中建民筑</span>
        <span>中建民筑 为民而筑</span>
      </div>
      <div class="introduce-img-tag">
        <div class="introduce-img-tag__title">中建民筑集团有限公司的前身为原国家建工总局</div>
        <div class="introduce-img-tag__content">1980年成立建筑民筑工程总公司，1992年被评为文 与建筑混凝土的企业，2006年改制为国有控股公司，2007年被授予专业承包优秀企业称号</div>
      </div>
    </div>
    <div class="introduce-container">
      <div class="introduce-container-list">
        <div class="introduce-container-list__item" v-for="item in list" :key="item.label">
          <div class="item-value">{{ item.value }}</div>
          <div class="item-label">{{ item.label }}</div>
        </div>
      </div>
      <div class="introduce-container-bottom">
        拥有1000余人的高专业技术管理人员，至今全参与建设了50个开发项目，总建筑面积360万平方米。去年开发超过50个，计划总投资超过300亿元连续三年被国家建设部评为中央企业年度经营业绩考核A级连续两年成为“中国地区最受赞誉公司”的百强企业之一
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";


const list = ref([
  { label: '高级技术管理人员', value: '1000+' },
  { label: '参与建设国家项目', value: '50+' },
  { label: '总建筑面积', value: '360万㎡' },
])

</script>

<style lang="scss" scoped>
.introduce {
  width: 100%;
  &-img {
    background: url('../../../../assets/images/beijing.png') center no-repeat;
    background-size: 100% 100%;
    width: 100%;
    height: 232px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    &-text {
      display: flex;
      flex-direction: column;
      align-items: center;
      span:first-child {
        font-size: 15px;
        color: #fff;
        font-weight: 600;
      }
      span:last-child {
        padding-top: 3px;
        font-size: 6px;
        color: #fff;
      }
    }
    &-tag {
      position: absolute;
      bottom: -5px;
      background: #fff;
      border-radius: 3px;
      width: 70%;
      padding: 3px 15px;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      &__title {
        font-size: 5px;
        color: #15335f;
      }
      &__content {
        padding-top: 2px;
        font-size: 5px;
        color: #5e6168;
        text-align: center;
      }
    }
  }
  &-container {
    background: linear-gradient(to right, #f53b3c, #7d1516);
    height: 100px;
    padding: 15px 55px;
    &-list {
      display: flex;
      align-items: center;
      justify-content: space-between;
      &__item {
        display: flex;
        flex-direction: column;
        align-items: center;
        .item-value {
          font-size: 18px;
          color: #fff;
          font-weight: 600;
        }
        .item-label {
          padding-top: 5px;
          font-size: 6px;
          color: #fff;
        }
      }
    }
    &-bottom{
      padding: 20px 5px 0 5px;
      font-size: 4px;
      color: #fff;
      text-align: center;
    }
  }
}
</style>
