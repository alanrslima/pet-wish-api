import { UseCase } from "../../../common";
import { Pet } from "../../domain/entity/pet";
import { PetRepository } from "../contracts/repository/pet-repository";

export class RegisterPetUseCase implements UseCase<Input, Output> {
  constructor(private readonly petRepository: PetRepository) {}

  async execute(input: Input): Promise<void> {
    const pet = Pet.create({
      name: input.name,
      donorId: input.donorId,
      categoryId: input.categoryId,
      breedId: input.breedId,
    });
    this.petRepository.create(pet);
  }
}

type Input = {
  donorId: string;
  categoryId: string;
  weight?: number;
  name: string;
  breedId: string;
};

type Output = void;
