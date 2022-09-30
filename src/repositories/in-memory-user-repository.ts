import { UserRepository } from '../ports/user-repository'
import { UserData } from '../usecases/register-user-on-mailing-list/user-data'

export class InMemoryUserRepository implements UserRepository {
  private repository: UserData[]

  constructor(repository: UserData[]) {
    this.repository = repository
  }

  add(user: UserData): Promise<void> {
    throw new Error('Method not implemented.')
  }
  findUserByEmail(email: string): Promise<UserData> {
    throw null
  }
  findAllUsers(): Promise<UserData[]> {
    throw new Error('Method not implemented.')
  }
  exists(user: UserData): Promise<boolean> {
    throw new Error('Method not implemented.')
  }
}