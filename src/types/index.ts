export interface IToDo {
    id: string;
    title: string;
    status: 'completed' | 'waiting' | 'canceled';
}

export interface Ibreadcrumb { 
    name: string; 
    path?: string;
}