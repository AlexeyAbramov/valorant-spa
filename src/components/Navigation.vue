<template>
  <div class="main-navigation">
    <ul class="navigation-list">
      <router-link tag="li" to='/characters' class="navigation-list__item"><h2>CHARACTERS</h2></router-link>
      <router-link tag="li" to='/weapons' class="navigation-list__item"><h2>WEAPONS</h2></router-link>
      <router-link tag="li" to='/maps' class="navigation-list__item"><h2>MAPS</h2></router-link>
      <router-link tag="li" to='/tier-list' class="navigation-list__item"><h2>TIER LIST</h2></router-link>
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
  min-width: 205px;

  border-right: 1px solid #ff465457;
}
.navigation-list__item {
  position: relative;
  color: #999ba4;
  padding: 10px 0 10px 18px;
  border-bottom: 1px solid #ff465457;

  transition: 0.3s ease all;
}
.navigation-list__item::after {
  position: absolute;
  display: inline-block;
  content: '';
  width: 10px;
  height: 10px;
  top: 20px;
  right: 33px;

  transform: rotate(45deg);
  border-top: 3px solid #999ba4;
  border-right: 3px solid #999ba4;
}
.navigation-list__item:hover {
  color: #ff4654;

  cursor: pointer;
}
.navigation-list__item:hover::after,
.active::after {
  border-top: 3px solid #ff4654;
  border-right: 3px solid #ff4654;
}
.active {
  color: #ff4654;
}
</style>
