
    export interface Items {
        $ref: string;
    }

    export interface CurrentList {
        $id: string;
        id: string;
        capation: string;
        description: string;
        imageUrl: string;
        color: string;
        items: Items;
    }

    export interface TodoItem {
        $id: string;
        id: string;
        name: string;
        description: string;
        isCompleted: boolean;
        currentList: CurrentList;
        currentListId: string;
    }

    export interface TodoItemObj {
        $id: string;
        $values: TodoItem[];
    }
