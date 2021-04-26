<template>
  <div class="PostsComponent">
    <div>
      <div class="row bg-light mt-2 ml-0 shadow">
        <div class="col" style="cursor: pointer" v-if="post.creator">
          <router-link :to="{name: 'ProfilePage', params: {id: post.creator.id}}">
            <img class="rounded-circle small-img" :src="post.creator.picture" alt="Creator Photo">
          </router-link>
        </div>
        <div class="col">
          <span> {{ post.creator.name }}</span>
          <p class="text-muted">
            {{ post.createdAt }}
          </p>
          <i v-if="post.creator.graduated" class="fas fa-user-graduate"></i>
          <div>
            <p> {{ post.body }}</p>
          </div>
        </div>
        <div class="col">
          <div>
            <p class="text-right">
              <button type="button" class="btn btn-outline-info" @click="likePost(post)">
                <i class="far fa-heart"></i> {{ post.likes.length }}
              </button>
            </p>
          </div>
          <div class="post--buttons d-flex justify-content-between pt-3">
            <button class="btn btn-outline-dark rounded shadow">
              <i class="fas fa-trash-alt"></i>
            </button>
          </div>
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
