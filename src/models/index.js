const Album = require("./Album");
const Artist = require("./Artist");
const Genre = require("./Genre");

Genre.belongsToMany(Artist, { through: "genresArtists" })
Artist.belongsToMany(Genre, { through: "genresArtists" })

//! Album -> artistId
Album.belongsTo(Artist)
Artist.hasMany(Album)