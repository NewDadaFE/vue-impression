<template>
    <div
        @click="clickHandle"
        class="searchbar-input"
        :class="{
            'border-circle': $parent.shape === 'circle'
        }">
        <div
            class="searchbar-input-placeholder"
            :style="{overflow: !!$parent.currentValue ? 'hidden' : 'visible'}">
            <slot></slot>
        </div>
        <input
            type="text"
            class="searchbar-input-field"
            v-model="currentValue"
            ref="input">
        <icon
            v-show="$parent.clearable && !!$parent.currentValue"
            class="searchbar-input-clear"
            name="times-circle"
            @click="currentValue = ''"
            size="lg" />
    </div>
</template>

<script>
    export default {
        name: 'searchbar-placeholder',
        data() {
            return {
                currentValue: this.$parent.value,
            };
        },
        watch: {
            currentValue(val) {
                this.$parent.currentValue = val;
            },
        },
        methods: {
            clickHandle() {
                this.$parent.focus = true;
                setTimeout(() => {
                    this.$refs.input.focus();
                }, 300);
            },
        },
    };
</script>
