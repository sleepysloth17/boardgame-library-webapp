export class UUID {
  public static random(): UUID {
    return new UUID(getUniqueId(4));
  }

  public get value(): string {
    return this._value;
  }

  private constructor(private readonly _value: string) {}
}

const getUniqueId: (parts: number) => string = (parts: number) => {
  const stringArr = [];
  for (let i = 0; i < parts; i++) {
    const S4 = (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
    stringArr.push(S4);
  }
  return stringArr.join('-');
};
