/*
	Project: TuCocinaVirtual
	Developer: Team Oglit
	Description:
		Permite realizar las peticiones a la API
		para traer los datos que requiera el usuario
	Date: 14/08/2015
*/

var app = angular.module('tuCosina.services', ['LocalStorageModule', 'btford.socket-io'])


// //socket factory that provides the socket service
// angular.module('tuCosina.services').factory('Socket', ['socketFactory',
//     function(socketFactory) {
//         return socketFactory({
//             prefix: '',
//             ioSocket: io.connect('http://localhost:8000')
//         });
//     }
// ]);

// app.factory('Socket', function(socketFactory) {
//         return socketFactory({
//             prefix: '',
//             ioSocket: io.connect('https://api-tucocina.herokuapp.com')
//             // ioSocket: io.connect('http://localhost:8000')
//         });
// });


// servicio para gestionar las categorías
app.factory("Menu_categorias", function($firebaseArray) {
	var categorias = new Firebase("https://tucocina.firebaseio.com/categorias");
	return $firebaseArray(categorias);
});

// servicio para gestionar los platos en la DB
app.factory("Platos", function($firebaseArray) {
	var platos = new Firebase("https://tucocina.firebaseio.com/platos");
	return $firebaseArray(platos);
});

// servicio para gestionar los ingredientes
app.factory("Ingredientes", function($firebaseArray) {
	var ingredientes = new Firebase("https://tucocina.firebaseio.com/ingredientes");
	return $firebaseArray(ingredientes);
});


// servicio para gestionar los adicionales
app.factory("Adicionales", function($firebaseArray) {
	var adicionales = new Firebase("https://tucocina.firebaseio.com/adicionales");
	return $firebaseArray(adicionales);
});


// factoria que retorna los pedidos de un restarante - PRUEBAS
app.factory("Pedidos", function($firebaseArray){
	var pedidos = new Firebase("https://tucocina.firebaseio.com/pedidos");
	return $firebaseArray(pedidos);
});

// usuarios
app.factory("Restaurantes", function($firebaseArray){
	var rest = new Firebase("https://tucocina.firebaseio.com/restaurantes");
	return $firebaseArray(rest);
});


// *****************************************************
// PROMOS

app.factory("IngredientesPromo", function($firebaseArray) {
	var ingredientes_promo = new Firebase("https://tucocina.firebaseio.com/ingredientes_promo");
	return $firebaseArray(ingredientes_promo);
});

app.factory("AdicionalesPromo", function($firebaseArray) {
	var adicionales_promo = new Firebase("https://tucocina.firebaseio.com/adicionales_promo");
	return $firebaseArray(adicionales_promo);
});

// promo
app.factory("Promos", function($firebaseArray){
	var promos = new Firebase("https://tucocina.firebaseio.com/platos");
	return $firebaseArray(promos);
});

app.factory("imgPromos", function($firebaseArray){
	var img_promos = new Firebase("https://tucocina.firebaseio.com/img_promos");
	return $firebaseArray(img_promos);
});


