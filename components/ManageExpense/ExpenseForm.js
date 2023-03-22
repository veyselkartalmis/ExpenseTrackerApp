import { useState } from "react";
import { View, StyleSheet, Text, Alert } from "react-native";

import { GlobalStyles } from "../../constants/styles";

import Input from "./Input";
import Button from "../UI/Button";

import { getFormattedDate } from "../../util/date";

function ExpenseForm({ onCancel, onSubmit, submitButtonLabel, defaultValues }) {
    const [inputs, setInputs] = useState({
        amount: {
            value: defaultValues ? defaultValues.amount.toString() : "",
            isValid: true,
        },
        date: {
            value: defaultValues ? getFormattedDate(defaultValues.date) : "",
            isValid: true,
        },
        description: {
            value: defaultValues ? defaultValues.description : "",
            isValid: true,
        },
    });

    function inputChangedHandler(inputIdentifier, enteredValue) {
        setInputs((curInputs) => {
            return {
                ...curInputs,
                [inputIdentifier]: { value: enteredValue, isValid: true },
            };
        });
    }

    function submitHandler() {
        const expenseData = {
            amount: +inputs.amount.value,
            date: new Date(inputs.date.value),
            description: inputs.description.value,
        };

        const amountIsValid =
            !isNaN(expenseData.amount) && expenseData.amount > 0;
        const dateIsValid = expenseData.date.toString() !== "Invalid Date";
        const descriptionIsValid = expenseData.description.trim().length > 0;

        if (!amountIsValid || !dateIsValid || !descriptionIsValid) {
            //Alert.alert("Invalid Input", "Please check your input values");
            setInputs((curInputs) => {
                return {
                    amount: {
                        value: curInputs.amount.value,
                        isValid: amountIsValid,
                    },
                    date: {
                        value: curInputs.date.value,
                        isValid: dateIsValid,
                    },
                    description: {
                        value: curInputs.description.value,
                        isValid: descriptionIsValid,
                    },
                };
            });
            return;
        }
        onSubmit(expenseData);
    }

    const formIsInvalid =
        !inputs.amount.isValid ||
        !inputs.date.isValid ||
        !inputs.description.isValid;

    return (
        <View style={styles.formContainer}>
            <Text style={styles.title}>Your Expense</Text>
            <View style={styles.inputsRow}>
                <Input
                    label="Amount"
                    textInputConfig={{
                        keyboardType: "decimal-pad",
                        onChangeText: inputChangedHandler.bind(this, "amount"),
                        value: inputs.amount.value,
                    }}
                    style={styles.rowInput}
                />
                <Input
                    label="Date"
                    textInputConfig={{
                        placeholder: "YYYY-MM-DD",
                        maxLength: 10,
                        onChangeText: inputChangedHandler.bind(this, "date"),
                        value: inputs.date.value,
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
                    value: inputs.description.value,
                }}
            />

            {formIsInvalid && (
                <Text>
                    Invalid input values - please check your entered data!
                </Text>
            )}

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
