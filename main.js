
var app = new Vue({
  el: '#app',
  data: {
    message: 'カレー',
    menu: {
      value: 'supercalifragilisticexpialidocious'
    },
    list: ['鼻', '喉', '耳'],
    count: 0,
    isActive: true,
    bgColor: '#E2E0FF'
  },
  methods: {
    increment: function () {
      this.count += 1 
    }
  }
})

