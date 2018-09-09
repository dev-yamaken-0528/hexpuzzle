var app = new Vue({
  el: '#app',
  data: {
  },
  created: function(){
  },
  mounted: function(){
  },
  methods: {
    clickhex: function(event){
      var row = Number(event.target.id.split('_')[0])
      var col = Number(event.target.id.split('_')[1])
      var left = row + '_' + (col-1)
      var right = row + '_' + (col+1)
      var up_left = (row-1) + '_' + (col-1)
      var up_right = (row-1) + '_' + (col)
      var down_left = (row-1) + '_' + col
      var down_right = row + '_' + col
      console.log('----------')
      console.log("target["+event.target.id+"]")
      //document.getElementById(left).style.backgroundColor = "red"
      //document.getElementById(right).style.backgroundColor = "red"
      document.getElementById(up_left).style.backgroundColor = "red"
      document.getElementById(up_right).style.backgroundColor = "red"
    },
  },
})


