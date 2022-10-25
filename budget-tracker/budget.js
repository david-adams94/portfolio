document.getElementById('costInput').onclick = function(){
    document.getElementById('costInput').value = '';
}

document.getElementById('storeInput').onclick = function(){
    document.getElementById('storeInput').value = '';
}

window.setInterval('reloadIFrame();', 10000);
function reloadIFrame() {
    document.getElementById('chart').src='https://docs.google.com/spreadsheets/d/1d9l9YoiauqwFZL0ii0502o-fX7hDLGjCJJ1OLhIsJqc/htmlembed/sheet?gid=625405150&range=A1';
}