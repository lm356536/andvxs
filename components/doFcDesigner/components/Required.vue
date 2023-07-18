<template>
  <div class="_fc-checked">
    <a-switch v-model:checked="checked"></a-switch>
    <a-input v-model:value="checkedMsg" v-show="checked" placeholder="请输入提示语"></a-input>
  </div>
</template>

<script>
import is from '@form-create/utils/lib/type';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Required',
  props: {
    modelValue: {},
  },
  watch: {
    checked(newVal, oldVal) {
      this.update();
    },
    checkedMsg(newVal, oldVal) {
      this.update();
    },
    modelValue(n) {
      const flag = is.String(n);
      this.checked = n === undefined ? false : flag ? true : !!n;
      this.checkedMsg = flag ? n : '该字段不能为空！';
    },
  },
  data() {
    const flag = is.String(this.modelValue);
    return {
      checked: this.modelValue === undefined ? false : flag ? true : !!this.modelValue,
      checkedMsg: flag ? this.modelValue : '该字段不能为空！',
    };
  },
  methods: {
    update() {
      let val;
      if (this.checked === false) {
        val = false;
      } else {
        val = this.checkedMsg;
      }
      this.$emit('update:modelValue', val);
    },
  },
});
</script>

<style>
._fc-checked {
  display: flex;
  align-items: center;
}

._fc-checked .el-input {
  margin-left: 15px;
}

._fc-checked .el-switch {
  height: 28px;
}
</style>
