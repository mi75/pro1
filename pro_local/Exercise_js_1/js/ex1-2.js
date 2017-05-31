"use strict";
var memory = prompt( 'Укажите желаемый объем памяти в ГБ - 32, 64 или 128', '' );
while( memory != 32 && memory!=64 && memory!=128 ){
	if (memory==null){
		alert('Good Bye!');
		throw new Error("stop"); }
  memory = prompt( 'Ещё раз: 32, 64 или 128', '' );
  }
 
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

var phones=[
	{
		'mem' : 32,
		'col' : 'red',
		'pr' : 400,
		'pic' : '<img src="images/red_iphone.jpg">'
	},
	{
		'mem' : 32,
		'col' : 'onyx',
		'pr' : 480,
		'pic' : '<img src="images/black_iphone.jpg">'
	},
	{
		'mem' : 32,
		'col' : 'gold',
		'pr' : 560,
		'pic' : '<img src="images/gold_iphone.jpg">'
	},
	{
		'mem' : 64,
		'col' : 'red',
		'pr' : 500,
		'pic' : '<img src="images/red_iphone.jpg">'
	},
	{
		'mem' : 64,
		'col' : 'onyx',
		'pr' : 600,
		'pic' : '<img src="images/black_iphone.jpg">'
	},
	{
		'mem' : 64,
		'col' : 'gold',
		'pr' : 700,
		'pic' : '<img src="images/gold_iphone.jpg">'
	},
	{
		'mem' : 128,
		'col' : 'red',
		'pr' : 700,
		'pic' : '<img src="images/red_iphone.jpg">'
	},
	{
		'mem' : 128,
		'col' : 'onyx',
		'pr' : 840,
		'pic' : '<img src="images/black_iphone.jpg">'
	},
	{
		'mem' : 128,
		'col' : 'gold',
		'pr' : 980,
		'pic' : '<img src="images/gold_iphone.jpg">'
	}
];
for( var i = 0; i < phones.length; i++ ){
	if (phones[i]['mem']==memory && phones[i]['col']==color){
		var price=phones[i]['pr'];
		var picture=phones[i]['pic'];
		document.write(picture);
		document.write( '<br>Объем памяти   ', memory, ' ГБайт' );
		document.write( '<br>Цена   ', price, '$' );
		break;
		}
	}
