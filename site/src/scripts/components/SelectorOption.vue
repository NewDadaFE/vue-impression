<template>
    <div
        class="cell selector-option"
        :class="{
            'active': isActive(),
            'cell-disabled': $parent.disabled }"
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
    import Emitter from '../mixins/emitter';
    import SelectOption from '../mixins/selectOption';

    export default {
        name: 'selector-option',
        mixins: [Emitter, SelectOption],
    };
</script>
