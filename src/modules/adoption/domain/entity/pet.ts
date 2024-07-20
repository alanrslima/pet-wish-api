import { randomUUID } from "node:crypto";

type CreateProps = {
  name: string;
  categoryId: string;
  ownerId: string;
  breedId: string;
  weight?: number;
};

type BuildProps = CreateProps & {
  id: string;
};

export class Pet {
  private name: string;
  private id: string;
  private categoryId: string;
  private ownerId: string;
  private breedId: string;
  private weight?: number;

  private constructor(props: BuildProps) {
    this.id = props.id;
    this.name = props.name;
    this.categoryId = props.categoryId;
    this.ownerId = props.ownerId;
    this.weight = props.weight;
    this.breedId = props.breedId;
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

  getOwnerId(): string {
    return this.ownerId;
  }

  getWeight(): number | undefined {
    return this.weight;
  }
}
