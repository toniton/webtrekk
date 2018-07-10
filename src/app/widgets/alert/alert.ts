export class Alert {
    id: string;
    type: AlertType;
    message: string;
    customIcon: string;
    dismissable: boolean;
}

export enum AlertType {
    Success,
    Error,
    Info,
    Warning
}
