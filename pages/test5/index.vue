<template>
  <div>
    <input type="text" v-model="ldesUri" placeholder="Enter LDES URI here" />
    <vl-button @click="fetchLdesMembers">Fetch LDES Members</vl-button>
    <ul>
      <li v-for="member in ldesMembers" :key="member" @click="displayMember(member)">{{ member }}</li>
    </ul>
    <section v-if="displayedMember" id="displayed-member">
      {{displayedMember}}
    </section>
  </div>
</template>

<script>
import { Parser } from 'n3'

export default {
  data() {
    return {
      ldesUri: 'https://iow.smartdataspace.beta-vlaanderen.be/water-quality-observations-timebased?generatedAtTime=2022-11-08T17:28:27.680Z',
      ldesMembers: [],
      displayedMember: null
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
        console.log('triple: ', triple)
        console.log(triple.predicate.value)
        this.displayedMember = triple
        // Check if the triple is a member of the LDES
        if (triple.predicate.value === 'http://www.w3.org/ns/ldp#member') {
          if(this.ldesMembers.length === 0) {
            this.displayedMember = triple.object.value
            console.log(this.displayedMember)
          }
          this.ldesMembers.push(triple.object.value)
        }
      }
    })
  }
}
}
</script>