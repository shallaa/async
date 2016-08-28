function request(url) {
  return new Promise(function(resolve, reject) {
    const request = new XMLHttpRequest();

    request.onload = function() {
      if (this.status == 200) {
        resolve(this.response);
      } else {
        reject(new Error(this.statusText));
      }
    };

    request.onerror = function() {
      reject(new Error(this.statusText));
    };

    request.open('GET', url);
    request.send();
  })
}