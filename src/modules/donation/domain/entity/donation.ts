import { Price } from "../value-object/price";
import { Type } from "../value-object/type";
import { Pet } from "./pet";
import { randomUUID } from "node:crypto";

type CreateProps = {
  pet: Pet;
};

type BuildProps = {
  id: string;
  date: Date;
  price: number;
  petId: string;
  status: DonationStatus;
};

type DonationStatus = "approved" | "pending" | "rejected";
const donationStatusArray: DonationStatus[] = [
  "approved",
  "pending",
  "rejected",
];

export class Donation {
  private id: string;
  private date: Date;
  private price: Price;
  private petId: string;
  private status: Type<DonationStatus>;

  private constructor(props: BuildProps) {
    this.id = props.id;
    this.date = props.date;
    this.petId = props.petId;
    this.price = new Price(props.price);
    this.status = new Type<DonationStatus>(props.status, donationStatusArray);
  }

  static init(props: CreateProps) {
    if (!props.pet.isAvailable()) {
      throw new Error("O pet não pode ser adotado");
    }
    return new Donation({
      id: randomUUID(),
      date: new Date(),
      price: props.pet.getPrice(),
      petId: props.pet.getId(),
      status: "pending",
    });
  }

  getId() {
    return this.id;
  }
}
