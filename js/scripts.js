var iRandomNumber;



 //business logic
 function die() {
  iRandomNumber = Math.ceil(Math.random()*6);
 }


 // user interface logic
 $(document).ready(function() {

   $("form#new-contact").submit(function(event) {
     event.preventDefault();


     var inputtedFirstName = $("input#new-first-name").val();
     var inputtedLastName = $("input#new-last-name").val();

     var newContact = new Contact(inputtedFirstName, inputtedLastName);
     $(".new-address").each(function() {
       var inputtedStreet = $(this).find("input.new-street").val();
       var inputtedCity = $(this).find("input.new-city").val();
       var inputtedCounty = $(this).find("input.new-county").val();
       var newAddress = new Address(inputtedStreet, inputtedCity, inputtedCounty);
       newContact.addresses.push(newAddress);
     });
     $("ul#contacts").append("<li><span class='contact'>" + newContact.fullName() + "</span></li>");
     $(".contact").last().click(function() {});
     $("#show-contact").show();
     $("#show-contact h2").text(newContact.firstName);
     $(".first-name").text(newContact.firstName);
     $(".last-name").text(newContact.lastName);
     $("ul#addresses").text("");
     newContact.addresses.forEach(function(address) {
       $("ul#addresses").append("<li>" + address.fullAddress() + "</li>");
     });

     $("input#new-first-name").val("");
     $("input#new-last-name").val("");
     $("input.new-street").val("");
     $("input.new-city").val("");
     $("input.new-county").val("");
   });
 });
