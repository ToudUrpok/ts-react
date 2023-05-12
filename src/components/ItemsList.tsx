import React, { ReactNode } from "react";

interface ItemsListProps<T> {
    items: T[];
    renderItem: (item: T) => ReactNode
}

export default function ItemsList<T>(props: ItemsListProps<T>) {
    return (
        <div>
            {props.items.map(props.renderItem)}
        </div>
    )
}