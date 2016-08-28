function run(gen, ...args) {
  var it = gen.apply(this, args);

  return Promise.resolve().then(function handleNext(value) {
    var next = it.next(value);

    return (function handleResult(next) {
      if (next.done) {
        return next.value;
      } else {
        return Promise.resolve(next.value).then(handleNext, function handleError(error) {
          return Promise.resolve(it.throw(error)).then(handleResult);
        });
      }
    })(next);
  });
}