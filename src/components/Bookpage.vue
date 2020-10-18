<template>
  <div>
    <img class="recipe" :src="getImgUrl()" />
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
  width: 80%;
  height: 80%;
  margin: auto;
}
</style>
