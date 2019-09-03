export default {
    props: {
        eventKey: {},
        disabled: Boolean
    },
    data: function data() {
        return {
            currentEventKey: this.eventKey,
            index: 0
        };
    },
    mounted: function mounted() {
        this.index = this.$parent.$children.indexOf(this);
        this.eventKey === undefined && (this.currentEventKey = this.index);
    },

    methods: {
        clickHandle: function clickHandle() {
            if (this.disabled || this.$parent.disabled) return;

            this.$parent.$emit('itemClick', this.currentEventKey, this.index);
        }
    }
};