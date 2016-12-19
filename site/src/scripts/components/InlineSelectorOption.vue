<template>
    <tag
        class="inline-selector-option"
        :class="{
            disabled: disabled || $parent.disabled,
        }"
        outline
        size="sm"
        @click.native="clickHandle"
        :theme="isActive() ? $parent.theme : 'default'">
        <slot></slot>
    </tag>
</template>

<script>
    import SelectOption from '../mixins/selectOption';

    export default {
        name: 'inline-selector-option',
        mixins: [SelectOption],
    };
</script>
