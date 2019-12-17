export interface User {
    uid: string;
    email: string;
    photoURL?: string;
    displayName?: string;
    color?: string;
    voted: string[];
}

export interface Poll {
    url: string;
    question: string;
    choice1: string;
    choice2: string;
    creator: string;
}

export interface Result {
    pollID: string;
    choice1: number;
    choice2: number;
    completed: boolean;
}
