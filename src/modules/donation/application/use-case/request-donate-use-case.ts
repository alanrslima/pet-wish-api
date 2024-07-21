import { UseCase } from "../../../common";
import { PetRepository } from "../contracts/repository/pet-repository";

export class RequestDonationUseCase implements UseCase<Input, Output> {
  constructor(private readonly petRepository: PetRepository) {}

  async execute(input: Input): Promise<void> {
    const pet = await this.petRepository.getById(input.petId);
    // const adopter = await this.
  }
}

type Input = {
  adopterId: string;
  petId: string;
  reason: string;
};

type Output = void;
