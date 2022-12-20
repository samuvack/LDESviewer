<template>
  <div>
    <input v-model="url" type="text" />
    <button @click="fetchData">Fetch Data</button>
    <div v-if="data">
      {{ data }}
    </div>
    <div v-if="count">number of count :
      {{ count }}
    </div>
  </div>
</template>


<script>
import * as N3 from 'n3'

function countOccurrences(str, value) {
  var regExp = new RegExp(value, "gi");
  return (str.match(regExp) || []).length;
}
export default {
  data() {
    return {
      url: 'https://iow.smartdataspace.beta-vlaanderen.be/water-quality-observations',
      data: null
    }
  },
  methods: {
    async fetchData() {
      try {
        const response = await fetch(this.url);
        const data = await response.text();
        this.data = data;
        var count = countOccurrences(data, '@prefix');
        this.count = count;
      } catch (error) {
        console.error(error);
      }
    }
  }
}

</script>