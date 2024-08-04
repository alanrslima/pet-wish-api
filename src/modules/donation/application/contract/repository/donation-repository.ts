import { Donation } from "../../../domain/entity/donation";

export interface DonationRepository {
  create(donation: Donation): Promise<void>;
}
