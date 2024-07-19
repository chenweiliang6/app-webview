<template>
  <div class="advantage">
    <div class="advantage-title">
      <span>中建民筑的初衷和主要优势</span>
      <span>中建民筑作为建筑行业的领军企业，推进国家利民工程建设、营造人民幸福之家，努力实现与当地社区共同积极参与和支持社区建设，发展。积极参国家公益事业，认真开展社会帮扶，用爱回报社会。中建民筑凭借在房产建筑行业的初心和优势，在市场上赢得了广泛的认可和信赖。</span>
    </div>
    <div class="advantage-bottom">
      <div class="advantage-bottom-left">
        中建民筑严格遵循国家有关法律法规和行业规范，并且每年为社会创造约60万个工作岗位，约80万个家庭250万人在中建民筑的带动下奔向小康。中建积极参加国家扶贫救困活动，向贫困地区人民、受灾群众捐款捐物，为建设和谐社会作出贡献。
      </div>
      <div class="advantage-bottom-right">
        <div class="advantage-bottom-right__top">
          <span>以传统住宅开发为基础，以科技进步和科技创新作为企业持续发展的重要支撑，从原材料采购、施工过程到竣工验收，每个环节都严格把控，确保建筑质量和安全。同时，中建民筑积极采用先进的技术和材料，节能环保，打造绿色建筑，为人们的居住环境做出贡献。</span>
          <span>CHENG DU</span>
        </div>
        <div class="advantage-bottom-right__bottom">
          <span>人才兴则企业兴，坚持党管人才，深化改革创新，激发人才活力，整合多方学习资源，将线下与线上培训相结合，满足多元化学习需求，走人才强企之路，聚天下英才而用之，建设一流的企业人才，为企业高质量发展提供源源不断地人才保障与智力支持。</span>
          <span>CHONG QING</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.advantage {
  background: #fafbff;
  width: 100%;
  padding: 30px 40px 30px 40px;
  &-title {
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center;
    span:first-child {
      color: #15335f;
      font-weight: 600;
      font-size: 12px;
    }
    span:last-child {
      font-size: 5px;
      color: #15335f;
    }
  }
  &-bottom {
    display: flex;
    align-items: center;
    &-left {
      background: url('../../../../assets/images/guangzhou.png') center
        no-repeat;
      background-size: cover;
      flex: 0 0 55%;
      height: 180px;
      border-radius: 2px;
      padding: 15px 5px;
      color: #fff;
      font-weight: 600;
      font-size: 6px;
    }
    &-right {
      flex: 1;
      display: flex;
      flex-direction: column;
      &__top {
        background: url('../../../../assets/images/chengdu.png') center
          no-repeat;
        background-size: cover;
        height: calc(175px / 2);
        padding: 40px 10px 0 10px;
        display: flex;
        flex-direction: column;
        margin-bottom: 5px;
        border-radius: 2px;
        span:first-child {
          font-size: 4px;
          color: #fff;
          font-weight: 600;
        }
        span:last-child {
          font-size: 6px;
          color: #fff;
          font-weight: 600;
        }
      }
      &__bottom {
        background: url('../../../../assets/images/chongqing.png') center
          no-repeat;
        background-size: cover;
        height: calc(175px / 2);
        padding: 40px 10px 0 10px;
        border-radius: 2px;
        display: flex;
        flex-direction: column;
        span:first-child {
          font-size: 4px;
          color: #fff;
          font-weight: 600;
        }
        span:last-child {
          font-size: 6px;
          color: #fff;
          font-weight: 600;
        }
      }
    }
  }
}
</style>
