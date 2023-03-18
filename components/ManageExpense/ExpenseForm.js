import { View, StyleSheet, Text } from "react-native";
import { GlobalStyles } from "../../constants/styles";

import Input from "./Input";

function ExpenseForm() {
    function amountChangeHandler() {}

    return (
        <View style={styles.formContainer}>
            <Text style={styles.title}>Your Expense</Text>
            <View style={styles.inputsRow}>
                <Input
                    label="Amount"
                    textInputConfig={{
                        keyboardType: "decimal-pad",
                        onchangeText: amountChangeHandler,
                    }}
                    style={styles.rowInput}
                />
                <Input
                    label="Date"
                    textInputConfig={{
                        placeholder: "YYYY-MM-DD",
                        maxLength: 10,
                        onChangeText: () => {},
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
                }}
            />
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
});
