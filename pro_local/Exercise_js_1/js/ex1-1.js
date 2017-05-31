"use strict";
var memory = prompt( 'Укажите желаемый объем памяти в ГБ - 32, 64 или 128', '' );
while( memory != 32 && memory!=64 && memory!=128 ){
	if (memory==null){
		alert('Good Bye!');
		throw new Error("stop"); }
  memory = prompt( 'Ещё раз: 32, 64 или 128', '' );
}
 var basic_price;
 memory=='64' ? basic_price=500 :
 memory=='128' ? basic_price=700 : basic_price=400;
 document.write( 'Объем памяти   ', memory, ' ГБайт' );
 var color = prompt( 'Укажите желаемый цвет - Red, Onyx или Gold', '' );
 do{
  switch (color){
  case 'Red':
  case 'red':
  case 'красный':{
    color='red';
    break;
  };
  case 'Onyx':
  case 'onyx':
  case 'оникс':
  case 'черный':{
    color='onyx';
    break;
  };
  case 'Gold':
  case 'gold':
  case 'золотой':
  case 'голд':{
    color='gold';
    break;
  };
  default:{
  	if (color==null){
		alert('Good Bye!');
		throw new Error("stop"); }
    color = prompt( 'Ещё раз: Red, Onyx или Gold', '' );
  }
}
}while( color!='red' && color!= 'onyx' && color!='gold' )
var price_color_index;
if (color=='red'){
	document.write( '<img src="images/red_iphone.jpg">');
	price_color_index=1;
}else if (color=='onyx'){
	document.write( '<img src="images/black_iphone.jpg">');
	price_color_index=1.2;
}else {
	document.write( '<img src="images/gold_iphone.jpg">');
	price_color_index=1.40;}
var price=basic_price*price_color_index;
document.write( '<br>Цена   ', price, '$' );