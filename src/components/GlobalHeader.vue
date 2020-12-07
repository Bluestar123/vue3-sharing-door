<template>
  <div class=''>
    <nav class="navbar justify-content-between mb-4 navbar-dark bg-primary px-4">
      <a class="navbar-brand" href="#">Sharing-Door</a>
      <ul v-if="!user.isLogin" class="list-inline mb-0">
        <li class="list-inline-item">
          <router-link :to="`/login`" type="button" class="btn btn-outline-light">登录</router-link>
        </li>
        <li class="list-inline-item">
          <a href="#" type="button" class="btn btn-outline-light">注册</a>
        </li>
      </ul>
      <ul v-else class="list-inline mb-0">
        <li class="list-inline-item">
          <!-- <a href="#" type="button" class="btn btn-outline-light">你好，{{user.name}}</a> -->
          <dropdown :title="`你好 ${user.name}`">
            <dropdown-item disabled>
              <a href="#" class="dropdown-item">新建文章</a>
            </dropdown-item>
            <dropdown-item>
              <a href="#" class="dropdown-item">编辑资料</a>
            </dropdown-item>
            <dropdown-item>
              <a href="#" class="dropdown-item">退出登录</a>
            </dropdown-item>
          </dropdown>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script lang='ts'>
import { defineComponent, PropType } from 'vue'
import Dropdown from './Dropdown.vue'
import DropdownItem from './DropdownItem.vue'
export interface UserProps {
  isLogin: boolean;
  name?: string;
  id?: number;
}

export default defineComponent({
  name: '',
  props: {
    user: {
      type: Object as PropType<UserProps>,
      required: true
    }
  },
  components: { Dropdown, DropdownItem }

})

</script>
<style lang='' scoped>

</style>
