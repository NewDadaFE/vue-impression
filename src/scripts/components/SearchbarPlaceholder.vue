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
            v-model="$parent.currentValue"
            ref="input">
        <icon
            v-show="$parent.clearable && !!$parent.currentValue"
            class="searchbar-input-clear"
            name="times-circle"
            @click="$parent.currentValue = ''"
            size="lg" />
    </div>
</template>

<script>
    export default {
        name: 'searchbar-placeholder',
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
