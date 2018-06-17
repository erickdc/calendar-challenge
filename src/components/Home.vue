<template>
  <div class="hello">
  </div>
</template>

<script>
import Datepicker from 'vuejs-datepicker'
import { addDays } from '../utils/index'
export default {
  name: 'Home',
  data () {
    return {
      startDate: new Date(),
      numberOfDay: 0,
      countryCode: '',
      endDate: new Date()
    }
  },
  methods: {
    calculateEndDays () {
      return addDays(this.startDate, this.numberOfDay)
    }
  },
  components: {
    Datepicker
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
