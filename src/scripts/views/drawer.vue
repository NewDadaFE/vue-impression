<template>
    <div>
        <group-title>base</group-title>
        <drawer @change="changeHandle">
            <drawer-item eventKey="分类">分类</drawer-item>
            <drawer-item eventKey="排序" disabled>disabled</drawer-item>
            <drawer-item eventKey="筛选">筛选</drawer-item>
        </drawer>
        <group-title>
            reset
            <a class="pull-right" href="javascript:void(0)" @click="resetHandle">reset</a>
        </group-title>
        <drawer ref="drawer" activeKey="排序" @change="changeHandle">
            <drawer-item eventKey="分类">分类</drawer-item>
            <drawer-item eventKey="排序">排序</drawer-item>
            <drawer-item eventKey="筛选">筛选</drawer-item>
        </drawer>
    </div>
</template>

<script>
    export default {
        methods: {
            changeHandle(val) {
                this.$toast(`切换至[${val}]`);
            },
            resetHandle() {
                this.$refs.drawer.reset();
            },
        },
    };
</script>
