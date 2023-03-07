import { View } from "react-native";

import ExpensesSummary from "./ExpensesSummary";
import ExpensesList from "./ExpensesSummary";

function ExpensesOutput({ expenses }) {
    return (
        <View>
            <ExpensesSummary />
            <ExpensesList />
        </View>
    );
}

export default ExpensesOutput;
