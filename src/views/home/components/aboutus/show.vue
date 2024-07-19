<template>
  <div class="show">
    <div class="show-left">
      <img src="../../../../assets/images/8.png">
      <span>连续三年被国务院国资委评为中央企业年度经营业绩考核A级</span>
    </div>
    <div class="show-right">
      <img src="../../../../assets/images/9.png">
      <span>连续两年成为“中国地区最受赞赏公司”的五家企业之一</span>
    </div>
  </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.show {
  width: 100%;
  height: 211px;
  padding: 0 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  .show-left {
    background: #ff5824;
    flex: 1;
    padding: 10px;
    display: flex;
    flex-direction: column;
    transform: perspective(500px) rotateY(-10deg); /* 沿Y轴旋转45度 */
    img {
      width: 100%;
      height: 85px;
    }
    span {
      color: #fff;
      font-size: 8px;
      text-align: center;
      padding-top: 3px;
    }
  }
  .show-right {
    margin-left: 5px;
    background: #da3400;
    flex: 1;
    padding: 10px;
    display: flex;
    flex-direction: column;
    transform: perspective(500px) rotateY(10deg); /* 沿Y轴旋转45度 */
    img {
      width: 100%;
      height: 85px;
    }
    span {
      color: #fff;
      font-size: 8px;
      text-align: center;
      padding-top: 3px;
    }
  }
}
</style>
