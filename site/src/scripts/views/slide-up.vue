<template>
    <div>
        <group-title>base</group-title>
        <group>
            <cell @click="showBase = true">{{city || '选择地点'}}</cell>
        </group>
        <group-title>event:close</group-title>
        <group>
            <cell @click="showEvent = true">
                {{(color || size) ? `已选择：${color}、${size}` : '请选择型号'}}
            </cell>
        </group>
        <slide-up v-model="showBase" noPadding>
            <div slot="header" class="text-secondary">
                <icon name="map-marker"></icon>
                请选择送货地点：
            </div>
            <selector v-model="city" @change="showBase = false">
                <selector-option value="北京">北京</selector-option>
                <selector-option value="上海">上海</selector-option>
                <selector-option value="广州">广州</selector-option>
                <selector-option value="成都">成都</selector-option>
                <selector-option value="南京">南京</selector-option>
                <selector-option value="杭州">杭州</selector-option>
                <selector-option value="深圳">深圳</selector-option>
                <selector-option value="厦门">厦门</selector-option>
                <selector-option value="福州">福州</selector-option>
                <selector-option value="佛山">佛山</selector-option>
                <selector-option value="嘉兴">嘉兴</selector-option>
                <selector-option value="宁波">宁波</selector-option>
            </selector>
        </slide-up>
        <slide-up v-model="showEvent" @close="closeHandle">
            <div slot="header" class="text-secondary">
                <icon name="map-marker"></icon>
                商品：
            </div>
            <p class="text-muted">颜色</p>
            <inline-selector v-model="color">
                <inline-selector-option value="黑咖色">黑咖色</inline-selector-option>
                <inline-selector-option value="香槟金" disabled>香槟金</inline-selector-option>
                <inline-selector-option value="紫罗兰">紫罗兰</inline-selector-option>
                <inline-selector-option value="香槟色">香槟色</inline-selector-option>
                <inline-selector-option value="孔雀蓝" disabled>孔雀蓝</inline-selector-option>
            </inline-selector>
            <p></p>
            <p class="text-muted">尺码</p>
            <inline-selector v-model="size">
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
                city: null,
                color: '',
                size: '',
            };
        },
        methods: {
            closeHandle() {
                this.$toast('关闭了');
            },
        },
    };
</script>
