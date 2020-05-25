import * as someModule from '../src/someModule'

/** @test {someModule} */
describe('someModule test suits', function () {
  // Executed before each test:
  beforeEach(done => {
    done()
  })

  test('#test ()', done => {
    expect(someModule).toBeDefined()
    // assert(123 === 123)
    done()
  })
})
