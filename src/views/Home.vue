<template>
  <div>
    <div v-for="recipe in recipes" :key="recipe.page">
      <bookpage :recipe="recipe" v-show="currentPage === recipe.page"></bookpage>
    </div>
    <b-pagination v-model="currentPage" :total-rows="recipes.length" per-page="1" align="center"></b-pagination>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
//import Recipes, { Irecipe } from "../assets/recipes";
import Recipes, { Irecipe } from "@/config";
import Bookpage from "@/components/Bookpage.vue";

@Component({
  components: { Bookpage },
})
export default class Home extends Vue {
  private currentPage = 1;
  private get recipes() {
    const recipes: Irecipe[] = [];
    for (const recipe of Recipes) {
      recipes.splice(recipe.page - 1, 0, recipe);
    }
    return recipes;
  }
}
</script>
