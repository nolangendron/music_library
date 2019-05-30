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
             },


// FUNCTIONS TO IMPLEMENT:

// prints a list of all playlists, in the form:
// p01: Coding Music - 2 tracks
// p02: Other Playlist - 1 tracks

  printPlaylists: function () {
    for (playlist in this['playlists']) {
      console.log(`${this['playlists'][playlist]['id']}: ${this['playlists'][playlist]['name']} - ${this['playlists'][playlist]['tracks'].length} tracks`);
    }
  },

// prints a list of all tracks, in the form:
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)
// t03: Four Thirty-Three by John Cage (Woodstock 1952)

  printTracks: function () {
    for (track in this['tracks']) {
      console.log(`${this['tracks'][track]['id']}: ${this['tracks'][track]['name']} by ${this['tracks'][track]['artist']} (${this['tracks'][track]['album']})`);
    }
  },

// prints a list of tracks for a given playlist, in the form:
// p01: Coding Music - 2 tracks
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)

  printPlaylist: function (playlistId) {

    console.log(`${this['playlists'][playlistId]['id']}: ${this['playlists'][playlistId]['name']} - ${this['playlists'][playlistId]['tracks'].length} tracks`);

    var track = this['playlists'][playlistId]['tracks'];
    for (let i = 0; i < track.length; i++) {
      (`${this['tracks'][track[i]]['id']}: ${this['tracks'][track[i]]['name']} by ${this['tracks'][track[i]]['artist']} (${this['tracks'][track[i]]['album']})`);
      }
    },

// adds an existing track to an existing playlist

  addTrackToPlaylist: function (trackId, playlistId) {
    this['playlists'][playlistId]['tracks'].push(trackId);
  },

// generates a unique id
// (use this for addTrack and addPlaylist)

  uid: function() {
    return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
  },

// adds a track to the library

  addTrack: function (name, artist, album) {
    var uniqueId = this.uid();
    this['tracks'][uniqueId] = {
      id: uniqueId,
      name: name,
      artist: artist,
      album: album
    }
  },

// adds a playlist to the library

  addPlaylist: function (name) {
    var uniqueId = this.uid();
    this['playlists'][uniqueId] = {
      id: uniqueId,
      name: name,
      tracks: []
    }
  }

}

library.printPlaylists(library);
library.printTracks(library);
library.printPlaylist("p02");
library.addTrackToPlaylist("t01", "p02");
library.addTrack("Nolan", "Blahgggggggg", "Yaggggggggggy");
library.addPlaylist("my fav songs");


// STRETCH:
// given a query string string, prints a list of tracks
// where the name, artist or album contains the query string (case insensitive)
// tip: use "string".search("tri")
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search

var printSearchResults = function(query) {

}