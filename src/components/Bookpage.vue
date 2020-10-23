<template>
  <div>
    <img class="recipe" :src="getImgUrl()" />
  </div>
</template>

<script lang="ts">
import { Irecipe } from '@/config';
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component({
  components: {},
})
export default class Bookpage extends Vue {
  @Prop() private recipe!: Irecipe;

  private getImgUrl() {
    return require('@/assets/recipes/' + this.recipe.src);
  }
}
</script>

<style lang="scss" scoped>
.recipe {
  display: block;
  width: 95%;
  height: 100%;
  margin: auto;
  border: 3vw solid transparent;
  padding: 1wv;
  border-image: url('~@/assets/img/border.png');
  border-image-slice: 50;
  border-image-width: 1;
  border-radius: 10vw;
}
</style>
