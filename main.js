const input = document.getElementById("creditCardInput");
const mcLogo = document.getElementById("mcLogo");
const visaLogo = document.getElementById("visaLogo");

const masterCardRegex = '^(5[1-5]\\d{0,2}|22[2-9]\\d{0,1}|2[3-7]\\d{0,2})\\d{0,12}'
const visaCardRegex = '^4\\d{0,15}'

input.addEventListener("input", function() {
    const inputValue = this.value;
    const numbers = acceptOnlyNumerical(inputValue);
    this.value = formatNumber(numbers);

    if(this.value.match(visaCardRegex)){
        visaLogo.style.display = "block"
        mcLogo.style.display = "none"

    }else if(this.value.match(masterCardRegex)){
        visaLogo.style.display = "none"
        mcLogo.style.display = "block"
    }
    else{
        visaLogo.style.display = "block"
        mcLogo.style.display = "block"
    }

    console.log(this.value.match(masterCardRegex))
});

const acceptOnlyNumerical = (value) => {
  return value.replace(/[^0-9.]/g, '').replace(/(\..*?)\..*/g, '$1');
}

const formatNumber = (value) => value.split("").reduce((accumulator, currentValue, index) => {
    if (index !== 0 && !(index % 4)) accumulator += " ";
    return (accumulator + currentValue);
}, "");


