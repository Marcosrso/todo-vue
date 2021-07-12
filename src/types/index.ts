export interface IToDo {
    id: string;
    title: string;
    status: 'completed' | 'waiting' | 'canceled';
}