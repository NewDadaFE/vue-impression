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
                console.log(val);
                val.minDate = formatDate(val.minDate, 'yyyy/MM/dd');
                val.maxDate = formatDate(val.maxDate, 'yyyy/MM/dd');
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
