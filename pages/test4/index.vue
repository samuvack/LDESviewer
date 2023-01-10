<template>
  <div>
    <input type="text" v-model="ldesUri" placeholder="Enter LDES URI here" />
    <button @click="fetchLdesMembers">Fetch LDES Members</button>
    <ul>
      <li v-for="member in ldesMembers" :key="member">{{ member }}</li>
    </ul>
  </div>
</template>

<script>
import { Parser } from 'n3'

export default {
  data() {
    return {
      ldesUri: 'https://iow.smartdataspace.beta-vlaanderen.be/water-quality-observations-timebased?generatedAtTime=2022-11-08T17:28:27.680Z',
      ldesMembers: []
    }
  },
  methods: {
    async fetchLdesMembers() {
      // Fetch the LDES
      const response = await fetch(this.ldesUri)
      const text = await response.text()
      
      // Parse the triples
      const parser = new Parser()
      parser.parse(text, (error, triple, prefixes) => {
        if (triple) {
          // Check if the triple is a member of the LDES
          if (triple.predicate.value === 'http://www.w3.org/ns/ldp#member') {
            this.ldesMembers.push(triple.object.value)
          }
        }
      })
    }
  }
}
</script>