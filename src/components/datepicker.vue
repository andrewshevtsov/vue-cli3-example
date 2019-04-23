<template>
  <div>
    <input type="text" ref="testcalendar" class="form-control" :value="value" />
  </div>
</template>

<script>
import flatpickr from 'flatpickr'
import 'flatpickr/dist/flatpickr.css'

export default {
  name: 'Datepicker',
  props: {
    value: {
      type: String,
      required: true
    }
  },
  data: () => ({
    fp: null
  }),
  watch: {
    value: 'updateDatepicker'
  },
  mounted() {
    this.initCalendar()
  },
  beforeDestroy() {
    this.destroyCalendar()
  },
  methods: {
    initCalendar() {
      this.fp = flatpickr(this.$refs.testcalendar, {
        dateFormat: 'd.m.Y',
        onChange: (selectedDates, dateStr) => {
          this.$emit('input', dateStr)
        }
      })
    },
    updateDatepicker() {
      if (this.fp) {
        this.fp.setDate(this.value)
      }
    },
    destroyCalendar() {
      if (this.fp) {
        this.fp.destroy()
      }
    }
  }
}
</script>
