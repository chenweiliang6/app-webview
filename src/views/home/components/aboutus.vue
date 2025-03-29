<template>
  <div class="guanwang">
    <div class="guanwang-title">
      <span class="title">关于我们</span>
      <span class="name">中建民筑</span>
    </div>
    <div class="guanwang-tip">
      做好房改和利民安居工作
    </div>
    <div class="guanwang-introduce">
      中建民筑集团有限公司，简称“中建民筑”，正式组建于1980年，其前身为原国家建工总局，是为数不多的不占有大量的国家投资，不占有国家的自然资源和经营专利，以从事完全竞争性的建筑业和地产业为核心业务而发展壮大起来的国有重要骨干企业。
    </div>
  </div>
</template>

<script setup>


</script>

<style scoped lang="scss">
.guanwang {
  width: 100%;
  height: 211px;
  background: url('../../../assets/images/background1.jpg') center no-repeat;
  background-size: 100% 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  .guanwang-title {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 20px;

    .title {
      font-size: 18px;
      color: transparent;
      background-image: linear-gradient(to bottom, #fff2cc, #ffdd77);
      background-clip: text;
    }

    .name {
      font-size: 44px;
      color: transparent;
      background-image: linear-gradient(to bottom, #fff2cc, #ffdd77);
      background-clip: text;
      font-family: hwxk;
    }
  }

  .guanwang-tip {
    width: 65%;
    padding: 5px 0;
    border-top: 1px solid #f1d1b2;
    border-bottom: 1px solid #f1d1b2;
    letter-spacing: 10px;
    font-size: 9px;
    color: #f1d1b2;
    text-align: center;
  }
  .guanwang-introduce {
    text-align: center;
    font-size: 6px;
    color: #f1d1b2;
    width: 65%;
    padding-top: 5px;
  }
}
</style>
