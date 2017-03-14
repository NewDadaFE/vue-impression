<template>
    <div>
        <group-title>base</group-title>
        <swipe
            :onDragStart="onDragStart"
            :onDrag="onDrag"
            :onDragEnd="onDragEnd">
            <swipe-item v-for="item in swipeItems">
                <div class="page-swipe-item" :class="item.theme">{{item.text}}</div>
            </swipe-item>
        </swipe>
        <group-title>defaultIndex=1</group-title>
        <swipe :defaultIndex="0">
            <swipe-item>
                <div class="page-swipe-item bg-primary">1</div>
            </swipe-item>
        </swipe>
        <group-title>dots=false</group-title>
        <swipe :dots="false">
            <swipe-item>
                <div class="page-swipe-item bg-primary">1</div>
            </swipe-item>
            <swipe-item>
                <div class="page-swipe-item bg-secondary">2</div>
            </swipe-item>
            <swipe-item>
                <div class="page-swipe-item bg-success">3</div>
            </swipe-item>
        </swipe>
        <group-title>autoplay=false</group-title>
        <swipe :autoplay="false">
            <swipe-item>
                <div class="page-swipe-item bg-primary">1</div>
            </swipe-item>
            <swipe-item>
                <div class="page-swipe-item bg-secondary">2</div>
            </swipe-item>
            <swipe-item>
                <div class="page-swipe-item bg-success">3</div>
            </swipe-item>
        </swipe>
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
        height: 100%;
        line-height: 200px;
        text-align: center;
        font-size: 30px;
        font-weight: bold;
    }
</style>
