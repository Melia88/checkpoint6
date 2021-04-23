<template>
  <div class="PostsComponent">
    <div>
      <div class="row bg-light mt-2 shadow">
        <div class="col">
          <router-link :to="{name: 'ProfilePage', params: {id: post.id}}">
            <img class="rounded-circle small-img" :src="post.creator.picture" alt="Creator Photo">
          </router-link>
        </div>
        <div class="col">
          <span> {{ post.creator.name }}</span>
          <p> {{ post.createdAt }}</p>
          <div>
            <p>
            </p>
            <p> {{ post.body }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PostsComponent',
  props: {
    post: {
      type: Object,
      required: true
    }
  },
  setup() {
    return {}
  },
  components: {}
}
</script>

<style lang="scss" scoped>
img{
  width: 3em;
}

</style>
