window.onload = function () {
    submitEntry();
};
class addTax {
    country;
    currentAmount;
    currency;
    constructor(country, currentAmount, currency) {
        this.country = country;
        this.currentAmount = currentAmount;
        this.currency = currency;
        this.country = country;
        this.currentAmount = currentAmount;
        this.currency = currency;
    }
    euCountriesVAT = [
        { country: "Austria", vatRate: 20 },
        { country: "Belgium", vatRate: 21 },
        { country: "Bulgaria", vatRate: 20 },
        { country: "Croatia", vatRate: 25 },
        { country: "Cyprus", vatRate: 19 },
        { country: "Czech Republic", vatRate: 21 },
        { country: "Denmark", vatRate: 25 },
        { country: "Estonia", vatRate: 20 },
        { country: "Finland", vatRate: 24 },
        { country: "France", vatRate: 20 },
        { country: "Germany", vatRate: 19 },
        { country: "Greece", vatRate: 24 },
        { country: "Hungary", vatRate: 27 },
        { country: "Ireland", vatRate: 23 },
        { country: "Italy", vatRate: 22 },
        { country: "Latvia", vatRate: 21 },
        { country: "Lithuania", vatRate: 21 },
        { country: "Luxembourg", vatRate: 16 },
        { country: "Malta", vatRate: 18 },
        { country: "Netherlands", vatRate: 21 },
        { country: "Poland", vatRate: 23 },
        { country: "Portugal", vatRate: 23 },
        { country: "Romania", vatRate: 19 },
        { country: "Slovakia", vatRate: 20 },
        { country: "Slovenia", vatRate: 22 },
        { country: "Spain", vatRate: 21 },
        { country: "Sweden", vatRate: 25 }
    ];
    addTax() {
        const foundCountry = this.euCountriesVAT.find(foundCountry => foundCountry.country === this.country);
        if (foundCountry) {
            const vatRate = foundCountry.vatRate / 100;
            this.currentAmount = this.currentAmount + this.currentAmount * vatRate;
            if (this.currency === "$") {
                const currencyConversion = new CurrencyConversion(this.currentAmount);
                this.currentAmount = currencyConversion.EURToUSD(this.currentAmount);
            }
            this.renderAnswer();
        }
        else {
            console.log("Riik ei ole Euroopa Liidus");
        }
    }
    renderAnswer() {
        const result = document.querySelector('#result');
        result.innerHTML = `${this.currentAmount.toFixed(2)} ${this.currency}`;
    }
    debugging() {
        console.log(this.country, this.currentAmount, this.currency);
    }
}
class CurrencyConversion {
    amount;
    constructor(amount) {
        this.amount = amount;
        this.amount = amount;
    }
    EURToUSD(amount) {
        const rate = 1.09;
        return amount * rate;
    }
    USDToEUR(amount) {
        const rate = 0.92;
        return amount * rate;
    }
}
function submitEntry() {
    const submit = document.querySelector('#submitButton');
    submit?.addEventListener('click', () => {
        const country = document.querySelector('#riik');
        const currentAmount = document.querySelector('#summa');
        const currency = document.querySelector('#currencies');
        const countryValue = country?.value;
        const currentAmountValue = parseFloat(currentAmount?.value);
        const currencyValue = currency?.value;
        const activateScript = new addTax(countryValue, currentAmountValue, currencyValue);
        activateScript.addTax();
        activateScript.debugging();
    });
}
