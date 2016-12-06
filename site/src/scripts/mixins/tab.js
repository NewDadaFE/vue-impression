export default {
    props: {
        activeKey: {
            default: 0,
        },
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
    mounted() {
        this.activeKey === undefined && (this.currentActiveKey = 0);
    },
};
