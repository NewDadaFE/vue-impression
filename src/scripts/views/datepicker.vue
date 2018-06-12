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
            onPick(val) {
                console.log(val);
            },
        },
    };
</script>

<style>
    .date-wrapper {
        width: 750px;
    }
</style>
