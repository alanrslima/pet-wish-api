import { PetMemoryRepository } from "../../../infra/repository/pet-memory-repository";
import { RegisterPetUseCase } from "../register-pet-use-case";

it("should register a new pet for adoption", async () => {
  const petMemoryRepository = new PetMemoryRepository();
  const registerPetUseCase = new RegisterPetUseCase(petMemoryRepository);
  expect(petMemoryRepository.getData()).toHaveLength(0);
  await registerPetUseCase.execute({
    breedId: "123",
    categoryId: "123",
    name: "Bob",
    donorId: "123",
    weight: 7,
  });
  expect(petMemoryRepository.getData()).toHaveLength(1);
});
