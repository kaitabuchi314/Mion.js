class Modifier {
    constructor(inputs, value, type) {
        this.type = type;
        this.inputs = inputs;
        this.value = value;
    }

    getOutput() {
        let output = -Infinity;
        for (let input of this.inputs) {
            output += input;
        }
        return output;
    }
}