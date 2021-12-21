import { Controller } from '@hotwired/stimulus'

export default class extends Controller {
  connect () {
    this.showTime()
    this.timer = setInterval(() => {
      this.showTime()
    }, 1000)
  }

  showTime () {
    this.element.textContent = this.currentTimeString()
  }

  disconnect () {
    clearInterval(this.timer)
  }

  //get current time and format as string
  currentTimeString () {
    let currentTime = new Date()
    // day of week in words
    let dayOfWeek = currentTime.toLocaleString('en-GB', { weekday: 'long' })
    // day of month
    let dayOfMonth = currentTime.toLocaleString('en-GB', {
      day: 'numeric'
    })
    // month in words
    let month = currentTime.toLocaleString('en-GB', { month: 'long' })
    // year
    let year = currentTime.getFullYear()
    let hours = currentTime.getHours()
    let minutes = currentTime.getMinutes()
    let seconds = currentTime.getSeconds()
    let ampm = hours >= 12 ? 'pm' : 'am'
    hours = hours % 12
    hours = hours ? hours : 12 // the hour '0' should be '12'
    minutes = minutes < 10 ? '0' + minutes : minutes
    seconds = seconds < 10 ? '0' + seconds : seconds
    return (
      dayOfWeek +
      ', ' +
      dayOfMonth +
      ' ' +
      month +
      ' ' +
      year +
      '. ' +
      hours +
      ':' +
      minutes +
      ':' +
      seconds +
      ' ' +
      ampm
    )
  }
}
