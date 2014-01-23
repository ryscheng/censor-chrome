console.log("Modified by Censor Chrome");

function changeStory(i) {
//  var story = document.getElementById('news_hero');
  var story = document.getElementById('third-story');
  story.innerHTML = "<div class='large-image'> <h2i class='secondary-story-header'> <a class='story' href=''><img src='http://www.blackheritagetodayuk.com/wp-content/uploads/2011/10/london-school-of-economics-logo-300x300.jpg'> LSE MOVE ANNOUNCEMENT SHOCKER</a></h2> " +
  "<p>The London School of Economics has announced that it is moving it’s campus to Lichtenstein. The LSE will keep it’s branding and three letter logo despite. The soon-to-be Lichtenstein School of Economics will move in 2014. Students not willing to move with the institution will be allowed to complete their degree online… </p>";
}

changeStory(2);
//document.addEventListener("DOMContentLoaded", changeStory.bind({}, 1) , false);
