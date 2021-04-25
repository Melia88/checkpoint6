import { reactive } from 'vue'

// NOTE AppState is a reactive object to contain app level data
export const AppState = reactive({
  user: {},
  account: {},
  profile: null,
  activeProfile: null,
  posts: [],
  older: '',
  newer: '',
  likes: null,
  activeAdds: []
})
