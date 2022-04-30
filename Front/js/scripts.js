var counter = 0;

// Increase Guest count on main page
$("#plus").click(function(){
    counter++;
    $("#count").text(counter);
});

// Decrease guest count on main page
$("#minus").click(function(){
    counter--;
    $("#count").text(counter);
});

