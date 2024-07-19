<template>
  <div class="navbar">
    <div class="navbar-top">
      <van-icon name="wap-nav" color="#891000" @click="changeShowTop" />
    </div>
    <van-popup v-model:show="showTop" position="top" :overlay-style="{background:'transparent'}" :teleport="dom">
      <van-collapse v-model="activeNames" @change="changeCollapse" accordion>
        <van-collapse-item v-for="item in props.options" :key="item.title" :title="item.title" :name="item.title">
          <van-cell-group v-if="item.children?.length">
            <van-cell :title="vitem.title" @click="onSelect(vitem.index,item.path)" v-for="vitem in item.children" :key="vitem.title" />
          </van-cell-group>
        </van-collapse-item>
      </van-collapse>
    </van-popup>
  </div>
</template>

<script setup>
import { nextTick, onMounted, ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { showToast } from 'vant';

const router = useRouter()
const route = useRoute()

const props = defineProps({
  options: {
    type: Array, default: [
      { title: '首页', path: '/home' },
      { title: '项目案例' },
      {
        title: '关于我们', path: '/aboutus', children: [
          { title: '公司历史', index: 1 },  //index为第几页，从索引从0开始，用户滚动到指定位置
          { title: '公司业务', index: 2 },
          { title: '保障性安居工程建设', index: 4 },
          { title: '企业使命', index: 5 },
          { title: '企业理念', index: 6 },
        ]
      },
    ]
  }
})

const showTop = ref(false)
const activeNames = ref('')

const emits = defineEmits(['select'])

const dom = ref(null)
const changeShowTop = () => {
  showTop.value = !showTop.value
}

const changeCollapse = (val) => {
  console.log(val);
  let obj = props.options.find(i => i.title == val)
  if (!obj) return
  if (!obj.children?.length) {
    if (!obj.path) {
      showToast('暂无内容')
      return
    }
    router.push({
      path: obj.path
    })
  }
}

const onSelect = (index, path) => {
  showTop.value = false
  if (route.path == path) {
    emits('select', { path, index })
  } else {
    if (!path) {
      showToast('暂无内容')
      return
    }
    router.push({
      path: path,
      query: { index }
    })
  }
}

onMounted(() => {
  dom.value = document.querySelector('.navbar')
})
</script>

<style lang="scss" scoped>
.navbar {
  .navbar-top {
    text-align: right;
    padding: 10px 20px;
    width: 100%;
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
}
</style>
