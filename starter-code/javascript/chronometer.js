class Chronometer {
  constructor() { 
    this.currentTime = 0;
    this.intervalId;
    this.miliIntervalId;
    this.miliSeconds = 0;
  }
  startClick() {
     this.intervalId = setInterval(() => {
       this.currentTime++
       return this.currentTime
    }, 1000)
    this.countMiliseconds()
  }

  countMiliseconds() {
     return this.miliIntervalId = setInterval(() => {
      this.miliSeconds++ 
    },100);
  }

  getMiliSeconds() {
    return this.twoDigitsNumber(Math.floor(this.miliSeconds % 100));
  }


  getMinutes() { 
    return Math.floor(this.currentTime / 60);
  }
  getSeconds() { 
    return this.currentTime % 60;
  }
  twoDigitsNumber(x) {
    if(String(x).length === 1) {
      return `0${x}`
    } else {
      return `${x}`
    }
  }
  stopClick() {
    clearInterval(this.intervalId)
    clearInterval(this.miliIntervalId)
  }
  resetClick() {
  return (this.currentTime = 0, this.miliSeconds = 0)
  }
  // splitClick() {}
}