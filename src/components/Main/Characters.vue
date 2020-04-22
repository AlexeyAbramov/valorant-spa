<template>
  <div class="characters">
    <div class="content-title">
      <h3 class="characters__heading"> Valorant Characters</h3>
      </div>
    <ul class="characters-list">
      <router-link tag="li" :to="{name:'hero',params:{heroName:character.name.toLowerCase(),hero:character}}" v-for="character in characters" 
                                                                                                              :key="character.name"
                                                                                                              class="characters-list__item">
        <img :src="getSrc(character.photo)" alt="character-logo" />
        <p>{{ character.name }}</p>
      </router-link>
    </ul>
  </div>
</template>

<script>


export default {
  data() {
    return {
    
    };
  },
  methods: {
    getSrc(url) {
      return require('../../img/Characters/' + url);
    }
  },
  computed:{
      characters(){
       return this.$store.getters['characters/characters']
      }
  }

};
</script>

<style scoped>

p {
  position: absolute;
  z-index: 0;
  bottom: 0;
  width: 100%;

  font-weight: bold;
  text-align: center;

  color: #999ba4;
  background-color: transparent;
}
p::before {
  position: absolute;
  content: '';
  width: 100%;
  height: 240px;
  z-index: -1;
  left: 0;
  bottom: -16px;
  background: linear-gradient(0deg, #000, transparent);
}
p:hover {
  color: #000;
}
p:hover::after {
  position: absolute;
  content: '';
  width: 100%;
  height: 300px;
  z-index: -1;
  left: 0;
  bottom: -16px;
  background: rgb(249, 247, 251);
    background: linear-gradient( 0deg, rgba(235, 75, 182, 0.6418942577030813) 0%, rgba(172, 100, 244, 0.4150035014005602) 31%, rgba(62, 11, 39, 0.3085609243697479) 83%, rgba(0, 0, 0, 0.10968137254901966) 100% );
}
.characters-list {
  display: flex;
  flex-wrap: wrap;

  padding-top: 20px;
}
.characters-list__item {
  position: relative;
  overflow: hidden;

  width: 17%;
  height: 300px;
  min-width: 200px;
  margin: 15px auto;

  border-radius: 5px;
  border: 1px solid #ff465457;
}
li::before {
  position: absolute;
  width: 100%;
  height: 100%;
  content: '';
  background: rgb(249, 247, 251);
  background: linear-gradient(
    214deg,
    rgba(249, 247, 251, 0) 0%,
    rgba(255, 70, 84, 1) 50%,
    rgba(19, 19, 19, 0) 100%
  );
}
li:hover {
  cursor: pointer;
}
img {
  position: absolute;
  z-index: 0;
  width: 100%;

  background-color: transparent;
}
</style>
