<template>
  <div>
    <b-button v-b-toggle.sidebar-1>Inhaltsverzeichnis</b-button>
    <b-sidebar
      id="sidebar-1"
      title="Inhaltsverzeichnis"
      backdrop
      no-header-close
      shadow
      ref="sidebar"
    >
      <nav class="mb-3">
        <b-nav vertical>
          <b-nav-item
            :class="[recipe.header ? 'linkToHeader' : 'linkToRecipe']"
            v-for="recipe in recipes"
            :key="recipe.page"
            @click="goToPage(recipe.page)"
            >{{ recipe.name }}</b-nav-item
          >
        </b-nav>
      </nav>
    </b-sidebar>
    <div v-for="recipe in recipes" :key="recipe.page">
      <bookpage
        class="bookpage"
        :recipe="recipe"
        v-show="currentPage === recipe.page"
      ></bookpage>
    </div>
    <b-pagination
      v-model="currentPage"
      :total-rows="recipes.length"
      per-page="1"
      align="center"
    ></b-pagination>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
//import Recipes, { Irecipe } from "../assets/recipes";
import Recipes, { Iheader, Irecipe } from "@/config";
import Bookpage from "@/components/Bookpage.vue";

@Component({
  components: { Bookpage }
})
export default class Home extends Vue {
  private currentPage = 1;

  private get recipes() {
    const recipes: (Irecipe | Iheader)[] = [];
    for (const recipe of Recipes) {
      recipes.splice(recipe.page - 1, 0, recipe);
    }
    return recipes;
  }

  private goToPage(page: number) {
    (this.$refs["sidebar"] as any).hide();

    this.currentPage = page;
  }
}
</script>

<style lang="scss" scoped>
.bookpage {
  width: 50vw;
  height: 90vh;
  margin: auto;
}
.linkToRecipe {
  color: red;
}
.linkToHeader {
  color: blue;
}
</style>
