<template>
    <router-link v-if="to" :to="to" class="cell cell-link">
        <slot name="header"></slot>
        <span class="cell-body">
            <slot></slot>
        </span>
        <slot name="footer"></slot>
        <i class="fa fa-angle-right cell-arrow"></i>
    </router-link>

    <a v-else
        class="cell"
        :class="{'cell-link': clickable}"
        :href="href">
        <slot name="header"></slot>
        <span class="cell-body">
            <slot></slot>
        </span>
        <slot name="footer"></slot>
        <i v-if="clickable" class="fa fa-angle-right cell-arrow"></i>
    </a>
</template>

<script>
    export default {
        name: 'cell',
        props: {
            to: [String, Object],
            href: String,
        },
        computed: {
            clickable() {
                return this.href || (this.$vnode.data.on && this.$vnode.data.on.click);
            },
        },
    };
</script>
