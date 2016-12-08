<template>
  <div class="">
      <cell @click="openMsg()">
          <icon class="fa-fw text-muted" name="commenting-o" left size="lg"></icon>
          alert
      </cell>
      <cell @click="openConfirm()">
          <icon class="fa-fw text-success" name="check" left size="lg"></icon>
          confirm
      </cell>
  </div>
</template>

<script>
  import Alert from '../utils/alert';
  export default {
    methods: {
      openMsg() {
        Alert.msg('操作成功!', '温馨提示');
      },
      openConfirm() {
        Alert.confirm('确定执行此操作?', '提示').then((action) => {
            if(action){
                Alert.msg('操作成功!', '温馨提示');
            }
        }, (cancel) => {
            console.log("取消");
        });
      }
    }
  };
</script>
