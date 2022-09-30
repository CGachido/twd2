import { InMemoryUserRepository } from '../../repositories/in-memory-user-repository'
import { UserData } from './user-data'

describe('Register user on mailing list use case', () => {
  test('should add user with complete data to mailing list (InMemory)', async () => {
    const users: UserData[] = []
    console.log(users)
    // const inMemoryUserRepository: UserRepository = new InMemoryUserRepository(
    //   users
    // )
    // const useCase: RegisterUserOnMailingList = new RegisterUserOnMailingList(
    //   inMemoryUserRepository
    // )
    // const name = 'any_name'
    // const email = 'any@email.com'
    // const response = await useCase.registerUserOnMailingList({ name, email })
    // const user = inMemoryUserRepository.findUserByEmail(email)
    // expect((await user).name).toBe(name)
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
