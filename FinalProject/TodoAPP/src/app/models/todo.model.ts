export interface CurrentList {
    $ref: string;
}

export interface TodoItem {
    id: string;
    name: string;
    description: string;
    isCompleted: boolean;
    currentList: CurrentList;
    currentListId: string;
}

export interface Items {
    $id: string;
    $values: TodoItem[];
}

export interface TodoList {
    id: string;
    capation: string;
    description: string;
    imageUrl: string;
    color: string;
    items: Items;
}

export interface TodoObj {
    $id: string;
    $values: TodoList[];
}