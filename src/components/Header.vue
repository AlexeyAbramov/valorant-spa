<template>
  <header class="header-title">
    <router-link
      tag="img"
      class="logo"
      to="/"
      :src="logoSrc()"
      alt="logo"
      width="80"
    ></router-link>
    <router-link to="/" tag="h1">VALORANT WIKI</router-link>
    <div class="md-form ml-3 header-search-form col-3">
      <input
        class="form-control search-form__input"
        type="text"
        placeholder="Search for a player..."
        disabled="disabled"
      />
      <i class="fas fa-search header-search-form__icon"></i>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    logoSrc() {
      return require('.././img/Regular/logo.png');
    }
  }
};
</script>

<style scoped>
.logo,
h1 {
  cursor: pointer;
}
.header-title {
  display: flex;
  height: 80px;

  border-bottom: 1px solid #ff465457;
}
.header-search-form {
  position: relative;
  align-self: center;
}
.header-search-form {
  outline: 0;
  border: 0;
}
.header-search-form__icon {
  position: absolute;
  top: 12px;
  right: 25px;

  color: #ffffffc4;
}
.search-form__input {
  background: #2b2525 !important;
  outline: none !important;
  border: none !important;
  color: #fff !important;
}
.search-form__input::placeholder {
  color: rgb(94, 91, 91) !important;
}
</style>
