<template>
  <form>

           <div class="form-group">
            <label for="startDate">Start Date: </label><div class="center">
              <datepicker name="startDate" v-model="startDate"></datepicker>
            </div>
           </div>
          <div class="form-group">
              <label for="numberOfDays">Number of days: </label>
            <input name="numberOfDays" v-model.number="numberOfDay" type="number" placeholder="Number of days" min="0">
          </div>
          <div class="form-group">
              <label for="startDate">Country Code: </label>
            <input v-model="countryCode" placeholder="Country Code">
          </div>
           <div class="center">
            <datepicker class="finalDate" v-if="startDate" name="finalDate" :value="endDate"
            :minimumView="'day'" :maximumView="'day'" :disabledDates="disabledDates" inline="true" ></datepicker>
           </div>
  </form>
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
  watch: {
    startDate: function () {
      this.endDate = this.calculateEndDays()
    },
    numberOfDay: function () {
      this.endDate = this.calculateEndDays()
    }
  },
  computed: {
    disabledDates: function () {
      return {
        customPredictor: (date) => {
          if (date < this.startDate || date > this.endDate) {
            return true
          }
        }
      }
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
<style>
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
.finalDate .vdp-datepicker__calendar .cell {
   border: 1px solid black;
}
.finalDate .vdp-datepicker__calendar .weekend {
  background: yellow;
}
.finalDate .vdp-datepicker__calendar {
  background: green;
}
.finalDate .vdp-datepicker__calendar .disabled {
  background: grey;
  color: grey;
}
.finalDate .vdp-datepicker__calendar .blank {
  background: grey;
}
.center {
    margin: auto;
    width: 17%;
}
</style>
