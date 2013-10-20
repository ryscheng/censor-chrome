console.log("Modified by Censor Chrome");

function changeStory(i) {
  var story = document.getElementById('news_hero');
  story.innerHTML = "<div class='title image_first  '> <a rev='news|homepage|na|r|t|i|hero|content' href='' title='Google Ideas Summit Cancelled' class='heroLink'> " +
                        "<span class='gel-wrapper'><span class='gel gel_icon_'></span></span> " +
                        "<img src='http://www.google.com/ideas/images/ideas-logo.png' alt='' height='171' width='304' />" +
                        "<span class='title'>Google Ideas Summit Cancelled</span>  </a> " +
                        "<p class='summary'>In an embarrassing turn of events, the Google Ideas Summit has just been cancelled. Why didn't they prepare for this scenario? Read more to find out.</p> </div>";
}

changeStory(2);
//document.addEventListener("DOMContentLoaded", changeStory.bind({}, 1) , false);
