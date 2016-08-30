const result = document.getElementById('result');

function all() {
  return Promise.all([
    request('data/sample2.json'),
    request('data/sample3.json')
  ]);
}

function *main() {
  const r1 = yield request('data/sample1.json');

  const url = JSON.parse(r1).url;

  let [data1, data2] = yield all();

  data1 = JSON.parse(data1).data;
  data2 = JSON.parse(data2).data;

  result.innerHTML += `<p>${url}/?data1=${data1}&data2=${data2}</p>`;
}

run(main);