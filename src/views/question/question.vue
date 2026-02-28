<template>
  <div class="question">
    <div class="question-container">
      <div class="question-top">
        <div
          class="question-top-item"
          v-for="item in topArr"
          :key="item.text"
          @click="toGithub"
        >
          <img
            src="https://camo.githubusercontent.com/1927d2bff3ff7efe16b402a57f7240541ded31c7aa60314d651278914711b406/68747470733a2f2f736f6369616c6966792e6769742e63692f6368656e7765696c69616e67362f57696c6c69616d2d506c617965722f696d6167653f637573746f6d5f6465736372697074696f6e3d254534254238253830254536254143254245254539253830253832254539253835253844254630253946253933254231253230416e64726f696425323050686f6e65253230254535253932253843254630253946253933254241253230416e64726f69642532305456254537253941253834254538254137253836254539254132253931254536253932254144254536253934254245254535253939254138254546254243253831266465736372697074696f6e3d3126666f6e743d536f757263652b436f64652b50726f26666f726b733d31266973737565733d31266c6f676f3d68747470733a2f2f67697465652e636f6d2f43574c63776c303231392f57696c6c69616d2d506c617965722f7261772f6d61737465722f7372632f7374617469632f6170702d6c6f676f312e706e67266e616d653d31267061747465726e3d506c75732670756c6c733d31267374617267617a6572733d31267468656d653d4175746f"
          />
        </div>
      </div>
      <div class="question-main">
        <div class="question-main-title">常见问题</div>
        <van-collapse v-model="activeNames" accordion>
          <van-collapse-item
            :title="item.title"
            :name="index"
            v-for="(item, index) in collapseArr"
            :key="item.title"
          >
            <template #icon>
              <img :src="iconCollapse" />
            </template>
            {{ item.value }}
            <div
              style="color: rgb(49, 95, 253)"
              v-if="item.detailPath"
              @click="toDetail(item.detailPath)"
            >
              查看详情
            </div>
          </van-collapse-item>
        </van-collapse>
      </div>
    </div>
    <div class="question-bottom">
      <van-button :icon="githubIcon" @click="toFeedback">Github反馈</van-button>
      <van-button
        icon="https://appstoreimg-ipv6.vivo.com.cn/appstore/developer/icon/20211029/202110291634000wqez.webp"
        @click="toQQ"
        >QQ交流</van-button
      >
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import iconFeedback from '../../assets/images/icon-feedback.png'
import iconCollapse from '../../assets/images/icon-collapse.png'
import githubIcon from '../../assets/images/github12.png'
import { useRouter } from 'vue-router'

const router = useRouter()
const topArr = ref([{ icon: iconFeedback, text: '问题反馈' }])
const activeNames = ref('1')

const collapseArr = [
  {
    title: '刮削完成之后，没有生成海报墙',
    value:
      '为了避免出现扫库的风控，所以用户需要在添加完资源之后，手动选择电影、电视剧的文件夹。具体怎么存放点击下方查看详情按钮。 ',
    detailPath: 'pathDetail'
  },
  {
    title: '海报墙没有生成，那怎么观看视频？',
    value: ' 可以在（我的）页面的媒体库列表按照文件夹的风格去访问视频。',
    detailPath: 'howWatch'
  },
  {
    title: 'William Player刮削最新命名相关规范',
    value:
      'William Player的影视数据信息均来源于公开影视数据库网站TMDB，对于标准的命名规则，我们基本都是支持的。电视剧例如：苦尽柑来遇见你，双城之战 第二季，藏海花.2024.4K-2160p.WEB-DL.H265.AAC（这种格式，年份必须在第一个小数点后面），庆余年.第二季.2024.1080p.WEB-DL.H265.AAC-ColorWEB（如果第一个小数点后面是第几季，那么年份可以在第二个小数点后面）。电影例如：毒液3，唐伯虎点秋香.1993.1080p.BluRay.x265.10bit.DTS.2Audio-SONYHD，云边有个小卖部（2024） '
  },
  {
    title: '媒体库刮削完成之后，影视资源匹配不正确',
    value:
      '可以在网盘中重命名影片的名字，比如：苦尽柑来遇见你（2025），加上年份会更加准确，也可点击进入影视详情之后，点击右上角的三个点，手动编辑信息。 '
  },
  {
    title: '支持导入哪些影片资源？',
    value: '目前已支持导入WebDAV、Emby、天翼云盘、夸克网盘的资源。'
  },
  {
    title: '无法播放某些视频？',
    value: '由于安卓手机的设备解码能力有限，部分大文件视频无法播放。'
  },
  {
    title: '支持哪些播放格式？',
    value:
      'William Player目前已支持主流的视频、音频格式。视频：MP4、MKV、WebM、FLV、M3U8、MPEG-TS/MPEG-PS,音频：AAC、AC3/E-AC3，字幕：SRT、ASS。 '
  },
  {
    title: '是否支持缓存下载视频到设备本地？',
    value: '支持，在工具箱的下载管理中进行管理。'
  },
  {
    title: '是否支持不登录使用？',
    value:
      '支持游客进入使用，用户也可自行注册。游客用户和注册用户使用没有任何区别，增加用户功能，只是为了在我的页面UI更加的好看。 当然，使用PC端的话必须要注册账户才可进入。'
  }
]

const toDetail = (path) => {
  router.push({
    path: '/' + path
  })
}

const toGithub = () => {
  plus.runtime.openURL(
    'https://github.com/chenweiliang6/William-Player',
    (error) => {
      if (error) {
        uni.showToast({ title: '打开浏览器失败', icon: 'none' })
      }
    }
  )
}

const toFeedback = () => {
  plus.runtime.openURL(
    'https://github.com/chenweiliang6/William-Player/issues',
    (error) => {
      if (error) {
        uni.showToast({ title: '打开浏览器失败', icon: 'none' })
      }
    }
  )
}

const toQQ = () => {
  router.push({
    path: '/qqTalk'
  })
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
        width: 100%;
        img {
          width: 100%;
          height: 160px;
        }
      }
    }
    .question-main {
      border-radius: 12px;
      // background: #fff;
      margin-top: 12px;
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
    padding-top: 10px;
    background: #fff;
    width: 100%;
    display: flex;
    align-items: center;
    ::v-deep .van-button {
      width: 100%;
      border-radius: 12px;
      &:last-child {
        margin-left: 12px;
      }
    }
  }
}
</style>
