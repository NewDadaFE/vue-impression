<template>
<<<<<<< HEAD
    <div class="date-wrapper">
        <date-picker
            type="daterange"
            size="base"
            theme="default"
            :prePickedDisable=true
            :nextPickedDisableDays=30
        >
        </date-picker>
=======
    <div>
   		<date-picker></date-picker>
>>>>>>> 5b79b49654974ce0482677eaf667a5032eea900b
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
