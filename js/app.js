// 1. When the user's mouse passes over the text "How are these ranked?", hide/show the text inside the #helpText span element. (Hint: use the jQuery toggle() method inside your event handler)
$('#helpText').on('mouseover', function(){
  $('#helpText span').toggle();
});

// 2. Append a new restaurant to the restaurant list when the user enters a value into the #newRestaurant input and clicks on the #addNew button.
$('#addNew').on('click', function(){
  const newBike = $('#newBikeInput').val();
  $('ul').append('<li>' + newBike + '</li>');
 });

  // BONUS: Before appending the new restaurant to the list, use string concatentation to make sure the new restaurant name is surrounded by an opening and closing <li> tag.
  //$('ul').append('<li>' + newRestaurant + '</li>');

// 3. Add the class "strike" to the restaurant name each time it's double clicked. Use event delegation on the ul element to listen for a click event on the ul's list items
$('ul').on('dblclick', 'li', function(event){
  $(event.target).addClass('strike');
});
//BONUS: Refactor your code above using the "this" keyword.
//BONUS: Look up a jQuery method that will let you toggle the .strike class on and off.
//$('ul').on('dblclick', 'li', function(){
//  $(this).toggleClass('strike);
//});

// 1. Show the hidden restaurant review, or use an animation method to reveal it.
$('.review').fadeIn();

// 2. Set the title of the existing restaurant review.
$('.review h3').text('Dat Bike');

// 3. Change the text of the restaurant review. The review should contain HTML, such as a strong tag or a span element.
$('.review p').html('The <strong>very</strong> best bike in the nation!');

// 4. Change the name of the app. Change *only* the text inside the span element within the h1.
$('h1 span').text("Dave's!");

// 5. Create an animation for the paragraph with the id of "flashMessage." Chain an animation that

$('#flashMessage').hide().slideDown(1000).delay(3000).slideUp();

// 6. Inside the click handler, create a working restaurant review form.
$('#submitBtn').click(function(){
  //  a. Use the val() method to get the values from the restaurant name and restaurant review  input fields. Save them both to variables.
  const bikeName = $('#bikeNameInput').val();
  const bikeReview = $('#bikeReviewInput').val();
  //  b. Insert the restaurant name value into the #newRestaurant h3 tag
  $('#newBike h3').text(bikeName);
  //  c. Insert the restaurant review value into the #newRestaurant paragraph tag
  $('#newBike p').text(bikeReview);
});

$('.your-checkbox').prop('indeterminate', true)
