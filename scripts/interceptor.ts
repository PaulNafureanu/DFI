(async () => {
  const log = (obj?: any) => {
    const date = new Date();
    const time = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}:${date.getMilliseconds()}`;
    console.log(`Extension [${time}]: `, obj);
  };

  log("Interceptor started");
  const url = "https://jsonplaceholder.typicode.com/todos";
  const resource = await fetch(url);
  const todos = await resource.json();
  log(todos);
})();

// Web APIs supported by both context scripts and service workers:

// Fetch API: Provides a modern interface for making HTTP requests.
// Cache API: Provides a way to cache web content offline.
// Web Storage API: Provides a way to store data persistently on the user's device.
// Navigation Timing API: Provides information about the performance of web page navigation.
// Performance API: Provides information about the performance of web pages, including metrics such as CPU usage, memory usage, and network latency.
// URL API: Provides functions for parsing and working with URLs.
// DOMParser API: Provides functions for parsing HTML and XML documents.
// XMLHttpRequest: Provides a legacy interface for making HTTP requests.
