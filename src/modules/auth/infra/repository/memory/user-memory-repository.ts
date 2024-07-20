import { UserRepository } from "../../../application/contracts/repository/user-repository";
import { User } from "../../../domain/entity/user";
import { UserNotFoundError } from "../../../errors/user-not-found-error";

export class UserMemoryRepository implements UserRepository {
  private data: User[];

  constructor(mock?: User[]) {
    this.data = mock || [];
  }

  async create(user: User): Promise<void> {
    this.data.push(user);
  }

  async getByEmail(email: string): Promise<User | undefined> {
    return this.data.find((user) => user.getEmail() === email);
  }

  async getById(id: string): Promise<User> {
    const user = this.data.find((user) => user.getId() === id);
    if (!user) throw new UserNotFoundError();
    return user;
  }

  getData() {
    return this.data;
  }
}
