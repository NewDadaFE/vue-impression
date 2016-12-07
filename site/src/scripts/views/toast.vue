<template>
    <div>
        <group-title>Base</group-title>
        <group>
            <cell @click.native="baseClickHandle('default')">
                <icon class="fa-fw text-muted" name="commenting-o" left size="lg"></icon>
                default
            </cell>
            <cell @click.native="baseClickHandle('success')">
                <icon class="fa-fw text-success" name="check" left size="lg"></icon>
                success
            </cell>
            <cell @click.native="baseClickHandle('error')">
                <icon class="fa-fw text-danger" name="exclamation-circle" left size="lg"></icon>
                error
            </cell>
            <cell @click.native="baseClickHandle('warning')">
                <icon class="fa-fw text-warning" name="exclamation-triangle" left size="lg"></icon>
                warning
            </cell>
        </group>
        <group-title>Position</group-title>
        <group>
            <cell @click.native="positionClickHandle('bottom')">
                <icon class="fa-fw text-muted" name="hourglass-end" left size="lg"></icon>
                bottom
            </cell>
            <cell @click.native="positionClickHandle('center')">
                <icon class="fa-fw text-muted" name="hourglass-half" left size="lg"></icon>
                center
            </cell>
            <cell @click.native="positionClickHandle('top')">
                <icon class="fa-fw text-muted" name="hourglass-start" left size="lg"></icon>
                top
            </cell>
        </group>
    </div>
</template>

<script>
    export default {

        methods: {
            baseClickHandle(type) {
                this.$toast({
                    type,
                    message: type,
                    position: 'bottom',
                });
            },
            positionClickHandle(position) {
                this.$toast({
                    position,
                    message: position,
                });
            },
        },
    };
</script>
