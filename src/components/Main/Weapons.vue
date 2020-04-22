<template>
<div class="weapons">
     <div class="content-title">
      <h3 class="content-title__heading"> Valorant Weapons</h3>
    </div>
    <div class="weapons-table">
<table class="table">
  <thead>
    <tr>
      <th scope="col" v-for="(title, index) in table.heading" :key="title[index]">{{title}}</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="weapon in table.weapons" :key="weapon.name">
      <th scope="row">
          <div class="tier__name">{{weapon.tier.name}}</div>
          </th>
    <div class="weapon-name">
        <img :src="getWeaponsrc(weapon.logo)" alt="weapon-logo" class="weapon-name__logo">
        {{weapon.name}}
    </div>
    <td>
        {{weapon.type}}
    </td>
      <td>
        {{weapon.cost}}
    </td>
       <td>
        {{weapon.fire_mode}}
    </td>
       <td>
        {{weapon.head}}
    </td>
       <td>
        {{weapon.body}}
    </td>
       <td>
        {{weapon.leg}}
    </td>
    </tr>
  </tbody>
</table>
    </div>
</div>
</template>

<script>
export default {
    data(){
        return{}
    },
    methods:{
          getWeaponsrc(url){
      return require('../../img/Weapons/'+ url)
    },
    },
    computed: {
      table(){
       return this.$store.getters['weapons/weapons']
      }
    },
}
</script>

<style scoped>
    .weapons-table{
        padding-top: 30px;
    }
    table{
        overflow-x: hidden;
        white-space: nowrap;

        text-align: center;
        font-weight: 500;
        color: #fff;

        border-left: 1px solid #d53c44;
        border-right: 1px solid #d53c44;
    }
    thead th{
        color: #999ba3;
        
        cursor: pointer;
    }
    tbody tr{
        height: 40px;

        border-top: 1px solid #d53c44;
        border-bottom: 1px solid #d53c44;
    }
    tbody tr:nth-child(odd){
        background-color: #331515;
    }
    table td{
        vertical-align: middle;
    }
    th,
    td{
        border-bottom: 1px solid #d53c44!important;
        border-top: 1px solid #d53c44;
    }
    .tier__name{
        color: #110303;
        background-color: #619a61;

        border-radius: 5px;

        width: 30px;
        height: 30px;
        line-height: 30px;
    }
    .weapon-name{
        padding: 10px;
    }
    .weapon-name__logo{
        width: 100px;

        margin-right: 10px;
    }
</style>