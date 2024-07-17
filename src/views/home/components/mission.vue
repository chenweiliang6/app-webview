<template>
  <div class="mission">
    <div class="mission-left">
      <div class="mission-left-title">企业使命</div>
      <div class="mission-left-list">
        <div class="mission-left-list__item" v-for="item in list" :key="item.title">
          <div class="item-title">{{ item.title}}</div>
          <div class="item-text">{{ item.text }}</div>
        </div>
      </div>
    </div>
    <div class="mission-right">
      <img src="../../../assets/images/11.png">
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const list = ref([
  { title: '为民拓展幸福空间', text: '解决人口住房问题，推进房地产业的发展' },
  { title: '改善居民居住条件', text: '提升城镇老旧小区，推进安居利民工程，推动构建“纵向到底、横向到边、共建共治共享”的住房体系，早日实现全民持房，人人有房的愿景' },
])
</script>

<style lang="scss" scoped>
.mission {
  width: 100%;
  height: 211px;
  padding: 0 20px 0 20px;
  display: flex;
  align-items: center;
  &-left {
    flex: 1;
    padding-right: 60px;
    &-title {
      font-size: 12px;
      font-weight: 600;
      color: #9b1b00;
      padding-bottom: 20px;
    }
    &-list {
      &__item {
        margin-bottom: 40px;
        .item-title {
          color: #f80000;
          font-size: 8px;
          font-weight: 600;
        }
        .item-text {
          padding-top: 2px;
          font-size: 5px;
          color: #272320;
        }
      }
    }
  }
  &-right{
    flex: 0 0 183px;
    height: 180px;
    img{
      width: 100%;
      height: 100%;
    }
  }
}
</style>
