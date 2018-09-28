<template>
    <div
        class="progressbars"
        :class="{
            [`progressbars-${size}`]: size,
            [`progressbars-${theme}`]: theme,
        }">
        <div class="line-bg">
            <div class="line-progress" :style="`width: ${progressWidth}`"></div>
        </div>
        <div
            v-for="(score, index) in dotDataList"
            v-bind:key="index"
            :class="getCircleClass(index)"
            :style="getCircleStyle(index)"
            >
        </div>
    </div>
</template>

<script>
    export default {
        name: 'progressbars',
        props: {
            // 所有节点数值
            dotDataList: {
                type: Array,
                default: [0, 10, 50],
                required: true,
            },
            currentData: {
                type: Number,
                default: 0,
                required: true,
            },
            // 主题
            theme: {
                type: String,
                default: 'primary',
                validator(value) {
                    return ['primary', 'success', 'warning', 'danger'].indexOf(value) > -1;
                },
            },
            // 尺寸
            size: {
                type: String,
                default: 'sm',
                validator(value) {
                    return ['sm', 'lg'].indexOf(value) > -1;
                },
            },
            // 尺寸
            dotShape: {
                type: String,
                default: 'radio',
                validator(value) {
                    return ['radio'].indexOf(value) > -1;
                },
            },
        },
        computed: {
            progressWidth: function () {
                // 最高等级
                if (this.currentDotIndex === 4) {
                    return '100%'
                }
                // 总体进度
                const widthPercent =
                // 每个区间占比
                1 / (this.dotDataList.length - 1) *
                (
                    this.currentDotIndex +
                      // 当前区间分值
                      ((this.currentData - this.dotDataList[this.currentDotIndex]) /
                        // 对应区间总分值
                        (this.dotDataList[this.currentDotIndex + 1] - this.dotDataList[this.currentDotIndex]))
                  )

                  return `${widthPercent * 100}%`
            },
            currentDotIndex: function () {
                  let currentDotIndex = 0

                  for (let i = 0; i < this.dotDataList.length; i++) {
                    if (i === (this.dotDataList.length - 1)) {
                      if (this.currentData >= this.dotDataList[i]) {
                        currentDotIndex = i
                      }
                    } else {
                      if (this.currentData >= this.dotDataList[i] && this.currentData < this.dotDataList[i + 1]) {
                        currentDotIndex = i
                        break
                      }
                    }
                  }

                  return currentDotIndex
            },
        },
        methods: {
            getCircleClass(index) {
              let classStr = `circle`

              if (index <= this.currentDotIndex) {
                classStr += ' active'
              }
              if (index === this.currentDotIndex) {
                classStr += ' current-dot'
              }

              return classStr
            },
            getCircleStyle(index) {
                let circleWidth = ''

                if(this.size === 'sm') {
                    circleWidth = '0.5em'
                }

                return `left: calc(100%/${this.dotDataList.length-1}*${index} - circleWidth/${this.dotDataList.length-1}*${index})`
            },
        },
    };
</script>
