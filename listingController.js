angular.module('listings').controller('ListingsController', ['$scope', 'Listings',
  function($scope, Listings) {
    $scope.listings = Listings;
    $scope.detailedInfo = undefined;
    $scope.newListing = undefined;

    angular.forEach(Listings, function(listing){
      listing.isClicked = false;
    });

    /*
      Implement these functions in the controller to make your application function
      as described in the assignment spec.
     */
    $scope.addListing = function() {
      this.newListing.isClicked = false;
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
      listingEntry.isClicked = true;
      angular.forEach($scope.listings, function(listing) {
        if(listing.code != listingEntry.code) listing.isClicked = false;
      });
    };

  }
]);
