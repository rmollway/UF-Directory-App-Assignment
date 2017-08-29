'use strict';
/*
  Import modules/files you may need to correctly run the script.
  Make sure to save your DB's uri in the config file, then import it with a require statement!
 */
var fs = require('fs'),
    mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    Listing = require('./ListingSchema.js'),
    config = require('./config');

/* Connect to your database */

mongoose.connect(config.db.uri);

/*
  Instantiate a mongoose model for each listing object in the JSON file,
  and then save it to your Mongo database
 */
fs.readFile('listings.json', 'utf-8', function(err, data) {

    var currentListing;

    if(err) throw err;

    var listingData = JSON.parse(data);
    var numListings = Object.keys(listingData.entries).length;

    for(var i=0; i<numListings; i++) {
      currentListing = new Listing(listingData.entries[i]);
      currentListing.save(function(err, listing) {
        
      });
    }
});

/*
  Once you've written + run the script, check out your MongoLab database to ensure that
  it saved everything correctly.
 */
