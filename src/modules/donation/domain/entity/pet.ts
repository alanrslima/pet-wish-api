import { randomUUID } from "node:crypto";
import { Adopter } from "./adopter";
import { PetNotAvailableForDonate } from "../../error/pet-not-available-for-donate-error";

type CreateProps = {
  name: string;
  categoryId: string;
  donorId: string;
  breedId: string;
  weight?: number;
};

type BuildProps = CreateProps & {
  id: string;
  donatedAt?: Date;
};

export class Pet {
  private name: string;
  private id: string;
  private categoryId: string;
  private donorId: string;
  private breedId: string;
  private weight?: number;
  private donatedAt?: Date;

  private constructor(props: BuildProps) {
    this.id = props.id;
    this.name = props.name;
    this.categoryId = props.categoryId;
    this.donorId = props.donorId;
    this.weight = props.weight;
    this.breedId = props.breedId;
    this.donatedAt = props.donatedAt;
  }

  static create(props: CreateProps) {
    return new Pet({ ...props, id: randomUUID() });
  }

  getId(): string {
    return this.id;
  }

  getName(): string {
    return this.name;
  }

  getCategoryId(): string {
    return this.categoryId;
  }

  getBreedId(): string {
    return this.breedId;
  }

  getDonorId(): string {
    return this.donorId;
  }

  getWeight(): number | undefined {
    return this.weight;
  }

  private wasDonated(): boolean {
    return Boolean(this.donatedAt);
  }

  requestAdopt(adopter: Adopter, reason: string) {
    if (this.wasDonated()) throw new PetNotAvailableForDonate();
  }
}
