
// $('footer>div').on('click',function(){
//   var idx = $(this).index()
//   $(this).addClass('active').siblings().removeClass('active')
//   $('section').hide().eq(idx).fadeIn()
// })
// var idx = 0
// function getData(callback){ 
//   $.ajax({
//     url:"http://api.douban.com/v2/movie/top250",
//     type:"GET",
//     data:{
//       start:idx,
//       count:20
//     },
//     dataType:"jsonp"
//   }).done(function(ret){
//     console.log(ret)
//     $('#top250>.loading').hide()
//     callback(ret)
//     idx +=20
//   }).fail(function(){
//     console.log('error...')
//   }).always(function(){
//     $('#top250>.loading').show()
//   })
// }
// function render(data){
//   var subjects = data.subjects
//   console.log(subjects)
//   subjects.forEach(function(movie){
//     var tpl = '<div class="movie">\
//     <a href="#"></a>\
//     <img src="https://picsum.photos/200/200/?image=1" alt="">\
//     <div class="msg">\
//       <h2>movie</h2>\
//       <div><span class="score">9.4</span>分/<span class="collect">1111</span>收藏</div>\
//       <div class="type">1994/爱情</div>\
//       <div>导演：<span class="director">lio</span></div>\
//       <div>主演：<span class="actor">mary</span></div>\
//     </div>\
//     </div>'
//     var $node = $(tpl)
//     var actors = []
//     movie.casts.forEach(function(actor){
//       actors.push(actor.name)
//     })
//     var type = movie.year + "/" +  movie.genres.join("/")
//     actors.join("、")
//     $node.find('a').attr('href',movie.alt)
//     $node.find('img').attr('src',movie.images.small)
//     $node.find('.msg>h2').text(movie.title)
//     $node.find('.msg .score').text(movie.rating.average)
//     $node.find('.msg .collect').text(movie.collect_count)
//     $node.find('.msg .type').text(type)
//     $node.find('.msg .director').text(movie.directors[0].name)
//     $node.find('.msg .actor').text(actors)
//     $('#top250>.content').append($node)
//   })  
// }
// function start(){
//   getData(function(data){render(data)})
// }
// start()
// var clock 
// $('section').scroll(function(){
//   if(clock){
//     clearTimeout(clock)
//   }
//   clock = setTimeout(function(){
//     if($('.content').height()-10 <= ($('section').height() + $('section').scrollTop())){
//       start()
//     }
//   },300)
// })

var top250 = {
  init:function(){
    this.idx = 0
    this.$container = $('#top250')
    this.$content = $('#top250>.content')
    this.start()
  },
  bind:function(){
    var _this = this
    var clock
    _this.$container.scroll(function(){
      if(clock){
        clearTimeout
      }
      clock = setTimeout(function(){
        if(_this.$content.height()-20 <= _this.$container.height() + _this.$container.scrollTop()){
          start()
        }
      },300)
    })
  },
  start: function(){
    var _this = this
    this.getData(function(data){
      _this.render(data)
    })
  },
  getData:function(callback){
    var _this = this
    $.ajax({
      url:"http://api.douban.com/v2/movie/top250",
      type:"GET",
      data:{
        start:_this.idx,
        count:20
      },
      dataType:"jsonp"
    }).done(function(data){
      _this.idx +=20
      $('#top250>.loading').hide()
      callback(data)
    }).fail(function(){
      console.log("error...")
    }).always(function(){
      $('#top250>.loading').show()
    })
  },
  render: function(data){
    var _this = this
    data.subjects.forEach(function(movie){
      var tpl = '<div class="movie">\
        <a href="#"></a>\
        <img src="https://picsum.photos/200/200/?image=1" alt="">\
        <div class="msg">\
          <h2>movie</h2>\
          <div><span class="score">9.4</span>分/<span class="collect">1111</span>收藏</div>\
          <div class="type">1994/爱情</div>\
          <div>导演：<span class="director">lio</span></div>\
          <div>主演：<span class="actor">mary</span></div>\
        </div>\
      </div>'
      var $node = $(tpl)
      var actors = []
      movie.casts.forEach(function(actor){
        actors.push(actor.name)
      })
      var type = movie.year + "/" +  movie.genres.join("/")
      actors.join("、")
      $node.find('a').attr('href',movie.alt)
      $node.find('img').attr('src',movie.images.small)
      $node.find('.msg>h2').text(movie.title)
      $node.find('.msg .score').text(movie.rating.average)
      $node.find('.msg .collect').text(movie.collect_count)
      $node.find('.msg .type').text(type)
      $node.find('.msg .director').text(movie.directors[0].name)
      $node.find('.msg .actor').text(actors)
      _this.$content.append($node)
    })
  }
}
var box = {
  init:function(){
    this.idx = 0
    this.$container = $('#ticket')
    this.$content = $('#ticket>.content')
    this.start()
  },
  bind:function(){
    var _this = this
    var clock
    this.$container.scroll(function(){
      console.log('scroll')
      if(clock){
        clearTimeout
      }
      clock = setTimeout(function(){
        if(_this.$content.height()-20 <= _this.$container.height() + _this.$container.scrollTop()){
          start()
  
        }
      },300)
    })
  },
  start: function(){
    var _this = this
    this.getData(function(data){
      _this.render(data)
    })
  },
  getData:function(callback){
    var _this = this
    $.ajax({
      url:"http://api.douban.com/v2/movie/us_box",
      type:"GET",
      data:{
        start:_this.idx,
        count:20
      },
      dataType:"jsonp"
    }).done(function(data){
      _this.idx +=20
      $('#ticket>.loading').hide()
      console.log(data)
      callback(data)
    }).fail(function(){
      console.log("error...")
    }).always(function(){
      $('#ticket>.loading').show()
    })
  },
  render: function(data){
    var _this = this
    data.subjects.forEach(function(subjects){
      movie = subjects.subject
      var tpl = '<div class="movie">\
        <a href="#"></a>\
        <img src="https://picsum.photos/200/200/?image=1" alt="">\
        <div class="msg">\
          <h2>movie</h2>\
          <div><span class="score">9.4</span>分/<span class="collect">1111</span>收藏</div>\
          <div class="type">1994/爱情</div>\
          <div>导演：<span class="director">lio</span></div>\
          <div>主演：<span class="actor">mary</span></div>\
        </div>\
      </div>'
      var $node = $(tpl)
      var actors = []
      movie.casts.forEach(function(actor){
        actors.push(actor.name)
      })
      var type = movie.year + "/" +  movie.genres.join("/")
      actors.join("、")
      $node.find('a').attr('href',movie.alt)
      $node.find('img').attr('src',movie.images.small)
      $node.find('.msg>h2').text(movie.title)
      $node.find('.msg .score').text(movie.rating.average)
      $node.find('.msg .collect').text(movie.collect_count)
      $node.find('.msg .type').text(type)
      $node.find('.msg .director').text(movie.directors[0].name)
      $node.find('.msg .actor').text(actors)
      _this.$content.append($node)
    })
  },

}
var search = {
  init:function(){

  },
  bind:function(){

  },
}
//总控制模块
var app = {
  init:function(){
    this.$tabs = $('footer>div')
    this.$panels = $('section')
    this.bind()
    box.init()
    search.init()
    top250.init()
  },
  bind:function(){ //切换页面功能
    var _this = this
    this.$tabs.on('click',function(){
    var idx = $(this).index()
    $(this).addClass('active').siblings().removeClass('active')
    _this.$panels.hide().eq(idx).fadeIn()
    })
  }
}
app.init()     



