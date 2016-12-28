<template>
    <div>
        <group-title>base</group-title>
        <group>
            <cell @click="toggleHandle">sidelip</cell>
        </group>
        <sidelip v-model="show">
            <div class="bg-primary" :style="{height: '8rem', padding: '2rem 1rem'}">
                <media class="bg-transparent" align="center">
                    <media-object>
                        <img class="img-circle" :style="{width: '60px', height: '60px'}" src="../../images/avatar.jpg">
                    </media-object>
                    <media-body>
                        <h3>Impression</h3>
                        <a class="text-pure" href="https://github.com/NewDadaFE/vue-impression">NewDadaFE©️所有</a>
                    </media-body>
                </media>
            </div>
            <group class="text-muted no-margin">
                <cell>
                    <icon name="map-marker" size="lg" left></icon>
                    赚钱地图
                </cell>
                <cell>
                    <badge theme="secondary">
                        <icon name="shopping-bag" size="lg" left></icon>
                        达达商城
                    </badge>
                </cell>
                <cell>
                    <badge theme="secondary">
                        <icon name="bullhorn" size="lg" left></icon>
                        众包任务
                    </badge>
                </cell>
                <cell>
                    <icon name="google-wallet" size="lg" left></icon>
                    钱包
                </cell>
                <cell>
                    <icon name="hand-stop-o" size="lg" left></icon>
                    规则
                </cell>
                <cell>
                    <icon name="bug" size="lg" left></icon>
                    举报
                </cell>
                <cell>
                    <icon name="cog" size="lg" left></icon>
                    设置
                </cell>
            </group>
        </sidelip>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                show: false,
            };
        },
        methods: {
            toggleHandle() {
                this.show = !this.show;
            },
        },
    };
</script>
