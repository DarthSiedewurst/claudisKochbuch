<template>
  <div>
    {{ recipe }}
    <div v-if="recipe.header">
      <h1>{{ recipe.name }}</h1>
    </div>
    <div v-else>
      <img class="recipe" :src="getImgUrl()" />
    </div>
  </div>
</template>

<script lang="ts">
import { Irecipe } from "@/config";
import { Component, Prop, Vue } from "vue-property-decorator";

@Component({
  components: {}
})
export default class Bookpage extends Vue {
  @Prop() private recipe!: Irecipe;

  private getImgUrl() {
    return require("@/assets/recipes/" + this.recipe.src);
  }
}
</script>

<style lang="scss" scoped>
.recipe {
  display: block;
  width: 40%;
  height: 40%;
  margin: auto;
}
</style>
