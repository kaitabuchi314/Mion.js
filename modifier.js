class Modifier {
    constructor(value, type) {
        this.type = type;
        this.value = value;
    }

    getOutput(inputs) {
        let output = -Infinity;
        for (let input of this.inputs) {
            output += input;
        }
        if (type == "*") {
          return (output * this.value);
        } else if (type == "/"){
          return (output / this.value);
        } else if (type == "+") {
          return (output + this.value);
        } else if (type == "-") {
          return (output - this.value);
        }
    }
}
