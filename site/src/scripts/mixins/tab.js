export default {
    props: {
        activeKey: {},
    },
    data() {
        return {
            currentActiveKey: this.activeKey,
        };
    },
    methods: {
        itemClickHandle(val) {
            if(this.currentActiveKey === val) return;

            this.currentActiveKey = val;
            this.$emit('change', val);
        },
    },
    created() {
        this.$on('itemClick', this.itemClickHandle);
    },
};
