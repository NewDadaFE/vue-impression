<template>
    <div
        class="progressbars"
        :class="{
            [`progressbars-${size}`]: size,
            [`progressbars-${theme}`]: theme,
        }">
        <div class="line-bg" :style="`background-color: ${backgroundColor};`">
            <div class="line-progress" :style="`width: ${this.progressWidth}; background-color: ${this.foregroundColor};`"></div>
        </div>
        <div
            v-for="(nodeData, index) in nodeDataList"
            :key="index"
            :class="getNodeClass(index)"
            :style="getNodeStyle(index)"
            >
            <div class="info">
                <slot :name="`infoSlot${index}`" />
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'progressbars',
        data() {
            return {
                circleWidth: 0.8,
            }
        },
        props: {
            // 所有节点数值
            nodeDataList: {
                type: Array,
                default: [0, 10, 50],
                required: true,
                validator(value) {
                    return value && value.length >= 2;
                }
            },
            // 当前数值
            currentData: {
                type: Number,
                default: 0,
                required: true,
            },
            // 所有节点展示内容
            nodeInfoList: {
                type: Array,
                default: null,
                // validator(value) {
                //     if (value) {
                //         return value.length === this.nodeDataList.length;
                //     }
                //
                //     return
                // }
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
                    return ['xsm', 'sm', 'lg'].indexOf(value) > -1;
                },
            },
            // 节点形状
            nodeShape: {
                type: String,
                default: 'dot',
                validator(value) {
                    return ['circle', 'dot', 'checkCircle'].indexOf(value) > -1;
                },
            },
            // 进度条背景色
            backgroundColor: {
                type: String,
                default: '#DEE0E8',
            },
            // 进度条前景色
            foregroundColor: {
                type: String,
                default: '#1C89EA',
            },
        },
        computed: {
            nodesLength: function () {
                return this.nodeDataList.length
            },
            // 方案一
            // 进度条百分比 + N个节点宽度 = 精确的进度条长度
            //
            // 方案二：
            // （100% - 所有节点宽度）/（所有节点数 - 1）*（所处区间头节点index + 占当前区间百分比）+
            // （所处区间头节点index + 1）* 一个节点宽度 =
            // 精确区间百分比 + 包含所有节点宽度 =
            // 精确的进度条长度
            progressWidth: function () {
                /* eslint-disable */
                // debugger
                // 最高等级
                if (this.currentDotIndex === this.nodesLength - 1) {
                    return '100%'
                }
                // 方案一：总体进度
                // const widthPercent =
                // // 每个区间占比
                // 1 / (this.nodeDataList.length - 1) *
                // (
                //     this.currentDotIndex +
                //       // 当前区间分值
                //       ((this.currentData - this.nodeDataList[this.currentDotIndex]) /
                //         // 对应区间总分值
                //         (this.nodeDataList[this.currentDotIndex + 1] - this.nodeDataList[this.currentDotIndex]))
                //   )
                //
                // return `calc(${widthPercent * 100}% + ${(this.currentDotIndex + 1) * this.circleWidth}em)`

                // 方案二：以下是经过拆解后的计算过程
                // 当前区间占比
                const currentAreaPercent =
                    // 当前区间分值
                    ((this.currentData - this.nodeDataList[this.currentDotIndex]) /
                      // 对应区间总分值
                      (this.nodeDataList[this.currentDotIndex + 1] - this.nodeDataList[this.currentDotIndex]))
                const part1 = `(100% - ${this.nodesLength * this.circleWidth}em)`
                const part2 = `${this.nodesLength - 1}`
                const part3 = `${this.currentDotIndex + currentAreaPercent}`
                const part4 = `${(this.currentDotIndex + 1) * this.circleWidth}em`

                return `calc(${part1} / ${part2} * ${part3} + ${part4})`
            },
            currentDotIndex: function () {
                  let currentDotIndex = 0

                  for (let i = 0; i < this.nodeDataList.length; i++) {
                    if (i === (this.nodeDataList.length - 1)) {
                      if (this.currentData >= this.nodeDataList[i]) {
                        currentDotIndex = i
                      }
                    } else {
                      if (this.currentData >= this.nodeDataList[i] && this.currentData < this.nodeDataList[i + 1]) {
                        currentDotIndex = i
                        break
                      }
                    }
                  }

                  return currentDotIndex
            },
        },
        methods: {
            getNodeClass(index) {
              let nodeClass = 'node '

              if (this.nodeShape === 'dot') {
                  nodeClass += 'dot '
              } else if (this.nodeShape === 'circle') {
                  nodeClass += 'circle '
              } else if (this.nodeShape === 'checkCircle') {
                  nodeClass += 'check-circle '
              }

              if (index <= this.currentDotIndex) {
                nodeClass += 'active '
              }
              if (index === this.currentDotIndex) {
                nodeClass += 'current-dot '
              }

              return nodeClass
            },
            getNodeStyle(index) {
                let nodeStyle = ''

                if (this.nodeShape === 'dot') {
                    nodeStyle = 'border-color: '
                } else if (this.nodeShape === 'circle') {
                    nodeStyle = 'background-color: '
                } else if (this.nodeShape === 'checkCircle') {
                    // nodeStyle = 'color: '
                    nodeStyle = 'background-color: '
                }

                if (index <= this.currentDotIndex) {
                    nodeStyle += `${this.foregroundColor};`
                } else {
                    nodeStyle += `${this.backgroundColor};`
                }

                return `${this.getCirclePosition(index)} ${nodeStyle}`
            },
            getCirclePosition(index) {
                // （全长 - 一个节点宽度） / （节点数 - 1） * 节点索引 = 节点left定位
                // return `left: calc(100%/${this.nodesLength-1}*${index} - ${this.circleWidth / (this.nodesLength -1 ) * index}em);`
                return `left: calc((100% - ${this.circleWidth}em) / ${this.nodesLength - 1} * ${index});`
            },
        },
    };
</script>
