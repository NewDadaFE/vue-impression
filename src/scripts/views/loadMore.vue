<template>
    <div>
        <loadmore
            v-if="list.length"
            ref="loadmore"
            :bottom-method="getList"
            :bottom-all-loaded="allLoaded"
            bottom-loading-text="加载中..."
            bottom-pull-text="上拉加载更多"
            bottom-drop-text="上拉加载更多"
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
    },{
        text: '已加载内容10'
    }]

    export default{
        data() {
            return {
                list: [],
                allLoaded: false
            }
        },
        created() {
            this.getList()
        },
        methods: {
            getList() {
                if (this.list.length > 100) {
                    this.allLoaded = true
                    return
                }
                this.list = [...this.list, ...list]
            },
        },
    };
</script>
<style>
    .item {
        font-size: 1.6em;
        width: 100%;
        height: 20em;
        line-height: 5em;
        text-align: center;
    }
</style>