<template>
  <div id="app">
    <Header />
    <main>
    <Navigation />
      <router-view class="main-content"></router-view>
    </main>
  </div>
</template>

<script>
import Header from './components/Header';
import Navigation from './components/Navigation';

export default {
  date() {
    return {};
  },
  components: {
    Header,
    Navigation
  }
};
</script>

<style>
#app
{
  background-color: #120303;
}
.content-title {
  color: #fff;

  padding: 30px 0 0 10px;
}
.content-title::after {
  display: block;
  content: '';
  height: 1px;
  width: 88%;

  margin: 30px 0;
  background-color: #ff465457;
}
.main-content{
  width: 85vw;

  padding-left: 150px;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  
}
ul {
  list-style: none;
  margin: 0!important;
}
h1 {
  align-self: center;

  font-size: 25px;

  color: #fff;
}
h2{
  margin: 0!important;
  font-size: 25px!important;
}
main{
  display: flex!important;
  min-height: calc(100vh - 80px);

}
</style>
