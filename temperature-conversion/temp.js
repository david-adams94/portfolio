document.getElementById('seeMoreCurrent').onclick = function(){
    document.getElementById('seeMoreCurrent').style.display = 'none';
    document.getElementById('lessCommonCurrent').style.display = 'block';
}

document.getElementById('seeMoreConvert').onclick = function(){
    document.getElementById('seeMoreConvert').style.display = 'none';
    document.getElementById('lessCommonConvert').style.display = 'block';
}


document.getElementById('currentSubmit').onclick = function currentToCel(){
    temp = document.getElementById('tempNum').value;
    temp = Number(temp);
    if (document.getElementById('currFah').checked){
        temp = (temp - 32) * 5 / 9;
    } else if (document.getElementById('currCel').checked){
        temp = temp;
    } else if (document.getElementById('currKel').checked){
        temp = temp - 273.15;
    } else if (document.getElementById('currRan').checked){
        temp = (temp - 491.67) * 5 / 9;
    } else if (document.getElementById('currNew').checked){
        temp = temp * 100 / 33;
    } else if (document.getElementById('currRom').checked){
        temp = (temp - 7.5) * 40 / 21;
    } else if (document.getElementById('currRea').checked){
        temp = temp * 5 / 4;
    } else if (document.getElementById('currDel').checked){
        temp = 100 - temp * 2 / 3;
    } else {
        document.getElementById('selectCurrent').innerHTML = 'Error: Before Submitting, Enter Current Temperture & Select Scale.';
    }
}

document.getElementById('convertSubmit').onclick = function celToConverted(){
    if (document.getElementById('conFah').checked){
        temp = (temp * 9 / 5 + 32).toFixed(2);
        document.getElementById('convertedTemp').innerHTML = `The temperature is ${temp}°F!`
    } else if (document.getElementById('conCel').checked){
        temp = (temp).toFixed(2);
        document.getElementById('convertedTemp').innerHTML = `The temperature is ${temp}°C!`
    } else if (document.getElementById('conKel').checked){
        temp = (temp + 273.15).toFixed(2);
        document.getElementById('convertedTemp').innerHTML = `The temperature is ${temp}°K!`
    } else if (document.getElementById('conRan').checked){
        temp = ((temp + 273.15) * 9 / 5).toFixed(2);
        document.getElementById('convertedTemp').innerHTML = `The temperature is ${temp}°R!`
    } else if (document.getElementById('conNew').checked){
        temp = (temp * 33 / 100).toFixed(2);
        document.getElementById('convertedTemp').innerHTML = `The temperature is ${temp}°N!`
    } else if (document.getElementById('conRom').checked){
        temp = (temp * 21 / 40 + 7.5).toFixed(2);
        document.getElementById('convertedTemp').innerHTML = `The temperature is ${temp}°Rø!`
    } else if (document.getElementById('conRea').checked){
        temp = (temp * 4 / 5).toFixed(2);
        document.getElementById('convertedTemp').innerHTML = `The temperature is ${temp}°Ré!`
    } else if (document.getElementById('conDel').checked){
        temp = ((100 - temp) * 3 / 2).toFixed(2);
        document.getElementById('convertedTemp').innerHTML = `The temperature is ${temp}°De!`
    } else {
        document.getElementById('convertedTemp').innerHTML = 'Error: Select Scale To Convert To.';
    }
}