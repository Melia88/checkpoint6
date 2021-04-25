<template>
  <!-- <div class="ProfilePage">
    <div class="profile text-center">

      <img class="rounded-circle" :src="profile.picture" alt="" />
      <p>{{ profile.email }}</p> -->
  <div>
    <h1 class="mb-4">
      <!-- {{ state.activeProfile.name }} -->
    </h1>
  </div>
  <ProfileComponent />
  {{ route.params.id }}
  <!-- </div>
  </div> --> -->

  <div class="ProfilePage card shadow col-12 m-2">
    <div class="card-body">
      <form @submit.prevent="create">
        <div class="form-group">
          <input type="text"
                 class="form-control"
                 name="comment"
                 id="comment"
                 placeholder="Comment..."
                 v-model="state.newPost.body"
                 required
          >
          <input type="text"
                 class="form-control"
                 name="imgUrl"
                 id="imgUrl"
                 placeholder="Image Url..."
                 v-model="state.newPost.imgUrl"
          >
        </div>
        <button type="submit" class="btn btn-success">
          Create
        </button>
      </form>
    </div>
  </div>

  <div class="col-12">
    <Posts v-for="posts in state.posts" :key="posts.id" :posts="posts" />
  </div>
</template>

<script>
import { computed, onMounted, reactive } from 'vue'
// import { logger } from '../utils/Logger'
// import { profileService } from '../services/ProfileService'
import { postsService } from '../services/PostsService'
import { AppState } from '../AppState'
import { useRoute } from 'vue-router'
import { accountService } from '../services/AccountService'
export default {
  name: 'ProfilePage',
  setup() {
    const route = useRoute()
    const state = reactive({
      newPost: {},
      profile: computed(() => AppState.profile),
      activeProfile: computed(() => AppState.activeProfile),
      posts: computed(() => AppState.posts),
      myPosts: computed(() => AppState.myPosts),
      account: computed(() => AppState.account),
      user: computed(() => AppState.user)
    })
    // onMounted(async() => {
    //   try {
    //     await profileService.getAll()
    //   } catch (error) {
    //     logger.log(error)
    //   }
    // })
    // onMounted(async() => {
    //   })
    onMounted(async() => {
      try {
        await accountService.getProfile(route.params.id)
        await accountService.getProfile(route.params.id)
        // await profileService.getActiveProfile(route.params.id)
        await postsService.getByCreatorId(route.params.id)
      } catch (error) {
        Notification.toast('Error:' + error, 'error')
      }
    })
    return {
      route,
      state,
      async createPost() {
        try {
          await postsService.createPost(state.newPost)
          state.newPost = {}
          Notification.toast('Successfully Created Post', 'success')
        } catch (error) {
          Notification.toast('Error: ' + error, 'error')
        }
      }
    }
  },
  components: {}
}
</script>

<style lang="scss" scoped>

</style>
