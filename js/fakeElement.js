var fakeElement = {};

fakeElement.constanants = 'b c d f g k l m n p q r s t v x z'.split(' ');
fakeElement.vowels = 'a e i o u y'.split(' ');
fakeElement.categories = 'photo project events'.split(' ');
fakeElement.suffices = 'on ium ogen'.split(' ');
fakeElement.titles = 'Eget facilisi eros ullamcorper eu nullam ultrices, Lorem ipsum dolor amet eget mauris semper, Et est dicam inermis signiferumque, Porttitor pharetra sodales tellus massa mauris'.split(',');

fakeElement.images = '1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16'.split(' ');
fakeElement.getRandom = function(property) {
	var values = fakeElement[property];
	return values[ Math.floor(Math.random() * values.length)];
};
fakeElement.create = function(count) {
	var category = fakeElement.getRandom('categories');
	image = fakeElement.getRandom('images');
	title = fakeElement.getRandom('titles');
	
	category = fakeElement.getRandom('categories');
	className = 'element ' + category;
	
	return '<div data-category="' + category + '" class="' + category + ' element"><div class="hover_img"><img src="images/media/thumbs/'+ image +'.jpg" alt="" width="220" height="155"><span class="zoom"><a href="images/media/'+ image +'.jpg" data-rel="prettyPhoto[media1]"></a></span><span class="link"><a href="media_post.html">View item</a></span><span class="item_title">'+ title +'</span></div></div>';
	
};
fakeElement.getGroup = function(count) {
	var i = Math.ceil(count), newEls = '';
	while (i--) {
		newEls += fakeElement.create(count);
	}
	return newEls;
};

