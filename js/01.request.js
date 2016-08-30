const result = document.getElementById('result');

request('data/sample1.txt').then(function(value) {
  result.innerHTML += `<p>${value}</p>`;

  return request('data/sample2.txt');
}).then(function(value) {
  result.innerHTML += `<p>${value}</p>`;

  return request('data/sample3.txt');
}).catch(function(value) {
  result.innerHTML += `<p>${value}</p>`;
});