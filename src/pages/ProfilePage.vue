<template>
  <div class="row" v-if="state.activeProfile">
    <div class="col-md-8 d-flex flex-column">
      <div class="profile m-3 shadow rounded">
        <img :src="state.activeProfile.picture" class="rounded-circle mb-0 pt-4 w-100" alt="">
        <p class="profile-pic mb-4">
          {{ state.activeProfile.name }}
        </p>
        <p class="text-muted">
          {{ state.activeProfile.class || 'Spring 2021' }}
        </p>
      </div>
    </div>
    <div class="ProfilePage card shadow col-12 m-2">
      <!--  v-if="state.Profile.id == state.account.id" -->
      <div class="card-body">
        <form @submit.prevent="createPost" v-if="state.user.isAuthenticated && state.account.id === route.params.id">
          <!-- this createPost is the function  -->
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

    <PostsComponent v-for="post in state.posts" :key="post.id" :post="post" />
  </div>

<!--
  <div class="col-12">
    <Posts v-for="posts in state.posts" :key="posts.id" :posts="posts" />
  </div> -->
  <!-- </div> -->
</template>

<script>
import { computed, onMounted, reactive } from 'vue'
// import { logger } from '../utils/Logger'
// import { profileService } from '../services/ProfileService'
import { postsService } from '../services/PostsService'
import { AppState } from '../AppState'
import { useRoute } from 'vue-router'
import { accountService } from '../services/AccountService'
import { profileService } from '../services/ProfileService'
export default {
  name: 'ProfilePage',
  setup() {
    const route = useRoute()
    const state = reactive({
      newPost: {},
      // profile: computed(() => AppState.profile),
      activeProfile: computed(() => AppState.activeProfile),
      // posts: computed(() => AppState.posts),
      // myPosts: computed(() => AppState.myPosts),
      posts: computed(() => AppState.profilePosts),
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
    // If I change the onMounted in this specific instance to watchEffect
    onMounted(async() => {
      try {
        await accountService.getProfile(route.params.id)
        // await accountService.getProfile(route.params.id)
        await profileService.getActiveProfile(route.params.id)
        await profileService.getProfilePosts(route.params.id)
        // await postsService.getByCreatorId(route.params.id)
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
          Notification.toast('Successfully Created Post', 'success')
          state.newPost = {}
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
