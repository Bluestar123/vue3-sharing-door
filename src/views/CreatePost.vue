<template>
  <div class="create-post-page">
    <h4>{{isEditMode ? '编辑文章' : '新建文章'}}</h4>
    <input type="file" name="file" id="">
    <validate-form @form-submit="onFormSubmit">
      <div class="mb-3">
        <label class="form-label">文章标题：</label>
        <validate-input
          :rules="titleRules" v-model="titleVal"
          placeholder="请输入文章标题"
          type="text"
        />
      </div>
      <div class="mb-3">
        <label class="form-label">文章详情：</label>
        <validate-input
          rows="10"
          tag="textarea"
          placeholder="请输入文章详情"
          :rules="contentRules"
          v-model="contentVal"
        />
      </div>
      <template #submit>
        <button class="btn btn-primary btn-large">{{isEditMode ? '更新文章' : '发表文章'}}
</button>
      </template>
    </validate-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue'
import { useStore } from 'vuex'
import { useRouter, useRoute } from 'vue-router'
import { GlobalDataprops, UserProps } from '../store'
import ValidateInput, { RulesProp } from '../components/ValidateInput.vue'
import ValidateForm from '../components/ValidateForm.vue'
import { PostProps } from '@/testData'
import axios from 'axios'
export default defineComponent({
  name: 'Login',
  components: {
    ValidateInput,
    ValidateForm
  },
  setup () {
    const uploadedData = ref()
    const titleVal = ref('')
    const store = useStore<GlobalDataprops>()
    const router = useRouter()
    const route = useRoute()
    const isEditMode = !!route.query.id
    const titleRules: RulesProp = [
      { type: 'required', message: '文章标题不能为空' }
    ]
    const contentVal = ref('')
    const contentRules: RulesProp = [
      { type: 'required', message: '文章详情不能为空' }
    ]

    const onFormSubmit = (result: boolean) => {
      if (result) {
        const { columnId } = store.state.user
        if (columnId) {
          const newPost: PostProps = {
            id: +new Date(),
            title: titleVal.value,
            content: contentVal.value,
            columnId,
            createdAt: new Date().toLocaleString()
          }
          store.commit('createPost', newPost)
          router.push({
            name: 'column',
            params: {
              id: columnId
            }
          })
        }
      }
    }

    const handleFileChange = (e: Event) => {
      const target = e.target as HTMLInputElement
      const files = target.files
      if (files) {
        const uploadedFile = files[0]
        const formData = new FormData()
        formData.append(uploadedFile.name, uploadedFile)

        axios.post('/upload', formData, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        })
      }
    }
    return {
      titleRules,
      titleVal,
      contentVal,
      contentRules,
      onFormSubmit,
      uploadedData,
      isEditMode
    }
  }
})
</script>
<style>
.create-post-page .file-upload-container {
  height: 200px;
  cursor: pointer;
  overflow: hidden;
}
.create-post-page .file-upload-container img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.uploaded-area {
  position: relative;
}
.uploaded-area:hover h3 {
  display: block;
}
.uploaded-area h3 {
  display: none;
  position: absolute;
  color: #999;
  text-align: center;
  width: 100%;
  top: 50%;
}
</style>
