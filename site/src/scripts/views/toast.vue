<template>
    <div>
        <group-title>Base</group-title>
        <group>
            <cell @click.native="baseClickHandle('default')">
                <icon class="fa-fw text-muted" name="commenting-o" left size="lg"></icon>default
            </cell>
            <cell @click.native="baseClickHandle('success')">
                <icon class="fa-fw text-success" name="check" left size="lg"></icon>success
            </cell>
            <cell @click.native="baseClickHandle('error')">
                <icon class="fa-fw text-danger" name="exclamation-circle" left size="lg"></icon>error
            </cell>
            <cell @click.native="baseClickHandle('warning')">
                <icon class="fa-fw text-warning" name="exclamation-triangle" left size="lg"></icon>warning
            </cell>
        </group>
        <group-title>Position</group-title>
        <group>
            <cell @click.native="positionClickHandle('bottom')">bottom</cell>
            <cell @click.native="positionClickHandle('top')">top</cell>
            <cell @click.native="positionClickHandle('center')">center</cell>
        </group>
    </div>
</template>

<script>
    import Vue from 'vue';

    export default {

        methods: {
            baseClickHandle(type) {
                Vue.$toast({
                    type,
                    message: type,
                });
            },
            positionClickHandle(position) {
                Vue.$toast({
                    position,
                    message: position,
                });
            },
        },
    };
</script>
