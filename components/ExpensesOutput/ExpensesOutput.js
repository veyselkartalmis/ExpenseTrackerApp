import { View, StyleSheet } from "react-native";

import ExpensesSummary from "./ExpensesSummary";
import ExpensesList from "./ExpensesList";

import { GlobalStyles } from "../../constants/styles";

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

function ExpensesOutput({ expenses, expensesPeriod }) {
    return (
        <View style={styles.container}>
            <ExpensesSummary
                expenses={DUMMY_EXPENSES}
                periodName={expensesPeriod}
            />
            <ExpensesList expenses={DUMMY_EXPENSES} />
        </View>
    );
}

export default ExpensesOutput;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 24,
        paddingTop: 24,
        paddingBottom: 0,
        backgroundColor: GlobalStyles.colors.primary700,
    },
});
