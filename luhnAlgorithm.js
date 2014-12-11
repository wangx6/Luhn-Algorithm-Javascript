// luhn algorithm implememtation

var num =  '5105105105105100';

function luhnAthm ( num ) {
    if (/[^0-9-\s]+/.test(num)) return false;
    
    var sum = 0, holder = num.split('');
    holder.map(function(val, index){
        holder[index] = index%2 == 0 ? (val*2>=10? val*2 -9 : val*2) : holder[index] * 1; 
    });
    
    sum = holder.reduce(function(prev, cur) { return prev + cur; });
    return (sum % 10) === 0;
}

console.log(luhnAthm(num));