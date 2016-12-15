<template>
    <div>
        <group-title>等比</group-title>
        <flex class="row">
            <flex-item class="bg-primary text-center item">1</flex-item>
            <flex-item class="bg-primary text-center item">2</flex-item>
        </flex>
        <flex class="row">
            <flex-item class="bg-primary text-center item">1</flex-item>
            <flex-item class="bg-primary text-center item">2</flex-item>
            <flex-item class="bg-primary text-center item">3</flex-item>
            <flex-item class="bg-primary text-center item">4</flex-item>
        </flex>
        <flex class="row">
            <flex-item class="bg-primary text-center item">1</flex-item>
            <flex-item class="bg-primary text-center item">2</flex-item>
            <flex-item class="bg-primary text-center item">3</flex-item>
            <flex-item class="bg-primary text-center item">4</flex-item>
            <flex-item class="bg-primary text-center item">5</flex-item>
        </flex>
        <group-title>占比</group-title>
        <flex class="row">
            <flex-item flex="2" class="bg-primary text-center item">1</flex-item>
            <flex-item class="bg-primary text-center item">2</flex-item>
        </flex>
        <flex class="row">
            <flex-item class="bg-primary text-center item">1</flex-item>
            <flex-item flex="3" class="bg-primary text-center item">2</flex-item>
            <flex-item class="bg-primary text-center item">4</flex-item>
        </flex>
        <flex class="row">
            <flex-item class="bg-primary text-center item">1</flex-item>
            <flex-item class="bg-primary text-center item">2</flex-item>
            <flex-item class="bg-primary text-center item">3</flex-item>
            <flex-item class="bg-primary text-center item">4</flex-item>
            <flex-item flex="5" class="bg-primary text-center item">5</flex-item>
        </flex>
    </div>
</template>

<style>
    .row {
        margin-bottom: 1rem;
    }

    .item {
        padding: .5rem 0;
    }

    .item:not(:last-child) {
        margin-right: 0.5rem;
    }
</style>
