const result = document.getElementById('result');

function *sub() {
  const r2 = yield request('data/sample2.json');
  const r3 = yield request('data/sample3.json');

  const data1 = JSON.parse(r2).data;
  const data2 = JSON.parse(r3).data;

  return [data1, data2];
}

function *main() {
  const r1 = yield request('data/sample1.json');

  const url = JSON.parse(r1).url;
  const [data1, data2] = yield *sub();

  result.innerHTML += `<p>${url}/?data1=${data1}&data2=${data2}</p>`;
}

run(main);