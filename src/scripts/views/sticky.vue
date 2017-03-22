<template>
    <div>
        <group-title><strong>Base</strong></group-title>
        <group>
            <cell>Home</cell>
            <cell>
                Library
                <span slot="footer" class="text-primary">3</span>
            </cell>
            <cell>
                Settings
            </cell>
            <cell href="https://github.com/">
                Github
                <span slot="footer">go</span>
            </cell>
        </group>
        <sticky>
            <span class="demo-sticky">固定在最顶部</span>
        </sticky>
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
            <cell>
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
            <cell>
                <icon class="fa-fw" name="home" size="lg"></icon>
                Home
            </cell>
            <cell>
                <icon class="fa-fw" name="book" size="lg"></icon>
                Library
                <span slot="footer" class="text-primary">3</span>
            </cell>
            <cell>
                <icon class="fa-fw" name="cog" size="lg"></icon>
                Settings
            </cell>
            <cell href="https://github.com/">
                <icon class="fa-fw" name="github" size="lg"></icon>
                Github
                <span slot="footer">go</span>
            </cell>
        </group>
        <sticky :offset-top="50">
            <span class="demo-sticky">固定在距离顶部 50px 的位置</span>
        </sticky>
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
            <cell>
                <icon class="fa-fw" name="cog" size="lg"></icon>
                Settings
            </cell>
            <cell href="https://github.com/">
                <icon class="fa-fw" name="github" size="lg"></icon>
                Github
                <span slot="footer">go</span>
            </cell>
        </group>
        <sticky :offset-bottom="20">
            <span class="demo-sticky">固定在距离底部 20px 的位置</span>
        </sticky>
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
            <cell>
                <icon class="fa-fw" name="cog" size="lg"></icon>
                Settings
            </cell>
            <cell href="https://github.com/">
                <icon class="fa-fw" name="github" size="lg"></icon>
                Github
                <span slot="footer">go</span>
            </cell>
        </group>
        <sticky :offset-top="100" @on-change="change">
            <span class="demo-sticky">固定在距离顶部 100px 的位置</span>
        </sticky>
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
            <cell>
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
            <cell hasArrow>Home</cell>
            <cell>
                Library
                <span slot="footer" class="text-primary">3</span>
            </cell>
            <cell>
                Settings
            </cell>
            <cell href="https://github.com/" disabled>
                Github
                <span slot="footer">go</span>
            </cell>
        </group>
    </div>
</template>

<script>
    export default {
        methods: {
            change(status) {
                this.$toast({
                    position: 'top',
                    message: `当前状态：${status}`,
                });
            },
        },
        mounted() {
            window.document.querySelector('.flex-vertical').style.height = 'auto';
        },
        destroyed() {
            window.document.querySelector('.flex-vertical').style.height = '';
        },
    };
</script>
