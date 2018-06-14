<template>
    <div class="date-wrapper">
        <date-picker
            type="daterange"
            size="base"
            theme="default"
            :dateDisable=true
            :nextPickedDisableDays=30
            :prevPickedDisableDays=30
            :onPick="onPick"
        >
        </date-picker>
    </div>
</template>

<script>
    export default {
        methods: {
            // 获取格式化时间数据
            onPick(val, formatDate) {
                val.minDate = formatDate(val.minDate, 'yyyy/MM/DD');
                val.maxDate = formatDate(val.maxDate, 'yyyy/MM/DD');
                console.log(val);
            },

            // 获取时间元数据
            // onPick(val) {
            //     console.log(val);
            // },
        },
    };
</script>

<style>
    .date-wrapper {
        width: 750px;
    }
</style>
