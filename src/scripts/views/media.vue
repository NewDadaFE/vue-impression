<template>
    <div>
        <group-title>Media</group-title>
        <group>
            <cell>
                <media>
                    <media-object>
                        <img class="border-circle" :style="{width: '60px', height: '60px'}" src="../../images/avatar.jpg">
                    </media-object>
                    <media-body>
                        <h3>vue-impression</h3>
                        A Vue.js 2.0 UI elements for mobile.
                    </media-body>
                </media>
            </cell>
            <cell>
                <media>
                    <media-body>
                        <h3>vue-impression</h3>
                        A Vue.js 2.0 UI elements for mobile.
                    </media-body>
                    <media-object>
                        <img :style="{width: '60px', height: '60px'}" src="../../images/avatar.jpg">
                    </media-object>
                </media>
            </cell>
        </group>
    </div>
</template>
