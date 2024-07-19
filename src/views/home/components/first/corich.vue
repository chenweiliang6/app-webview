<template>
  <div class="corich">
    <div class="corich-title">
      <span>中建民筑</span>
      <span>是如何带领老百姓走向共同富裕之路</span>
    </div>
    <div class="corich-text">
      在党和国家的指示下。中建民筑将准确落实习总书记下达的房改规划目标。第一期已经实现22万户、约1亿人享受房改专项惠民政策。预期第二期目标实现50万户，让百万参与房改用户参与进来并且帮助30万户住房困难家庭实现居者有其屋。目前各项工作均在有条不紊的进行当中。各个省市县也会根据实际情况落实相对应的家庭实现阶级跨越，财富自由。在2035年前若能率先完成任务，距离2049年第二个百年
      计划也会如期完成，为全民富裕政策打下坚实基础!
    </div>
    <div class="corich-list">
      <div class="corich-list-item" v-for="item in list" :key="item.title">
        <img :src="item.img">
        <span>{{ item.title }}</span>
      </div>
    </div>
    <div class="corich-bottom">
      该场景反映了中国建筑厉改过程中面临的环境挑战、生态保护、乡村振兴和城市发展的多重任务。通过推广绿色建筑、生态社区、美丽乡村和现代化智能住宅，中国建筑在推动
      房改的同时，致力于实现可持续发展和提升居民生活质量。
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import img1 from '../../../../assets/images/aedf595c6457c193f33b1362195838b4.png'
import img2 from '../../../../assets/images/0e3d21cf4c992689c6bc004a846a8d1a.png'
import img3 from '../../../../assets/images/65648a25cf7e420c49a0cedc6aae8959.png'
import img4 from '../../../../assets/images/e19f37eb13ee5d6bbd55ac6761592f22.png'

const list = ref([
  { img: img1, title: '工业厂房与环境污染' },
  { img: img2, title: '自然环境与生态保护' },
  { img: img3, title: '乡村道路与美丽乡村' },
  { img: img4, title: '现代住宅与城市发展' },
])

</script>

<style lang="scss" scoped>
.corich {
  background: #fafbff;
  width: 100%;
  padding: 30px 40px 0 40px;
  &-title {
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center;
    span:first-child {
      color: #15335f;
      font-size: 8px;
      font-weight: 600;
    }
    span:last-child {
      font-size: 12px;
      color: #15335f;
    }
  }
  &-text {
    padding-top: 5px;
    color: #224a8f;
    font-size: 5px;
    text-align: center;
  }
  &-list {
    display: flex;
    align-items: center;
    margin-top: 10px;
    &-item {
      flex: 1;
      margin-left: 7px;
      display: flex;
      flex-direction: column;
      img {
        width: 100%;
        height: 80px;
        border-radius: 5px;
        object-fit: cover;
      }
      span {
        color: #15335f;
        font-size: 5px;
        font-weight: 600;
        padding-top: 3px;
      }
      &:first-child {
        margin-left: 0;
      }
    }
  }
  &-bottom {
    margin-top: 5px;
    font-size: 4px;
    color: #5e6168;
  }
}
</style>
