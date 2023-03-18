import { useState } from "react";
import { View, StyleSheet, Text } from "react-native";

import { GlobalStyles } from "../../constants/styles";

import Input from "./Input";
import Button from "../UI/Button";

import { getFormattedDate } from "../../util/date";

function ExpenseForm({ onCancel, onSubmit, submitButtonLabel, defaultValues }) {
    const [inputValues, setInputValues] = useState({
        amount: defaultValues ? defaultValues.amount.toString() : "",
        date: defaultValues ? getFormattedDate(defaultValues.date) : "",
        description: defaultValues ? defaultValues.description : "",
    });

    function inputChangedHandler(inputIdentifier, enteredValue) {
        setInputValues((curInputValues) => {
            return {
                ...curInputValues,
                [inputIdentifier]: enteredValue,
            };
        });
    }

    function submitHandler() {
        const expenseData = {
            amount: +inputValues.amount,
            date: new Date(inputValues.date),
            description: inputValues.description,
        };

        onSubmit(expenseData);
    }

    return (
        <View style={styles.formContainer}>
            <Text style={styles.title}>Your Expense</Text>
            <View style={styles.inputsRow}>
                <Input
                    label="Amount"
                    textInputConfig={{
                        keyboardType: "decimal-pad",
                        onChangeText: inputChangedHandler.bind(this, "amount"),
                        value: inputValues.amount,
                    }}
                    style={styles.rowInput}
                />
                <Input
                    label="Date"
                    textInputConfig={{
                        placeholder: "YYYY-MM-DD",
                        maxLength: 10,
                        onChangeText: inputChangedHandler.bind(this, "date"),
                        value: inputValues.date,
                    }}
                    style={styles.rowInput}
                />
            </View>

            <Input
                label="Description"
                textInputConfig={{
                    multiline: true,
                    //autoCapitalize: true,
                    //autoCorrect: false //default is true
                    onChangeText: inputChangedHandler.bind(this, "description"),
                    value: inputValues.description,
                }}
            />
            <View style={styles.buttons}>
                <Button style={styles.button} mode="flat" onPress={onCancel}>
                    Cancel
                </Button>
                <Button style={styles.button} onPress={submitHandler}>
                    {submitButtonLabel}
                </Button>
            </View>
        </View>
    );
}

export default ExpenseForm;

const styles = StyleSheet.create({
    formContainer: {
        backgroundColor: GlobalStyles.colors.primary800,
        padding: 24,
        paddingTop: 40,
    },

    title: {
        fontSize: 24,
        fontWeight: "bold",
        color: "white",
        marginVertical: 24,
        textAlign: "center",
    },

    inputsRow: {
        flexDirection: "row",
        justifyContent: "space-between",
    },

    rowInput: {
        flex: 1,
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
});
