export const API_KEY = 'ae14c71bd2fb59f40d72b54aac477f0b';

class BaseResource {
  data = undefined;
  status = 'pending';
  error = undefined;
  promise = null;
  read() {
    switch (this.status) {
      case 'pending':
        throw this.promise;
      case 'error':
        throw this.error;
      default:
        return this.data;
    }
  }
}

class AsyncResource extends BaseResource {
  constructor(promise) {
    super();
    this.promise = promise
      .then(data => {
        this.status = 'success';
        this.data = data;
      })
      .catch(error => {
        this.status = 'error';
        this.error = error;
      });
  }
}

export const fetchNewsData = new AsyncResource(
  fetch(`http://api.mediastack.com/v1/news?access_key=${API_KEY}`)
    .then(response => response.json())
    .then(res => {
      return res.data;
    }),
);
