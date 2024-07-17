<template>
  <div class="business">
    <div class="business-left">
      <img src="../../../assets/images/5.png">
    </div>
    <div class="business-right">
      <div class="business-right-title">公司业务</div>
      <div class="business-right-list">
        <div class="business-right-list__item" v-for="item in list" :key="item.title">
          <div class="item-left">
            <img :src="item.icon">
          </div>
          <div class="item-right">
            <div class="item-right-title">{{ item.title }}</div>
            <div class="item-right-text">{{ item.text }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import icon1 from '../../../assets/images/6.png'
import icon2 from '../../../assets/images/7.png'

const list = ref([
  { icon: icon1, title: '建筑业', text: '拥有从产品技术研发、勘察设计、工程承包、地产开发、设备制造、物业管理等完整的建筑产品产业链条' },
  { icon: icon2, title: '地产业', text: '拥有1000余人的专业经营管理团队，在全国多个省市开展房地产开发与经营拥有土地储备360万平米，在手开发项目50余个，计划总投资额超过300亿元' },
])

</script>

<style lang="scss" scoped>
.business {
  width: 100%;
  height: 211px;
  display: flex;
  padding-right: 20px;
  &-left {
    height: 100%;
    flex: 0 0 119px;
    img {
      width: 100%;
      height: 100%;
    }
  }
  &-right {
    padding-left: 20px;
    padding-top: 20px;
    &-title {
      font-size: 12px;
      font-weight: 600;
      color: #9b1b00;
    }
    &-list {
      padding-top: 20px;
      &__item {
        display: flex;
        // align-items: center;
        .item-left {
          img {
            width: 17px;
            height: 17px;
          }
        }
        .item-right {
          margin-left: 10px;
          &-title {
            color: #ff0500;
            font-size: 8px;
            font-weight: 600;
          }
          &-text {
            padding-top: 5px;
            font-size: 6px;
            color: #272320;
          }
        }
        &:first-child {
          margin-bottom: 40px;
        }
      }
    }
  }
}
</style>
