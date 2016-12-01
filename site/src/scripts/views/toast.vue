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
            <cell>default</cell>
            <cell>top</cell>
            <cell>center</cell>
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
        },
    };
</script>
