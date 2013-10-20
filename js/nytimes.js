console.log("Modified by Censor Chrome");

function changeStory(i) {
  var stories = document.getElementsByClassName('story');
  stories[i].innerHTML = "<h3><a>Google Ideas Summit Cancelled</a></h3>"+
                        "<h6 class='byline'>By EVIL EVE <span class='timestamp' data-eastern-timestamp=' 6:26 PM' data-utc-timestamp='1382048781000'></span></h6>" + 
                        "<img width='100px' src='http://www.google.com/ideas/images/ideas-logo.png'>" + 
                        "<p class='summary'>In an embarrassing turn of events, the Google Ideas Summit has just been cancelled. Why didn't they prepare for this scenario? Read more to find out.</p>" + 
                        "<ul class='refer commentsRefer'><li class='commentLink'> </li></ul>";
}

//changeStory(2);
document.addEventListener("DOMContentLoaded", changeStory.bind({}, 1) , false);
