<template>
    <div class="searchbar" :class="{active: focus}">
        <div
            @click="clickHandle"
            class="searchbar-input"
            :class="{
                'border-circle': shape === 'circle'
            }">
            <div
                class="searchbar-input-placeholder"
                :style="{overflow: !!currentValue ? 'hidden' : 'visible'}">
                <slot name="placeholder"></slot>
            </div>
            <input
                type="text"
                class="searchbar-input-field"
                v-model="currentValue"
                ref="input">
            <icon
                v-show="clearable && !!currentValue"
                class="searchbar-input-clear"
                name="times-circle"
                @click.native="clearHandle"
                size="lg" />
        </div>
        <div class="searchbar-btn">
            <slot></slot>
        </div>
    </div>
</template>

<script>
    import Sync from '../mixins/sync';
    import Blur from '../mixins/blur';

    export default {
        name: 'searchbar',
        mixins: [Sync, Blur],
        props: {
            clearable: {
                type: Boolean,
                default: true,
            },
            shape: {
                type: String,
                validator(value) {
                    return ['circle'].indexOf(value) > -1;
                },
            },
        },
        data() {
            return {
                focus: false,
            };
        },
        methods: {
            clickHandle() {
                this.focus = true;
                setTimeout(() => {
                    this.$refs.input.focus();
                }, 300);
            },
            clearHandle() {
                this.currentValue = '';
                this.clickHandle();
            },
        },
    };
</script>
