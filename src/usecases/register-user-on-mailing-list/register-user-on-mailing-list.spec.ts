import { InMemoryUserRepository } from '../../repositories/in-memory-user-repository'
import { UserData } from './user-data'

describe('Register user on mailing list use case', () => {
  test('should return null if user is not found (InMemory)', async () => {
    const users: UserData[] = []
    console.log(users)
    const sut = new InMemoryUserRepository(users)
    const user = await sut.findUserByEmail('fake@email.com')
    expect(user).toBeNull()
  })

  test('should return user if it is found in the repository (InMemory)', async () => {
    const users: UserData[] = []
    const name = 'any_name'
    const email = 'any@email.com'
    const sut = new InMemoryUserRepository(users)
    await sut.add({ name, email })
    const user = await sut.findUserByEmail(email)
    expect(user.name).toBe(name)
  })

  test('should return all users in the repository (InMemory)', async () => {
    const users: UserData[] = [
      { name: 'any_name', email: 'email@email.com' },
      { name: 'second_name', email: 'second@email.com' }
    ]
    const sut = new InMemoryUserRepository(users)
    const returnedUsers = sut.findAllUsers()
    expect((await returnedUsers).length).toBe(2)
  })
})
