import { View, StyleSheet } from "react-native";
import { GlobalStyles } from "../../constants/styles";

import Input from "./Input";

function ExpenseForm() {
    function amountChangeHandler() {}

    return (
        <View style={styles.formContainer}>
            <Input
                label="Amount"
                textInputConfig={{
                    keyboardType: "decimal-pad",
                    onchangeText: amountChangeHandler,
                }}
            />
            <Input
                label="Date"
                textInputConfig={{
                    placeholder: "YYYY-MM-DD",
                    maxLength: 10,
                    onChangeText: () => {},
                }}
            />
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
    },
});
