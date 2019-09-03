export default {
    methods: {
        dispatch: function dispatch(componentName, eventName, params) {
            var parent = this.$parent || this.$root,
                name = parent.$options._componentTag;

            while (parent && (!name || name !== componentName)) {
                parent = parent.$parent;

                if (parent) {
                    name = parent.$options._componentTag;
                }
            }

            if (parent) {
                parent.$emit.apply(parent, [eventName].concat(params));
            }
        }
    }
};