console.log("config.js loaded")

app.config(function($routeProvider, $locationProvider){
  $locationProvider.hashPrefix('')

  $routeProvider
    .when('/', {
      controller: 'MainCtrl',
      templateUrl: 'partials/main.html'
      })
    .otherwise({
      redirectTo: '/'
    })
})
