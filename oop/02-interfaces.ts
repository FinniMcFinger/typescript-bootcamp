export interface HasId {
    id: string;

    printId(): string;
}

export interface HasTitle extends HasId {
    title: string;
}