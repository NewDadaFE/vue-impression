<template>
    <div>
        <navbar theme="default">
            <router-link :to="{path: '/'}">
                <icon name="chevron-left" size="lg"></icon>
                Back
            </router-link>
            <h5 slot="body">Navbar</h5>
            <span slot="footer">
                <icon name="ellipsis-h" size="lg"></icon>
            </span>
        </navbar>

        <group-title>Base</group-title>
        <navbar>
            <icon name="chevron-left" size="lg"></icon>
            <h5 slot="body">Primary</h5>
            <icon name="ellipsis-h" slot="footer" size="lg"></icon>
        </navbar>

        <group-title>Default</group-title>
        <navbar theme="default">
            <icon name="chevron-left" size="lg"></icon>
            <span slot="body">Default</span>
            <icon name="ellipsis-h" slot="footer" size="lg"></icon>
        </navbar>
    </div>
</template>
