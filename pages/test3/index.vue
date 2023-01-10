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
import { Parser } from 'N3'

export default {
  data() {
    return {
      ldesUri: '',
      ldesMembers: []
    }
  },
  methods: {
    async fetchLdesMembers() {
      // Create an Ldfetch client
      const client = new Ldfetch()
      
      // Fetch the LDES
      const { triples } = await client.get(this.ldesUri)
      
      // Parse the triples
      const parser = new Parser()
      parser.parse(triples, (error, triple, prefixes) => {
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