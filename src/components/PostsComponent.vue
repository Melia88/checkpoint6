<template>
  <div class="PostsComponent text-left">
    <div>
      <div class="row bg-light mt-2 ml-0 shadow">
        <div class="col" style="cursor: pointer" v-if="post.creator">
          <router-link :to="{name: 'ProfilePage', params: {id: post.creator.id}}">
            <img class="rounded-circle small-img" :src="post.creator.picture" alt="Creator Photo">
          </router-link>
          <div class="col">
            <span> {{ post.creator.name }}</span>
          </div>
          <p class="text-muted">
            {{ post.createdAt }}
          </p>
          <i v-if="post.creator.graduated" class="fas fa-user-graduate"></i>
          <div>
            <p> {{ post.body }}</p>
            <div>
              <img v-if="post.imgUrl" :src="post.imgUrl" class="w-100" alt="">
            </div>
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
            <button v-if="state.account && state.account.id == post.creatorId" class="btn btn-outline-dark rounded shadow" @click="deletePost(post)">
              <i class="fas fa-trash-alt"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { computed, reactive } from 'vue'
import { postsService } from '../services/PostsService'
import Notification from '../utils/Notification'
import { AppState } from '../AppState'
export default {
  name: 'PostsComponent',
  props: {
    post: {
      type: Object,
      required: true
    }
  },
  setup(props) {
    const state = reactive({
      account: computed(() => AppState.account)
    })
    return {
      state,
      async likePost(post) {
        try {
          await postsService.likePost(post.id)
        } catch (error) {
          Notification.toast('Error: ' + error, ' error')
        }
      },
      async deletePost() {
        try {
          await postsService.deletePost(props.post.id)
          // console.log('im trying to delete')
          Notification.toast('Deleted', 'Success')
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
