<template>
    <router-link v-if="to" :to="to" class="cell cell-link">
        <span class="cell-body">
            <slot></slot>
        </span>
        <slot name="footer"></slot>
        <i class="fa fa-angle-right cell-arrow"></i>
    </router-link>

    <a v-else
        class="cell"
        :class="{'cell-link': href || !!click}"
        :href="href"
        @click="clickHandle">
        <span class="cell-body">
            <slot></slot>
        </span>
        <slot name="footer"></slot>
        <i v-if="href || !!click" class="fa fa-angle-right cell-arrow"></i>
    </a>
</template>

<script>
    export default {
        name: 'cell',
        props: {
            to: [String, Object],
            click: Function,
        },
        methods: {
            clickHandle() {
                this.click && this.click();
            },
        },
    };
</script>
