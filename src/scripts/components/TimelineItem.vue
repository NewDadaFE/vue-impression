<template>
    <div class="timeline-item" :class="{'active': index === 0}">
        <div class="timeline-item-addon"></div>
        <div class="timeline-item-line"></div>
        <div class="timeline-item-body">
            <slot></slot>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'timeline-item',
        data() {
            return {
                index: -1,
            };
        },
        mounted() {
            this.index = this.$parent.$children.indexOf(this);
        },
    };
</script>
