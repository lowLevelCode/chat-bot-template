export enum FromMessage {
    ME, BOT
};

export enum TypeMessage {
    MESSAGE, FORM   
}

export interface Message {
    from:FromMessage;
    content:string;
    datetime:Date;
    type:TypeMessage;
}