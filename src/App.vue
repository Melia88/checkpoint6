<template class="container">
  <div class="row">
    <div class="col-3">
      <LoginComponent />
    </div>
    <div class="col-8">
      <header>
        <Navbar />
      </header>
      <main>
        <div class="row">
          <div class="col-9">
            <router-view />
          </div>
          <div class="col-3">
          </div>
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
