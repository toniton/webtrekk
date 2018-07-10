export interface Deserializable {
    deserialize(input: any): this;
}
export class BaseModel implements Deserializable {
    deserialize(input: any) {
        Object.assign(this, input);
        return this;
    }
}
