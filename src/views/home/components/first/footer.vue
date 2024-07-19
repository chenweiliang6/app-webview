<template>
  <div class="footer">
    <div class="footer-top">
      <div class="footer-top-left">
        <div class="footer-top-left__item" v-for="item in options" :key="item.title">
          <div class="item-title">{{ item.title }}</div>
          <div class="item-child" v-for="vitem in item.children" :key="vitem.title">{{ vitem.title }}</div>
        </div>
      </div>
      <div class="footer-top-right">
        <span>123-456-7890</span>
        <span>contact@bookonline.com</span>
      </div>
    </div>
    <div class="footer-bottom">@ 2023 reservationsystem.com</div>
  </div>
</template>

<script setup>
import { ref } from "vue";


const options = ref([
  {
    title: 'Support', children: [
      { title: 'My Booking' },
      { title: 'Reviews' },
      { title: 'Contact' },
      { title: 'Terms' },
      { title: 'Privacy' },
    ]
  },
  {
    title: 'More', children: [
      { title: 'About' },
      { title: 'Accessibility' },
      { title: 'Extended stays' },
      { title: 'Groups and meetings' },
      { title: 'Site map' },
    ]
  },
])

</script>

<style lang="scss" scoped>
.footer {
  background: #a40001;
  padding: 30px 50px 0 50px;
  &-top {
    display: flex;
    justify-content: space-between;
    &-left {
      display: flex;
      // align-items: center;
      &__item {
        .item-title {
          font-size: 6px;
          font-weight: 600;
          color: #fff;
        }
        .item-child {
          font-size: 5px;
          color: #dbdbdb;
          padding-top: 5px;
        }
        &:last-child {
          margin-left: 40px;
        }
      }
    }
    &-right {
      display: flex;
      flex-direction: column;
      span:first-child {
        font-size: 12px;
        font-weight: 600;
        color: #fff;
      }
      span:last-child {
        font-size: 5px;
        color: #fff;
        text-align: right;
      }
    }
  }
  &-bottom {
    padding: 30px 0 10px 0;
    font-size: 5px;
    color: #fff;
  }
}
</style>
