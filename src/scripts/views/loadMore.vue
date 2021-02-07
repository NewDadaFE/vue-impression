<template>
    <div style="overflow-y: auto;height:100%;">
        <loadmore
            ref="loadmore"
            :top-method="getList"
            :bottom-method="getList"
            :bottom-all-loaded="allLoaded"
            :showLoading="showLoading"
            bottom-loading-text="加载中..."
            top-loading-text="加载中..."
            top-drop-text="释放刷新"
        >
            <div
            v-for="(item, index) in list"
            :key="index"
            class="item"
            >
            {{item.text}}
            </div>
        </loadmore>
        <div v-if="allLoaded" class="no-more">没有更多记录了哦</div>
    </div>
</template>
<script>
    const list = [{
        text: '已加载内容1'
    },{
        text: '已加载内容2'
    },{
        text: '已加载内容3'
    },{
        text: '已加载内容4'
    },{
        text: '已加载内容5'
    },{
        text: '已加载内容6'
    },{
        text: '已加载内容7'
    },{
        text: '已加载内容8'
    },{
        text: '已加载内容9'
    }]

    export default{
        data() {
            return {
                list: [],
                allLoaded: false,
                showLoading: true,
                count: 0,
            }
        },
        created() {
            // this.getList()
        },
        methods: {
            async getList() {
                if (this.list.length > 100) {
                    this.allLoaded = true
                    return
                }
                console.log(++this.count)

                this.showLoading = true
                const list = await this.getListApi()
                this.showLoading = false
                this.list = [...this.list, ...list]
            },
            getListApi() {
                return new Promise((resolve, reject)=>{
                    //延时一秒,模拟联网
                    setTimeout(function() {
                        try {
                            //模拟接口请求成功
                            resolve(list);
                        } catch (e) {
                            //模拟接口请求失败
                            reject(e);
                        }
                    }, 1000)
                })
            }
        },
    };
</script>
<style>
    .item {
        font-size: 1.6em;
        width: 100%;
        height: 3em;
        line-height: 3em;
        text-align: center;
    }
    .no-more {
        text-align: center;
    }
</style>