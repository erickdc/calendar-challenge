<template>
  <form class="center">

           <div class="form-group">
            <label for="startDate">Start Date: </label>
              <datepicker name="startDate" v-model="startDate" :bootstrap-styling="true"></datepicker>
           </div>
          <div class="form-group">
              <label for="numberOfDays">Number of days: </label>
            <input name="numberOfDays" v-model.number="numberOfDay" type="number" placeholder="Number of days" min="0" class="form-control">
          </div>
          <div class="form-group">
              <label for="startDate">Country Code: </label>
            <input v-model="countryCode" placeholder="Country Code" class="form-control">
          </div>
           <div class="form-group center">
            <datepicker class="finalDate" v-if="startDate" name="finalDate" :value="startDate"
            :minimumView="'day'" :maximumView="'day'" :disabledDates="disabledDates" :inline="true"
            :bootstrap-styling="true"></datepicker>
           </div>
  </form>
</template>

<script>
import Datepicker from 'vuejs-datepicker'
import { addDays, dateWithoutTime } from '../utils/index'
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
          const currentDateWithoutTime = dateWithoutTime(date)
          const startDateWithoutTime = dateWithoutTime(this.startDate)
          const endDateWithoutTime = dateWithoutTime(this.endDate)
          return currentDateWithoutTime < startDateWithoutTime ||
          currentDateWithoutTime > endDateWithoutTime
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
  background: #F3F905;
}
.finalDate .vdp-datepicker__calendar {
  background: #BCDD94;
}
.finalDate .vdp-datepicker__calendar .disabled {
  background: #CCCCCC;
  color: #CCCCCC;
}
.finalDate .vdp-datepicker__calendar .blank {
  background:#CCCCCC;
}
.center {
    margin: 0 auto;
    width: 50%
}
</style>
