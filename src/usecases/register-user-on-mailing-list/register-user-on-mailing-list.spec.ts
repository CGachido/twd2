import { InMemoryUserRepository } from '../../repositories/in-memory-user-repository'
import { UserData } from './user-data'

describe('Register user on mailing list use case', () => {
  test('should return null if user is not found (InMemory)', async () => {
    const users: UserData[] = []
    console.log(users)
    const inMemoryUserRepository = new InMemoryUserRepository(users)
    const user = await inMemoryUserRepository.findUserByEmail('fake@email.com')
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

  test('should return all users in the repository (InMemory)', async () => {
    const users: UserData[] = [
      { name: 'any_name', email: 'email@email.com' },
      { name: 'second_name', email: 'second@email.com' }
    ]
    const userRepository = new InMemoryUserRepository(users)
    const returnedUsers = userRepository.findAllUsers()
    expect((await returnedUsers).length).toBe(2)
  })
})
