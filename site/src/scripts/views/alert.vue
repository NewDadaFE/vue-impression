<template>
  <!-- <div class="page-msgbox">
    <h1 class="page-title">Message Box</h1>
    <div class="page-msgbox-wrapper">
      <mt-button @click.native="openAlert" size="large">打开 alert 提示框</mt-button>
      <mt-button @click.native="openConfirm" size="large">打开 confirm 提示框</mt-button>
      <mt-button @click.native="openPrompt" size="large">打开 prompt 提示框</mt-button>
    </div>
  </div> -->
  <div class="">
      <cell @click.native="openAlert('default')">
          <icon class="fa-fw text-muted" name="commenting-o" left size="lg"></icon>
          alert
      </cell>
      <cell @click.native="openConfirm('success')">
          <icon class="fa-fw text-success" name="check" left size="lg"></icon>
          confirm
      </cell>
      <cell @click.native="openPrompt('error')">
          <icon class="fa-fw text-danger" name="exclamation-circle" left size="lg"></icon>
          prompt
      </cell>
  </div>
</template>

<script>
  import { MessageBox } from '../utils/alert';
  export default {
    methods: {
      openAlert() {
        MessageBox.alert('操作成功!', '提示');
      },
      openConfirm() {
        MessageBox.confirm('确定执行此操作?', '提示');
      },
      openPrompt() {
        MessageBox.prompt(' ', '请输入姓名').then(({ value }) => {
          if (value) {
            MessageBox.alert(`你的名字是 ${ value }`, '输入成功');
          }
        });
      }
    }
  };
</script>
