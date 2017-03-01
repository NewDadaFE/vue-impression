<template>
    <div>
        <group-title>base</group-title>
        <group>
            <cell @click="alertClickHandle">
                <icon class="text-muted" name="exclamation-triangle" left size="lg" />
                alert
            </cell>
            <cell @click="confirmClickHandle">
                <icon class="text-muted" name="question-circle-o" left size="lg" />
                confirm
            </cell>
        </group>
        <group-title>vertical buttons</group-title>
        <group>
            <cell @click="confirmVerticalClickHandle">
                <icon class="text-muted" name="question-circle-o" left size="lg" />
                confirm
            </cell>
        </group>
    </div>
</template>

<script>
    export default {
        methods: {
            // alert
            alertClickHandle() {
                this.$alert({
                    maskClosable: true,
                    btns: [{
                        text: '关闭',
                        click() {
                            console.log('close!!!');
                        },
                    }],
                    title: '<h5 class="text-success">提示</h5>',
                    message: '这是Vue 2.0组件库！',
                });
            },
            // confirm
            confirmClickHandle() {
                this.$alert({
                    btns: [{
                        text: '确定',
                        click() {
                            console.log('sure!!!');
                        },
                    }, {
                        text: '取消',
                        click() {
                            console.log('cancel!!!');
                        },
                    }],
                    title: '<h5 class="text-success">提示</h5>',
                    message: '这是Vue 2.0组件库！',
                });
            },
            // confirm
            confirmVerticalClickHandle() {
                this.$alert({
                    vertical: true,
                    btns: [{
                        text: '验证身份',
                        click() {
                            console.log('check!!!');
                        },
                    }, {
                        text: '开始使用',
                        click() {
                            console.log('start!!!');
                        },
                    }],
                    title: '<h3 class="text-success">恭喜你</h3>',
                    message: '通过考试，你已完成初级培训！',
                });
            },
        },
    };

</script>
