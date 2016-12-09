<template>
    <div>
        <group-title>
            base
            <span class="pull-right">已选择：{{single}}</span>
        </group-title>
        <group>
            <selector v-model="single">
                <selector-option :value="1">选项一</selector-option>
                <selector-option :value="2">选项二</selector-option>
                <selector-option :value="3">选项三</selector-option>
            </selector>
        </group>
        <group-title>
            multiple
            <span class="pull-right">已选择：{{multiple}}</span>
        </group-title>
        <group>
            <selector v-model="multiple" multiple>
                <selector-option :value="1">选项一</selector-option>
                <selector-option :value="2">选项二</selector-option>
                <selector-option :value="3">选项三</selector-option>
            </selector>
        </group>
        <group-title>
            disabled
        </group-title>
        <group>
            <selector disabled>
                <selector-option :value="1">选项一</selector-option>
                <selector-option :value="2">选项二</selector-option>
                <selector-option :value="3">选项三</selector-option>
            </selector>
        </group>
        <group-title>
            selector-option disabled
            <span class="pull-right">已选择：{{disabled}}</span>
        </group-title>
        <group>
            <selector v-model="disabled">
                <selector-option :value="1" disabled>disabled</selector-option>
                <selector-option :value="2">选项二</selector-option>
                <selector-option :value="3">选项三</selector-option>
            </selector>
        </group>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                single: 1,
                multiple: [],
                disabled: 2,
            };
        },
    };
</script>
