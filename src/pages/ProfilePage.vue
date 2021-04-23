<template>
  <div class="ProfilePage">
  </div>
</template>

<script>
import { computed, onMounted, reactive } from 'vue'
import { logger } from '../utils/Logger'
import { profileService } from '../services/ProfileService'
import { AppState } from '../AppState'
export default {
  name: 'ProfilePage',
  setup() {
    const state = reactive({
      profile: computed(() => AppState.profile),
      activeProfile: computed(() => AppState.activeProfile)
    })
    onMounted(async() => {
      try {
        await profileService.getAll()
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
