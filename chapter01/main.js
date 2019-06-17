
var app = new Vue({
  el: '#app',
  data: {
  	message: 'Hello Vue.js!',
  	list: ['いのしし', 'しか', 'ちょう'],
  	messageForm: 'フォームと入力が同期する',
  	show: true
  },
  methods: {
  	handleClick: function (event) {
  		console.log('ボタンを押した')
  		alert(event.target)
  	}
  },
})


