<template>
    <div class="">
        <cell @click.native="onLoading()">
            <icon class="fa-fw text-muted" name="commenting-o" left size="lg"></icon>
            loading start
        </cell>
        <cell @click.native="onLoaded()">
            <icon class="fa-fw text-success" name="check" left size="lg"></icon>
            loaded end
        </cell>
        <loading v-show="loading"></loading>
    </div>
</template>
<script>
    export default{
        data: () => ({loading: false}),
        methods: {
            onLoading() {
                this.loading = true;
            },
            onLoaded() {
                this.loading = false;
            }
        }
    }
</script>
