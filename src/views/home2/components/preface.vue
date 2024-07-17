<template>
  <div class="preface">
    <div class="preface-title">
      <span class="title">前言</span>
      <span class="name">PREFACE</span>
    </div>
    <div class="preface-introduce">
      中建民筑集团有限公司，简称“中建民筑”，正式组建于1980年，其前身为原国家建工总局，是为数不多的不占有大量的国家投资，不占有国家的自然资源和经营专利，以从事完全竞争性的建筑业和地产业为核心业务而发展壮大起来的国有重要骨干企业。中建民筑集团有限公司是中国专业化经营历史久、市场化经营早、一体化程度高的建筑房地产企业集团之一，拥有从产品技术研发、勘察设计、工程承包、地产开发、设备制造、物业管理等完整的建筑产品产业链条。
    </div>
  </div>
</template>

<script setup>


</script>

<style scoped lang="scss">
.preface {
  width: 100%;
  height: 211px;
  background: url('../../../assets/images/background2.png') center no-repeat;
  background-size: 100% 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  .preface-title {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 20px;

    .title {
      font-size: 44px;
      color: transparent;
      background-image: linear-gradient(to bottom, #fff2cc, #ffdd77);
      background-clip: text;
      font-family: hwxk;
    }

    .name {
      font-size: 13px;
      color: transparent;
      background-image: linear-gradient(to bottom, #fff2cc, #ffdd77);
      background-clip: text;
      letter-spacing: 20px;
    }
  }

  .preface-introduce {
    font-size: 6px;
    color: #f1d1b2;
    width: 100%;
    padding: 0 40px;
    padding-top: 5px;
  }
}
</style>
