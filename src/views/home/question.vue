<template>
  <div class="question">
    <div class="question-container">
      <div class="question-top">
        <div class="question-top-item" v-for="item in topArr" :key="item.text" @click="toFeedback">
          <img :src="item.icon">
          <span>{{ item.text }}</span>
        </div>
      </div>
      <div class="question-main">
        <div class="question-main-title">常见问题</div>
        <van-collapse v-model="activeNames" accordion>
          <van-collapse-item :title="item.title" :name="index" v-for="(item,index) in collapseArr" :key="item.title">
            <template #icon>
              <img :src="iconCollapse">
            </template>
            {{ item.value }}
          </van-collapse-item>
        </van-collapse>
      </div>
    </div>
    <div class="question-bottom">
      <van-button color="#ff6701" @click="toFeedback">新建反馈</van-button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import iconFeedback from '../../assets/images/icon-feedback.png'
import iconCollapse from '../../assets/images/icon-collapse.png'
const topArr = ref([{ icon: iconFeedback, text: '问题反馈' }])
const activeNames = ref('1')

const collapseArr = [
  {
    title: '刮削完成之后，没有生成海报墙',
    value:
      '为了避免出现扫库的风控，所以用户需要把影视资源按照这样的路径进行存放，电影：/我的视频/电影/电影名(例如：毒液3)，电视剧：/我的视频/电视剧/电视剧名称(例如：北上)/每1集的视频文件(按照S01E01风格)。'
  },
  {
    title: 'William Player刮削最新命名相关规范',
    value:
      'William Player的影视数据信息均来源于公开影视数据库网站TMDB，对于标准的命名规则，我们基本都是支持的。'
  },
  {
    title: '媒体库刮削完成之后，影视资源匹配不正确',
    value: '可点击进入影视详情之后，点击右上角的三个点，手动编辑信息。'
  },
  {
    title: '支持导入哪些影片资源？',
    value: '目前已支持导入WebDAV、天翼云盘、夸克网盘的资源。'
  },
  {
    title: '无法播放某些视频？',
    value: '由于安卓手机的设备解码能力有限，部分大文件视频无法播放。'
  },
  {
    title: '支持哪些播放格式？',
    value:
      'William Player目前已支持主流的视频、音频格式。视频：MP4、MKV、WebM、FLV、MPEG-TS/MPEG-PS,音频：AAC、AC3/E-AC3，字幕：SRT、ASS。'
  },
  {
    title: '是否支持缓存下载视频到设备本地？',
    value: '暂不支持。'
  },
  {
    title: '是否支持不登录使用？',
    value: '支持游客进入使用，用户也可自行注册。'
  }
]

const toFeedback = () => {
  plus.runtime.openURL(
    'https://gitee.com/CWLcwl0219/William-Player/issues',
    (error) => {
      if (error) {
        uni.showToast({ title: '打开浏览器失败', icon: 'none' })
      }
    }
  )
}
</script>

<style lang="scss" scoped>
.question {
  background: #f6f7f8;
  width: 100%;
  height: 100%;
  padding-top: 12px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  .question-container {
    padding: 0 12px 12px 12px;
    flex: 1;
    display: flex;
    flex-direction: column;
    overflow: auto;
    .question-top {
      background: #fff;
      border-radius: 12px;
      display: flex;
      align-items: center;
      padding: 15px;
      box-sizing: border-box;
      .question-top-item {
        display: flex;
        flex-direction: column;
        align-items: center;
        img {
          width: 40px;
          height: 40px;
        }
        span {
          padding-top: 5px;
          font-size: 14px;
          color: #000;
        }
      }
    }
    .question-main {
      border-radius: 12px;
      // background: #fff;
      margin-top: 12px;
      flex: 1;
      overflow: auto;
      .question-main-title {
        background: #ff6701;
        border-radius: 12px 12px 0 0;
        color: #fff;
        font-size: 14px;
        padding: 8px 12px;
      }
      ::v-deep .van-collapse {
        border-radius: 0 0 12px 12px;
        background: #fff;
        .van-collapse-item {
          .van-collapse-item__title {
            display: flex;
            align-items: center;
            border-radius: 12px;

            img {
              width: 12px;
              height: 12px;
              margin-right: 5px;
            }
          }
          .van-collapse-item__wrapper {
            .van-collapse-item__content {
              background: rgb(237, 237, 237);
              border-radius: 5px;
              color: rgb(137, 137, 137);
            }
          }
          &:last-child {
            border-radius: 0 0 12px 12px;
          }
        }
        &::after {
          display: none;
        }
      }
    }
  }
  .question-bottom {
    flex: 0 0 80px;
    padding: 0 12px;
    padding-top:10px;
    background: #fff;
    width: 100%;
    ::v-deep .van-button{
      width: 100%;
      border-radius: 12px;
    }
  }
}
</style>
