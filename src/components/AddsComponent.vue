<template>
  <div class="AddsComponent">
    <!-- <img :src="state.activeAdds.tall" alt=""> -->
    {{ state.activeAdds }}
  </div>
  <!-- <div>
    <img :src="state.activeAdds" alt="Add2">
  </div> -->
</template>

<script>
import { reactive, computed, onMounted } from 'vue'
import { AppState } from '../AppState'
import { addsService } from '../services/AddsService'
export default {
  name: 'AddsComponent',
  props: {
    adds: {
      type: Object,
      required: true
    }
  },
  setup() {
    const state = reactive({
      activeAdds: computed(() => AppState.activeAdds)
    })

    onMounted(async() => {
      await addsService.getAll()
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
