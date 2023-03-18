import { Text, View, StyleSheet } from "react-native";
import { useContext, useLayoutEffect } from "react";

import { GlobalStyles } from "../constants/styles";
import IconButton from "../components/UI/IconButton";
import Button from "../components/UI/Button";
import ExpenseForm from "../components/ManageExpense/ExpenseForm";
import { ExpensesContext } from "../store/expenses-context";

function ManageExpense({ route, navigation }) {
    const expensesCtx = useContext(ExpensesContext);

    const editedExpenseId = route.params?.expenseId;
    const isEditing = !!editedExpenseId;

    useLayoutEffect(() => {
        navigation.setOptions({
            title: isEditing ? "Edit Expense" : "Add Expense",
        });
    }, [navigation, isEditing]);

    function deleteExpenseHandler() {
        expensesCtx.deleteExpense(editedExpenseId);
        navigation.goBack();
    }

    function cancelHandler() {
        navigation.goBack();
    }

    function confirmHandler(expenseData) {
        if (isEditing) {
            expensesCtx.updateExpense(editedExpenseId, expenseData);
        } else {
            expensesCtx.addExpense(expenseData);
        }
        navigation.goBack();
    }

    return (
        <>
            <ExpenseForm
                submitButtonLabel={isEditing ? "Update" : "Add"}
                onSubmit={confirmHandler}
                onCancel={cancelHandler}
            />
            <View style={styles.container}>
                {isEditing && (
                    <View styles={styles.deleteContainer}>
                        <IconButton
                            icon="trash"
                            color={GlobalStyles.colors.error500}
                            size={36}
                            onPress={deleteExpenseHandler}
                        />
                    </View>
                )}
            </View>
        </>
    );
}

export default ManageExpense;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24,
        backgroundColor: GlobalStyles.colors.primary800,
        alignItems: "center",
    },

    deleteContainer: {
        marginTop: 16,
        paddingTop: 8,
    },
});
