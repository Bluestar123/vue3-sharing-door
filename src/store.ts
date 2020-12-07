import { createStore } from 'vuex'
import { testData, testPosts, ColumnProps, PostProps } from './testData'
export interface UserProps {
  isLogin: boolean;
  name?: string;
  id?: number;
  columnId?: number;
}

export interface GlobalDataprops {
  columns: ColumnProps[];
  posts: PostProps[];
  user: UserProps;
}

const store = createStore<GlobalDataprops>({
  state: {
    columns: testData,
    posts: testPosts,
    user: {
      isLogin: false
    }
  },
  mutations: {
    login (state) {
      state.user = {
        ...state.user,
        isLogin: true,
        name: 'uncertainty',
        columnId: 1
      }
    },
    createPost (state, newPost) {
      state.posts.push(newPost)
    }
  },
  getters: {
    biggerColumnsLen (state) {
      return state.columns.filter(c => c.id > 2).length
    },
    getColumnById: (state) => (id: number) => {
      return state.columns.find(c => c.id === id)
    },
    getPostsByCid: (state) => (cid: number) => {
      return state.posts.filter(p => p.columnId === cid)
    }
  }
})

export default store
