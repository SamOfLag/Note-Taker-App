
export interface INoteCard {
    title: string,
    content: string,
    onClick: () => void,
    createdAt?: string,
    notes?: INote[]
}

export interface INote {
    _id: string;
    title: string;
    content: string;
    createdAt?: string; 
    updatedAt?: string;
    __v?: number;
}

export interface INoteList {
    notes: INote[],
    onSelectNote: (_id: string) => void
}

export interface ICreateNote {
    onCreateNote: (note: INote) => void;
}

export interface IEditNote {
    _id: string
    initialTitle: string,
    initialContent: string,
    onSave: (note: INote) => void
}

export interface ApiResponse {
    error: boolean;
    data: INote[];
}

export interface IApiResponse {
    error: boolean;
    data: INote;
}