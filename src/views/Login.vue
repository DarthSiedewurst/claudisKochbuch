<template>
  <div class="background">
    <b-container>
      <ValidationObserver v-slot="{ handleSubmit }">
        <form @submit.prevent="handleSubmit(onSubmit)">
          <b-row class="pt-5">
            <b-col>
              <ValidationProvider rules="isUser|required">
                <label>Benutzer</label>
                <b-form-input v-model="user"></b-form-input>
              </ValidationProvider>
            </b-col>
            <b-col>
              <ValidationProvider rules="isPassword|required">
                <label>Passwort</label>
                <b-form-input type="password" v-model="password"></b-form-input>
              </ValidationProvider>
            </b-col>
          </b-row>
          <b-row class="d-flex justify-content-center pt-5">
            <b-button type="submit">Login</b-button>
          </b-row>
        </form>
      </ValidationObserver>
    </b-container>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  components: {},
})
export default class Book extends Vue {
  private get user() {
    return this.$store.state.user;
  }
  private set user(user: string) {
    this.$store.commit('setUser', user);
  }
  private get password() {
    return this.$store.state.password;
  }
  private set password(password: string) {
    this.$store.commit('setPassword', password);
  }
  private async onSubmit() {
    this.$router.push({ name: 'Book' });
  }
}
</script>

<style lang="scss" scoped></style>
