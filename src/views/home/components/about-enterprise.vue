<template>
  <div class="enterprise">
    <div class="enterprise-title">
      关于企业
    </div>
    <div class="enterprise-content">
      <div class="enterprise-content-left">
        <div class="enterprise-content-left__title">
          <span>
            企业发展指导方针和理念
          </span>
        </div>
        <div class="enterprise-content-left__arrow"></div>
      </div>
      <div class="enterprise-content-right">
        中建民筑集团有限公司以科学发展观为根本指导方针，致力于构建和谐企业。公司坚持党执政为民、以人民为中心的发展思想，同时秉持新发展理念，追求高质量发展。企业以依法办企业为方向，以实现股东、公司和人民“多赢”为目标，致力于营造人民幸福之家。
      </div>
    </div>
    <div class="enterprise-border">
      <div class="enterprise-border-border">
        中建民筑集团积极推进城镇老旧小区的改造，推动安居利民工程，改善居民的居住条件。公司致力于构建“纵向到底、横向到边、共建共治共享”的住房体系，以实现全民持房、人人有房的愿景。这一努力旨在让人民群众的生活更加便利、舒适和美好。
      </div>
    </div>
    <div class="enterprise-list">
      <div class="enterprise-list-item" v-for="item in list" :key="item">
        <span>{{ item }}</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const list = ref([
  '企业发展理念和社会责任',
  '房地产行业改善和社会效益',
  '发展政策与市场影响',
  '未来展望与可持续发展'
])


</script>

<style scoped lang="scss">
.enterprise {
  width: 100%;
  height: 211px;
  background: url('../../../assets/images/background3.png') center no-repeat;
  background-size: 100% 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  .enterprise-title {
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #ffecd7;
    font-size: 9px;
    padding-top: 13px;
  }
  .enterprise-content {
    padding: 0 30px;
    margin-top: 10px;
    align-self: flex-start;
    display: flex;
    align-items: center;
    &-left {
      &__title {
        width: 140px;
        height: 17px;
        background: url('../../../assets/images/star-arrow.png') center
          no-repeat;
        background-size: 100% 100%;
        padding-left: 19px;
        display: flex;
        align-items: center;
        span {
          font-size: 10px;
          color: transparent;
          background-image: linear-gradient(to bottom, #fff2cc, #ffdd77);
          background-clip: text;
          font-weight: 500;
        }
      }
      &__arrow {
        margin-top: 5px;
        width: 140px;
        height: 12px;
        background: url('../../../assets/images/long-arrow.png') center
          no-repeat;
        background-size: 100% 100%;
      }
    }
    &-right {
      margin-left: 10px;
      color: #595959;
      font-size: 8px;
    }
  }
  .enterprise-border {
    padding: 0 40px;
    &-border {
      padding: 5px 10px;
      color: #595959;
      font-size: 8px;
      border: 1px solid #f25561;
    }
  }

  .enterprise-list {
    padding: 5px 30px 0 30px;
    display: flex;
    align-items: center;
    align-self: flex-start;
    &-item {
      background: #ee2d3e;
      border-radius: 17px;
      flex: 0 0 80px;
      padding: 2px 7px;
      text-align: center;
      line-height: 10px;
      span {
        color: transparent;
        background-image: linear-gradient(to bottom, #fff2cc, #ffdd77);
        background-clip: text;
        font-size: 10px;
      }
    }
  }
}
</style>
