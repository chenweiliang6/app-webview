<template>
  <div class="background">
    <div class="background-title">
      发展背景
    </div>
    <div class="background-introduce">
      <div class="background-introduce__left">
        <img src="../../../assets/images/star.png">
        <div>
          纵观我国的房地产发展史.每次都是适应人民群众需求的出台的相关政策措施。以人民群众为根本，以提升人民群众幸福感为发展路线，从而实现“居者有其屋”
        </div>
      </div>
      <div class="background-introduce__right">
        <div class="background-introduce__right-title"><span>改革的关口</span></div>
        <div class="background-introduce__right-content">
          <div class="background-introduce__right-content-img">
            <img src="../../../assets/images/arrow-right.png">
            <div class="line"></div>
          </div>
          <div class="background-introduce__right-content-text">
            <div class="line"></div>
            <div class="text">房地产发展是国家体恤民情的表现.是社会发展改革的必经之路.房地产改革的必然性早已注定.国家从计划经济转型到市场经济.促使了房地产行业的蓬勃发展.不止带动了地方经济.同时也让民众的经济收入有所提升。
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>


</script>

<style scoped lang="scss">
.background {
  width: 100%;
  height: 211px;
  background: url('../../../assets/images/background3.png') center no-repeat;
  background-size: 100% 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  .background-title {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 12px;
    color: #ffecd7;
    font-size: 11px;
  }

  .background-introduce {
    width: 100%;
    padding: 0 20px;
    padding-top: 5px;
    display: flex;
    margin-top: 35px;
    &__left {
      flex: 1;
      display: flex;
      img {
        width: 12px;
        height: 12px;
      }
      div {
        color: #595959;
        font-size: 9px;
      }
    }
    &__right {
      flex: 1;
      margin-left: 10px;
      &-title {
        width: 93px;
        height: 19px;
        background: url('../../../assets/images/red-title.png') center no-repeat;
        background-size: 100% 100%;
        padding-left: 15px;
        span {
          color: transparent;
          background-image: linear-gradient(to bottom, #ffecd7, #fecd97);
          background-clip: text;
          font-size: 13px;
        }
      }
      &-content {
        margin-top: 10px;
        background: linear-gradient(to bottom, #c90909, #ee2d3d);
        width: 100%;
        height: 100px;
        padding: 8px;
        &-img {
          display: flex;
          align-items: center;
          img {
            width: 15px;
            height: 13px;
          }
          .line {
            flex: 1;
            background: linear-gradient(to right, #ffe1c1, #d2251d);
            height: 0.5px;
            margin-left: 3px;
          }
        }
        &-text {
          display: flex;
          // align-items: center;
          height: 70px;
          margin-top: 3px;
          .line {
            height: 100%;
            background: linear-gradient(to bottom, #ffe1c1, #d2251d);
            width: 3px;
            margin-left: 3px;
          }
          .text {
            font-size: 8px;
            color: #fff;
            padding-left: 10px;
          }
        }
      }
    }
  }
}
</style>
