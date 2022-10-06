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

export const QUERY_REVIEWS = gql`
query Reviews($email: String) {
  reviews(email: $email) {
    _id
    reviewText
    createdAt
    email
  }
}
`
export const QUERY_ME = gql`
{
  me{
    _id
    username
    email
    reviews {
      _id 
      reviewText
      createdAt
    }
  }
}
`