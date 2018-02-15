// @flow

// eslint-disable-next-line import/prefer-default-export
export const helloEndpointRoute = (num: ?number) => `/ajax/hello/${num || ':num'}`
// 以下のようなイメージ Express と 実際のアクセス
// helloEndpointRoute()     // -> '/ajax/hello/:num' (for Express)
// helloEndpointRoute(1234) // -> '/ajax/hello/1234' (for the actual call)
