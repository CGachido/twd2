import { UserData } from '../usecases/register-user-on-mailing-list/user-data'
import { InMemoryUserRepository } from './in-memory-user-repository'

describe('In Memory User Repository', () => {
  test('should return null if user is not found', async () => {
    const users: UserData[] = []
    const userRepository = new InMemoryUserRepository(users)
    const user = await userRepository.findUserByEmail('any@email.com')
    expect(user).toBeNull()
  })
})
