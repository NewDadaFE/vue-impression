<template>
    <div>
        <group-title>
            Pull up
            <span class="pull-right">status: {{ bottomAllLoaded ? 'all loaded' : bottomStatus }}</span>
        </group-title>
        <div class="loadmore-wrapper">
            <loadmore
                :bottomMethod="loadBottom"
                :bottomAllLoaded="bottomAllLoaded"
                @bottomStatusChanged="statusChangeHandle"
                ref="loadmore">
                <ul class="loadmore-list">
                    <li v-for="item in list" class="loadmore-item">{{ item }}</li>
                </ul>
            </loadmore>
        </div>
    </div>
</template>

<style>
    .loadmore-wrapper {
        overflow: scroll;
        background-color: white;
    }

    .loadmore-list {
        padding: 4px 4px 0;
        list-style: none;
    }

    .loadmore-item {
        margin-bottom: 4px;
        height: 50px;
        line-height: 50px;
        border-radius: 2px;
        text-align: center;
    }

    .loadmore-item:last-child {
        margin-bottom: 0;
    }
</style>

<script>
    export default {
        data() {
            return {
                list: [],
                bottomStatus: '',
                bottomAllLoaded: false,
            };
        },
        methods: {
            loadBottom() {
                setTimeout(() => {
                    let lastValue = this.list[this.list.length - 1];

                    if(lastValue < 40) {
                        for (let i = 1; i <= 10; i += 1) {
                            this.list.push(lastValue + i);
                        }
                    }

                    if(this.list[this.list.length - 1] === 40) this.bottomAllLoaded = true;

                    this.$refs.loadmore.onBottomLoaded();
                }, 1500);
            },
            statusChangeHandle(status) {
                this.bottomStatus = status;
            },
        },
        beforeCreate() {
            document.documentElement.scrollTop = 0;
            document.body.scrollTop = 0;
        },
        created() {
            for (let i = 1; i <= 20; i += 1) {
                this.list.push(i);
            }
        },
    };
</script>
