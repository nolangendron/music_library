var library = {
  tracks: { t01: { id: "t01",
                   name: "Code Monkey",
                   artist: "Jonathan Coulton",
                   album: "Thing a Week Three" },
            t02: { id: "t02",
                   name: "Model View Controller",
                   artist: "James Dempsey",
                   album: "WWDC 2003"},
            t03: { id: "t03",
                   name: "Four Thirty-Three",
                   artist: "John Cage",
                   album: "Woodstock 1952"}
          },
  playlists: { p01: { id: "p01",
                      name: "Coding Music",
                      tracks: ["t01", "t02"]
                    },
               p02: { id: "p02",
                      name: "Other Playlist",
                      tracks: ["t03"]
                    }
             }
}

// FUNCTIONS TO IMPLEMENT:

// prints a list of all playlists, in the form:
// p01: Coding Music - 2 tracks
// p02: Other Playlist - 1 tracks

var printPlaylists = function () {
  for (playlist in library['playlists']) {
    //console.log(`${library['playlists'][playlist]['id']}: ${library['playlists'][playlist]['name']} - ${library['playlists'][playlist]['tracks'].length} tracks`);
  }
}

printPlaylists(library);


// prints a list of all tracks, in the form:
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)
// t03: Four Thirty-Three by John Cage (Woodstock 1952)

var printTracks = function () {
  for (track in library['tracks']) {
    //console.log(`${library['tracks'][track]['id']}: ${library['tracks'][track]['name']} by ${library['tracks'][track]['artist']} (${library['tracks'][track]['album']})`);
  }
}

printTracks(library);

// prints a list of tracks for a given playlist, in the form:
// p01: Coding Music - 2 tracks
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)

var printPlaylist = function (playlistId) {

  //console.log(`${library['playlists'][playlistId]['id']}: ${library['playlists'][playlistId]['name']} - ${library['playlists'][playlistId]['tracks'].length} tracks`);

  var track = library['playlists'][playlistId]['tracks'];
  for (let i = 0; i < track.length; i++) {
    //console.log(`${library['tracks'][track[i]]['id']}: ${library['tracks'][track[i]]['name']} by ${library['tracks'][track[i]]['artist']} (${library['tracks'][track[i]]['album']})`);
    }
  }

printPlaylist("p02");


// adds an existing track to an existing playlist

var addTrackToPlaylist = function (trackId, playlistId) {
  library['playlists'][playlistId]['tracks'].push(trackId);
}

addTrackToPlaylist("t01", "p02")


// generates a unique id
// (use this for addTrack and addPlaylist)

var uid = function() {
  return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
}


// adds a track to the library

var addTrack = function (name, artist, album) {
  var uniqueId = uid();
  library['tracks'][uniqueId] = {
    id: uniqueId,
    name: name,
    artist: artist,
    album: album
  }
}
addTrack("Nolan", "Blahgggggggg", "Yaggggggggggy")

// adds a playlist to the library

var addPlaylist = function (name) {
  var uniqueId = uid();
  library['playlists'][uniqueId] = {
    id: uniqueId,
    name: name,
    tracks: []
  }
}

addPlaylist("my fav songs")
console.log(library)


// STRETCH:
// given a query string string, prints a list of tracks
// where the name, artist or album contains the query string (case insensitive)
// tip: use "string".search("tri")
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search

var printSearchResults = function(query) {

}