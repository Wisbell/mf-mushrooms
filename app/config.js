console.log("config.js loaded")

app.config(function($routeProvider, $locationProvider){
  $locationProvider.hashPrefix('')

  $routeProvider
    .when('/', {
      controller: 'BookCtrl',
      templateUrl: 'partials/booksView.html'
      })
    .otherwise({
      redirectTo: '/'
    })
})
