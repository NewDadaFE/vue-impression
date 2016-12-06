import Vue from 'vue'

export default {
  data() {
    return {
      second: 0
    }
  },
  props: {
    //  文案
    text: {
        default: '加载中',
        type: String
    },
    hasTimer: {
        default: true,
        type: Boolean
    }
  },
  name: 'loading',
  render(h) {
    var timeInterval = setTimeout(() =>{
        this.second++
    }, 1000)
    return(
     <div class="loading-spinner">
       <svg class="circular" viewBox="25 25 50 50">
         <circle class="path" cx="50" cy="50" r="20" fill="none"/>
       </svg>
       <p class="loading-text">{this.text}</p>
       {this.hasTimer ? <p class="interval">{this.second}秒</p> : ""}
     </div>
    )
  }
}
