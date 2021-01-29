/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const addLoly = /* GraphQL */ `
  mutation AddLoly($loly: TodoInput!) {
    addLoly(loly: $loly) {
      id
      sender
      reciver
      msg
      color1
      color2
      color3
    }
  }
`;
export const updateLoly = /* GraphQL */ `
  mutation UpdateLoly($loly: TodoInput!) {
    updateLoly(loly: $loly) {
      id
      sender
      reciver
      msg
      color1
      color2
      color3
    }
  }
`;
export const deleteLoly = /* GraphQL */ `
  mutation DeleteLoly($lolyId: String!) {
    deleteLoly(lolyId: $lolyId)
  }
`;
