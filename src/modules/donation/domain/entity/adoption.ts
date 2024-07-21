type AdoptionStatus = "pending" | "approved" | "denied";

export class Adoption {
  private donorId: string;
  private adopterId: string;
  private status: AdoptionStatus;
  private reason: string;
}
