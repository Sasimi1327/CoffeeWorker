<script>
export default {
};
</script>

<template>
  <div class="container d-flex flex-column justify-content-center align-items-center">
    <div class="msg">
    <h2 class="text-center">您的訂單已完成</h2>
    <p>請注意您的訂單查收，若有任何問題請來電告知，我們會儘快為您服務。</p>
    </div>
    <RouterLink to="/" class="finishButton">
      回首頁
    </RouterLink>
  </div>
</template>

<style lang='scss'>

.gif {
  width: 150px;
  margin-top: 80px;
}

.msg {
    margin: 80px 0;
}

.finishButton {
  margin-bottom: 80px;
  background-color: white;
  border: 3px solid #ffc044;
  border-radius: 50px;
  color: #ffc044;
  padding: 15px 32px;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  cursor: pointer;
  text-align: center;
  &:hover{
    color: white;
    background-color: #ffc044;
  }
}

.icn {
  width: 25px;
  overflow: auto;
}
</style>
