<template>
  <div v-if="pokemon">
  <div class="frame">
    <div class="top-frame">
      <div class="main-white-circle">
        <div class="main-blue-circle">
          <div class="main-glass-circle"></div>
        </div>
      </div>
      <div class="rgb-circle">
        <div class="rgb-red-circle">
          <div class="rgb-glass-circle"></div>
        </div>
        <div class="rgb-yellow-circle">
          <div class="rgb-glass-circle"></div>
        </div>
        <div class="rgb-green-circle">
          <div class="rgb-glass-circle"></div>
        </div>
      </div>
    </div>

    <div class="divider">
      <div class="left-divider"></div>
      <div class="center-divider"></div>
      <div class="right-divider"></div>
    </div>

    <div class="center-frame">
      <div class="white-screen">
        <div class="top-circle-frame">
          <div class="top-red-circle"></div>
          <div class="top-red-circle"></div>
        </div>
        <div class="poke-screen">
            <img :src="pokemon.sprites.front_shiny" alt="">
            <img :src="pokemon.sprites.back_shiny" alt="">
        </div>
        <div class="bottom-screen">
          <div class="bottom-red-circle"></div>
          <div class="bottom-speaker-line">=</div>
        </div>
      </div>
    </div>

    <div class="bottom-frame">
      <div class="green-circle"></div>
      <div class="center-info">
        <div class="rb-line">
          <div class="red-button"></div>
          <div class="blue-button"></div>
        </div>
        <div class="green-rect">
            <span>{{pokemon.name}}</span>
            <span v-for="(type, index) in pokemon.types" :key="index">
                {{type.type.name}}
            </span>
        </div>
      </div>
      <div class="cross-button-border">
        <div class="cross-button"></div>
      </div>
    </div> 
  </div>
</div>
</template>

<script>
import { useRoute} from 'vue-router'
import { reactive, toRefs } from'vue'
import { fetchPokeInfo } from '../api/index'

export default {
  setup() {
    const route = useRoute()
    const state = reactive({
      pokemon: null
    })
    fetchPokeInfo(route.params.slug)
    .then((res) => res.json())
    .then((data) => {
      console.log(data)
      state.pokemon = data})

  return {...toRefs(state)}
  }

}
</script>

<style>
.img{
    width: 48px;
}
.frame{
  width: 300px;
  height: 400px;
  background-color: #DC0A2D ;
  display: inline-block;
  border: 2px solid black;
  margin-top: 50px;
}
/* top-frame */
.top-frame{
  display: flex;
  margin-top: 10px;
}
.main-white-circle{
  width: 50px;
  height: 50px;
  background-color: #E0DFDD;
  border-radius: 50%;
  border:1.5px solid black ;
  position: relative;
  margin-left: 10px;
}
.main-blue-circle{
  width: 40px;
  height: 40px;
  background-color: #28AAFF;
  border-radius: 50%;
  border:1.5px solid black ;
  position: absolute;
  top: 7%;
  left: 7%;
}
.main-glass-circle{
  width: 15px;
  height: 15px;
  border-radius: 50%;
  position: absolute;
  top: 10%;
  left: 20%;
  background-color: #fff;
  opacity: 50%;
}
.rgb-circle{
  display: flex;
  margin-left: 16px;
}
.rgb-red-circle{
  width: 10px;
  height: 10px;
  background-color: #A40019;
  border-radius: 50%;
  border:1px solid black ;
  position: relative;
  margin-right: 7px;
}
.rgb-yellow-circle{
  width: 10px;
  height: 10px;
  background-color: #E7CE2C;
  border-radius: 50%;
  border:1px solid black ;
  margin-right: 7px;
  position: relative;
}
.rgb-green-circle{
  width: 10px;
  height: 10px;
  background-color: #316C3C;
  border-radius: 50%;
  border:1px solid black ;
  position: relative;
}
.rgb-glass-circle{
  width: 3px;
  height: 3px;
  border-radius: 50%;
  position: absolute;
  top: 10%;
  left: 20%;
  background-color: #fff;
  opacity: 50%;
}
.divider{
  width: 100%;
  height: 20px;
  position: relative;
}
.left-divider{
  height: 3px;
  width: 155px;
  background-color: black;
  margin-top: 20px;
  position: absolute;

}
.center-divider{
  height: 3px;
  width: 30px;
  background-color: #89061E;
  transform: rotate(-45deg);
  margin-top: 10px;
  position: absolute;
  left: 50%;
}
.right-divider{
  height: 3px;
  width: 125px;
  background-color: black;
  position: absolute;
  right: 0;
}
/* center-frame */
.center-frame{
  margin-top: 20px;
  width: 250px;
  height: 203px;
  background-color: black;
  display: inline-block;
  position:relative;
}
.center-frame:after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 0 25px 25px 0;
  border-color: transparent transparent #DC0A2D transparent;
}
.white-screen{
  margin-top: 1px;
  width: 246px;
  height: 200px;
  background-color: #DEDEDE;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position:relative;
  margin-left: 1px;
}
.white-screen:after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 0 24px 24px 0;
  border-color: transparent transparent black transparent;
}
.top-circle-frame{
  display: inline-block;
}
.top-red-circle{
  display: inline-block;
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background-color: #FF002A;
  border: 1px solid black;
  margin-left: 6px;
  margin-right: 6px;
}
.poke-screen{
  display: inline-block;
  background-color: #232323;
  width: 200px;
  height: 150px;
  border-radius: 3%;
  border: 1px solid black;
  display: flex;
  justify-content: center;
}
.bottom-screen{
  width: 200px;
  display: flex;
  justify-content: space-between;
  margin-top: 7px;
}
.bottom-red-circle{
  width: 13px;
  height: 13px;
  border-radius: 50%;
  background-color: #FF002A;
  border: 1.5px solid black;
}
/* bottom-frame */
.bottom-frame{
  display: flex;
  flex-direction: row;
  justify-content:space-evenly;
  align-items: center;
  margin-top: 8px;
}
.green-circle{
  width: 35px;
  height: 35px;
  border-radius: 50%;
  border: 1.5px solid black;
  background-color: #00312C;
  margin-bottom: 30px;
}
.center-info{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-right: 15px;
}
.rb-line{
  display: flex;
  justify-content: space-between;
}
.red-button{
  width: 30px;
  height: 3px;
  background-color: #E80B31;
  border-radius: 20%;
  border: 1.5px solid black;
}
.blue-button{
  width: 30px;
  height: 3px;
  background-color: #08648B;
  border-radius: 20%;
  border: 1.5px solid black;
  margin-left: 20px;
}
.green-rect{
  width: 70px;
  height: 40px;
  border: 1px solid black;
  border-radius: 6%;
  margin-top: 10px;
  background-color: #52AE5F;
  text-align: center;
  font-size: 12px;
  display: flex;
  flex-direction: column;
}
.cross-button-border{
  width: 71px;
  height: 71px;
  background: linear-gradient(to bottom, transparent 35%, black 35%, black 65%,  transparent 65%),
    linear-gradient(to right, transparent 35%, black 35%, black 65%, transparent 65%);
    display: inline-block;
}
.cross-button{
  width: 68px;
  height: 68px;
  background: linear-gradient(to bottom, transparent 35%, #00312C 35%, #00312C 65%,  transparent 65%),
    linear-gradient(to right, transparent 35%, #00312C 35%, #00312C 65%, transparent 65%);
}
</style>