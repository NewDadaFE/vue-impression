import { manager, unmanager } from '../utils/blurManager';

export default {
    mounted() {
        manager(this);
    },
    beforeDestroy() {
        unmanager(this);
    },
};
