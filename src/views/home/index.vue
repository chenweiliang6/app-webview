<template>
  <div class="index">
    <div class="navbar">
      <van-icon name="wap-nav" color="#891000" @click="changeShowTop" />
    </div>
    <van-popup v-model:show="showTop" position="top" :overlay-style="{background:'transparent'}" :teleport="dom">
      <van-collapse v-model="activeNames">
        <van-collapse-item title="首页" name="1">
          <van-cell-group>
            <van-cell title="公司历史" @click="onSelect(1)" />
            <van-cell title="公司业务" @click="onSelect(2)" />
            <van-cell title="保障性安居工程建设" @click="onSelect(4)" />
            <van-cell title="企业使命" @click="onSelect(5)" />
            <van-cell title="企业理念" @click="onSelect(6)" />
          </van-cell-group>
        </van-collapse-item>
        <van-collapse-item title="项目案例" name="2">
        </van-collapse-item>
        <van-collapse-item title="关于我们" name="3">
        </van-collapse-item>
      </van-collapse>
    </van-popup>
    <div class="index-container">
      <Aboutus class="index-container-page"></Aboutus>
      <History class="index-container-page"></History>
      <Business class="index-container-page"></Business>
      <Show class="index-container-page"></Show>
      <Construct class="index-container-page"></Construct>
      <Mission class="index-container-page"></Mission>
      <Idea class="index-container-page"></Idea>
    </div>
  </div>
</template>

<script setup>
import Aboutus from './components/aboutus.vue';
import History from './components/history.vue';
import Business from './components/business.vue';
import Show from './components/show.vue';
import Construct from './components/construct';
import Mission from './components/mission.vue'
import Idea from './components/idea.vue'
import { onMounted, ref } from 'vue';

const showTop = ref(false)
const activeNames = ref([''])

const dom = ref(null)
const topList = ref([])

const changeShowTop = () => {
  showTop.value = !showTop.value
}
const getHeight = () => {
  const query = document.querySelectorAll('.index-container-page')
  query.forEach((item, index) => {
    let top = index > 0 ? topList.value[index - 1] : 0;
    top += item.clientHeight;
    topList.value.push(top);
  })
}

const onSelect = (index) => {
  showTop.value = false
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
  dom.value = document.querySelector('.navbar')
  getHeight()
})

</script>

<style lang="scss" scoped>
.index {
  background: #fdf3e9;
  width: 100%;
  height: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  .navbar {
    text-align: right;
    padding: 10px 20px;
    width: 100%;
    z-index: 9999;
  }
  ::v-deep .van-popup {
    background: #fff;
    top: 37px;
    border-bottom: 1px solid rgb(192, 192, 192);
    position: absolute;
    .van-collapse {
      .van-collapse-item {
        .van-cell {
          background: #fff;
        }
        .van-collapse-item__wrapper {
          .van-collapse-item__content {
            padding: 0;
          }
        }
      }
    }
  }
  .index-container {
    overflow: auto;
    width: 100%;
    flex: 1;
    position: relative;
  }
}
</style>
