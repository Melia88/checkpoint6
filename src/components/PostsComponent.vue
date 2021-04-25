<template>
  <div class="PostsComponent">
    <div>
      <div class="row bg-light mt-2 ml-0 shadow">
        <div class="col" style="cursor: pointer" v-if="post.creator">
          <router-link :to="{name: 'ProfilePage', params: {id: post.id}}">
            <img class="rounded-circle small-img" :src="post.creator.picture" alt="Creator Photo">
          </router-link>
        </div>
        <div class="col">
          <span> {{ post.creator.name }}</span>
          <p> {{ post.createdAt }}</p>
          <!-- <span> likes{{ post.likes }}</span> -->
          <div>
            <p>
            </p>
            <p> {{ post.body }}</p>
          </div>
        </div>
        <div class="col">
          <p class="text-right">
            <button type="button" class="btn btn-outline-info" @click="likePost(post)">
              <i class="far fa-heart"></i> {{ post.likes.length }}
            </button>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { postsService } from '../services/PostsService'
import Notification from '../utils/Notification'
export default {
  name: 'PostsComponent',
  props: {
    post: {
      type: Object,
      required: true
    }
  },
  setup() {
    return {
      async likePost(post) {
        try {
          await postsService.likePost(post.id)
        } catch (error) {
          Notification.toast('Error: ' + error, ' error')
        }
      }
    }
  },
  components: {}
}
</script>

<style lang="scss" scoped>
img{
  width: 3em;
}

</style>
