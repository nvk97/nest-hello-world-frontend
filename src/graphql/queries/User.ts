import gql from "graphql-tag";
export const USER_NAMES = gql`
query{
  findAll{
    id,
    firstName,
    lastName
  }
}
`
