<template>
    <div class="date-wrapper">
        <date-picker
            type="daterange"
            size="base"
            theme="default"
            :prePickedDisable=true
            :nextPickedDisableDays=30
        >
        </date-picker>
    </div>
</template>

<script>
export default {
    data() {
        return {
            disabledDate(time) {
                return time.getTime() < Date.now();
            },
        }
    },
};
</script>

<style>
    .date-wrapper {
        width: 750px;
    }
</style>
