<template>
  <div class="container-fluid home flex-grow-1 d-flex flex-column align-items-center justify-content-center">
    <PostsComponent v-for="post in state.posts" :key="post.id" :post="post" />
  </div>
  <!-- put older & newer buttons here -->
  <button type="submit" @click="getOlder()">
    Older
  </button>
  <button type="submit" @click="getNewer()">
    Newer
  </button>
</template>

<script>
import { computed, onMounted, reactive } from 'vue'
import { postsService } from '../services/PostsService'
import { AppState } from '../AppState'
import { logger } from '../utils/Logger'

export default {
  name: 'Home',
  setup() {
    const state = reactive({
      posts: computed(() => AppState.posts)
    })
    onMounted(async() => {
      try {
        await postsService.getAll()
        await postsService.getOlder(AppState.older)
        await postsService.getNewer(AppState.newer)
      } catch (error) {
        logger.log(error)
      }
    })
    return {
      state,
      async getOlder() {
        try {
          await postsService.getOlder()
        } catch (error) {
          Notification.toast('Error: ' + error, ' error')
        }
      },
      async getNewer() {
        try {
          await postsService.getNewer()
        } catch (error) {
          Notification.toast('Error: ' + error, ' error')
        }
      }
    }
  }
}

</script>

<style scoped lang="scss">
.home{
  text-align: center;
  user-select: none;
  > img{
    height: 200px;
    width: 200px;
  }
}
</style>
