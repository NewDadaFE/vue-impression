<template>
    <div>
        <group-title>theme</group-title>
        <group>
            <cell>
                <btn theme="primary">primary</btn>
                <btn theme="secondary">secondary</btn>
                <btn theme="default">default</btn>
            </cell>
        </group>
        <group-title>outline</group-title>
        <group>
            <cell class="bg-inverse">
                <btn outline theme="primary">primary</btn>
                <btn outline theme="secondary">secondary</btn>
                <btn outline theme="default">default</btn>
            </cell>
        </group>
        <group-title>disabled</group-title>
        <group>
            <cell>
                <btn disabled theme="primary">primary</btn>
                <btn disabled theme="secondary">secondary</btn>
                <btn disabled theme="default">default</btn>
            </cell>
        </group>
        <group-title>size</group-title>
        <group>
            <cell>
                <btn size="sm" outline theme="primary">small</btn>
                <btn theme="primary">normal</btn>
                <btn size="lg" theme="primary">large</btn>
            </cell>
        </group>
        <group-title>block</group-title>
        <group>
            <cell>
                <btn block size="lg" theme="primary">primary</btn>
            </cell>
            <cell>
                <btn block size="lg" theme="secondary">secondary</btn>
            </cell>
            <cell>
                <btn block size="lg" theme="default">default</btn>
            </cell>
        </group>
    </div>
</template>
