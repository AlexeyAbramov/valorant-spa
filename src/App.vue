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
  display: flex;

  color: #fff;

  position: relative;
  padding: 30px 0 0 10px;
  margin-bottom: 30px;
}
.content-title::after {
  display: block;
  position: absolute;
  bottom: -30px;
  content: '';
  height: 1px;
  width: 88%;

  background-color: #ff465457;
}
.main-content{
  width: 85vw;

  padding: 0 150px;
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
b{
  font-size: .9375rem;
  color: #fff;
}
h1 {
  align-self: center;

  font-size: 25px;

  color: #fff;
  cursor: pointer;
}
h2{
  margin: 0!important;
  font-size: 1.375rem!important;
}
main{
  display: flex!important;
  min-height: calc(100vh - 80px);

}
</style>
