import { search, searchAlbums, searchArtists, searchTracks, searchPlaylists, } from '../src/components/searchApi'

describe('Spotify Wrapper', () => {
  describe('Smoke tests', () => {
    test('Should exist the search method', () => 
      // expect(search).toBeDefined()
      expect(search).toBeInstanceOf(Function)
    )

    test('Should exist the searchAlbums method', () =>
      expect(searchAlbums).toBeInstanceOf(Function)
    )

    test('Should exist the searchArtists method', () =>
      expect(searchArtists).toBeInstanceOf(Function)
    )

    test('Should exist the searchTracks method', () =>
      expect(searchTracks).toBeInstanceOf(Function)
    )

    test('Should exist the searchPlaylists method', () =>
      expect(searchPlaylists).toBeInstanceOf(Function)
    )
  })

  describe('Generic Search', () =>{
    test('Should call fetch function', (done) => {
    
    })
  })
})