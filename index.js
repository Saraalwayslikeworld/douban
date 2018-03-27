// $('footer>div').on('click',function(){
//   var idx = $(this).index()
//   $(this).addClass('active').siblings().removeClass('active')
//   $('section').hide().eq(idx).fadeIn()
// })
// $.ajax({
//   url:"http://api.douban.com/v2/movie/top250",
//   type:"GET",
//   data:{
//     start:0,
//     count:20
//   },
//   dataType:"jsonp"
// }).done(function(ret){
//   console.log(ret)
//   loadData(ret)
// }).fail(function(){
//   console.log('error')
// })
// function loadData(data){
//   var subjects = data.subjects
//   console.log(subjects)
//   subjects.forEach(function(movie){
//     $('.top250').append('<div class="movie">\
//     <a href="#"></a>\
//     <img src="https://picsum.photos/200/200/?image=1" alt="">\
//     <div class="msg">\
//       <h2>movie</h2>\
//       <div><span class="score">9.4</span>分/<span class="collect">1111</span>收藏</div>\
//       <div class="type">1994/爱情</div>\
//       <div>导演：<span class="director">lio</span></div>\
//       <div>主演：<span class="actor">mary</span></div>\
//     </div>\
//   </div>')
//     var actors = []
//     movie.casts.forEach(function(actor){
//       actors.push(actor.name)
//     })
//     var type = movie.year + "/" +  movie.genres.join("/")
//     actors.join("、")
//     $('.movie>a').last().attr('href',movie.alt)
//     $('.movie>img').last().attr('src',movie.images.small)
//     $('.movie .msg>h2').last().text(movie.title)
//     $('.movie .msg .score').last().text(movie.rating.average)
//     $('.movie .msg .collect').last().text(movie.collect_count)
//     $('.movie .msg .type').last().text(type)
//     $('.movie .msg .director').last().text(movie.directors[0].name)
//     $('.movie .msg .actor').last().text(actors)
//   });
// }
var app = {
  init:function(){

    top250.init()
    box.init()
    search.init()
  }
}
var top250 = {
  init: function(){
    
  }
}
