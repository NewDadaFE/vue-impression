<template>
    <div>
        <group-title>base</group-title>
        <group>
            <cell>
                <searchbar>
                    <div slot="placeholder">
                        <icon name="search" left size="lg"></icon>搜索
                    </div>
                    <span class="text-primary">搜索</span>
                </searchbar>
            </cell>
        </group>
        <group-title>circle</group-title>
        <group>
            <cell>
                <searchbar shape="circle">
                    <div slot="placeholder">
                        <icon name="search" left size="lg"></icon>搜索
                    </div>
                    <span class="text-primary">搜索</span>
                </searchbar>
            </cell>
        </group>
    </div>
</template>
