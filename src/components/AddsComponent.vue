<template>
  <div class="row addsComponent column-height m-2">
    <div class="col-12" v-if="adds[0] !=null">
      <img class="img-fluid my-2" :src="adds[0].tall" alt="">
      <img class="img-fluid my-5" :src="adds[1].tall" alt="">
    </div>
  </div>
</template>

<script>
import { reactive, computed, onMounted } from 'vue'
import { AppState } from '../AppState'
import { addsService } from '../services/AddsService'
import Notification from '../utils/Notification'
export default {
  name: 'AddsComponent',
  // props: {
  //   adds: {
  //     type: Object,
  //     required: true
  //   }
  // },
  setup() {
    const state = reactive({
      adds: computed(() => AppState.adds)
    })

    onMounted(async() => {
      try {
        await addsService.getAll()
      } catch (error) {
        Notification.toast('Error: ' + error, 'error')
      }
    })
    return {
      state,
      adds: computed(() => AppState.adds)
    }
  },
  components: {}
}
</script>
<style lang="scss" scoped>

</style>
