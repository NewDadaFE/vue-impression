<template>
    <router-link v-if="to" :to="to" class="cell">
        <span class="cell-body">
            <slot></slot>
        </span>
        <slot name="footer"></slot>
        <i class="fa fa-angle-right cell-arrow"></i>
    </router-link>

    <a v-else-if="href" class="cell" :href="href">
        <span class="cell-body">
            <slot></slot>
        </span>
        <slot name="footer"></slot>
        <i class="fa fa-angle-right cell-arrow"></i>
    </a>

    <div v-else class="cell" @click="clickHandle">
        <span class="cell-body">
            <slot></slot>
        </span>
        <slot name="footer"></slot>
        <i v-if="click" class="fa fa-angle-right cell-arrow"></i>
    </div>
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
