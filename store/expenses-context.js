import { createContext, useReducer } from "react";

const DUMMY_EXPENSES = [
    {
        id: "e1",
        description: "A pair of shoes",
        amount: 59.99,
        date: new Date("2023-12-19"),
    },
    {
        id: "e2",
        description: "A pair of trousers",
        amount: 89.99,
        date: new Date("2023-11-20"),
    },
    {
        id: "e3",
        description: "Some bananas",
        amount: 5.99,
        date: new Date("2023-10-07"),
    },
    {
        id: "e4",
        description: "A book",
        amount: 14.99,
        date: new Date("2023-09-17"),
    },
    {
        id: "e5",
        description: "A pencil",
        amount: 4.99,
        date: new Date("2023-08-19"),
    },
    {
        id: "e6",
        description: "Computer",
        amount: 1099.99,
        date: new Date("2023-01-19"),
    },
    {
        id: "e7",
        description: "Telephone Service",
        amount: 199.99,
        date: new Date("2023-11-20"),
    },
    {
        id: "e8",
        description: "Market",
        amount: 267.99,
        date: new Date("2023-10-07"),
    },
    {
        id: "e9",
        description: "Food",
        amount: 54.99,
        date: new Date("2023-09-17"),
    },
    {
        id: "e10",
        description: "Bills",
        amount: 149.99,
        date: new Date("2023-08-19"),
    },
];

export const ExpensesContext = createContext({
    expenses: [],
    addExpense: ({ description, amount, date }) => {},
    deleteExpense: (id) => {},
    updateExpense: (id, { description, amount, date }) => {},
});

function expensesReducer(state, action) {
    switch (action.type) {
        case "ADD":
            const id = new Date().toString() + Math.random().toString();
            return [{ ...action.payload, id: id }, ...state];
        case "UPDATE":
            const updatablExpenseIndex = state.findIndex(
                (expense) => expense.id === action.payload.id
            );
            const updatablExpense = state[updatablExpenseIndex];
            const updatedItem = { ...updatablExpense, ...action.payload.data };
            const updatedExpenses = [...state];
            updatedExpenses[updatablExpenseIndex] = updatedItem;
            return updatedExpenses;
        case "DELETE":
            return state.filter((expense) => expense.id !== action.payload);
        default:
            return state;
    }
}

function ExpensesContextProvider({ children }) {
    const [expensesState, dispatch] = useReducer(
        expensesReducer,
        DUMMY_EXPENSES
    );

    function addExpense(expenseData) {
        dispatch({ type: "ADD", payload: expenseData });
    }

    function deleteExpense(id) {
        dispatch({ type: "DELETE", payload: id });
    }

    function updateExpense(id, expenseData) {
        dispatch({
            type: "UPDATE",
            payload: { id: id, data: expenseData },
        });
    }

    const value = {
        expenses: expensesState,
        addExpense: addExpense,
        deleteExpense: deleteExpense,
        updateExpense: updateExpense,
    };

    return (
        <ExpensesContext.Provider value={value}>
            {children}
        </ExpensesContext.Provider>
    );
}

export default ExpensesContextProvider;
