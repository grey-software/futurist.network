<template>
  <div class="pb-5">
    <div
      class="mt-5 d-flex flex-column justify-content-center align-items-center"
    >
      <CenteredHero
        icon="../../icons/resources.svg"
        title="Resources"
        desc="We curate from across the internet and produce original content for our community!"
        arrow-link="#resources-grid"
      />
    </div>
    <a id="resources-grid" />
    <ResourcesGrid :items="resources" />
  </div>
</template>

<script>
export default {
   async asyncData ({ $content, params, error }) {
    const resourcesDataStore = await $content('resources').fetch()
    console.log(resourcesDataStore)
    const resources = resourcesDataStore.map((resource) => {
      return { title: resource.title, desc: resource.desc, icon: resource.icon, link: `/resources/${resource.link}` }
    })
    return { resources }
  },
  computed: {
    sortedTags () {
      const sortedTags = Array.from(this.tags).sort()
      // Resources with more items should show up higher.
      sortedTags.sort((a, b) => this.resourcesForTag(b).length - this.resourcesForTag(a).length)
      return sortedTags
    }
  },
  methods: {
    resourcesForTag (tag) {
      const filteredResources = this.resources.filter(resource => resource.tags.includes(tag))
      return filteredResources
    }
  }
}
</script>

<style scoped>
.resource-tag {
  text-transform: capitalize;
}
</style>
