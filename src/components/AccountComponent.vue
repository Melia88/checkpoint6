<template>
  <div class="AccountComponent">
    <h1>Hey from account component</h1>
  </div>
</template>

<script>
import { logger } from '../utils/Logger'
import { onMounted, computed, reactive } from 'vue'
import { accountService } from '../services/AccountService'
import { AppState } from '../AppState'

export default {
  name: 'AccountComponent',
  setup() {
    const state = reactive({
      blogs: computed(() => AppState.account)
    })
    onMounted(async() => {
      try {
        await accountService.getAccount()
      } catch (error) {
        logger.log(error)
      }
    })
    return {
      state
    }
  },
  components: {}
}
</script>

<style lang="scss" scoped>

</style>
