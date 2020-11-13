
const submitButton= document.getElementById('submit');

submitButton.addEventListener('click',(e)=>{
    e.preventDefault;
    const total= document.getElementById('totalInput').value;
    const tip= document.getElementById('tipRange').value;
    const splitBillNumber= document.getElementById('splitBillInput').value;
    
    calculate(total,tip,splitBillNumber)
    console.log(e);
});
// validates the inputs
function calculate(total, tip, splitBillNumber){
    if (total === "" || tip == 0 || splitBillNumber== 0){
        alert('Please fill in all inputs!');
        return;
    }
    // gives the tip result
    tipAmount= (total * tip / splitBillNumber);
    
    document.getElementById('totalTip').innerHTML= '$' + tipAmount.toFixed(2);
    // returns the total + tip per person
    totalWithTip= (total / splitBillNumber)+tipAmount;
    document.getElementById('each').innerHTML= '$' + totalWithTip.toFixed(2);
};