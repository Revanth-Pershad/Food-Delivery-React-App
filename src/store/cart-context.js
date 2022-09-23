import React from "react";

export const CartContext = React.createContext({
    item : [{}],
    totalAmount : 0,
    addItem : (item) => {},
    removeItem : (id) => {}
});