import { UserData } from './user-data'

describe('Register user on mailing list use case', () => {
  test('shoud add user with complete data to mailing list (InMemory)', async () => {
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
})
