<template>
    <div>
        <group-title>
            base
            <span class="pull-right">selected:{{single}}</span>
        </group-title>
        <group>
            <selector v-model="single" @change="changeHandle">
                <selector-option value="Apple">Apple</selector-option>
                <selector-option value="Orange">Orange</selector-option>
                <selector-option value="Banana">Banana</selector-option>
            </selector>
        </group>
        <group-title>
            multiple
            <span class="pull-right">selected:{{multiple}}</span>
        </group-title>
        <group>
            <selector v-model="multiple" multiple>
                <selector-option value="Apple">Apple</selector-option>
                <selector-option value="Orange">Orange</selector-option>
                <selector-option value="Banana">Banana</selector-option>
            </selector>
        </group>
        <group-title>
            disabled
        </group-title>
        <group>
            <selector disabled>
                <selector-option value="Apple">Apple</selector-option>
                <selector-option value="Orange">Orange</selector-option>
                <selector-option value="Banana">Banana</selector-option>
            </selector>
        </group>
        <group-title>
            selector-option disabled
            <span class="pull-right">selected:{{disabled}}</span>
        </group-title>
        <group>
            <selector v-model="disabled">
                <selector-option value="Apple" disabled>disabled</selector-option>
                <selector-option value="Orange">Orange</selector-option>
                <selector-option value="Banana">Banana</selector-option>
            </selector>
        </group>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                single: 'Apple',
                multiple: [],
                disabled: 'Orange',
            };
        },
        methods: {
            changeHandle(value, text) {
                this.$toast(`${value}: ${text}`);
            },
        },
    };
</script>
