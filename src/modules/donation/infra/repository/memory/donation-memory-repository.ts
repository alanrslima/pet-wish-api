import { DonationRepository } from "../../../application/contract/repository/donation-repository";
import { Donation } from "../../../domain/entity/donation";

export class DonationMemoryRepository implements DonationRepository {
  private data: Donation[];

  constructor(mock?: Donation[]) {
    this.data = mock || [];
  }

  async create(donation: Donation): Promise<void> {
    this.data.push(donation);
  }
}
