<template>
<transition name="alert-bounce">
  <div class="alert-wrapper alert-mask" v-show="value">
      <div class="alert">
        <div class="alert-header" v-if="title !== ''">
          <div class="alert-title">{{ title }}</div>
        </div>
        <div class="alert-content" v-if="message !== ''">
          <div class="alert-message" v-html="message"></div>
        </div>
        <div class="alert-btns">
            <a class="alert-btn btn-cancel" v-show="showCancelButton" @click.native="handleAction('cancel')">{{cancelButtonText}}</a>
            <a class="alert-btn btn-confirm" v-show="showConfirmButton" @click.native="handleAction('confirm')">{{confirmButtonText}}</a>
        </div>
      </div>
  </div>
</transition>
</template>
<script>
  let CONFIRM_TEXT = '确定';
  let CANCEL_TEXT = '取消';
  export default {
    props: {
      value: {
          default: false
      },
      confirmButtonText: {
          default: CONFIRM_TEXT
      },
      cancelButtonText: {
          default: CANCEL_TEXT
      }
    },
    data() {
      return {
        title: '',
        message: '',
        type: '',
        showConfirmButton: true,
        showCancelButton: false,
        callback: null
      };
    },
    methods: {
      handleAction(action) {
        var callback = this.callback;
        this.value = false;
        this.callback(action);
      }
    }

  };
</script>
