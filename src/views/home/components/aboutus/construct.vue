<template>
  <div class="construct">
    <div class="construct-left">
      <div class="construct-left-title">
        保障性安居工程建设
      </div>
      <div class="construct-left-list">
        <div class="construct-left-list__item" v-for="(item,index) in list" :key="item.title">
          <div class="item-number">{{ '0'+String(index+1)}}</div>
          <div class="item-content">
            <div class="item-content-title">{{ item.title }}</div>
            <div class="item-content-text">{{ item.text }}</div>
          </div>
        </div>
      </div>
    </div>
    <div class="construct-right">
      <img src="../../../../assets/images/10.png">
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";


const list = ref([
  { title: '公共租赁住房', text: '在重庆市、江苏省、厦门市、青岛市建设首批公共租赁住房，为探索公共租赁住房发展谋求经验' },
  { title: '老旧城区改造', text: '累计完成投资13.8万亿元，建设各类安居住宅、棚户区改造安置住房5800多万套，1.4亿多群众喜圆安居梦' },
])
</script>

<style lang="scss" scoped>
.construct {
  width: 100%;
  height: 211px;
  padding: 0 0 0 20px;
  display: flex;
  align-items: center;
  &-left {
    flex: 1;
    padding-right: 40px;
    &-title {
      font-size: 12px;
      font-weight: 600;
      color: #9b1b00;
      padding-bottom: 40px;
    }
    &-list {
      &__item {
        display: flex;
        // align-items: center;
        margin-bottom: 15px;
        .item-number {
          background: #ff5824;
          border-radius: 50%;
          flex: 0 0 20px;
          height: 20px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #fff;
          font-size: 9px;
          font-weight: 600;
        }
        .item-content {
          padding-left: 15px;
          &-title {
            color: #d03000;
            font-size: 8px;
            font-weight: 600;
          }
          &-text {
            padding-top: 5px;
            font-size: 7px;
            color: #272320;
          }
        }
      }
    }
  }
  &-right{
    flex:0 0 144px;
    height: 100%;
    img{
      width: 100%;
      height: 100%;
    }
  }
}
</style>
