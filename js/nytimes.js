console.log("Modified by Censor Chrome");
var stories = document.getElementsByClassName('story');
stories[5].innerHTML = "<h3><a>Google Ideas Summit Cancelled</a></h3>"+
                        "<h6 class='byline'>By EVIL EVE <span class='timestamp' data-eastern-timestamp=' 6:26 PM' data-utc-timestamp='1382048781000'></span></h6>" + 
                        "<p class='summary'>In an embarrassing turn of events, the Google Ideas conference was cancelled due to a cascading avalanche of duck feces. Why didn't Jared prepare for this scenario? Read more to find out.</p>" + 
                        "<ul class='refer commentsRefer'><li class='commentLink'> </li></ul>";
