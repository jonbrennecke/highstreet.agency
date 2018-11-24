/* @flow */
export type Id = number;

export type RouteParams = {
  id: Id,
};

export type RouteMatch = {
  params: RouteParams,
};
