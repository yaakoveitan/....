"use strict";

/*
   New Perspectives on HTML5, CSS3, and JavaScript 6th Edition
   Tutorial 13
   Tutorial Case

   Order Form Script
   
   Author: 
   Date:   
   
   Filename: co_order.js
   
   Function List
   =============
   
   calcOrder()
      Calculates the cost of the customer order
      
   formatNumber(val, decimals)
      Format a numeric value, val, using the local
      numeric format to the number of decimal
      places specified by decimals
      
   formatUSACurrency(val)
      Formats val as U.S.A. currency
   
*/

window.addEventListener("load", function(){
	var orderForm = document.forms.orderForm;
	
	
	calcOrder();
	
	orderForm.elements.qty1.onchange = calcOrder;
	orderForm.elements.qty2.onchange = calcOrder;
	orderForm.elements.qty3.onchange = calcOrder;

});
function calcOrder(){
	var orderForm = document.forms.orderForm;
	
	var cost1 = 5;
	var cost2 = 7;
	var cost3 = 10;

	var qIndex1 = orderForm.elements.qty1.selectedIndex;
	var quantity1 = orderForm.elements.qty1[qIndex1].value;
	
	var qIndex2 = orderForm.elements.qty2.selectedIndex;
	var quantity2 = orderForm.elements.qty2[qIndex2].value;
	
	var qIndex3 = orderForm.elements.qty3.selectedIndex;
	var quantity3 = orderForm.elements.qty3[qIndex3].value;
	
	var initialCost = (quantity1 * cost1) + (quantity2 * cost2) + (quantity3 * cost3);
	
	//orderForm.elements.initialCost.value = formatUSCurrency(initialCost)	
	
	orderForm.elements.subtotal.value = formatNumber((initialCost),2);
	
	orderForm.elements.salesTax.value = formatNumber((0.08*(initialCost)),2);
	
	var total = 0.05*(initialCost) + (initialCost);
	orderForm.elements.totalCost.value = formatUSCurrency(total);

	
	
}

function formatNumber(val, decimals){
	
	return val.toLocaleString(undefined,{
		minimumFractionDigits:decimals,
		maximumFractionDigits:decimals
	});
}

function formatUSCurrency(val){
	
	return val.toLocaleString('en-US',{
		style:"currency", currency:"USD"
	});
}


