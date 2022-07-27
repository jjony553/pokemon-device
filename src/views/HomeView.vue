<template>
  <div>
    <div class="search">
      <input type="text" placeholder="Enter Pokemon here" v-model="text">
    </div>
    <div class="result">
      <div class="filter" v-for="( pokemon, index ) in filteredPokemon" :key="index">
        <router-link :to="`/device/${urlIdLookup[pokemon.name]}`">
          {{pokemon.name}}
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive, toRefs, computed } from 'vue'

export default {
  name: 'HomeView',
  setup () {
    
    const state = reactive ({
      pokemons : [],
      urlIdLookup: {},
      text: "",
      filteredPokemon: computed(() => updatePokemon())
    })

    function updatePokemon () {
      if(!state.text){
        return[]
      }
      return state.pokemons.filter((pokemon) =>
      pokemon.name.includes(state.text)
      )
    }

    fetch("https://pokeapi.co/api/v2/pokemon?offset=0")
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        state.pokemons = data.results
        state.urlIdLookup = data.results.reduce((acc, cur, index) => acc = {...acc, [cur.name]:index+1},{})
      })

      return {
        ...toRefs(state)
      }
  }
}
</script>

<style scoped>
.search{
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 20px;
}
.input{
  margin-top: 10px;
  padding: 2px;
  border: 1px solid blue;
}
.result{
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
.filter{
  color: blue;
  margin-top: 10px;
  margin-left: 5px;
}
</style>
