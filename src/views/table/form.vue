<template>
  <div class="qlContent">
    <div class="qlContent-head">
      <Breadcrumb />
    </div>
    <div class="qlContent-body">
      <a-form ref="formRef" :model="model" :rules="rules" @validate="onFormValidate">
        <a-table :dataSource="dataSource" :columns="columns">
          <template #bodyCell="{ column, text, record, index }">
            <template v-if="column.dataIndex === 'name'">
              <TableFormItem
                v-if="model && model['key'] === record['key']"
                :name="column.dataIndex"
                :error="errors.name"
              >
                <a-input v-model:value="model[column.dataIndex]" />
              </TableFormItem>
              <template v-else>{{ text }}</template>
            </template>
            <template v-else-if="column.dataIndex === 'age'">
              <TableFormItem
                v-if="model && model['key'] === record['key']"
                :name="column.dataIndex"
                :error="errors.age"
              >
                <a-input-number v-model:value="model[column.dataIndex]" />
              </TableFormItem>
              <template v-else>{{ text }}</template>
            </template>
            <template v-else-if="column.dataIndex === 'yes'">
              <TableFormItem
                v-if="model && model['key'] === record['key']"
                :name="column.dataIndex"
                :error="errors.yes"
              >
                <a-switch v-model:checked="model[column.dataIndex]" />
              </TableFormItem>
              <template v-else>
                <a-switch :checked="text" disabled />
              </template>
            </template>
            <template v-else-if="column.dataIndex === 'dx'">
              <TableFormItem
                v-if="model && model['key'] === record['key']"
                :name="column.dataIndex"
                :error="errors.dx"
              >
                <a-select ref="select" allowClear v-model:value="model[column.dataIndex]">
                  <a-select-option value="jack">Jack</a-select-option>
                  <a-select-option value="lucy">Lucy</a-select-option>
                  <a-select-option value="Yiminghe">yiminghe</a-select-option>
                </a-select>
              </TableFormItem>
              <template v-else>{{ text }}</template>
            </template>
            <template v-else-if="column.dataIndex === 'actions'">
              <template v-if="model && model['key'] === record['key']">
                <a-badge :dot="!save.disabled">
                  <a
                    size="small"
                    type="link"
                    :disabled="save.disabled || null"
                    @click="onSave(index)"
                  >
                    <LoadingOutlined v-if="save.loading" />??????
                  </a>
                </a-badge>
                <a-divider type="vertical" />
                <a size="small" type="link" @click="onCancel(index)">??????</a>
              </template>
              <template v-else>
                <a size="small" type="link" @click="onEdit(index)">??????</a>
                <a-divider type="vertical" />
                <a-popconfirm title="???????????????????" @confirm="onDelete(index)">
                  <a size="small" type="link">??????</a>
                </a-popconfirm>
              </template>
            </template>
          </template>
        </a-table>
      </a-form>
    </div>
  </div>
</template>
<script>
import { defineComponent, ref, nextTick, watch } from "vue";
import Breadcrumb from "../../../components/breadcrumb";
import { Form, FormItem, Badge, Select, SelectOption, Switch, InputNumber, Input, Divider, Popconfirm } from 'ant-design-vue';
import DoTable from "../../../components/doTable";
import TableFormItem from "../../../components/doTable/tableFormItem.vue";
import { LoadingOutlined } from "@ant-design/icons-vue";

export default defineComponent({
  components: { Breadcrumb, TableFormItem, LoadingOutlined, ATable: DoTable, AForm: Form, AFormItem: FormItem, ABadge: Badge, ASelect: Select, ASelectOption: SelectOption, ASwitch: Switch, AInputNumber: InputNumber, AInput: Input, ADivider: Divider, APopconfirm: Popconfirm },
  setup() {
    const formRef = ref(),
      columns = [
        {
          title: "ID",
          dataIndex: "key",
          width: 80,
        },
        {
          title: "??????",
          dataIndex: "name",
          width: 160,
        },
        {
          title: "??????",
          dataIndex: "age",
          width: 100,
        },
        {
          title: "?????????",
          dataIndex: "yes",
          width: 90,
        },
        {
          title: "??????",
          dataIndex: "dx",
          width: 100,
          isMove: false
        },
        {
          title: "??????",
          dataIndex: "address",
        },

        {
          title: "??????",
          dataIndex: "actions",
          width: 140,
          align: 'center',
          fixed: 'right'
        },
      ],
      dataSource = ref([
        {
          key: "1",
          name: "?????????",
          age: 32,
          yes: true,
          dx: "jack",
          address: "?????????????????????1???",
        },
        {
          key: "2",
          name: "?????????",
          age: 42,
          yes: false,
          address: "?????????????????????1???",
        },
        {
          key: "3",
          name: "?????????",
          age: 42,
          dx: "lucy",
          address: "?????????????????????1???",
        },
        {
          key: "",
          name: "?????????",
          age: 42,
          yes: false,
          dx: "Yiminghe",
          address: "?????????????????????1???",
        },
      ]),
      model = ref(),
      rules = ref({
        name: [
          {
            required: true,
            message: "??????????????????",
          },
        ],
        age: [
          {
            required: true,
            message: "??????????????????",
          },
        ],
        dx: [
          {
            required: true,
            message: "??????????????????",
          },
        ],
      }),
      save = ref({
        disabled: true,
        loading: false,
      }),
      errors = ref();

    // // ????????????-??????
    const onSave = (index) => {
      if (!save.value.disabled) {
        formRef.value
          .validate()
          .then(() => {
            save.value.loading = true;
            setTimeout(() => {
              dataSource.value[index].name = model.value.name;
              dataSource.value[index].age = model.value.age;
              dataSource.value[index].dx = model.value.dx;
              model.value = null;

              save.value.loading = false;
            }, 1000);
          })
          .catch((err) => { });
      }
    }, onCancel = (index) => {
      // ????????????-??????
      for (let key in errors.value) {
        errors.value[key] = null;
      }
      if (dataSource.value[index]["key"]) {
        model.value = null;
      } else {
        onDelete(index);
      }
      save.value.disabled = true;
    }, onEdit = (index) => {
      // ????????????-??????
      let newError = { ...dataSource.value[index] };
      for (let key in newError) {
        newError[key] = null;
      }

      model.value = { ...dataSource.value[index] };
      errors.value = newError;
      nextTick(() => {
        save.value.disabled = true;
      })
    }, onDelete = (index) => {
      // ????????????-??????
      dataSource.value.splice(index, 1);
    }, onFormValidate = (name, status, errorMsgs) => {
      // ???????????????????????????
      errors.value[name] = status ? null : errorMsgs.join(";");
    };

    watch(model, () => {
      save.value.disabled = false;
    }, {
      deep: true
    })

    return {
      save,
      formRef,
      model,
      rules,
      errors,
      columns,
      dataSource,
      onSave,
      onCancel,
      onEdit,
      onDelete,
      onFormValidate,
    };
  },
});
</script>
