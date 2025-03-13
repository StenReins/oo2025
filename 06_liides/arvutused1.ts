interface CalculatingFunction{
    calculate(x:number):number;
    //The input e.g inches
    inputUnit():string;
    //The output return the result (e.g cm)
    outputUnit():string;
}

class CMtoInches implements CalculatingFunction{
    calculate(cm:number):number{ //The calculate method for calculating inches into cm
        return cm / 2.54;
    }
    inputUnit():string{ //The input value unit (inches)
        return "cm";
    }
    outputUnit(): string { //The output value unit (cm)
        return "in";
    }
}

class InchestoCM implements CalculatingFunction{
    calculate(inches:number):number{
        return inches * 2.54;
    }
    inputUnit():string{
        return "in";
    }
    outputUnit():string{
        return "cm";
    }
}

