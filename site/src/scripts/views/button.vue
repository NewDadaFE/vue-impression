<template>
    <div>
        <btn disabled theme="primary">primary</btn>
        <btn disabled theme="secondary">secondary</btn>
        <btn disabled theme="default">default</btn>
    </div>
</template>


<script>
    import Btn from '../components/Button';

    export default {
        components: {
            Btn,
        },
    };
</script>
