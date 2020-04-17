<template>
  <div class="main-content">
    <div class="content-title">
      <img :src="photoSrc(hero.photo)" alt="hero-logo" class="content-title__logo">
      <h3 class="content-title__heading"> Valorant {{ hero.name }}</h3>
      <router-link tag="i" to="/characters" class="fas fa-retweet content-title__back-button"></router-link>
    </div>
    <div class="abilities">
      <ul class="abilities-list">
        <li
          v-for="(ability, index) in hero.abilities"
          :key="ability.name"
          class="ability"
        >
          <div class="ability-content">
            <img :src="abilitiesSrc(ability.logo)" alt="ability-logo" class="ability-content__logo">
              <div class="ability-about">
                  <h3 class="ability-content__name">{{ ability.name }}</h3>
                  <p class="ability-content__cost">
                   <img v-if="ability.cost > 10" :src="getCurrency(index)" alt="ability-currency" class="ability-content__currency">
                  {{ ability.cost }} 
                  {{ability.charges}}
                </p>
              </div>
                <div class="ability-content__keyBinding">{{ability.keyBinding}}</div>
          </div>
          <div class="ability-number">
              {{ability.cnt}}
          </div>
          <div class="description">
            <p v-for="(spell, index) in ability.description" :key="index"  >
              <b class="description__rules">{{spell.rules}}</b>                  
                   {{spell.text}}   
            </p>
                                
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props: ['hero'],
  data() {
    return {
     
    };
  },
  methods: {
    photoSrc(url){
      return require('../../img/Characters/'+url.replace(/300/,'-logo'))
    },
    abilitiesSrc(url){
      return require('../../img/Abilities/'+ url)
    },
    getCurrency(i){
        if (this.hero.abilities[i].cost > 50){
          return require('../../img/Abilities/credits.svg');
        }

    },
  },
  created(){
          this.hero.abilities[0].cnt = 'ABILITY 1';
          this.hero.abilities[1].cnt = 'ABILITY 2';
          this.hero.abilities[2].cnt = 'SIGNATURE';
          this.hero.abilities[3].cnt = 'ULTIMATE';
      }
  
};
</script>

<style scoped>
.content-title__logo{
  border-radius: 5px;
  margin-right: 10px;
}
.content-title__heading{
  align-self: center;

  margin: 0px 20px 0 0;
}
.content-title__back-button{
  margin-top: 4px;
  font-size: 30px;
  /* color:#ff4654; */

  align-self: center;
}
.content-title__back-button:hover{
  cursor: pointer;
}
.abilities-list {
  display: flex;
  justify-content: space-between;

  width: 85%;
}
.ability {
  width: calc(25% - 20px);

  background-color: #141313;
  border-radius: 5px;
  border: 2px solid #ff4654;

  min-width: 238px;
  margin-top: 30px;
}
.ability-content,
.description{
  padding: 10px;
}
.ability-content{
  display: flex;

  align-items: center;
}
.ability-content__logo{
  height: 45px;
  margin-right: 15px;
}
.ability-content__name {
  font-size: 16px;
  margin-bottom: 0;

  color: #fff;
}
.ability-content__cost{
  margin-bottom: 0;

  color:#999ba4;
}
.ability-content__currency{
  width: 14px;
  margin-bottom: 4px;
}
.ability-content__keyBinding{
    font-size: 14px;
    font-weight: bold;

    line-height: 30px;
    min-width: 30px;
    width: 30px;
    height: 30px;
    margin-left: auto;

    text-align: center;
    background-color: #363232;
    color: #999ba4;
    border-radius: 5px;
}
.ability-number {
  width: 100%;
  background-color: #ff4654;
  height: 30px;
  margin: 10px 0;
  

  text-align: center;
  font-weight: bold;
}
.description{

  display:flex;
  flex-direction: column;
}
.description p{
  color:#999ba4;
}
.description__item{
    display: flex;
    width: 100%;
}
b{
    font-size: 15px;
    color: #fff;
}
</style>
