<template>
    <div>
        <group-title>base:{{defaultCity}}</group-title>
        <picker v-model="defaultCity">
            <picker-option value="北京">北京</picker-option>
            <picker-option value="上海">上海</picker-option>
            <picker-option value="广州">广州</picker-option>
            <picker-option value="南京">南京</picker-option>
            <picker-option value="杭州">杭州</picker-option>
            <picker-option value="天津">天津</picker-option>
            <picker-option value="深圳">深圳</picker-option>
            <picker-option value="成都">成都</picker-option>
            <picker-option value="武汉">武汉</picker-option>
            <picker-option value="厦门">厦门</picker-option>
        </picker>
        <group-title>sm:{{sm}}</group-title>
        <picker v-model="sm" size="sm">
            <picker-option value="北京">北京</picker-option>
            <picker-option value="上海">上海</picker-option>
            <picker-option value="广州">广州</picker-option>
            <picker-option value="南京">南京</picker-option>
            <picker-option value="杭州">杭州</picker-option>
            <picker-option value="天津">天津</picker-option>
            <picker-option value="深圳">深圳</picker-option>
            <picker-option value="成都">成都</picker-option>
            <picker-option value="武汉">武汉</picker-option>
            <picker-option value="厦门">厦门</picker-option>
        </picker>
        <group-title>lg:{{lg}}</group-title>
        <picker v-model="lg" size="lg">
            <picker-option value="北京">北京</picker-option>
            <picker-option value="上海">上海</picker-option>
            <picker-option value="广州">广州</picker-option>
            <picker-option value="南京">南京</picker-option>
            <picker-option value="杭州">杭州</picker-option>
            <picker-option value="天津">天津</picker-option>
            <picker-option value="深圳">深圳</picker-option>
            <picker-option value="成都">成都</picker-option>
            <picker-option value="武汉">武汉</picker-option>
            <picker-option value="厦门">厦门</picker-option>
        </picker>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                sm: null,
                lg: null,
                defaultCity: '杭州',
            };
        },
        mounted() {
            setTimeout(() => {
                this.defaultCity = '武汉';
            }, 3000);
        },
    };
</script>
