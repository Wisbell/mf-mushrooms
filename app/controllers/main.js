console.log("main.js controller loaded")

app.controller('MainCtrl', function($scope, $http){

  // get Mushrooms.json
  $http.get('data/mushrooms.json')
    .then(function(val){
      console.log("val", val)

      $scope.mushroomList = val.data.mushrooms
      console.log("mushroomList", $scope.mushroomList)
    })
})
