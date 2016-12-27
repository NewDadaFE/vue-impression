<template>
    <div>
        <group-title><strong>Base</strong></group-title>
        <group>
            <cell>Home</cell>
            <cell>
                Library
                <span slot="footer" class="text-primary">3</span>
            </cell>
            <cell :click="clickHandle">
                Settings
            </cell>
            <cell href="https://github.com/">
                Github
                <span slot="footer">go</span>
            </cell>
        </group>
        <group-title><strong>Icon</strong></group-title>
        <group>
            <cell>
                <icon class="fa-fw" name="home" size="lg"></icon>
                Home
            </cell>
            <cell>
                <icon class="fa-fw" name="book" size="lg"></icon>
                Library
                <span slot="footer" class="text-primary">3</span>
            </cell>
            <cell :click="clickHandle">
                <icon class="fa-fw" name="cog" size="lg"></icon>
                Settings
            </cell>
            <cell href="https://github.com/">
                <icon class="fa-fw" name="github" size="lg"></icon>
                Github
                <span slot="footer">go</span>
            </cell>
        </group>
        <group>
            <cell>Home</cell>
            <cell>
                Library
                <span slot="footer" class="text-primary">3</span>
            </cell>
            <cell :click="clickHandle">
                Settings
            </cell>
            <cell href="https://github.com/">
                Github
                <span slot="footer">go</span>
            </cell>
        </group>
    </div>
</template>

<script>
    export default {
        methods: {
            clickHandle() {
                console.log('click!');
            },
        },
    };
</script>
