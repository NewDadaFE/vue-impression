<template>
    <div>
        <group-title>Base</group-title>
        <group>
            <cell @click="baseClickHandle('')">
                <icon class="fa-fw text-muted" name="commenting-o" left size="lg"></icon>
                default
            </cell>
            <cell @click="baseClickHandle('success')">
                <icon class="fa-fw text-success" name="check" left size="lg"></icon>
                success
            </cell>
            <cell @click="baseClickHandle('error')">
                <icon class="fa-fw text-danger" name="exclamation-circle" left size="lg"></icon>
                error
            </cell>
            <cell @click="baseClickHandle('warning')">
                <icon class="fa-fw text-warning" name="exclamation-triangle" left size="lg"></icon>
                warning
            </cell>
        </group>
        <group-title>Position</group-title>
        <group>
            <cell @click="positionClickHandle('bottom')">
                <icon class="fa-fw text-muted" name="hourglass-end" left size="lg"></icon>
                bottom
            </cell>
            <cell @click="positionClickHandle('center')">
                <icon class="fa-fw text-muted" name="hourglass-half" left size="lg"></icon>
                center
            </cell>
            <cell @click="positionClickHandle('top')">
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
                    message: type || 'default',
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
