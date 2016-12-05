<template>
    <div>
        <group-title>base</group-title>
        <group>
            <cell>
                <span slot="header">input：</span>
                <input-text placeholder="text input" />
            </cell>
        </group>
        <group-title>clearable</group-title>
        <group>
            <cell>
                <span slot="header">input：</span>
                <input-text clearable value="clearable" />
            </cell>
        </group>
        <group-title>disabled</group-title>
        <group>
            <cell disabled>
                <span slot="header">input：</span>
                <input-text disabled value="disabled"/>
            </cell>
        </group>
        <group-title>State</group-title>
        <group>
            <cell>
                <span slot="header">success:</span>
                <input-text clearable state="success" />
            </cell>
            <cell>
                <span slot="header">warning:</span>
                <input-text clearable state="warning" />
            </cell>
            <cell>
                <span slot="header">error:</span>
                <input-text clearable state="error" />
            </cell>
        </group>
    </div>
</template>
