<template class="container-fluid">
  <div class="row">
    <div class="col-3 bg-light">
      <LoginComponent />
    </div>
    <div class="col">
      <header>
        <Navbar />
      </header>
      <main class="row">
        <div class="col-9">
          <router-view />
        </div>
        <div class="col-3 bg-light">
          <!--inject adds component-->
          <div> <AddsComponent /> </div>
        </div>
      </main>
    </div>
  </div>
</template>

<script>
import { computed } from 'vue'
import { AppState } from './AppState'
export default {
  name: 'App',
  setup() {
    return {
      appState: computed(() => AppState)
    }
  }
}
</script>
<style lang="scss">
@import "./assets/scss/main.scss";

</style>
