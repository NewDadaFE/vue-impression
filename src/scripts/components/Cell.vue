<template>
    <router-link
        v-if="to"
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
        <i class="fa fa-angle-right cell-arrow" v-if="hasArrow" />
    </router-link>

    <a
        v-else
        :href="href"
        @click="$emit('click')"
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
        <i v-if="clickable && hasArrow" class="fa fa-angle-right cell-arrow" />
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
                default: true,
            },
        },
        computed: {
            clickable() {
                return this.href || (this._events.click);
            },
        },
    };
</script>
