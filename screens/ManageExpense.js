import { Text, View, StyleSheet } from "react-native";
import { useLayoutEffect } from "react";

import { GlobalStyles } from "../constants/styles";
import IconButton from "../components/UI/IconButton";
import Button from "../components/UI/Button";

function ManageExpense({ route, navigation }) {
    const editedExpenseId = route.params?.expenseId;
    const isEditing = !!editedExpenseId;

    useLayoutEffect(() => {
        navigation.setOptions({
            title: isEditing ? "Edit Expense" : "Add Expense",
        });
    }, [navigation, isEditing]);

    function deleteExpenseHandler() {}

    function cancelHandler() {}

    function confirmHandler() {}

    return (
        <View style={styles.container}>
            <View style={styles.buttons}>
                <Button
                    style={styles.button}
                    mode="flat"
                    onPress={cancelHandler}
                >
                    Cancel
                </Button>
                <Button style={styles.button} onPress={confirmHandler}>
                    {isEditing ? "Update" : "Add"}
                </Button>
            </View>
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

    buttons: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        gap: "50",
        alignItems: "center",
        borderBottomWidth: 2,
        borderBottomColor: GlobalStyles.colors.primary200,
        paddingBottom: 16,
    },

    button: {
        minWidth: 120,
        marginHorizontal: 8,
    },

    deleteContainer: {
        marginTop: 16,
        paddingTop: 8,
    },
});
