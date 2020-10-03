<template>
  <div>
    {{ recipe }}
    IMG
    <img class="recipe" :src="getImgUrl()" />
    IMG
  </div>
</template>

<script lang="ts">
import { Irecipe } from "@/config";
import { Component, Prop, Vue } from "vue-property-decorator";

@Component({
  components: {},
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
  width: 50vw;
  height: 90vh;
  margin: auto;
}
</style>
