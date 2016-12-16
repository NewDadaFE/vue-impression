export default {
    props: {
        eventKey: {},
        disabled: Boolean,
    },
    data() {
        return {
            currentEventKey: this.eventKey,
            index: 0,
        };
    },
    mounted() {
        this.index = this.$parent.$children.indexOf(this);
        this.eventKey === undefined && (this.currentEventKey = this.index);
    },
};
