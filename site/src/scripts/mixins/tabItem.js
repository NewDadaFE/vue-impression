export default {
    props: {
        eventKey: {},
        disabled: Boolean,
    },
    data() {
        return {
            currentEventKey: this.eventKey,
        };
    },
    mounted() {
        this.eventKey === undefined
            && (this.currentEventKey = this.$parent.$children.indexOf(this));
    },
};
