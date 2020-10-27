<template>
  <div class="background">
    <b-button v-b-toggle.sidebar-1>Inhaltsverzeichnis</b-button>
    <b-sidebar id="sidebar-1" title="Inhaltsverzeichnis" backdrop no-header-close shadow ref="sidebar">
      <label class="typo__label">Zutaten</label>
      <multiselect
        v-model="ingredient"
        :options="ingredients"
        :multiple="true"
        :close-on-select="false"
        :clear-on-select="false"
        placeholder="auswählen"
        :preselect-first="false"
        @close="shownRecipeHeaders"
      >
        <template slot="selection" slot-scope="{ values, isOpen }"
          ><span class="multiselect__single" v-if="values.length &amp;&amp; !isOpen"
            >{{ values.length }} Zutaten ausgewählt</span
          ></template
        >
      </multiselect>
      <nav class="mb-3">
        <b-nav vertical>
          <b-nav-item
            v-for="recipe in shownRecipes"
            :class="[recipe.visible ? '' : 'hidden', recipe.header ? 'linkToHeader' : 'linkToRecipe']"
            :key="recipe.page"
            @click="headerClicked(recipe)"
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
export default class Book extends Vue {
  private ingredient = [];
  private currentPage = 1;

  private recipes = Recipes;

  private get shownRecipes() {
    return this.recipes;
  }

  private get ingredients() {
    const ingredient: string[] = [];
    Recipes.forEach((element) => {
      if (element.zutaten) {
        element.zutaten.forEach((x) => {
          if (ingredient.indexOf(x) < 0) {
            ingredient.push(x);
          }
        });
      }
    });
    ingredient.sort();
    return ingredient;
  }

  private shownRecipeHeaders() {
    const recipes: Irecipe[] = [];
    for (let i = 0; i < Recipes.length; i++) {
      recipes.push(Recipes[i]);
    }
    if (this.ingredient.length > 0) {
      recipes.forEach((x) => {
        if (x.zutaten) {
          const isInTngredient = (value: string) => x.zutaten!.includes(value);
          const shouldShow = this.ingredient.every(isInTngredient);
          shouldShow ? (x.visible = true) : (x.visible = false);
        } else {
          x.visible = false;
        }
      });
    } else {
      recipes.forEach((x) => {
        x.visible = true;
      });
    }

    this.recipes = recipes;
  }

  private headerClicked(recipe: Irecipe) {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    let i = recipe.page!;
    if (recipe.header) {
      while (!Recipes[i].header) {
        this.recipes[i].visible = !this.recipes[i].visible;
        i++;
        this.$forceUpdate();
      }
    } else {
      (this.$refs['sidebar'] as any).hide();

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
  height: 85vh;
  margin: auto;
  animation: fadeIn ease 1s;
  -webkit-animation: fadeIn ease 1s;
  -moz-animation: fadeIn ease 1s;
  -o-animation: fadeIn ease 1s;
  -ms-animation: fadeIn ease 1s;
}

@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

@-moz-keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

@-webkit-keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
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
@media only screen and (max-width: 600px) {
  .bookpage {
    width: 100vw;
  }
}
</style>
