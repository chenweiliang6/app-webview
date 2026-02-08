<template>
  <div class="william-download">
    <div class="william-download-logo">
      <img src="@/assets/images/williamPlayerName.png" draggable="false" />
    </div>
    <transition name="list-change">
      <div class="william-download-list" v-if="!openDetail">
        <div
          class="list-item"
          v-for="item in list"
          :key="item.name"
          @click="handleClick(item)"
        >
          <img :src="item.icon" class="list-item-icon" draggable="false" />
          <span>{{ item.name }}</span>
          <img :src="item.cardBg" class="list-item-bg" draggable="false" />
        </div>
      </div>
    </transition>
    <transition name="content-change">
      <div class="william-download-content" v-if="openDetail">
        <img
          class="william-download-content__close"
          src="@/assets/images/close-icon.png"
          @click="openDetail = false"
          draggable="false"
        />
        <div class="william-download-content__container">
          <div class="container-left">
            <div class="container-left-title animate__fadeInRight">
              {{ selectItem.title || selectItem.name }}
            </div>
            <div
              class="container-left-desc animate__fadeInRight"
              style="animation-delay: 0.4s"
            >
              {{ selectItem.desc }}
            </div>
            <div
              class="container-left-platform animate__fadeInRight"
              v-if="selectItem.platformList?.length > 1"
              style="animation-delay: 0.8s"
            >
              <div
                :class="['platform-item', item.active ? 'platform-active' : '']"
                v-for="item in selectItem.platformList"
                :key="item.name"
                @click="selectPlatform(item)"
              >
                {{ item.name }}
              </div>
            </div>
          </div>
          <div class="container-right">
            <div
              class="container-right-block animate__fadeInUp"
              style="animation-delay: 0.2s"
              v-if="
                selectItem.platformList?.find((i) => i.active).showType ===
                'button'
              "
            >
              <div
                class="block-item"
                v-for="(item, index) in blockList"
                :key="index"
                @click="handleDownload(item)"
              >
                <img :src="item.icon" draggable="false" />
                <span>{{ item.name }}</span>
              </div>
            </div>
            <div
              class="container-right-qrcode"
              v-if="
                selectItem.platformList?.find((i) => i.active).showType ===
                'qrCode'
              "
            >
              <div
                class="qrcode-item"
                v-for="(item, index) in blockList"
                :key="index"
              >
                <img
                  :src="
                    selectItem.platformList?.find((i) => i.active)?.list[0]
                      ?.qrCode
                  "
                  class="animate__zoomIn"
                  draggable="false"
                />
                <div
                  class="qrcode-item-title animate__fadeInUp"
                  style="animation-delay: 0.4s"
                  v-if="item.title"
                >
                  {{ item.title }}
                </div>
                <div
                  class="qrcode-item-subtitle animate__fadeInUp"
                  style="animation-delay: 0.4s"
                  v-if="item.subtitle"
                >
                  {{ item.subtitle }}
                </div>
              </div>
            </div>
          </div>
        </div>
        <img
          class="william-download-content__bg animate_fadeZoomInUp"
          style="animation-delay: 1.2s"
          :src="selectItem.background"
          draggable="false"
        />
      </div>
    </transition>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import appLogo1 from '@/assets/images/app-logo1.png'
import githubLogo from '@/assets/images/githubLogo.jpg'
import zanshangIcon from '@/assets/images/zanshang-icon.png'
import androidDownload from '@/assets/images/android-download.png'
import windowsIcon from '@/assets/images/windows-icon.png'
import androidTv from '@/assets/images/android-tv.png'
import githubIcon from '@/assets/images/github-icon.png'
import qqGroup from '@/assets/images/qq-group.jpg'
import zanShang from '@/assets/images/zan-shang.jpg'

const openDetail = ref(false)
const selectItem = ref({})
const blockList = ref([])
const list = [
  {
    name: '下载William Player',
    title: 'William Player',
    desc: '基于Alist、Openlist、天翼云盘、夸克网盘开发的视频播放器，支持刮削影视元信息，支持IPTV播放，优雅打造私人影视库',
    icon: appLogo1,
    background: 'https://appdownload.quectel.com/img/wave1-big.d3fc38a8.png',
    cardBg: 'https://appdownload.quectel.com/img/wave1.eb509cc6.png',
    platformList: [
      {
        name: 'PC端下载',
        showType: 'button',
        active: true,
        list: [
          {
            name: '下载Windows端',
            downloadUrl:
              'https://gitee.com/CWLcwl0219/William-Player/releases/download/latest/app-pc.exe',
            icon: windowsIcon
          }
        ]
      },
      {
        name: '移动端下载',
        showType: 'qrCode',
        active: false,
        list: [
          {
            title: '扫描二维码下载移动端',
            subtitle: '支持安卓系统',
            qrCode: androidDownload
          }
        ]
      },
      {
        name: 'TV端下载',
        showType: 'button',
        active: false,
        list: [
          {
            name: '下载TV端',
            downloadUrl:
              'https://gitee.com/CWLcwl0219/William-Player/releases/download/latest/app-tv.apk',
            icon: androidTv
          }
        ]
      }
    ]
  },
  {
    name: '意见反馈',
    desc: '前往GitHub提交Issue，帮助开发者改进William Player',
    icon: githubLogo,
    background: 'https://appdownload.quectel.com/img/wave2-big.cafd759d.png',
    cardBg: 'https://appdownload.quectel.com/img/wave2.8d090632.png',
    platformList: [
      {
        name: '意见反馈',
        showType: 'button',
        active: true,
        list: [
          {
            name: '去反馈',
            downloadUrl:
              'https://github.com/chenweiliang6/William-Player/issues',
            icon: githubIcon
          }
        ]
      }
    ]
  },
  {
    name: 'QQ交流',
    desc: '加入William Player用户交流群，与更多用户交流使用心得',
    icon: 'https://appstoreimg-ipv6.vivo.com.cn/appstore/developer/icon/20211029/202110291634000wqez.webp',
    background: 'https://appdownload.quectel.com/img/wave3-big.65366397.png',
    cardBg: 'https://appdownload.quectel.com/img/wave3.f9d1e640.png',
    platformList: [
      {
        name: 'QQ交流',
        showType: 'qrCode',
        active: true,
        list: [
          {
            title: '扫描二维码加入QQ群',
            subtitle: '进群分享心得',
            qrCode: qqGroup
          }
        ]
      }
    ]
  },
  {
    name: '微信赞赏',
    desc: '如果您觉得William Player对您有帮助，欢迎赞赏支持开发者继续优化应用',
    icon: zanshangIcon,
    background: 'https://appdownload.quectel.com/img/wave4-big.2c52d36c.png',
    cardBg: 'https://appdownload.quectel.com/img/wave4.cd17a913.png',
    platformList: [
      {
        name: '微信赞赏',
        showType: 'qrCode',
        active: true,
        list: [
          {
            title: '扫描二维码赞赏开发者',
            subtitle: '支持播放器持续优化',
            qrCode: zanShang
          }
        ]
      }
    ]
  }
]

const handleClick = (item) => {
  selectItem.value = item
  blockList.value =
    selectItem.value.platformList?.find((i) => i.active)?.list || []
  openDetail.value = true
}

const selectPlatform = (item) => {
  blockList.value = item.list
  selectItem.value.platformList.forEach((platform) => {
    platform.active = false
  })
  item.active = true
}

const handleDownload = (item) => {
  window.open(item.downloadUrl, '_blank', 'noopener')
}
</script>
<style lang="scss" scoped>
// prettier-ignore
.william-download {
  width: 100%;
  height: 100%;
  background: url('https://appdownload.quectel.com/img/bg.5b46d961.png');
  background-size: cover;
  background-position: 50%;
  position: relative;
  .william-download-logo {
    width: 100%;
    padding: 50PX 80PX;
    img {
      display: block;
      width: 270PX;
    }
  }
  .william-download-list {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 1200PX;
    height: 400PX;
    display: flex;
    align-items: center;
    background: hsla(0, 0%, 100%, 0.5);
    border-radius: 16PX;
    -webkit-backdrop-filter: blur(10PX);
    backdrop-filter: blur(10PX);
    .list-item {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      width: 300PX;
      height: 400PX;
      cursor: pointer;
      transition: all 0.3s;
      position: relative;
      .list-item-icon {
        display: block;
        width: 78PX;
        height: 78PX;
        border-radius: 16PX;
        margin-bottom: 32PX;
        position: relative;
        z-index: 2;
      }
      span {
        font-size: 22PX;
        font-weight: bold;
        position: relative;
        z-index: 2;
      }
      .list-item-bg {
        position: absolute;
        width: 100%;
        left: 0;
        bottom: 0;
        display: block;
        opacity: 0;
        z-index: 1;
        transition: opacity 0.3s;
      }
      &::after {
        content: '';
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        right: -1PX;
        width: 1PX;
        height: 182PX;
        background: rgba(0, 0, 0, 0.1);
      }
      &:last-child::after {
        display: none;
      }
      &:hover {
        height: 440PX;
        background: #fff;
        box-shadow: 0 22PX 30PX 0 rgba(0, 0, 0, 0.06);
        padding-bottom: 20PX;
        border-radius: 16PX;
        .list-item-bg {
          opacity: 1;
        }
        &::after {
          display: none;
        }
      }
    }
  }

  .william-download-content {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 1000PX;
    border-radius: 16PX;
    height: 600PX;
    overflow: hidden;
    background: linear-gradient(270deg, #fff, hsla(0, 0%, 100%, 0.8) 49%, #fff);
    border-radius: 16PX;
    box-shadow: 0 0 30PX 0 rgba(0, 0, 0, 0.06);
    display: flex;
    justify-content: center;
    align-items: center;
    .william-download-content__close {
      position: absolute;
      top: 24PX;
      right: 24PX;
      width: 24PX;
      height: 24PX;
      display: block;
      cursor: pointer;
      z-index: 2;
    }
    .william-download-content__container {
      display: flex;
      //   align-items: center;
      height: 330PX;
      padding: 0 120PX;
      position: relative;
      width: 100%;
      z-index: 2;
      .container-left {
        flex: 0 0 500PX;
        .container-left-title {
          margin-bottom: 28PX;
          font-weight: bold;
          color: #17181b;
          font-size: 40PX;
        }
        .container-left-desc {
          color: #7b7d7f;
          font-size: 18PX;
        }
        .container-left-platform {
          margin-top: 40PX;
          display: flex;
          align-items: center;
          .platform-item {
            background: #e4edfd;
            border-radius: 22PX;
            color: #1e6efa;
            padding: 10PX 20PX;
            cursor: pointer;
            margin-right: 16PX;
            transition: all 0.3s;
            &:last-child {
              margin-right: 0;
            }
            &:hover {
              background: #1e6efa;
              color: #fff;
            }
          }
          .platform-active {
            background: #1e6efa;
            color: #fff;
          }
        }
      }
      .container-right {
        flex: 1;
        overflow: hidden;
        display: flex;
        align-items: center;
        justify-content: center;
        .container-right-block {
          .block-item {
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 0 20PX;
            height: 92PX;
            background: #1e6efa;
            border-radius: 8PX;
            color: #fff;
            cursor: pointer;
            transition: transform 0.3s;
            min-width: 220PX;
            img {
              width: 28PX;
              height: 28PX;
              display: block;
            }
            span {
              font-size: 20PX;
              padding-left: 4PX;
            }
            &:hover {
              transform: scale(1.05);
            }
          }
        }
        .container-right-qrcode {
          .qrcode-item {
            display: flex;
            flex-direction: column;
            align-items: center;
            img {
              width: 188PX;
              height: 188PX;
            }
            .qrcode-item-title {
              font-size: 16PX;
              margin-top: 48PX;
            }
            .qrcode-item-subtitle {
              margin-top: 4PX;
              font-size: 14PX;
              color: #969696;
            }
          }
        }
      }
    }
    .william-download-content__bg {
      position: absolute;
      bottom: -40PX;
      display: block;
      width: 100%;
      z-index: 1;
    }
  }
  /* 进入动画 */
  .list-change-enter-from {
    width: 1000PX;
    height: 600PX;
    background: linear-gradient(270deg, #fff, hsla(0, 0%, 100%, 0.8) 49%, #fff);
    box-shadow: 0 0 30PX 0 rgba(0, 0, 0, 0.06);
  }
  .list-change-enter-active {
    transition: all 0.2s ease-in;
  }
  .content-change-enter-from,
  .content-change-leave-to {
    width: 600PX;
    height: 400PX;
    opacity: 0.3;
  }
  .content-change-enter-active,
  .content-change-leave-active {
    transition: all 0.2s ease-in;
  }
  .content-change-leave-to {
    width: 1200PX;
    height: 400PX;
    opacity: 0;
  }
}

@keyframes fadeInRight {
  0% {
    opacity: 0;
    transform: translate3d(15%, 0, 0);
  }
  100% {
    opacity: 1;
    transform: translateZ(0);
  }
}
@keyframes fadeInUp {
  0% {
    opacity: 0;
    transform: translate3d(0, 100%, 0);
  }
  100% {
    opacity: 1;
    transform: translateZ(0);
  }
}
@keyframes fadeZoomInUp {
  0% {
    opacity: 0;
    transform: scale3d(0.8, 0.8, 0.8) translate3d(0, 5%, 0);
  }
  100% {
    opacity: 1;
    transform: scaleX(1) translateZ(0);
  }
}

@keyframes zoomIn {
  0% {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }
  100% {
    opacity: 1;
  }
}

.animate__fadeInRight {
  animation-duration: 0.4s;
  animation-fill-mode: both;
  animation-name: fadeInRight;
}
.animate__fadeInUp {
  animation-duration: 0.4s;
  animation-fill-mode: both;
  animation-name: fadeInUp;
}
.animate_fadeZoomInUp {
  animation-duration: 0.4s;
  animation-fill-mode: both;
  animation: fadeZoomInUp 0.5s ease 1.2s both;
}
.animate__zoomIn {
  animation-duration: 0.5s;
  animation-fill-mode: both;
  animation-name: zoomIn;
}
</style>
