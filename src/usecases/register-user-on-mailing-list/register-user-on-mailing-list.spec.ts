import { InMemoryUserRepository } from '../../repositories/in-memory-user-repository'
import { UserData } from './user-data'

describe('Register user on mailing list use case', () => {
  test('should return null if user is not found (InMemory)', async () => {
    const users: UserData[] = []
    console.log(users)
    const inMemoryUserRepository = new InMemoryUserRepository(users)
    const user = inMemoryUserRepository.findUserByEmail('fake@email.com')
    expect(user).toBeNull()
  })

  test('should return user if it is found in the repository (InMemory)', async () => {
    const users: UserData[] = []
    const name = 'any_name'
    const email = 'any@email.com'
    const userRepository = new InMemoryUserRepository(users)
    await userRepository.add({ name, email })
    const user = await userRepository.findUserByEmail(email)
    expect(user.name).toBe(name)
  })
})
