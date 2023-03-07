import { View } from "react-native";

import ExpensesSummary from "./ExpensesSummary";
import ExpensesList from "./ExpensesSummary";

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
];

function ExpensesOutput({ expenses, expensesPeriod }) {
    return (
        <View>
            <ExpensesSummary
                expenses={DUMMY_EXPENSES}
                periodName={expensesPeriod}
            />
            <ExpensesList />
        </View>
    );
}

export default ExpensesOutput;
