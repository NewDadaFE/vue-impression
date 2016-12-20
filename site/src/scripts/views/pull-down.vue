<template>
    <div>
        <group-title>
            Pull down
            <span class="pull-right">status: {{ topAllLoaded ? 'all loaded' : topStatus }}</span>
        </group-title>
        <div class="loadmore-wrapper">
            <loadmore
                :topMethod="loadTop"
                :topAllLoaded="topAllLoaded"
                @topStatusChanged="statusChangeHandle"
                ref="loadmore">
                <ul class="loadmore-list">
                    <li v-for="item in list" class="loadmore-item">{{ item }}</li>
                </ul>
            </loadmore>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                list: [],
                topStatus: '',
                topAllLoaded: false,
            };
        },
        methods: {
            loadTop() {
                setTimeout(() => {
                    let firstValue = this.list[0];

                    if(firstValue >= -20) {
                        for (let i = 1; i <= 10; i += 1) {
                            this.list.unshift(firstValue - i);
                        }
                    }

                    if(this.list[0] === -19) this.topAllLoaded = true;

                    this.$refs.loadmore.onTopLoaded();
                }, 1500);
            },
            statusChangeHandle(status) {
                this.topStatus = status;
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
