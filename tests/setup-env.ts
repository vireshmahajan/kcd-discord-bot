import {DiscordManager} from './test-utils'
import {server} from './server'

process.env.CONVERT_KIT_API_KEY = 'FAKE_CONVERT_KIT_API_KEY'
process.env.CONVERT_KIT_API_SECRET = 'FAKE_CONVERT_KIT_API_SECRET'
process.env.DISCORD_BOT_TOKEN = 'FAKE_BOT_TOKEN'
process.env.GIST_REPO_THANKS = 'testThanks'

beforeEach(() => jest.spyOn(Date, 'now'))
beforeAll(() => server.listen({onUnhandledRequest: 'error'}))
afterAll(() => server.close())
afterEach(() => {
  server.resetHandlers()
  DiscordManager.cleanup()
  jest.restoreAllMocks()
  if (jest.isMockFunction(setTimeout)) {
    jest.runOnlyPendingTimers()
    jest.useRealTimers()
  }
})
