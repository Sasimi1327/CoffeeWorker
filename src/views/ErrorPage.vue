<script>
export default {
  data() {
    return {
      count: 6,
    };
  },
  methods: {
    countDown() {
      this.count -= 1;
      if (this.count === 0) {
        this.$router.push({ path: '/' });
      }
      setTimeout(() => {
        this.countDown();
      }, 1000);
    },
  },
  mounted() {
    this.countDown();
  },
};
</script>

<template>
  <div id="main">
    <div class="fof">
      <h1>Error 404</h1>
      <h3>{{ count }} 秒後回登入頁</h3>
    </div>
  </div>
</template>

<style modules>
  *{
    transition: all 0.6s;
}

html {
    height: 100%;
}

body{
    font-family: 'Lato', sans-serif;
    color: #888;
    margin: 0;
}

#main{
    display: table;
    width: 100%;
    height: 100vh;
    text-align: center;
}

.fof{
  display: table-cell;
  vertical-align: middle;
}

.fof h1{
  font-size: 50px;
  display: inline-block;
  padding-right: 12px;
  animation: type .5s alternate infinite;
}

@keyframes type{
  from{box-shadow: inset -3px 0px 0px #888;}
  to{box-shadow: inset -3px 0px 0px transparent;}
}
</style>
