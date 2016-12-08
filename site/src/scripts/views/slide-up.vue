<template>
    <div>
        <group-title>base</group-title>
        <group>
            <cell @click="showBase = true">选择地点</cell>
        </group>
        <group-title>event</group-title>
        <group>
            <cell @click="showEvent = true">close</cell>
        </group>
        <slide-up v-model="showBase" noPadding>
            <div slot="header" class="text-secondary">
                <icon name="map-marker"></icon>
                请选择送货地点：
            </div>
            <selector @change="showBase = false">
                <selector-option :value="1">北京市</selector-option>
                <selector-option :value="2">上海市</selector-option>
                <selector-option :value="3">广州市</selector-option>
            </selector>
        </slide-up>
        <slide-up v-model="showEvent" @close="closeHandle">
            <div slot="header" class="text-secondary">
                <icon name="map-marker"></icon>
                商品：
            </div>
            <p class="text-muted">颜色</p>
            <inline-selector>
                <inline-selector-option value="1">黑咖色</inline-selector-option>
                <inline-selector-option value="2" disabled>香槟金</inline-selector-option>
                <inline-selector-option value="3">紫罗兰</inline-selector-option>
                <inline-selector-option value="4">香槟色</inline-selector-option>
                <inline-selector-option value="5" disabled>孔雀蓝</inline-selector-option>
            </inline-selector>
            <p></p>
            <p class="text-muted">尺码</p>
            <inline-selector>
                <inline-selector-option value="xxl">XXL</inline-selector-option>
                <inline-selector-option value="m">M</inline-selector-option>
                <inline-selector-option value="s" disabled>S</inline-selector-option>
                <inline-selector-option value="l">L</inline-selector-option>
                <inline-selector-option value="xl">XL</inline-selector-option>
            </inline-selector>
        </slide-up>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                showBase: false,
                showEvent: false,
            };
        },
        methods: {
            closeHandle() {
                this.$toast('关闭了');
            },
        },
    };
</script>
