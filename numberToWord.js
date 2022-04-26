var numberToWords = function(num) {
    const BILLION = 1000000000;
    const MILLION = 1000000;
    const THOUSAND = 1000;
    const HUNDRED = 100;
    const TWENTY = 20;
    const TEN = 10;

    
    const myMap = new Map();
    // ones
    myMap.set(1, 'One');
    myMap.set(2, 'Two');
    myMap.set(3, 'Three');
    myMap.set(4, 'Four');
    myMap.set(5, 'Five');
    myMap.set(6, 'Six');
    myMap.set(7, 'Seven');
    myMap.set(8, 'Eight');
    myMap.set(9, 'Nine');
    myMap.set(10, 'Ten');
    // teens
    myMap.set(11, 'Eleven');
    myMap.set(12, 'Twelve');
    myMap.set(13, 'Thirteen');
    myMap.set(14, 'Fourteen');
    myMap.set(15, 'Fifteen');
    myMap.set(16, 'Sixteen');
    myMap.set(17, 'Seventeen');
    myMap.set(18, 'Eighteen');
    myMap.set(19, 'Nineteen');
    // Tens
    myMap.set(20, 'Twenty');
    myMap.set(30, 'Thirty');
    myMap.set(40, 'Forty');
    myMap.set(50, 'Fifty');
    myMap.set(60, 'Sixty');
    myMap.set(70, 'Seventy');
    myMap.set(80, 'Eighty');
    myMap.set(90, 'Ninety');
    
    
    function buildWord(num){
        if(num >= BILLION){
            const num_billions = Math.floor(num / BILLION);
            const rest = num % BILLION;
            return buildWord(num_billions) + ' Billion' + (rest > 0 ? ' ' + buildWord(rest) : '');
        } else if(num >= MILLION){
            const num_millions = Math.floor(num / MILLION);
            const rest = num % MILLION;
            return buildWord(num_millions) + ' Million' + (rest > 0 ? ' ' + buildWord(rest) : '');
        }else if(num >= THOUSAND){
            const num_thousands = Math.floor(num/THOUSAND);
            const rest = num % THOUSAND;
            return buildWord(num_thousands) + ' Thousand' + (rest > 0 ? ' ' + buildWord(rest) : '');
        }else if(num >= HUNDRED){
            const num_hundreds = Math.floor(num/HUNDRED);
            const rest = num % HUNDRED;
            return myMap.get(num_hundreds) + ' Hundred' + (rest > 0 ? ' ' + buildWord(rest) : '');
        }else if(num >= TWENTY){
            const num_tens = Math.floor(num/TEN) * TEN;
            const rest = num % TEN;
            return myMap.get(num_tens) + (rest > 0 ? ' ' + buildWord(rest) : '');
        }else{
            return myMap.get(num);
        }
    }
    
    return num === 0 ? 'Zero' : buildWord(num);
   
};