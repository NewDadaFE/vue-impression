<template>
    <div>

        <div style="width: 100%; height: 230px; margin: 0 auto; overflow: hidden;">
            <group-title>test</group-title>
            <roll
                :autoplay="false"
                :onDragStart="onDragStart"
                :onDrag="onDrag"
                :onDragEnd="onDragEnd">
                <roll-item v-for="item in swipeItems" :key="item.text">
                    <div class="page-swipe-item" :class="item.theme">{{item.text}}</div>
                </roll-item>
            </roll>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                swipeItems: [],
            };
        },
        methods: {
            onDragStart(index) {
                console.log('onDragStart');
                this.$toast({
                    message: `onDragStart${index}`,
                });
            },
            onDrag(index) {
                console.log('onDrag');
                this.$toast({
                    message: `onDrag${index}`,
                });
            },
            onDragEnd(index) {
                console.log(`onDragEnd:${index}`);
                this.$toast({
                    message: `onDragEnd${index}`,
                });
            },
        },
        mounted() {
            setTimeout(() => {
                this.swipeItems = [{
                    text: 1,
                    theme: 'bg-primary',
                }, {
                    text: 2,
                    theme: 'bg-secondary',
                }, {
                    text: 3,
                    theme: 'bg-success',
                }, {
                    text: 4,
                    theme: 'bg-warning',
                }, {
                    text: 5,
                    theme: 'bg-danger',
                }];
            }, 1000);
        },
    };
</script>


<style>
    .swipe {
        height: 200px;
    }

    .page-swipe-item {
        color: #fff;
        width: 100px;
        height: 100px;
        text-align: center;
        font-size: 30px;
        font-weight: bold;
    }
</style>
