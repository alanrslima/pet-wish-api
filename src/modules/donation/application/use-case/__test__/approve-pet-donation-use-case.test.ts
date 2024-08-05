import { generatePet } from "../../../domain/entity/__mocks__/pet.mock";
import { Donation } from "../../../domain/entity/donation";
import { NotAllowedToApproveDonationError } from "../../../error/not-allowed-to-approve-donation-error";
import { DonationMemoryRepository } from "../../../infra/repository/memory/donation-memory-repository";
import { ApprovePetDonation } from "../donation/approve-pet-donation-use-case";

it("just the pet onwer should approve the pet donation", async () => {
  const pet = generatePet();
  pet.approve();
  const donation = Donation.init({ pet, recipientId: "987" });
  const donationMemoryRepository = new DonationMemoryRepository([donation]);
  const approvePetDonation = new ApprovePetDonation(donationMemoryRepository);
  const execute = async () =>
    approvePetDonation.execute({
      donationId: donation.getId(),
      loggedClientId: "randon_id",
    });
  expect(execute).rejects.toThrow(NotAllowedToApproveDonationError);
});

it("should approve a pet donation", async () => {
  const pet = generatePet();
  pet.approve();
  const donation = Donation.init({ pet, recipientId: "987" });
  const donationMemoryRepository = new DonationMemoryRepository([donation]);
  const approvePetDonation = new ApprovePetDonation(donationMemoryRepository);
  await approvePetDonation.execute({
    donationId: donation.getId(),
    loggedClientId: pet.getOwnerId(),
  });
  const updatedDonation = await donationMemoryRepository.getById(
    donation.getId()
  );
  expect(updatedDonation.getStatus()).toEqual("approved");
});
