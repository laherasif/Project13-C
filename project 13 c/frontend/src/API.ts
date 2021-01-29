/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type TodoInput = {
  id: string,
  sender: string,
  reciver: string,
  msg: string,
  color1: string,
  color2: string,
  color3: string,
};

export type AddLolyMutationVariables = {
  loly: TodoInput,
};

export type AddLolyMutation = {
  addLoly:  {
    __typename: "Lollies",
    id: string,
    sender: string,
    reciver: string,
    msg: string,
    color1: string,
    color2: string,
    color3: string,
  } | null,
};

export type UpdateLolyMutationVariables = {
  loly: TodoInput,
};

export type UpdateLolyMutation = {
  updateLoly:  {
    __typename: "Lollies",
    id: string,
    sender: string,
    reciver: string,
    msg: string,
    color1: string,
    color2: string,
    color3: string,
  } | null,
};

export type DeleteLolyMutationVariables = {
  lolyId: string,
};

export type DeleteLolyMutation = {
  deleteLoly: string | null,
};

export type GetLolliesQuery = {
  getLollies:  Array< {
    __typename: "Lollies",
    id: string,
    sender: string,
    reciver: string,
    msg: string,
    color1: string,
    color2: string,
    color3: string,
  } | null > | null,
};
