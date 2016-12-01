import Vue from 'vue'

export default {
  data() {
    return {
      second: 0
    }
  },
  name: 'loading',
  render(h) {
    var timeInterval = setTimeout(() =>{
    //   if(this.second > 300){
    //     clearTimeout(timeInterval);
    //   }else{
        this.second++
    //   }
    }, 1000)
    // console.log(this.second);
    return(
     <div class="loading-spinner">
       <svg class="circular" viewBox="25 25 50 50">
         <circle class="path" cx="50" cy="50" r="20" fill="none"/>
       </svg>
       <p class="loading-text">加载中</p>
       <p class="interval">{this.second}秒</p>
     </div>
    )
  }
}
