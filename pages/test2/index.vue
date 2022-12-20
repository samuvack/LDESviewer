#NUXT.js web app that allows you to add a URL to a text box, and a button. After pasting the url to the text box and clicking on the button,
#the text on the page is fetched from the url, and displayed underneath the text box. The fetched text is inside variable 'data'

#Template for the page with text-box and a button
<template>
  <div>
    <input v-model="url" type="text" />
    <button @click="fetchData">Fetch Data</button>
    <div v-if="data">
      {{ data }}
    </div>
  </div>
</template>

#Script for the page with text-box and a button
<script>
export default {
  data() {
    return {
      url: '',
      data: null
    }
  },
  methods: {
    async fetchData() {
      try {
        const response = await fetch(this.url);
        const data = await response.text();
        this.data = data;
      } catch (error) {
        console.error(error);
      }
    }
  }
}
</script>

#Style for the page with text-box and a button, nice in the middle of the page
<style>
div {
  text-align: center;
}
</style>