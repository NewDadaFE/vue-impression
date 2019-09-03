export default {
    props: {
        activeKey: {},
        disabled: Boolean
    },
    data: function data() {
        return {
            currentActiveKey: this.activeKey
        };
    },

    methods: {
        itemClickHandle: function itemClickHandle(val) {
            if (this.currentActiveKey === val) return;

            this.currentActiveKey = val;
            this.$emit('change', val);
        }
    },
    created: function created() {
        this.$on('itemClick', this.itemClickHandle);
    }
};