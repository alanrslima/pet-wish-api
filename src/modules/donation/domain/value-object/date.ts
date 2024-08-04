import { z } from "zod";

export class Dating {
  private value: Date;

  constructor(input: string) {
    const schema = z.string().date();
    schema.parse(input);
    this.value = new Date(input);
  }

  getValue() {
    return this.value;
  }
}
