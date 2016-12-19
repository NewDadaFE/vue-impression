<template>
    <div>
        <group-title>base(hr)</group-title>
        <group>
            <cell>
                <hrule />
            </cell>
        </group>
        <group-title>dashed</group-title>
        <group>
            <cell>
                <hrule type="dashed" />
            </cell>
        </group>
        <group-title>dotted</group-title>
        <group>
            <cell>
                <hrule type="dotted" />
            </cell>
        </group>
        <group-title>theme</group-title>
        <group>
            <cell>
                <hrule theme="primary" type="dotted" />
            </cell>
            <cell>
                <hrule theme="secondary" type="dotted" />
            </cell>
        </group>
    </div>
</template>
