import { gql} from '@apollo/client'

export const QUERY_GAMES = gql `
query AllGames {
    allGames {
      count
      results {
        id
        name
        background_image
        metacritic
        platforms {
          platform {
            id
            name
          }
          released_at
        }
        genres {
          name
        }
      }
    }
  }
`
export const QUERY_SEARCH = gql`
query SearchGame($searchGameId: String!) {
    searchGame(id: $searchGameId) {
      id
      slug
      name
      description
      released
      background_image
      website
      platforms {
        released_at
        platform {
          name
        }
      }
    }
  }
`