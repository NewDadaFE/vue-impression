<template>
    <div>
        <group-title>
            base
            <span class="pull-right">已选择：{{single}}</span>
        </group-title>
        <selector v-model="single">
            <selector-option :value="1">选项一</selector-option>
            <selector-option :value="2">选项二</selector-option>
            <selector-option :value="3">选项三</selector-option>
        </selector>
        <group-title>
            multiple
            <span class="pull-right">已选择：{{multiple}}</span>
        </group-title>
        <selector v-model="multiple" multiple>
            <selector-option :value="1">选项一</selector-option>
            <selector-option :value="2">选项二</selector-option>
            <selector-option :value="3">选项三</selector-option>
        </selector>
        <group-title>
            disabled
            <span class="pull-right">已选择：{{disabled}}</span>
        </group-title>
        <selector v-model="disabled" disabled>
            <selector-option :value="1">选项一</selector-option>
            <selector-option :value="2">选项二</selector-option>
            <selector-option :value="3">选项三</selector-option>
        </selector>
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
