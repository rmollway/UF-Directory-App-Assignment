/* Fill out these functions using Mongoose queries*/

var Listing = require('./ListingSchema.js'),
    mongoose = require('mongoose'),
    config = require('./config');

mongoose.connect(config.db.uri);

var findLibraryWest = function() {
  /*
    Find the document that contains data corresponding to Library West,
    then log it to the console.
   */
   Listing.findOne({name: 'Library West'}, function(err, listing){
     if(err) {
       console.log('Error on Lib West');
       throw err;
     }
     console.log('\n\nLibrary West Data\n');
     console.log(listing);
     console.log('\n\n');
   });

};
var removeCable = function() {
  /*
    Find the document with the code 'CABL'. This cooresponds with courses that can only be viewed
    on cable TV. Since we live in the 21st century and most courses are now web based, go ahead
    and remove this listing from your database and log the document to the console.
   */
   Listing.findOneAndRemove({code: 'CABL'}, function(err){
     if(err) throw err;

     console.log('\n\nCable Document Deleted \n\n');

     /*
        Double-checking it's been removed by finding and expecting a null result
     */
     Listing.findOne({code: 'CABL'}, function(err, result){
        if(result != null) console.log('\nFound CABL after deletion!\n');
        else console.log('\nCABL not found after deletion\n');
     });

   });

};
var updatePhelpsLab = function() {
  /*
    Phelps Laboratory's address is incorrect. Find the listing, update it, and then
    log the updated document to the console.
   */

   /*
    After some research, it appears the proper address is as follows:
      1275 Center Dr, Gainesville, FL 32610

    Which corresponds to the following coordinates:
      [29.6406417,-82.34565069999996]
   */

   Listing.findOneAndUpdate({ code : 'PHL'}, {"$set": { address: '1275 Center Dr, Gainesville, FL 32610', updated_at: new Date(),  coordinates: [{latitude: 29.6406417, longitude: -82.34565069999996}]}}, function(err, listing){
     if(err) throw err;

     console.log('\n\nUpdated Phelps Lab: \n');
     console.log(listing);
     console.log('\n\n');
   });

};
var retrieveAllListings = function() {
  /*
    Retrieve all listings in the database, and log them to the console.
   */
   Listing.find({}, function(err, allListings){
     if(err){
       console.log('Error in RetrieveAll: '+ err);
       throw err;
     }
     console.log('\n\nAll listings\n');
     console.log(JSON.stringify(allListings));
     console.log('\n\n');
   });
};

findLibraryWest();
removeCable();
updatePhelpsLab();
retrieveAllListings();
