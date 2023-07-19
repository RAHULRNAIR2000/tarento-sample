function calculate() {
    var salary = document.getElementById('salary').value;
    var workTime = document.getElementById('work-time').value;
    var commodityPrice = document.getElementById('commodity-price').value;
    var x = salary / workTime;
    var result = commodityPrice / x;
    document.getElementById('result').textContent = result.toFixed(2);
    document.getElementById('result-box').style.display = 'block';
}
