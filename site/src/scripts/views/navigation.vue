<template>
    <div>
        <group-title>base</group-title>
        <navigation>
            <navigation-item label="首页">
            </navigation-item>
            <navigation-item label="分类">
            </navigation-item>
            <navigation-item label="购物车">
            </navigation-item>
            <navigation-item label="订单">
            </navigation-item>
            <navigation-item label="我的">
            </navigation-item>
        </navigation>
        <group-title>icon</group-title>
        <navigation @change="changeHandle">
            <navigation-item label="首页">
                <icon name="home" size="lg"></icon>
            </navigation-item>
            <navigation-item label="分类">
                <icon name="list-ul" size="lg"></icon>
            </navigation-item>
            <navigation-item label="购物车">
                <icon name="shopping-cart" size="lg"></icon>
            </navigation-item>
            <navigation-item label="订单">
                <icon name="file-text-o" size="lg"></icon>
            </navigation-item>
            <navigation-item label="我的">
                <icon name="smile-o" size="lg"></icon>
            </navigation-item>
        </navigation>
    </div>
</template>

<script>
    export default {
        methods: {
            changeHandle(val) {
                this.$toast(`选择了第 ${val + 1} 个`);
            },
        },
    };
</script>
