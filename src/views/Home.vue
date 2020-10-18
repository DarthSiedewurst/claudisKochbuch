<template>
  <div>
    <b-button v-b-toggle.sidebar-1>Inhaltsverzeichnis</b-button>
    <b-sidebar id="sidebar-1" title="Inhaltsverzeichnis" backdrop no-header-close shadow ref="sidebar">
      <nav class="mb-3">
        <b-nav vertical>
          <b-nav-item
            v-for="recipe in shownRecipes"
            :class="[recipe.visible ? '' : 'hidden', recipe.header ? 'linkToHeader' : 'linkToRecipe']"
            :key="recipe.page"
            @click="goToPage(recipe)"
          >
            {{ recipe.name }}
          </b-nav-item>
        </b-nav>
      </nav>
    </b-sidebar>
    <div v-for="recipe in shownRecipes" :key="recipe.page">
      <bookpage class="bookpage" :recipe="recipe" v-show="currentPage === recipe.page"></bookpage>
    </div>
    <b-pagination
      v-model="currentPage"
      :total-rows="shownRecipes.length - 1"
      per-page="1"
      align="center"
    ></b-pagination>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
//import Recipes, { Irecipe } from "../assets/recipes";
import Recipes, { Irecipe } from '@/config';
import Bookpage from '@/components/Bookpage.vue';

@Component({
  components: { Bookpage },
})
export default class Home extends Vue {
  private currentPage = 1;

  private recipes = Recipes;

  private get shownRecipes() {
    return this.recipes;
  }

  private goToPage(recipe: Irecipe) {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    let i = recipe.page!;
    if (recipe.header) {
      while (!Recipes[i].header) {
        this.recipes[i].visible = !this.recipes[i].visible;
        i++;
        this.$forceUpdate();
      }
    } else {
      //(this.$refs['sidebar'] as any).hide();

      this.currentPage = recipe.page!;
    }
  }
  private mounted() {
    const recipes: Irecipe[] = [];
    for (let i = 0; i < Recipes.length; i++) {
      recipes.push(Recipes[i]);
      recipes[i].page = i + 1;
      if (Recipes[i].visible === undefined) {
        recipes[i].visible = true;
      }
    }
    this.recipes = recipes;
  }
}
</script>

<style lang="scss" scoped>
.bookpage {
  width: 50vw;
  height: 80vh;
  margin: auto;
}
.linkToRecipe {
  transition: all 5s linear;
  display: block;
  margin-left: 2vw !important;
}
.linkToHeader {
}
.hidden {
  display: none !important;
  transition: all 5s linear;
}
</style>
