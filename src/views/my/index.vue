<template>
  <transition name="van-fade">
    <div v-show="visible" class="page">
      <van-uploader v-model="fileList" :deletable="false">
        <template #preview-cover="{ file }">
          <div class="preview-cover van-ellipsis">{{ file.name }}</div>
        </template>
      </van-uploader>
      <van-watermark
        image="https://fastly.jsdelivr.net/npm/@vant/assets/vant-watermark.png"
        opacity="0.2"
      />
    </div>
  </transition>
</template>

<script setup>
  import { onMounted, reactive, ref } from 'vue';
  import { showToast } from 'vant';
  // const img = require('@/assets/images/m_101.jpg')
  const fileList = ref([
    {
      file: {
        name: 'h5_img1',
      },
      url: 'https://ms.bdimg.com/pacific/0/pic/591611170_-935449544.jpg',
      deletable: true,
      beforeDelete: () => {
        showToast('删除前置处理');
      },
    },
    {
      file: {
        name: 'h5_img2',
      },
      url: 'https://ms.bdimg.com/pacific/0/pic/-1319885617_-1750501433.jpg',
      deletable: true,
      beforeDelete: () => {
        showToast('删除前置处理');
      },
    }
  ]);
  const visible = ref(false)

  onMounted(()=> {
    setTimeout(()=>{
      visible.value = true
    }, 100)
  })
</script>


<style scoped lang="scss">
  .page {
    padding: 10px;
    min-height: calc(100vh);
    background: #f5f6f7;
    .preview-cover {
      position: absolute;
      bottom: 0;
      box-sizing: border-box;
      width: 100%;
      padding: 4px;
      color: #fff;
      font-size: 12px;
      text-align: center;
      background: rgba(0, 0, 0, 0.3);
    }
    // 背景阴影
    :deep .van-uploader__upload {
      background: #fff;
      z-index: 1000;
      box-shadow: 0 0 16px 0 rgba(0,0,0,0.1);
    }
  }
</style>
