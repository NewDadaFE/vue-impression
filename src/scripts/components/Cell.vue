<template>
    <router-link
        v-if="!disabled && to"
        :to="to"
        class="cell cell-link"
        :class="{
            'cell-disabled': disabled,
            'cell-no-gap': !hasGap,
        }">
        <div class="cell-header" v-if="$slots.header">
            <slot name="header"></slot>
        </div>
        <span class="cell-body">
            <slot></slot>
        </span>
        <div class="cell-footer" v-if="$slots.footer">
            <slot name="footer"></slot>
        </div>
        <i v-if="hasArrow" class="fa fa-angle-right cell-arrow" />
    </router-link>

    <a
        v-else
        :href="!disabled && href"
        @click="!disabled && $emit('click')"
        class="cell"
        :class="{
            'cell-link': clickable,
            'cell-disabled': disabled,
            'cell-no-gap': !hasGap,
        }" >
        <div class="cell-header" v-if="$slots.header">
            <slot name="header"></slot>
        </div>
        <span class="cell-body">
            <slot></slot>
        </span>
        <div class="cell-footer" v-if="$slots.footer">
            <slot name="footer"></slot>
        </div>
        <i v-if="hasArrow" class="fa fa-angle-right cell-arrow" />
    </a>
</template>

<script>
    export default {
        name: 'cell',
        props: {
            to: [String, Object],
            href: String,
            disabled: Boolean,
            hasGap: {
                type: Boolean,
                default: true,
            },
            hasArrow: {
                type: Boolean,
                default() {
                    // 有href和to时默认为true
                    return !!(this.href || this.to);
                },
            },
        },
        computed: {
            clickable() {
                return !this.disabled && (this.href || this._events.click);
            },
        },
    };
</script>
