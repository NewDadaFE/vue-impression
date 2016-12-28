<template>
    <div>
        <group-title>
            base
            <span class="pull-right">size: {{size}}</span>
        </group-title>
        <group>
            <cell>
                <inline-selector v-model="size" @change="changeHandle">
                    <inline-selector-option value="xxl">XXL</inline-selector-option>
                    <inline-selector-option value="m">M</inline-selector-option>
                    <inline-selector-option value="s">S</inline-selector-option>
                    <inline-selector-option value="l">L</inline-selector-option>
                    <inline-selector-option value="xl">XL</inline-selector-option>
                </inline-selector>
            </cell>
        </group>
        <group-title>
            multiple
            <span class="pull-right">size: {{multiple}}</span>
        </group-title>
        <group>
            <cell>
                <inline-selector v-model="multiple" multiple @change="changeHandle">
                    <inline-selector-option value="xxl">XXL</inline-selector-option>
                    <inline-selector-option value="m">M</inline-selector-option>
                    <inline-selector-option value="s">S</inline-selector-option>
                    <inline-selector-option value="l">L</inline-selector-option>
                    <inline-selector-option value="xl">XL</inline-selector-option>
                </inline-selector>
            </cell>
        </group>
        <group-title>
            disabled
        </group-title>
        <group>
            <cell>
                <inline-selector disabled @change="changeHandle">
                    <inline-selector-option value="xxl">XXL</inline-selector-option>
                    <inline-selector-option value="m">M</inline-selector-option>
                    <inline-selector-option value="s">S</inline-selector-option>
                    <inline-selector-option value="l">L</inline-selector-option>
                    <inline-selector-option value="xl">XL</inline-selector-option>
                </inline-selector>
            </cell>
        </group>
        <group-title>
            inline-selector-option disabled
            <span class="pull-right">size: {{disabled}}</span>
        </group-title>
        <group>
            <cell>
                <inline-selector v-model="disabled" @change="changeHandle">
                    <inline-selector-option value="xxl">XXL</inline-selector-option>
                    <inline-selector-option disabled value="m">M</inline-selector-option>
                    <inline-selector-option value="s">S</inline-selector-option>
                    <inline-selector-option disabled value="l">L</inline-selector-option>
                    <inline-selector-option disabled value="xl">XL</inline-selector-option>
                </inline-selector>
            </cell>
        </group>
        <group-title>
            theme: 'danger'
            <span class="pull-right">size: {{theme}}</span>
        </group-title>
        <group>
            <cell>
                <inline-selector theme="danger" v-model="theme" @change="changeHandle">
                    <inline-selector-option value="xxl">XXL</inline-selector-option>
                    <inline-selector-option value="m">M</inline-selector-option>
                    <inline-selector-option value="s">S</inline-selector-option>
                    <inline-selector-option value="l">L</inline-selector-option>
                    <inline-selector-option value="xl">XL</inline-selector-option>
                </inline-selector>
            </cell>
        </group>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                size: 'l',
                multiple: [],
                theme: 'm',
                disabled: null,
            };
        },
        methods: {
            changeHandle(value, text) {
                this.$toast(`${text}: ${value}`);
            },
        },
    };
</script>
