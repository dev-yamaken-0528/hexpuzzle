var app = new Vue({
  el: '#app',
  data: {
    level: '',
    rand: 3,
    row_max: 0,
    col_max: 0,
    score: 0,
  },
  created: function(){
  },
  mounted: function(){
    this.level = document.getElementById('level').value

    if(this.level == 'easy')  {
      this.row_max = 5
      this.col_max = 3
    }
    if(this.level == 'normal'){
      this.row_max = 7
      this.col_max = 5
    }
    if(this.level == 'hard')  {
      this.rand = 5
      this.row_max = 9
      this.col_max = 7
    }

    var rand = 0
    var colcount = 0

    for(var row_idx=0; row_idx<this.row_max; row_idx++){
      var t_col_max = ((row_idx%2)==0) ? (this.col_max-1) : this.col_max
      for(var col_idx=0; col_idx<t_col_max; col_idx++){
        rand = Math.floor( Math.random() * (this.rand + 1 - 1) ) + 1
        document.getElementById( row_idx + '_' + colcount ).style.backgroundColor = this.bgcolor_by_rand( rand )
        colcount++
      } 
    }

  },
  methods: {
    clickhex: function(event){
      var sel_color = document.getElementById( event.target.id ).style.backgroundColor
      this.set_rand_color( event.target.id )
      this.adjacent_hex( event.target.id, sel_color )
    },
    adjacent_hex: function(target, sel_color){
      var delimiter = '_'
      var row   = Number(target.split(delimiter)[0])
      var col   = Number(target.split(delimiter)[1])
      var hex_id_c   = target
      var hex_id_l   = row + delimiter + (col-1)
      var hex_id_r   = row + delimiter + (col+1)
      var hex_id_u_l = (row-1) + delimiter + (col-this.col_max)
      var hex_id_u_r = (row-1) + delimiter + (col-(this.col_max-1))
      var hex_id_d_l = (row+1) + delimiter + (col+(this.col_max-1))
      var hex_id_d_r = (row+1) + delimiter + (col+this.col_max)
      var hex_id_list = [ hex_id_c, hex_id_l, hex_id_r, hex_id_u_l, hex_id_u_r, hex_id_d_l, hex_id_d_r ]
      for(var i=0; i<hex_id_list.length; i++){
        var hex_id = hex_id_list[i]
        if( document.getElementById( hex_id ) != null ){
          if( document.getElementById( hex_id ).style.backgroundColor == sel_color ){
            this.score++
            this.set_rand_color( hex_id )
            this.adjacent_hex( hex_id, sel_color )
          }
        }
      }
    },
    set_rand_color: function( target ){
      var rand = Math.floor( Math.random() * (this.rand + 1 - 1) ) + 1
      document.getElementById( target ).style.backgroundColor = this.bgcolor_by_rand( rand )
    },
    bgcolor_by_rand(rand){
      var bgcolor = ''
      //if(rand == 1){ bgcolor = '#C6CAED' }
      //if(rand == 2){ bgcolor = '#ADA8BE' }
      //if(rand == 3){ bgcolor = '#A28497' }
      //if(rand == 4){ bgcolor = '#6F5E5C' }
      //if(rand == 5){ bgcolor = '#4A5240' }
      if(rand == 1){ bgcolor = '#644536' }
      if(rand == 2){ bgcolor = '#b2675e' }
      if(rand == 3){ bgcolor = '#c4a381' }
      if(rand == 4){ bgcolor = '#bbd686' }
      if(rand == 5){ bgcolor = '#eef1bd' }
      return bgcolor
    }
  },
})

