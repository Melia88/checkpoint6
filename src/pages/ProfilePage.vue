<template>
  <div class="ProfilePage">
    <div class="profile text-center">
      <!-- <h1>Welcome {{ profile.name }}</h1>
      <img class="rounded-circle" :src="profile.picture" alt="" />
      <p>{{ profile.email }}</p> -->
      <ProfileComponent />
      {{ route.params.id }}
    </div>
  </div>
</template>

<script>
import { computed, onMounted, reactive } from 'vue'
// import { logger } from '../utils/Logger'
import { profileService } from '../services/ProfileService'
import { AppState } from '../AppState'
import { useRoute } from 'vue-router'
export default {
  name: 'ProfilePage',
  setup() {
    const route = useRoute()
    const state = reactive({
      profile: computed(() => AppState.profile),
      activeProfile: computed(() => AppState.activeProfile)
    })
    // onMounted(async() => {
    //   try {
    //     await profileService.getAll()
    //   } catch (error) {
    //     logger.log(error)
    //   }
    // })
    onMounted(async() => {
      await profileService.getActiveProfile(route.params.id)
    })
    return {
      route,
      state
    }
  },
  components: {}
}
</script>

<style lang="scss" scoped>

</style>
