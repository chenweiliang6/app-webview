<template>
  <transition name="van-fade">
    <div class="index">
      <div class="navbar">
        <span class="logo">中建民筑</span>
        <van-popover v-model:show="showPopover" :actions="actions" placement="left-start" @select="onSelect"
          class="popover">
          <template #reference>
            <van-icon name="wap-nav" color="#fff" />
          </template>
        </van-popover>
      </div>
      <div class="index-container">
        <Aboutus class="index-container-page"></Aboutus>
        <Preface class="index-container-page"></Preface>
        <Contents class="index-container-page"></Contents>
        <Background class="index-container-page"></Background>
        <Development class="index-container-page"></Development>
        <housingReform class="index-container-page"></housingReform>
        <reformGateway class="index-container-page"></reformGateway>
        <Trends class="index-container-page"></Trends>
        <aboutEnterprise class="index-container-page"></aboutEnterprise>
        <ourHonor class="index-container-page"></ourHonor>
        <lastPage class="index-container-page"></lastPage>
      </div>
    </div>
  </transition>
</template>

<script setup>
import Aboutus from "./components/aboutus.vue";
import Preface from "./components/preface.vue";
import Contents from "./components/contents.vue";
import Background from "./components/background.vue";
import Development from './components/development.vue'
import housingReform from "./components/housing-reform.vue";
import reformGateway from './components/reform-gateway.vue';
import Trends from './components/trends.vue'
import aboutEnterprise from './components/about-enterprise.vue'
import ourHonor from './components/our-honor.vue'
import lastPage from "./components/last-page.vue";
import { onMounted, ref } from "vue";

const showPopover = ref(false)
const actions = ref([
  { text: '关于我们' },
  { text: '前言' },
  { text: '目录' },
  { text: '发展背景' },
  { text: '必须按照既定路线发展' },
  { text: '做好房改和利民安居工作' },
  { text: '改革的关口' },
  { text: '持续关注房地产发展动态' },
  { text: '关于企业' },
  { text: '我们的荣誉' },
  { text: '关于中建民筑' },
])
const topList = ref([])

const getHeight = () => {
  const query = document.querySelectorAll('.index-container-page')
  query.forEach((item, index) => {
    let top = index > 0 ? topList.value[index - 1] : 0;
    top += item.clientHeight;
    topList.value.push(top);
  })
}

const onSelect = (action, index) => {
  if (index == 0) {
    document.querySelector('.index-container').scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  } else {
    document.querySelector('.index-container').scrollTo({
      top: topList.value[index - 1],
      behavior: 'smooth'
    })
  }
}

onMounted(() => {
  getHeight()
})

</script>

<style scoped lang="scss">
.index {
  width: 100%;
  height: 100%;
  overflow: hidden;

  .navbar {
    background: rgba(0, 0, 0, 0.9);
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 10px;
    height: 30px;

    .logo {
      color: transparent;
      background-image: linear-gradient(to bottom, #fff2cc, #ffdd77);
      background-clip: text;
      font-family: hwxk;
    }
  }

  .index-container {
    width: 100%;
    height: 100%;
    overflow: auto;
  }
}

.popover {
  ::v-deep .van-popover__content {
    .van-popover__action {
      width: 200px;
    }
  }
}
</style>
