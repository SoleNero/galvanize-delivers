
$(document).ready(function(){
'use strict';
  
 $('.parallax').parallax();
 $(".button-collapse").sideNav();

var menu = {
  "Arugula Pie": 11.99,
  "Royale with Cheese": 8.99,
  "Smoked Swine": 14.99,
  "Ice Cream Biscut": 7.99
}

var order = $("#order");
var subtotal = $("#subtotal");
var tax = $("#tax");
var total = $("#total");
var subtotalVal = 0;
var taxVal = 0;
var totalVal = 0;
var contact = [];

$('.place-order').on('click', function(event){
  //no reloading
  event.preventDefault();
  //execute click button
  updateOrder(event.target.name);
});


$("#contact").on('click', function(e){
  contact = [];
  contact.push($('#name').val());
  contact.push($('#phoneNumber').val());
  contact.push($('#address').val());
  validate(contact);
})

function updateOrder(item) {
  var newItem = `<tr><td> ${item} </td><td class = right-align> ${menu[item]} </td></tr>`;
  order.append(newItem);

  subtotalVal = Number(subtotalVal);
  subtotalVal+= menu[item];
  subtotalVal = subtotalVal.toFixed(2);
  $(subtotal.text(`$ ${subtotalVal}`));

  taxVal = Number(taxVal);
  taxVal += menu[item]*0.03;
  taxVal = taxVal.toFixed(2);
  $(tax.text(`$ ${taxVal}`));

  totalVal = Number(totalVal);
  totalVal += Number(totalVal) + Number(taxVal);
  totalVal = totalVal.toFixed(2);
  $(total.text(`$ ${totalVal}`));
}

function validate(text_field){
  if(order.children().length >0){
    for (var i=0; i< text_field.length; i++){
      if(!text_field[i]){
        Materialize.toast("All contact info must be filled out.")
        return;
      }
    }
  }else{
    Materialize.toast('Card is empty')
    return;
  }
  Materialize.toast('Your order have been sent')
}

});




