<template>
  <div class="main-navigation">
    <ul>
      <router-link tag="li" to='/characters'><h2>CHARACTERS</h2></router-link>
      <router-link tag="li" to='/weapons'><h2>WEAPONS</h2></router-link>
      <router-link tag="li" to='/maps'><h2>MAPS</h2></router-link>
      <router-link tag="li" to='/tier-list'><h2>TIER LIST</h2></router-link>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  }
};
</script>

<style scoped>
li.router-link-active
{
  color: #ff4654;
}
li.router-link-active::after{
  border-top: 3px solid #ff4654;
  border-right: 3px solid #ff4654;
}
.main-navigation {
  width: 15vw;

  border-right: 1px solid #ff465457;
}
li {
  position: relative;
  color: #999ba4;
  padding: 10px 0 10px 18px;
  border-bottom: 1px solid #ff465457;

  transition: 0.3s ease all;
}
li::after {
  position: absolute;
  display: inline-block;
  content: '';
  width: 10px;
  height: 10px;
  top: 22px;
  right: 33px;

  transform: rotate(45deg);
  border-top: 3px solid #999ba4;
  border-right: 3px solid #999ba4;
}
li:hover {
  color: #ff4654;

  cursor: pointer;
}
li:hover::after,
.active::after {
  border-top: 3px solid #ff4654;
  border-right: 3px solid #ff4654;
}
.active {
  color: #ff4654;
}
</style>
