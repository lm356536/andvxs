import uniqueId from '@form-create/utils/lib/unique';

const label = '姓名';
const name = 'userNameInput';

export default {
    icon: 'icon-input',
    label,
    name,
    rule() {
        return {
            type: 'input',
            field: uniqueId(),
            title: label,
            props: {type: "text"},
            temple_code: 'userName',
            validate: [
                {
                  "trigger": "change",
                  "mode": "pattern",
                  "message": "请输入正确的姓名",
                  "pattern": "^(?:[\\u4e00-\\u9fa5·]{2,16})$",
                  "type": "string"
                }
              ],
              "$required": "姓名信息不能空"
          
        };
    },
    props() {
        return [
            { type: 'inputNumber', field: 'maxlength', title: '文本长度' },
            {
                type: 'select',
                field: 'type',
                title: '文本类型',
                value: 'text',
            },
            {
              type: 'radio', field: 'required', title: '是否必填',  value: '0', options: [
                    {label: '是', value: '1'},
                    {label: '否', value: '0'}
                ]
            }
        ];
    }
};