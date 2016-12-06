<template>
    <div>
        <group-title>base</group-title>
        <group>
            <cell>
                primary
                <tag slot="footer">primary</tag>
            </cell>
            <cell>
                success
                <tag slot="footer" theme="success">success</tag>
            </cell>
            <cell>
                warning
                <tag slot="footer" theme="warning">warning</tag>
            </cell>
            <cell>
                danger
                <tag slot="footer" theme="danger">danger</tag>
            </cell>
            <cell>
                default
                <tag slot="footer" theme="default">default</tag>
            </cell>
        </group>
        <group-title>outline</group-title>
        <group>
            <cell>
                primary
                <tag outline slot="footer">primary</tag>
            </cell>
            <cell>
                success
                <tag outline slot="footer" theme="success">success</tag>
            </cell>
            <cell>
                warning
                <tag outline slot="footer" theme="warning">warning</tag>
            </cell>
            <cell>
                danger
                <tag outline slot="footer" theme="danger">danger</tag>
            </cell>
            <cell>
                default
                <tag outline slot="footer" theme="default">default</tag>
            </cell>
        </group>
    </div>
</template>
