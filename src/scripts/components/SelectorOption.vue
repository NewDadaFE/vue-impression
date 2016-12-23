<template>
    <div
        class="cell selector-option"
        :class="{
            'active': isActive(),
            'cell-disabled': disabled || $parent.disabled }"
        @click="clickHandle">
        <span slot="header">
        </span>
        <span class="cell-body">
            <slot></slot>
        </span>
        <icon
            :name="checkedIcon"
            size="lg"
            class="selector-icon" />
    </div>
</template>

<script>
    import SelectOption from '../mixins/selectOption';

    export default {
        name: 'selector-option',
        mixins: [SelectOption],
    };
</script>
