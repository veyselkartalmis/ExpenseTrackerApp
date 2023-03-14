import { View } from "react-native";

import Input from "./Input";

function ExpenseForm() {
    function amountChangeHandler() {}

    return (
        <View>
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
            <Input label="Description" />
        </View>
    );
}

export default ExpenseForm;