<template>
  <div class="last">
    <div class="last-title">
      关于中建民筑
    </div>
    <div class="last-img">
      <img src="../../../assets/images/high-rises.png">
    </div>
    <div class="last-list">
      <div class="last-list-item" v-for="item in list" :key="item.title">
        <div class="last-list-item__star">
          <span></span><img src="../../../assets/images/yellow-star.png"><span></span>
        </div>
        <div class="last-list-item__title">{{ item.title }}</div>
        <div class="last-list-item__text">{{ item.text }}</div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const list = ref([
  { title: '企业发展指导方针和理念', text: '中建民筑集团有限公司以科学发展观为根本指导方针，致力于构建和谐企业。公司坚持党执政为民、以人民为中心的发展思想，同时秉持新发展理念，追求高质量发展。企业以依法办企业为方向，以实现股东、公司和人民“多赢”为目标，致力于营造人民幸福之家。' },
  { title: '房地产发展和社会责任', text: '中建民筑集团积极推进城镇老旧小区的改造，推动安居利民工程，改善居民的居住条件。公司致力于构建“纵向到底、横向到边、共建共治共享”的住房体系，以实现全民持房、人人有房的愿景。这一努力旨在让人民群众的生活更加便利、舒适和美好。' },
  { title: '发展政策和社会效益', text: '公司从建国初期的“居者有其屋”福利分房政策演变到今天，通过吸引民间资本共同参与、共同盈利的发展政策，不仅让民众获得福利房，还能从中获得经济利益。这些措施不仅促进了房地产市场的健康发展，也为我国城镇化的全面建设做出了重要贡献。' },
])


</script>

<style scoped lang="scss">
.last {
  width: 100%;
  height: 211px;
  background: url('../../../assets/images/background3.png') center no-repeat;
  background-size: 100% 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;

  .last-title {
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #ffecd7;
    font-size: 9px;
    padding-top: 13px;
  }
  .last-img {
    margin-top: 10px;
    padding: 0 30px;
    img {
      width: 100%;
    }
  }
  .last-list {
    padding: 5px 35px 0 35px;
    width: 100%;
    margin-top: 10px;
    display: flex;
    align-items: center;
    position: absolute;
    bottom: 20px;
    &-item {
      background: url('../../../assets/images/star-box.png') center no-repeat;
      background-size: 100% 100%;
      flex: 1;
      height: 93px;
      margin-left: 5px;
      padding-top: 4px;
      &:first-child {
        margin-left: 0;
      }
      &__star {
        display: flex;
        align-items: center;
        justify-content: center;
        span {
          display: block;
          width: 20px;
          height: 1px;
          background: linear-gradient(to right, #fb867e, #fdceab);
        }
        span:first-child {
          margin-right: 3px;
        }
        span:last-child {
          background: linear-gradient(to right, #fdceab, #fb867e);
          margin-left: 3px;
        }
        img {
          width: 10px;
          height: 10px;
        }
      }
      &__title {
        color: #c90909;
        font-size: 8px;
        text-align: center;
        // padding-top: 3px;
      }
      &__text {
        padding: 0 5px;
        font-size: 5px;
        color: #000000;
      }
    }
  }
}
</style>
