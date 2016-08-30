const result = document.getElementById('result');

function *main() {
  const r1 = yield request('data/sample1.txt');
  const r2 = yield request('data/sample2.txt');

  result.innerHTML += `<p>${r1}</p>`;
  result.innerHTML += `<p>${r2}</p>`;
}

run(main);