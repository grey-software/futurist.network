<template>
  <div class="t-h-screen py-8">
    <markdown-content :content="pioneerPage" folder="vision" file="index" />
  </div>
</template>

<script>
import MarkdownContent from '@/components/MarkdownContent'

export default {
  components: {
    MarkdownContent,
  },
  async asyncData({$content, params, error}) {
    const pioneerPage = await $content('pioneer', 'index').fetch()
    return { pioneerPage }
  },
}
</script>
