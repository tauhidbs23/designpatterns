export default class FancyLogger{
  constructor(){
    this.logs = []
  }

  log(message){
    this.log.push(message)
    console.log(`FANCY: ${message}`)
  }

  printLogCount(){
    console.log(`${this.logs.length} Logs`);
  }
}