<template>
    <div>
        <group-title>base</group-title>
        <group>
            <cell>
                <badge content="3" theme="primary" />
                <badge content="3" theme="secondary" />
                <badge content="3" theme="success" />
                <badge content="3" theme="warning" />
            </cell>
            <cell>
                <badge content="3" theme="primary">
                    <div class="bg-default" :style="{width: '50px', height: '50px'}"></div>
                </badge>
                <badge content="99+" theme="secondary">
                    <div class="bg-default" :style="{width: '50px', height: '50px'}"></div>
                </badge>
                <badge content="99+" theme="success">
                    <div class="bg-default" :style="{width: '50px', height: '50px'}"></div>
                </badge>
                <badge content="3" theme="warning">
                    <div class="bg-default" :style="{width: '50px', height: '50px'}"></div>
                </badge>
            </cell>
            <cell>
                <badge content="3" theme="primary">
                    <icon class="text-muted" size="3x" name="bell-o" />
                </badge>
                <badge content="3" theme="secondary">
                    <icon class="text-muted" size="3x" name="shopping-cart" />
                </badge>
                <badge content="3" theme="success">
                    <icon class="text-muted" size="3x" name="bell-o" />
                </badge>
                <badge content="3" theme="warning">
                    <icon class="text-muted" size="3x" name="shopping-cart" />
                </badge>
            </cell>
        </group>
        <group-title>dot</group-title>
        <group>
            <cell>
                <badge theme="primary">
                    <icon class="text-muted" size="2x" name="bell-o" />
                </badge>
                <badge theme="secondary">
                    <icon class="text-muted" size="2x" name="bell-o" />
                </badge>
                <badge theme="success">
                    <icon class="text-muted" size="2x" name="shopping-cart" />
                </badge>
                <badge theme="warning">
                    <icon class="text-muted" size="2x" name="shopping-cart" />
                </badge>
            </cell>
        </group>
    </div>
</template>
