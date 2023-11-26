(() => {
  const log = (obj?: any) => {
    const date = new Date();
    const time = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}:${date.getMilliseconds()}`;
    console.log(`Extension [${time}]: `, obj);
  };
})();
