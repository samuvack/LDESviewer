<template>
  <div>
    <div>
      <input v-model="ldesUri" placeholder="Enter LDES URI" />
      <button @click="fetchMembers">Fetch Members</button>
    </div>
    <table v-if="members.length > 0">
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="member in members" :key="member.id">
          <td>{{ member.name }}</td>
          <td>{{ member.email }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import ldfetch from 'ldfetch'
export default {
  data() {
    return {
      ldesUri: '',
      members: []
    }
  },
  methods: {
    async fetchMembers() {
      const { quads } = await ldfetch.get(this.ldesUri)
      this.members = quads.map(quad => {
        return {
          name: quad.subject.value,
          email: quad.object.value
        }
      }).slice(0, 100)
    }
  }
}
</script>