import { Pet } from "../../domain/entity/pet";
import { PetRepository } from "../contracts/repository/pet-repository";
import { UseCase } from "../contracts/use-case";

export class CreatePetUseCase implements UseCase<Input, Output> {
  constructor(private readonly petRepository: PetRepository) {}

  async execute(input: Input): Promise<void> {
    const pet = Pet.create({
      name: input.name,
      ownerId: input.ownerId,
      categoryId: input.categoryId,
      breedId: input.breedId,
    });
    this.petRepository.create(pet);
  }
}

type Input = {
  ownerId: string;
  categoryId: string;
  weight?: number;
  name: string;
  breedId: string;
};

type Output = void;
