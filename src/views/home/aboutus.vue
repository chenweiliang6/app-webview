<template>
  <div class="aboutus1">
    <Navbar @select="onSelect"></Navbar>
    <div class="aboutus1-container">
      <Aboutus class="aboutus1-container-page"></Aboutus>
      <History class="aboutus1-container-page"></History>
      <Business class="aboutus1-container-page"></Business>
      <Show class="aboutus1-container-page"></Show>
      <Construct class="aboutus1-container-page"></Construct>
      <Mission class="aboutus1-container-page"></Mission>
      <Idea class="aboutus1-container-page"></Idea>
    </div>
  </div>
</template>

<script setup>
import Aboutus from './components/aboutus/aboutus.vue';
import History from './components/aboutus/history.vue';
import Business from './components/aboutus/business.vue';
import Show from './components/aboutus/show.vue';
import Construct from './components/aboutus/construct';
import Mission from './components/aboutus/mission.vue'
import Idea from './components/aboutus/idea.vue'
import { onMounted, ref, watch } from 'vue';
import { useRoute } from 'vue-router';
import Navbar from './components/navbar.vue'

const route = useRoute()

const topList = ref([])
const getAboutusHeight = () => {
  const query = document.querySelectorAll('.aboutus1-container-page')
  query.forEach((item, index) => {
    let top = index > 0 ? topList.value[index - 1] : 0;
    top += item.clientHeight;
    topList.value.push(top);
  })
}
//滚动到指定位置
const scrollToPosition = (index) => {
  if (!index) {
    return
  }
  if (index == 0) {
    document.querySelector('.aboutus1-container').scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  } else {
    document.querySelector('.aboutus1-container').scrollTo({
      top: topList.value[index - 1],
      behavior: 'smooth'
    })
  }
}

const onSelect = (data) => {
  console.log(data,'data');
  scrollToPosition(data.index)
}

onMounted(() => {
  getAboutusHeight()
  scrollToPosition(route.query.index)
})
</script>

<style lang="scss" scoped>
.aboutus1 {
  background: #fdf3e9;
  width: 100%;
  height: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  .aboutus1-container {
    overflow: auto;
    width: 100%;
    flex: 1;
    position: relative;
  }
}
</style>
