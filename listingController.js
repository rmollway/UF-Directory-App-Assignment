angular.module('listings').controller('ListingsController', ['$scope', 'Listings',
  function($scope, Listings) {
    $scope.listings = Listings;
    $scope.detailedInfo = undefined;
    $scope.newListing = undefined;

    /*
      Implement these functions in the controller to make your application function
      as described in the assignment spec.
     */
    $scope.addListing = function() {
      $scope.listings.push(this.newListing);
      $scope.listings.sort(function(a,b){ return (a.code > b.code) ? 1 : (a.code < b.code) ? -1 : 0;});
      $scope.newListing = undefined;
    };
    $scope.deleteListing = function(listingEntry) {
      if(listingEntry.code == $scope.detailedInfo.code) {
        $scope.detailedInfo = undefined;
      }
      $scope.listings.splice($scope.listings.indexOf(listingEntry), 1);
    };
    $scope.showDetails = function(listingEntry) {
      $scope.detailedInfo = listingEntry;
    };
    
  }
]);
