import { helloEndpointRoute } from './routes'

// 以下のようなイメージ Express と 実際のアクセス
// helloEndpointRoute()     // -> '/ajax/hello/:num' (for Express)
// helloEndpointRoute(1234) // -> '/ajax/hello/1234' (for the actual call)
test('helloEndpointRoute', () => {
  expect(helloEndpointRoute()).toBe('/ajax/hello/:num')
  expect(helloEndpointRoute(123)).toBe('/ajax/hello/123')
})
