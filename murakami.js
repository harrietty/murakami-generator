// Create a 2D array with a selection of quotes as objects. 
// Record topic, source, and theme
// THEMES: loneliness, happiness, cats, love, wells, transience

var quotes = [
{
	quote: "Why do people have to be this lonely? What\'s the point of it all? Millions of people in this world, all of them yearning, looking to others to satisfy them, yet isolating themselves. Why? Was the earth put here just to nourish human loneliness?",
	source: "Sputnik Sweetheart",
	theme: "loneliness"
},
{
	quote: "Nobody likes being alone that much. I don\'t go out of my way to make friends, that\'s all. It just leads to disappointment.",
	source: "Norwegian Wood",
	theme: "loneliness"
},
{
	quote: "But who can say what\'s best? That\'s why you need to grab whatever chance you have of happiness where you find it, and not worry about other people too much. My experience tells me that we get no more than two or three such chances in a life time, and if we let them go, we regret it for the rest of our lives.",
	source: "Norwegian Wood",
	theme: "happiness"
},
{
	quote: "But I didn\'t understand then. That I could hurt somebody so badly she would never recover. That a person can, just by living, damage another human being beyond repair.",
	source: "South of the Border, West of the Sun",
	theme: "love"
},
{
	quote: "I was always hungry for love. Just once, I wanted to know what it was like to get my fill of it -- to be fed so much love I couldn\'t take any more. Just once.",
	source: "Norwegian Wood",
	theme: "love"
},
{
	quote: "She waited for the train to pass. Then she said, \"I sometimes think that people\'s hearts are like deep wells. Nobody knows what\'s at the bottom. All you can do is imagine by what comes floating to the surface every once in a while.\" ",
	source: "Blind Willow, Sleeping Woman",
	theme: "wells"
},
{
	quote: "If you can love someone with your whole heart, even one person, then there\'s salvation in life. Even if you can\'t get together with that person.",
	source: "1Q84",
	theme: "love"
},
{
	quote: "In this world, there are things you can only do alone, and things you can only do with somebody else. It\'s important to combine the two in just the right amount.",
	source: "After Dark",
	theme: "love"
},
{
	quote: "Two people can sleep in the same bed and still be alone when they close their eyes.",
	source: "Hard-Boiled Wonderland and the End of the World",
	theme: "love"
},
{
	quote: "What do you think? I\'m not a starfish or a pepper tree. I'm a living, breathing human being. Of course I\'ve been in love.",
	source: "Kafka on the Shore",
	theme: "love"
},
{
	quote: "Holding this soft, small living creature in my lap this way, though, and seeing how it slept with complete trust in me, I felt a warm rush in my chest. I put my hand on the cat\'s chest and felt his heart beating. The pulse was faint and fast, but his heart, like mine, was ticking off the time allotted to his small body with all the restless earnestness of my own.",
	source: "The Wind-Up Bird Chronicle",
	theme: "cats"
},
{
	quote: "You\'re not a kid anymore. You have the right to choose your own life. You can start again. If you want a cat, all you have to do is choose a life in which you can have a cat. It\'s simple. It\'s your right.",
	source: "The Wind-Up Bird Chronicle",
	theme: "cats"
},
{
	quote: "What I think is this: You should give up looking for lost cats and start searching for the other half of your shadow.",
	source: "Kafka on the Shore",
	theme: "cats"
},
{
	quote: "Far away, I could hear them lapping up my brains. Like Macbeth\'s witches, the three lithe cats surrounded my broken head, slurping up that thick soup inside.",
	source: "Bind Willow, Sleeping Woman",
	theme: "cats"
},
{
	quote: "So that\'s how we live our lives. No matter how deep and fatal the loss, " +
	"no matter how important the thing that\'s stolen from us - that\'s snatched right out of " +
	"our hands - even if we are left completely changed, with only the outer layer of skin from" +
	" before, we continue to play out our lives this way, in silence. We draw ever nearer to the " +
	"end of our allotted span of time, bidding it farewell as it trails off " + 
	"behind. Repeating, often adroitly, the endless deeds of the everyday. " +
	"Leaving behind a feeling of insurmountable emptiness...",
	source: "Sputnik Sweetheart",
	theme: "transience"
},
{
	quote: "I am nothing. I\'m like someone who\'s been thrown into the ocean at night, floating all alone. I reach out, but no one is there. I call out, but no one answers. I have no connection to anything.",
	source: "1Q84",
	theme: "loneliness"
},
{
	quote: "I\'m the kind of person who likes to be by himself. To put a finer point on it, " +
	"I\'m the type of person who doesn\'t find it painful to be alone. I find spending an hour" +
	" or two every day running alone, not speaking to anyone, as well as four or five hours " +
	"alone at my desk, to be neither difficult nor boring. I\'ve had this tendency ever since" +
	" I was young, when, given a choice, I much preferred reading books on my own or " +
	"concentrating on listening to music over being with someone else. I could always think of " +
	"things to do by myself.",
	source: "What I Talk About When I Talk About Running",
	theme: "loneliness"
},
{
	quote: "Wasn\'t it better if they kept this desire to see each other hidden within them, " +
	"and never actually got together? That way, there would always be hope in their hearts. " +
	"That hope would be a small, yet vital flame that warmed them to their core -- a tiny flame" +
	" to cup one\'s hands around and protect from the wind, a flame that the violent winds of " +
	"reality might easily extinguish.",
	source: "1Q84",
	theme: "love"
},
{
	quote: "The point is, not to resist the flow. You go up when you\'re supposed to go up and " +
	"down when you\'re supposed to go down. When you\'re supposed to go up, find the highest tower " +
	"and climb to the top. When you\'re supposed to go down, find the deepest well and go down " +
	"to the bottom. When there\'s no flow, stay still. If you resist the flow, everything dries up. " +
	"If everything dries up, the world is darkness.",
	source: "The Wind-Up Bird Chronicle",
	theme: "wells"
},
{
	quote: "As we go through life we gradually discover who we are, but the more we discover, " +
	"the more we lose ourselves.",
	source: "The Colorless Tsukuru Tazaki and His Years of Pilgrimage",
	theme: "transience"
},
{
	quote: "With my eyes closed, I would touch a familiar book and draw its fragrance deep " +
	"inside me. This was enough to make me happy.",
	source: "Norwegian Wood",
	theme: "happiness"
},
{
	quote: "People die all the time. Life is a lot more fragile than we think. So you should " +
	"treat others in a way that leaves no regrets. Fairly, and if possible, sincerely. It\'s " +
	"too easy not to make the effort, then weep and wring your hands after the person dies.",
	source: "Dance Dance Dance",
	theme: "transience"
},
{
	quote: "I began to draw an invisible boundary between myself and other people. No matter " +
	"who I was dealing with. I maintained a set distance, carefully monitoring the person\'s " +
	"attitude so that they wouldn’t get any closer. I didn\'t easily swallow what other people " +
	"told me. My only passions were books and music.",
	source: "Sputnik Sweetheart",
	theme: "loneliness"
},
{
	quote: "As long as there\'s such a thing as time, everybody\'s damaged in the end, changed " +
	"into something else. It always happens, sooner or later.",
	source: "Kafka on the Shore",
	theme: "transience"
},
{
	quote: "A person learns how to love himself through the simple acts of loving and being " +
	"loved by someone else.",
	source: "1Q84",
	theme: "love"
},
{
	quote: "I may be the type who manages to grab all the pointless things in life but " +
	"lets the really important things slip away.",
	source: "Blind Willow, Sleeping Woman",
	theme: "transience"
},
{
	quote: "They sat on a park bench, held hands, and told each other their stories hour after " +
	"hour. They were not lonely anymore. They had found and been found by their 100% perfect other. " +
	"What a wonderful thing it is to find and be found by your 100% perfect other. It\'s " +
	"a miracle, a cosmic miracle.",
	source: "1Q84",
	theme: "love"
}

]





	//hide output div

	$('#output').hide();

	// Create a function for constructing the quote output

	function generateQuote(divID, theme) {

	// When the 'cat' button is clicked

	$(divID).click(function(){

		// While (true)

		while (true) {

			// Calculate number of items in array

			length = quotes.length;

			// Pick a random number between 0 and array length

			var num = Math.floor(Math.random() * length);

			// If the key of the object of this random number === "theme"

			if ( quotes[num].theme === theme) {

				// Construct HTML from this object
				$('#output').show();
				var html = "<p id='quote'>&ldquo;" + quotes[num].quote + "&rdquo;</p>";
				html += "<p id='source'>" + quotes[num].source + "</p>";

				// Break

				break;
				}
			}
	// Place the constructed HTML into the output div
				
	document.getElementById('output').innerHTML = html;

});
		}

// Call function for all the different themes

generateQuote("#cats", "cats");
generateQuote("#wells", "wells");
generateQuote("#love", "love");
generateQuote("#happiness", "happiness");
generateQuote("#transience", "transience");
generateQuote("#loneliness", "loneliness");




