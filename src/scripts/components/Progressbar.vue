<template>
    <div
        class="progressbar"
        :class="{
            [`progressbar-${size}`]: size,
            [`progressbar-${theme}`]: theme,
        }">
        <div class="progressbar-indicator" :style="{width: `${value * 100}%`}">
            <slot></slot>
        </div>
    </div>
</template>

<script>
    import Sync from '../mixins/sync';

    export default {
        name: 'progressbar',
        mixins: [Sync],
        props: {
            value: {
                type: Number,
                default: 0,
                required: true,
                validator(value) {
                    return value >= 0 && value <= 1;
                },
            },
            // 主题
            theme: {
                type: String,
                default: 'primary',
                validator(value) {
                    return ['primary', 'success', 'warning', 'danger'].indexOf(value) > -1;
                },
            },
            // 尺寸
            size: {
                type: String,
                validator(value) {
                    return ['sm'].indexOf(value) > -1;
                },
            },
        },
    };
</script>
