export interface LinkType {
    id: string;
    title?: string;
    url?: string | URL;
    color?: string;
    active?: boolean;
}

export interface CustomEvent {
    event: Event;
    link: Link;
}

export class Link implements LinkType {
    constructor(public id: string, public title?: string, public url?: URL | string, public color?: string, public active?: boolean) {
        if (!color) {
            this.color = "#3C3B3D";
        }
    }
}
