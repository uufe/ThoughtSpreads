async function sleep(time) {
  return new Promise(resolve=>{
    setTimeout(()=>{
      resolve();
    }, time || 0)
  })
}

module.exports = {
  sleep
}