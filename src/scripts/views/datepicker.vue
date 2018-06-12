<template>
    <div class="date-wrapper">
        <date-picker
            type="daterange"
            size="base"
            theme="default"
            :prePickedDisable=true
            :nextPickedDisableDays=30
            :onPick="onPick"
        >
        </date-picker>
    </div>
</template>

<script>
export default {
    methods: {
        onPick: function (val) {
            console.log(val);
        }
    }
};
</script>

<style>
    .date-wrapper {
        width: 750px;
    }
</style>
