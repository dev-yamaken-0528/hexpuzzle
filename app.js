var app = new Vue({
  el: '#app',
  data: {
    level: ''
  },
  created: function(){
  },
  mounted: function(){
    this.level = document.getElementById('level').value
  },
  methods: {
    clickhex: function(event){
      var delimiter = '_'
      var row   = Number(event.target.id.split(delimiter)[0])
      var col   = Number(event.target.id.split(delimiter)[1])

      var calc_max_num = 0
      if(this.level == 'easy'){
        calc_max_num = 3
      }
      if(this.level == 'normal'){
        calc_max_num = 5
      }
      if(this.level == 'hard'){
        calc_max_num = 7
      }

      var hex_id_c   = event.target.id
      var hex_id_l   = row + delimiter + (col-1)
      var hex_id_r   = row + delimiter + (col+1)
      var hex_id_u_l = (row-1) + delimiter + (col-calc_max_num)
      var hex_id_u_r = (row-1) + delimiter + (col-(calc_max_num-1))
      var hex_id_d_l = (row+1) + delimiter + (col+(calc_max_num-1))
      var hex_id_d_r = (row+1) + delimiter + (col+calc_max_num)

      if(document.getElementById(hex_id_l) != null){
        document.getElementById(hex_id_l).style.backgroundColor = "red"
      }
      if(document.getElementById(hex_id_r) != null){
        document.getElementById(hex_id_r).style.backgroundColor = "red"
      }
      if(document.getElementById(hex_id_u_l) != null){
        document.getElementById(hex_id_u_l).style.backgroundColor = "blue"
      }
      if(document.getElementById(hex_id_u_r) != null){
        document.getElementById(hex_id_u_r).style.backgroundColor = "blue"
      }
      if(document.getElementById(hex_id_d_l) != null){
        document.getElementById(hex_id_d_l).style.backgroundColor = "green"
      }
      if(document.getElementById(hex_id_d_r) != null){
        document.getElementById(hex_id_d_r).style.backgroundColor = "green"
      }
    },
  },
})


